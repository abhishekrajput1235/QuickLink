// import React, { useState } from 'react';
// import { Link, Copy, ExternalLink, Loader2 } from 'lucide-react';
// import { generateShortUrl, isValidUrl, copyToClipboard } from '../utils';
// import { ShortenedURL } from '../types';

// interface URLShortenerProps {
//   onUrlShortened: (url: ShortenedURL) => void;
//   onShowToast: (message: string, type: 'success' | 'error') => void;
// }

// const URLShortener: React.FC<URLShortenerProps> = ({ onUrlShortened, onShowToast }) => {
//   const [inputUrl, setInputUrl] = useState('');
//   const [isLoading, setIsLoading] = useState(false);
//   const [result, setResult] = useState<ShortenedURL | null>(null);

//   // const handleShorten = async () => {
//   //   if (!inputUrl.trim()) {
//   //     onShowToast('Please enter a URL', 'error');
//   //     return;
//   //   }

//   //   if (!isValidUrl(inputUrl)) {
//   //     onShowToast('Please enter a valid URL', 'error');
//   //     return;
//   //   }

//   //   setIsLoading(true);
    
//   //   // Simulate API call delay
//   //   await new Promise(resolve => setTimeout(resolve, 1000));

//   //   const shortenedUrl: ShortenedURL = {
//   //     id: Date.now().toString(),
//   //     originalUrl: inputUrl,
//   //     shortUrl: generateShortUrl(),
//   //     createdAt: new Date(),
//   //     clicks: 0,
//   //   };

//   //   setResult(shortenedUrl);
//   //   onUrlShortened(shortenedUrl);
//   //   setIsLoading(false);
//   //   onShowToast('URL shortened successfully!', 'success');
//   // };
//   const handleShorten = async () => {
//     if (!inputUrl.trim()) {
//       onShowToast('Please enter a URL', 'error');
//       return;
//     }
  
//     if (!isValidUrl(inputUrl)) {
//       onShowToast('Please enter a valid URL', 'error');
//       return;
//     }
  
//     setIsLoading(true);
  
//     try {
//       const shortenedUrl = await generateShortUrl(inputUrl); // ✅ call backend
//       setResult(shortenedUrl);
//       onUrlShortened(shortenedUrl);
//       onShowToast('URL shortened successfully!', 'success');
//     } catch (error) {
//       console.error('Shorten URL Error:', error);
//       onShowToast('Something went wrong. Please try again.', 'error');
//     } finally {
//       setIsLoading(false);
//     }
//   };
  
//   const handleCopy = async (url: string) => {
//     const success = await copyToClipboard(url);
//     if (success) {
//       onShowToast('Copied to clipboard!', 'success');
//     } else {
//       onShowToast('Failed to copy URL', 'error');
//     }
//   };

//   const handleReset = () => {
//     setInputUrl('');
//     setResult(null);
//   };

//   return (
//     <div className="max-w-2xl mx-auto">
//       {/* Input Section */}
//       <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
//         <div className="text-center mb-8">
//           <h1 className="text-4xl font-bold text-gray-800 mb-4">
//             Shorten Your URL 
//             <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Instantly</span>
//           </h1>
//           <p className="text-gray-600 text-lg">
//             Transform long URLs into short, shareable links in seconds
//           </p>
//         </div>

//         <div className="space-y-4">
//           <div className="relative">
//             <Link className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
//             <input
//               type="url"
//               value={inputUrl}
//               onChange={(e) => setInputUrl(e.target.value)}
//               placeholder="Enter your long URL here..."
//               className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-lg"
//               onKeyPress={(e) => e.key === 'Enter' && handleShorten()}
//             />
//           </div>

//           <button
//             onClick={handleShorten}
//             disabled={isLoading}
//             className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-4 px-6 rounded-xl font-semibold text-lg hover:from-blue-600 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all transform hover:scale-105 active:scale-95 shadow-lg"
//           >
//             {isLoading ? (
//               <div className="flex items-center justify-center space-x-2">
//                 <Loader2 className="w-5 h-5 animate-spin" />
//                 <span>Shortening...</span>
//               </div>
//             ) : (
//               'Shorten URL'
//             )}
//           </button>
//         </div>
//       </div>

