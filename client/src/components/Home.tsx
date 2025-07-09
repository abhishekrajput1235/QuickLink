// import { useState } from 'react';
// import URLShortener from '../components/URLShortener';
// import URLHistory from '../components/URLHistory';
// import { ToastContainer } from '../components/Toast';
// import { useLocalStorage } from '../hooks/useLocalStorage';
// import { ShortenedURL, ToastMessage } from '../types';


// function Home() {
//   const [urls, setUrls] = useLocalStorage<ShortenedURL[]>('shortened-urls', []);
//   const [toasts, setToasts] = useState<ToastMessage[]>([]);

//   const addToast = (message: string, type: 'success' | 'error' | 'info') => {
//     const toast: ToastMessage = {
//       id: Date.now().toString(),
//       message,
//       type,
//     };
//     setToasts(prev => [...prev, toast]);
//   };

//   const removeToast = (id: string) => {
//     setToasts(prev => prev.filter(toast => toast.id !== id));
//   };

//   const handleUrlShortened = (newUrl: ShortenedURL) => {
//     setUrls(prev => [newUrl, ...prev]);
//   };

//   const handleDeleteUrl = (id: string) => {
//     setUrls(prev => prev.filter(url => url.id !== id));
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
//       {/* <Navbar /> */}
      
//       <main className="py-12 px-4 sm:px-6 lg:px-8">
//         <URLShortener
//           onUrlShortened={handleUrlShortened}
//           onShowToast={addToast}
//         />
        
//         <URLHistory
//           urls={urls}
//           onDelete={handleDeleteUrl}
//           onShowToast={addToast}
//         />
//       </main>

//       {/* <Footer /> */}
      
//       <ToastContainer toasts={toasts} onClose={removeToast} />
 
//     </div>
//   );
// }

// export default Home;

import { useState } from 'react';
import URLShortener from '../components/URLShortener';
import URLHistory from '../components/URLHistory';
import { ToastContainer } from '../components/Toast';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { ShortenedURL, ToastMessage } from '../types';

function Home() {
  const [urls, setUrls] = useLocalStorage<ShortenedURL[]>('shortened-urls', []);
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  const addToast = (message: string, type: 'success' | 'error' | 'info') => {
    const toast: ToastMessage = {
      id: Date.now().toString(),
      message,
      type,
    };
    setToasts(prev => [...prev, toast]);
  };

  const removeToast = (id: string) => {
    setToasts(prev => prev.filter(toast => toast.id !== id));
  };

  const handleUrlShortened = (newUrl: ShortenedURL) => {
    setUrls(prev => [newUrl, ...prev]);
  };

  const handleDeleteUrl = (id: string) => {
    setUrls(prev => prev.filter(url => url.id !== id));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="text-center py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent text-5xl font-extrabold">
              {' '}QuickLink
            </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Simplify your links. Shorten long URLs, manage them, and track clicks with ease.
        </p>
      </header>

      {/* Main Functionalities */}
      <main className="pb-12 px-4 sm:px-6 lg:px-8 space-y-12">
        <URLShortener onUrlShortened={handleUrlShortened} onShowToast={addToast} />
        <URLHistory urls={urls} onDelete={handleDeleteUrl} onShowToast={addToast} />
      </main>

      {/* Features Section */}
      <section className="max-w-6xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">Why Choose QuickLink?</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: 'Instant Shortening',
              desc: 'Shorten long URLs in one click and share them instantly with your audience.',
            },
            {
              title: 'Link Analytics',
              desc: 'Track clicks and traffic sources to monitor how your links perform.',
            },
            {
              title: 'Secure & Private',
              desc: 'We do not store or share your data. Privacy-first link management.',
            },
            {
              title: 'Cross-Platform',
              desc: 'Access your URLs on any device with local storage support.',
            },
            {
              title: 'Fully Responsive',
              desc: 'Works perfectly on desktop, tablet, and mobile screens.',
            },
            {
              title: 'No Signup Needed',
              desc: 'Get started without creating an account or logging in.',
            },
          ].map((feature, i) => (
            <div key={i} className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-blue-600 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>



      <ToastContainer toasts={toasts} onClose={removeToast} />
    </div>
  );
}

export default Home;
