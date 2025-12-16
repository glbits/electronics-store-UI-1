import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Truck, Clock } from 'lucide-react';
import { SEO } from '../components/SEO';
import { categories, products, COPY_DECK } from '../data';
import { ProductCard } from '../components/ProductCard';

export const Home: React.FC = () => {
  const featuredProducts = products.slice(0, 4);
  const [heroLoaded, setHeroLoaded] = useState(false);

  // Mapping category names to specific Unsplash images
  const getCategoryImage = (cat: string) => {
    switch(cat) {
      case 'Lighting': return "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?auto=format&fit=crop&q=80&w=400";
      case 'Fans': return "https://images.unsplash.com/photo-1617103996702-96ff29b1c467?auto=format&fit=crop&q=80&w=400";
      case 'Wires': return "https://images.unsplash.com/photo-1592478411213-61535fdd6fca?auto=format&fit=crop&q=80&w=400";
      case 'Switches': return "https://images.unsplash.com/photo-1544724569-5f546fd6dd2d?auto=format&fit=crop&q=80&w=400";
      case 'Accessories': return "https://images.unsplash.com/photo-1496337589254-7e19d01cec44?auto=format&fit=crop&q=80&w=400";
      default: return "https://images.unsplash.com/photo-1550009158-9ebf69173e03?auto=format&fit=crop&q=80&w=400";
    }
  };

  return (
    <>
      <SEO 
        title="ElectroMart India - Premium Electricals Store" 
        description="Shop the best electrical supplies, lighting, fans, and accessories in India. Authorized dealer for top brands." 
      />
      
      {/* Hero Section */}
      <section className="bg-brand-blue text-white relative overflow-hidden min-h-[500px] flex items-center">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1550009158-9ebf69173e03?auto=format&fit=crop&q=80&w=1600" 
            alt="Electronics Store Background" 
            className={`w-full h-full object-cover transition-opacity duration-1000 ${heroLoaded ? 'opacity-20' : 'opacity-0'}`}
            onLoad={() => setHeroLoaded(true)}
          />
          <div className="absolute inset-0 bg-brand-blue/80 mix-blend-multiply"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 py-12">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight tracking-tight">
              {COPY_DECK.hero.headline}
            </h1>
            <ul className="space-y-3 mb-10 text-lg md:text-xl text-blue-100">
              {COPY_DECK.hero.taglines.map((tag, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-brand-orange rounded-full shadow-[0_0_10px_rgba(255,106,0,0.5)]"></span>
                  {tag}
                </li>
              ))}
            </ul>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/products" 
                className="bg-brand-orange text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-orange-600 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-orange-900/20"
              >
                Browse Catalog <ArrowRight size={20} />
              </Link>
              <Link 
                to="/contact" 
                className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/20 transition-colors flex items-center justify-center"
              >
                Bulk / Business Enquiry
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Bar */}
      <section className="bg-white border-b border-gray-100 shadow-sm relative z-20 -mt-8 mx-4 md:mx-auto md:max-w-6xl rounded-xl">
        <div className="py-8 px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-gray-100">
            <div className="flex items-center gap-4 py-2 md:py-0">
              <div className="p-3 bg-blue-50 text-brand-blue rounded-full">
                <ShieldCheck size={28} />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-lg">Genuine Products</h4>
                <p className="text-sm text-gray-500">ISI Marked & Warranty Backed</p>
              </div>
            </div>
            <div className="flex items-center gap-4 py-2 md:py-0 md:pl-8">
              <div className="p-3 bg-orange-50 text-brand-orange rounded-full">
                <Truck size={28} />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-lg">Pan-India Delivery</h4>
                <p className="text-sm text-gray-500">Fast shipping via trusted couriers</p>
              </div>
            </div>
            <div className="flex items-center gap-4 py-2 md:py-0 md:pl-8">
              <div className="p-3 bg-green-50 text-green-600 rounded-full">
                <Clock size={28} />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-lg">Support 9AM-8PM</h4>
                <p className="text-sm text-gray-500">Call or WhatsApp for assistance</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Shop By Category</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Everything you need for your home, office, or industrial project.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {categories.map((cat, idx) => (
              <Link 
                key={cat} 
                to={`/products?category=${cat}`}
                className="group relative rounded-xl overflow-hidden aspect-[3/4] hover:shadow-xl transition-all duration-300"
              >
                <img 
                  src={getCategoryImage(cat)} 
                  alt={cat} 
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex items-end p-6">
                  <div>
                    <span className="text-brand-orange text-xs font-bold uppercase tracking-wider mb-1 block">Shop</span>
                    <span className="text-white font-bold text-xl">{cat}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-10 border-b border-gray-100 pb-4">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Best Sellers</h2>
              <p className="text-gray-600">Top rated products chosen by Indian customers</p>
            </div>
            <Link to="/products" className="text-brand-blue font-bold hover:text-brand-orange transition-colors flex items-center gap-1">
              View All <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};