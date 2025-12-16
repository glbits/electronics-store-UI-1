import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingBag, Phone, MapPin, Facebook, Twitter, Instagram, Mail } from 'lucide-react';
import { categories } from '../data';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Products', path: '/products' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Top Bar */}
      <div className="bg-brand-blue text-white text-xs py-2 px-4 border-b border-blue-800">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <span className="flex items-center gap-1 font-medium"><Phone size={12} /> +91 98765 43210</span>
            <span className="hidden sm:flex items-center gap-1"><Mail size={12} /> sales@electromart.in</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="hidden md:inline text-blue-200">GST No: 27ABCDE1234F1Z5</span>
            <div className="flex space-x-3 border-l border-blue-700 pl-4">
                <a href="#" className="hover:text-brand-orange transition-colors"><Facebook size={12} /></a>
                <a href="#" className="hover:text-brand-orange transition-colors"><Twitter size={12} /></a>
                <a href="#" className="hover:text-brand-orange transition-colors"><Instagram size={12} /></a>
            </div>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-white shadow-md border-b border-gray-100 backdrop-blur-md bg-white/95">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 text-2xl font-bold text-brand-blue tracking-tight">
              <div className="bg-brand-orange text-white p-1.5 rounded-lg shadow-sm">
                <ShoppingBag size={24} />
              </div>
              ElectroMart<span className="text-xs text-gray-500 font-normal self-end mb-1 ml-0.5">India</span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`font-medium transition-colors hover:text-brand-orange relative py-1 ${
                    location.pathname === link.path 
                    ? 'text-brand-blue font-bold after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-brand-orange' 
                    : 'text-gray-600'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden text-gray-700 focus:outline-none p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Mobile Nav Dropdown */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-gray-100 animate-in slide-in-from-top-2">
              <nav className="flex flex-col space-y-3 pt-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block px-4 py-2 rounded-lg hover:bg-gray-50 ${
                       location.pathname === link.path ? 'text-brand-orange font-bold bg-orange-50' : 'text-gray-700'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            
            {/* About Column */}
            <div className="space-y-4">
              <h3 className="text-white text-lg font-bold flex items-center gap-2">
                <ShoppingBag size={20} className="text-brand-orange" />
                ElectroMart
              </h3>
              <p className="text-sm leading-relaxed text-gray-400">
                India's trusted partner for quality electrical components. Serving homeowners, electricians, and contractors in Mumbai and Pan-India.
              </p>
              <div className="flex items-start gap-2 text-sm mt-4">
                <MapPin size={16} className="text-brand-orange mt-1 shrink-0" />
                <span>Shop 12, Laxmi Ind. Estate,<br/>Andheri West, Mumbai 400053</span>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-white text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/about" className="hover:text-brand-orange transition-colors">About Us</Link></li>
                <li><Link to="/products" className="hover:text-brand-orange transition-colors">All Products</Link></li>
                <li><Link to="/contact" className="hover:text-brand-orange transition-colors">Contact Support</Link></li>
                <li><Link to="#" className="hover:text-brand-orange transition-colors">Privacy Policy</Link></li>
                <li><Link to="#" className="hover:text-brand-orange transition-colors">Shipping Policy</Link></li>
              </ul>
            </div>

            {/* Categories */}
            <div>
              <h3 className="text-white text-lg font-bold mb-4">Popular Categories</h3>
              <ul className="space-y-2 text-sm">
                {categories.slice(0, 5).map(cat => (
                  <li key={cat}>
                    <Link to={`/products?category=${cat}`} className="hover:text-brand-orange transition-colors">
                      {cat}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="text-white text-lg font-bold mb-4">Stay Updated</h3>
              <p className="text-sm text-gray-400 mb-4">Subscribe for latest product launches and offers.</p>
              <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
                <input 
                  type="email" 
                  placeholder="Email address" 
                  className="bg-gray-800 border-none rounded px-3 py-2 w-full text-sm focus:ring-1 focus:ring-brand-orange text-white"
                />
                <button className="bg-brand-orange text-white px-3 py-2 rounded text-sm font-medium hover:bg-orange-600 transition-colors">
                  Join
                </button>
              </form>
            </div>

          </div>
          
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
            <div className="mb-2 md:mb-0">
              &copy; {new Date().getFullYear()} ElectroMart Retail India Pvt Ltd. All rights reserved.
            </div>
            <div className="flex gap-4">
               <span>Made in 🇮🇳</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};