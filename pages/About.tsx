import React from 'react';
import { MapPin, Clock, Phone, Mail } from 'lucide-react';
import { SEO } from '../components/SEO';

export const About: React.FC = () => {
  return (
    <>
      <SEO 
        title="About Us | ElectroMart India" 
        description="Learn about ElectroMart's history, values, and location. Your trusted electronics partner in India." 
      />
      
      {/* Hero */}
      <div className="bg-gray-900 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1604754742629-3e5728249d73?auto=format&fit=crop&q=80&w=1600')] bg-cover bg-center"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About ElectroMart</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">Powering Indian homes and industries with quality electrical solutions since 2010.</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6 relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-20 after:h-1 after:bg-brand-orange">Our Story</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed text-lg">
              <p>
                Founded in 2010, ElectroMart began as a retail shop on MG Road. Recognizing the need for genuine, high-quality electrical components in a market flooded with duplicates, we set out to build a brand built on trust.
              </p>
              <p>
                Today, we are authorized distributors for major brands like Havells, Polycab, Philips, and Legrand. We serve thousands of customers across the country, from individual homeowners to large-scale contractors. Our commitment to 'Atmanirbhar Bharat' drives us to promote high-quality Make in India products alongside global bestsellers.
              </p>
            </div>
          </div>
          <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
             <img 
               src="https://images.unsplash.com/photo-1596496924896-1c27271dc6b2?auto=format&fit=crop&q=80&w=800" 
               alt="Store Shelf Interior" 
               className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700" 
              />
          </div>
        </div>

        {/* Store Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="bg-white p-8 rounded-xl shadow-lg shadow-gray-100 border border-gray-100 text-center hover:-translate-y-1 transition-transform">
            <div className="w-14 h-14 bg-blue-50 text-brand-blue rounded-full flex items-center justify-center mx-auto mb-6">
              <MapPin size={28} />
            </div>
            <h3 className="font-bold text-xl mb-2 text-gray-900">Visit Our Store</h3>
            <p className="text-gray-600 leading-relaxed">Shop No. 12, Ground Floor<br/>Laxmi Industrial Estate<br/>Andheri West, Mumbai - 400053</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg shadow-gray-100 border border-gray-100 text-center hover:-translate-y-1 transition-transform">
            <div className="w-14 h-14 bg-orange-50 text-brand-orange rounded-full flex items-center justify-center mx-auto mb-6">
              <Clock size={28} />
            </div>
            <h3 className="font-bold text-xl mb-2 text-gray-900">Opening Hours</h3>
            <p className="text-gray-600 leading-relaxed">Monday - Saturday<br/>9:30 AM - 8:30 PM<br/><span className="text-red-500 text-sm font-medium">Closed on Sundays</span></p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg shadow-gray-100 border border-gray-100 text-center hover:-translate-y-1 transition-transform">
             <div className="w-14 h-14 bg-green-50 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Phone size={28} />
            </div>
            <h3 className="font-bold text-xl mb-2 text-gray-900">Contact Us</h3>
            <p className="text-gray-600 leading-relaxed text-lg font-medium mb-1">+91 98765 43210</p>
            <p className="text-gray-500">support@electromart.in</p>
          </div>
        </div>

        {/* Map Section */}
        <div className="rounded-xl overflow-hidden shadow-lg h-96 bg-gray-100 relative group">
          {/* Static Map Image */}
          <img 
            src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=1200" 
            alt="Map Location Context" 
            className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500" 
          />
          <div className="absolute inset-0 bg-black/10 flex items-center justify-center pointer-events-none">
             <div className="bg-white p-4 rounded-lg shadow-xl flex items-center gap-3 animate-bounce">
               <MapPin className="text-brand-orange fill-current" size={32} />
               <div className="text-left">
                 <div className="font-bold text-gray-900">ElectroMart Mumbai</div>
                 <div className="text-xs text-gray-500">Click to view on Google Maps</div>
               </div>
             </div>
          </div>
        </div>
      </div>
    </>
  );
};