// const mongoose = require('mongoose');

// const UrlSchema = new mongoose.Schema({
//   longUrl: String,
//   shortUrl: String,
//   urlCode: String,
//   createdAt: { type: Date, default: Date.now },
// });

// module.exports = mongoose.model('Url', UrlSchema);


const mongoose = require('mongoose');

const UrlSchema = new mongoose.Schema({
  originalUrl: { type: String, required: true }, // matches `originalUrl`
  shortUrl: { type: String, required: true },
  urlCode: { type: String, required: true },
  clicks: { type: Number, default: 0 },          // to match `clicks: number`
  createdAt: { type: Date, default: Date.now },
}, {
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

// Create a virtual property `id` that maps to `_id`
UrlSchema.virtual('id').get(function () {
  return this._id.toHexString();
});

module.exports = mongoose.model('Url', UrlSchema);