//       {/* Result Section */}
//       {result && (
//         <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 border border-green-200">
//           <div className="text-center mb-6">
//             <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
//               <Link className="w-8 h-8 text-white" />
//             </div>
//             <h2 className="text-2xl font-bold text-gray-800 mb-2">URL Shortened Successfully!</h2>
//             <p className="text-gray-600">Your shortened URL is ready to share</p>
//           </div>

//           <div className="space-y-4">
//             {/* Short URL Display */}
//             <div className="bg-white rounded-xl p-4 border border-gray-200">
//               <label className="block text-sm font-medium text-gray-700 mb-2">Short URL</label>
//               <div className="flex items-center space-x-2">
//                 <input
//                   type="text"
//                   value={result.shortUrl}
//                   readOnly
//                   className="flex-1 px-3 py-2 border border-gray-300 rounded-lg bg-gray-50 text-gray-800 font-mono text-sm"
//                 />
//                 <button
//                   onClick={() => handleCopy(result.shortUrl)}
//                   className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors flex items-center space-x-2"
//                 >
//                   <Copy className="w-4 h-4" />
//                   <span>Copy</span>
//                 </button>
//                 <a
//                   href={result.shortUrl}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors flex items-center space-x-2"
//                 >
//                   <ExternalLink className="w-4 h-4" />
//                   <span>Visit</span>
//                 </a>
//               </div>
//             </div>

//             {/* Original URL Display */}
//             <div className="bg-white rounded-xl p-4 border border-gray-200">
//               <label className="block text-sm font-medium text-gray-700 mb-2">Original URL</label>
//               <div className="flex items-center space-x-2">
//                 <input
//                   type="text"
//                   value={result.originalUrl}
//                   readOnly
//                   className="flex-1 px-3 py-2 border border-gray-300 rounded-lg bg-gray-50 text-gray-800 text-sm"
//                 />
//                 <button
//                   onClick={() => handleCopy(result.originalUrl)}
//                   className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors flex items-center space-x-2"
//                 >
//                   <Copy className="w-4 h-4" />
//                   <span>Copy</span>
//                 </button>
//               </div>
//             </div>

//             <button
//               onClick={handleReset}
//               className="w-full bg-gradient-to-r from-gray-500 to-gray-600 text-white py-3 px-6 rounded-xl font-semibold hover:from-gray-600 hover:to-gray-700 transition-all"
//             >
//               Shorten Another URL
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default URLShortener;


// import React, { useState } from 'react';
// import { Link, Copy, ExternalLink, Loader2 } from 'lucide-react';
// import { generateShortUrl, isValidUrl, copyToClipboard } from '../utils';
// import { ShortenedURL } from '../types';

// interface URLShortenerProps {
//   onUrlShortened: (url: ShortenedURL) => void;
//   onShowToast: (message: string, type: 'success' | 'error') => void;
// }

// const URLShortener: React.FC<URLShortenerProps> = ({ onUrlShortened, onShowToast }) => {
//   const [inputUrl, setInputUrl] = useState('');
//   const [isLoading, setIsLoading] = useState(false);
//   const [result, setResult] = useState<ShortenedURL | null>(null);

//   const handleShorten = async () => {
//     if (!inputUrl.trim()) {
//       onShowToast('Please enter a URL', 'error');
//       return;
//     }

//     if (!isValidUrl(inputUrl)) {
//       onShowToast('Please enter a valid URL', 'error');
//       return;
//     }

//     setIsLoading(true);

//     try {
//       const shortenedUrl = await generateShortUrl(inputUrl);

//       // Check if shortUrl is a valid string before rendering
//       if (
//         !shortenedUrl ||
//         typeof shortenedUrl.shortUrl !== 'string' ||
//         typeof shortenedUrl.originalUrl !== 'string'
//       ) {
//         throw new Error('Invalid response structure from backend');
//       }

