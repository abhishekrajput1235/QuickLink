import React from 'react';
import { Link2, Menu, X } from 'lucide-react';
import { useState } from 'react';


const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a href='/' className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-2 rounded-lg">
              <Link2 className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              QuickLink
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
              Home
            </a>
            <a href="/about" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
              About
            </a>
            <a href="/contact" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
              Contact
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4  bg-white/90 backdrop-blur-md">
            <div className="space-y-2">
              <a
                href="/"
                className="block px-4 py-2 text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
              <a
                href="/about"
                className="block px-4 py-2 text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <a
                href="/contact"
                className="block px-4 py-2 text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;