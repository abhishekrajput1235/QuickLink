


const Url = require('../models/Url');
const { nanoid } = require('nanoid');

const baseUrl = process.env.BASE_URL;

exports.shortenUrl = async (req, res) => {
  try {
    const { originalUrl } = req.body;

    if (!originalUrl) {
      return res.status(400).json({ success: false, message: 'originalUrl is required' });
    }

    // Check if long URL already exists
    let url = await Url.findOne({ originalUrl });
    if (url) return res.json(url);

    // Generate short code and URL
    const urlCode = nanoid(7);
    const shortUrl = `${baseUrl}/${urlCode}`;

    // Save to DB
    url = new Url({ originalUrl, shortUrl, urlCode });
    await url.save();

    res.status(201).json(url);
  } catch (err) {
    console.error('Error in shortenUrl:', err.message);
    res.status(500).json({ success: false, message: 'Server Error' });
  }
};

// exports.redirectUrl = async (req, res) => {
//   try {
//     const { code } = req.params;

//     const url = await Url.findOne({ urlCode: code });
//     if (!url) {
//       return res.status(404).json({ success: false, message: 'URL not found' });
//     }

//     res.redirect(url.originalUrl);
//   } catch (err) {
//     console.error('Error in redirectUrl:', err.message);
//     res.status(500).json({ success: false, message: 'Server Error' });
//   }
// };



exports.redirectUrl = async (req, res) => {
    try {
      const { code } = req.params;
      console.log('Redirect requested for code:', code);
  
      // Find the document by its urlCode
      const urlDoc = await Url.findOne({ urlCode: code });
      console.log('Found URL document:', urlDoc);
  
      if (!urlDoc) {
        return res.status(404).json({ success: false, message: 'URL not found' });
      }
  
      // Increment click count and save (optional)
      urlDoc.clicks = (urlDoc.clicks || 0) + 1;
      await urlDoc.save();
      console.log('Incremented clicks to:', urlDoc.clicks);
  
      // Redirect to the stored originalUrl (must include protocol)
      return res.redirect(urlDoc.originalUrl);
    } catch (err) {
      console.error('Error in redirectUrl:', err);
      return res.status(500).json({ success: false, message: 'Server Error' });
    }
  };