//       setResult(shortenedUrl);
//       onUrlShortened(shortenedUrl);
//       onShowToast('URL shortened successfully!', 'success');
//     } catch (error) {
//       console.error('Shorten URL Error:', error);
//       onShowToast('Something went wrong. Please try again.', 'error');
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleCopy = async (url: string) => {
//     const success = await copyToClipboard(url);
//     onShowToast(success ? 'Copied to clipboard!' : 'Failed to copy URL', success ? 'success' : 'error');
//   };

//   const handleReset = () => {
//     setInputUrl('');
//     setResult(null);
//   };

//   return (
//     <div className="max-w-2xl mx-auto">
//       {/* Input Section */}
//       <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
//         {/* <div className="text-center mb-8">
//           <h1 className="text-4xl font-bold text-gray-800 mb-4">
//             Shorten Your URL
//             <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
//               {' '}Instantly
//             </span>
//           </h1>
//           <p className="text-gray-600 text-lg">
//             Transform long URLs into short, shareable links in seconds
//           </p>
//         </div> */}

//         <div className="space-y-4">
//           <div className="relative">
//             <Link className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
//             <input
//               type="url"
//               value={inputUrl}
//               onChange={(e) => setInputUrl(e.target.value)}
//               placeholder="Enter your long URL here..."
//               className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-lg"
//               onKeyPress={(e) => e.key === 'Enter' && handleShorten()}
//             />
//           </div>

//           <button
//             onClick={handleShorten}
//             disabled={isLoading}
//             className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-4 px-6 rounded-xl font-semibold text-lg hover:from-blue-600 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all transform hover:scale-105 active:scale-95 shadow-lg"
//           >
//             {isLoading ? (
//               <div className="flex items-center justify-center space-x-2">
//                 <Loader2 className="w-5 h-5 animate-spin" />
//                 <span>Shortening...</span>
//               </div>
//             ) : (
//               'Shorten URL'
//             )}
//           </button>
//         </div>
//       </div>

//       {/* Result Section */}
//       {result && (
//         <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 border border-green-200">
//           <div className="text-center mb-6">
//             <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
//               <Link className="w-8 h-8 text-white" />
//             </div>
//             <h2 className="text-2xl font-bold text-gray-800 mb-2">URL Shortened Successfully!</h2>
//             <p className="text-gray-600">Your shortened URL is ready to share</p>
//           </div>

//           <div className="space-y-4">
//             {/* Short URL */}
//             {/* <div className="bg-white rounded-xl p-4 border border-gray-200">
//               <label className="block text-sm font-medium text-gray-700 mb-2">Short URL</label>
//               <div className="flex items-center space-x-2">
//                 <input
//                   type="text"
//                   value={result.shortUrl}
//                   readOnly
//                   className="flex-1 px-3 py-2 border border-gray-300 rounded-lg bg-gray-50 text-gray-800 font-mono text-sm"
//                 />
//                 <button
//                   onClick={() => handleCopy(result.shortUrl)}
//                   className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors flex items-center space-x-2"
//                 >
//                   <Copy className="w-4 h-4" />
//                   <span>Copy</span>
//                 </button>
//                 <a
//                   href={result.shortUrl}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors flex items-center space-x-2"
//                 >
//                   <ExternalLink className="w-4 h-4" />
//                   <span>Visit</span>
//                 </a>
//               </div>
//             </div> */}
//             <div className="bg-white rounded-xl p-4 border border-gray-200">
//   <label className="block text-sm font-medium text-gray-700 mb-2">Short URL</label>
//   <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-2 sm:space-y-0 sm:space-x-2">
//     <input
//       type="text"
//       value={result.shortUrl}
//       readOnly
//       className="w-full sm:flex-1 px-3 py-2 border border-gray-300 rounded-lg bg-gray-50 text-gray-800 font-mono text-sm"
//     />
//     <button
//       onClick={() => handleCopy(result.shortUrl)}
//       className="w-full sm:w-auto px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors flex items-center justify-center space-x-2"
//     >
//       <Copy className="w-4 h-4" />
//       <span>Copy</span>
//     </button>
//     <a
//       href={result.shortUrl}
//       target="_blank"
//       rel="noopener noreferrer"
//       className="w-full sm:w-auto px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors flex items-center justify-center space-x-2"
//     >
//       <ExternalLink className="w-4 h-4" />
//       <span>Visit</span>
//     </a>
//   </div>
// </div>


//             {/* Original URL */}
//             {/* <div className="bg-white rounded-xl p-4 border border-gray-200">
//               <label className="block text-sm font-medium text-gray-700 mb-2">Original URL</label>
//               <div className="flex items-center space-x-2">
//                 <input
//                   type="text"
//                   value={result.originalUrl}
//                   readOnly
//                   className="flex-1 px-3 py-2 border border-gray-300 rounded-lg bg-gray-50 text-gray-800 text-sm"
//                 />
//                 <button
//                   onClick={() => handleCopy(result.originalUrl)}
//                   className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors flex items-center space-x-2"
//                 >
//                   <Copy className="w-4 h-4" />
//                   <span>Copy</span>
//                 </button>
//               </div>
//             </div> */}
//             <div className="bg-white rounded-xl p-4 border border-gray-200">
//   <label className="block text-sm font-medium text-gray-700 mb-2">Original URL</label>
//   <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-2 sm:space-y-0 sm:space-x-2">
//     <input
//       type="text"
//       value={result.originalUrl}
//       readOnly
//       className="w-full sm:flex-1 px-3 py-2 border border-gray-300 rounded-lg bg-gray-50 text-gray-800 text-sm"
//     />
//     <button
//       onClick={() => handleCopy(result.originalUrl)}
//       className="w-full sm:w-auto px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors flex items-center justify-center space-x-2"
//     >
//       <Copy className="w-4 h-4" />
//       <span>Copy</span>
//     </button>
//   </div>
// </div>


//             <button
//               onClick={handleReset}
//               className="w-full bg-gradient-to-r from-gray-500 to-gray-600 text-white py-3 px-6 rounded-xl font-semibold hover:from-gray-600 hover:to-gray-700 transition-all"
//             >
//               Shorten Another URL
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default URLShortener;



import React, { useState } from 'react';
import { Link, Copy, ExternalLink, Loader2 } from 'lucide-react';
import { QRCodeCanvas } from 'qrcode.react';
import { generateShortUrl, isValidUrl, copyToClipboard } from '../utils';
import { ShortenedURL } from '../types';

interface URLShortenerProps {
  onUrlShortened: (url: ShortenedURL) => void;
  onShowToast: (message: string, type: 'success' | 'error') => void;
}

const URLShortener: React.FC<URLShortenerProps> = ({ onUrlShortened, onShowToast }) => {
  const [inputUrl, setInputUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<ShortenedURL | null>(null);
  const [showQR, setShowQR] = useState(false);

  const handleShorten = async () => {
    if (!inputUrl.trim()) {
      onShowToast('Please enter a URL', 'error');
      return;
    }

    if (!isValidUrl(inputUrl)) {
      onShowToast('Please enter a valid URL', 'error');
      return;
    }

    setIsLoading(true);

    try {
      const shortenedUrl = await generateShortUrl(inputUrl);
      if (!shortenedUrl || typeof shortenedUrl.shortUrl !== 'string') {
        throw new Error('Invalid response structure from backend');
      }
      setResult(shortenedUrl);
      onUrlShortened(shortenedUrl);
      onShowToast('URL shortened successfully!', 'success');
      setShowQR(false);
    } catch (error) {
      console.error('Shorten URL Error:', error);
      onShowToast('Something went wrong. Please try again.', 'error');
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopy = async (url: string) => {
    const success = await copyToClipboard(url);
    onShowToast(success ? 'Copied to clipboard!' : 'Failed to copy URL', success ? 'success' : 'error');
  };

  const downloadQR = () => {
    if (!result) return;
    const canvas = document.getElementById(`qr-${result.id}`) as HTMLCanvasElement;
    if (canvas) {
      const pngUrl = canvas.toDataURL('image/png');
      const downloadLink = document.createElement('a');
      downloadLink.href = pngUrl;
      downloadLink.download = `${result.urlCode}.png`;
      downloadLink.click();
    }
  };

  const handleReset = () => {
    setInputUrl('');
    setResult(null);
    setShowQR(false);
  };

  return (
    <div className="max-w-2xl mx-auto">
      {/* Input Section */}
      <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
        <div className="space-y-4">
          <div className="relative">
            <Link className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="url"
              value={inputUrl}
              onChange={(e) => setInputUrl(e.target.value)}
              placeholder="Enter your long URL here..."
              className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-lg"
              onKeyPress={(e) => e.key === 'Enter' && handleShorten()}
            />
          </div>

          <button
            onClick={handleShorten}
            disabled={isLoading}
            className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-4 px-6 rounded-xl font-semibold text-lg hover:from-blue-600 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all transform hover:scale-105 active:scale-95 shadow-lg"
          >
            {isLoading ? (
              <div className="flex items-center justify-center space-x-2">
                <Loader2 className="w-5 h-5 animate-spin" />
                <span>Shortening...</span>
              </div>
            ) : (
              'Shorten URL'
            )}
          </button>
        </div>
      </div>

      {/* Result Section */}
      {result && (
        <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 border border-green-200 space-y-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">URL Shortened Successfully!</h2>
          </div>

          <div className="space-y-4">
            {/* Short URL Block */}
            <div className="bg-white rounded-xl p-4 border border-gray-200 space-y-4">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-2 sm:space-y-0 sm:space-x-2">
                <input
                  type="text"
                  value={result.shortUrl}
                  readOnly
                  className="w-full sm:flex-1 px-3 py-2 border border-gray-300 rounded-lg bg-gray-50 text-gray-800 font-mono text-sm"
                />
                <button
                  onClick={() => handleCopy(result.shortUrl)}
                  className="w-full sm:w-auto px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors flex items-center justify-center space-x-2"
                >
                  <Copy className="w-4 h-4" />
                  <span>Copy</span>
                </button>
                <a
                  href={result.shortUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors flex items-center justify-center space-x-2"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Visit</span>
                </a>
              </div>

              {/* QR Section */}
              <div className="flex items-center justify-center space-x-4">
                <button
                  onClick={() => setShowQR(prev => !prev)}
                  className="px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors"
                >
                  {showQR ? 'Hide QR' : 'Show QR'}
                </button>
                {showQR && (
                  <div className="flex flex-col items-center">
                    <QRCodeCanvas id={`qr-${result.id}`} value={result.shortUrl} size={128} />
                    <button
                      onClick={downloadQR}
                      className="mt-2 px-4 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
                    >
                      Download QR
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Original URL Block */}
            <div className="bg-white rounded-xl p-4 border border-gray-200 space-y-2">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-2 sm:space-y-0 sm:space-x-2">
                <input
                  type="text"
                  value={result.originalUrl}
                  readOnly
                  className="w-full sm:flex-1 px-3 py-2 border border-gray-300 rounded-lg bg-gray-50 text-gray-800 text-sm"
                />
                <button
                  onClick={() => handleCopy(result.originalUrl)}
                  className="w-full sm:w-auto px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors flex items-center justify-center space-x-2"
                >
                  <Copy className="w-4 h-4" />
                  <span>Copy</span>
                </button>
              </div>
            </div>

            <button
              onClick={handleReset}
              className="w-full bg-gradient-to-r from-gray-500 to-gray-600 text-white py-3 px-6 rounded-xl font-semibold hover:from-gray-600 hover:to-gray-700 transition-all"
            >
              Shorten Another URL
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default URLShortener;

