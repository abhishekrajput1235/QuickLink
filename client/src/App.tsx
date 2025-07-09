import { useState } from 'react';
import { ToastContainer } from './components/Toast';
import {  ToastMessage } from './types';
import About from './components/About';
import { Routes,Route } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';

function App() {

  const [toasts, setToasts] = useState<ToastMessage[]>([]);



  const removeToast = (id: string) => {
    setToasts(prev => prev.filter(toast => toast.id !== id));
  };



  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* <Navbar /> */}
      
 

      {/* <Footer /> */}
      
      <ToastContainer toasts={toasts} onClose={removeToast} />
      <Routes>
      <Route path='/' element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='contact' element={<Contact/>}/>
      </Routes>
    </div>
  );
}

export default App;