import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Check, AlertCircle, ShoppingCart } from 'lucide-react';
import { SEO } from '../components/SEO';
import { products } from '../data';

export const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = products.find(p => p.id === id);
  const [activeImage, setActiveImage] = useState(0);

  if (!product) {
    return <div className="p-20 text-center">Product not found. <Link to="/products" className="text-blue-600">Go back</Link></div>;
  }

  // Schema.org JSON-LD
  const schemaData = {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": product.title,
    "image": product.images,
    "description": product.short_desc,
    "sku": product.sku,
    "brand": {
      "@type": "Brand",
      "name": "ElectroMart"
    },
    "offers": {
      "@type": "Offer",
      "url": window.location.href,
      "priceCurrency": "INR",
      "price": product.price,
      "availability": product.stock > 0 ? "https://schema.org/InStock" : "https://schema.org/OutOfStock"
    }
  };

  return (
    <>
      <SEO title={product.meta_title} description={product.meta_description} />
      <script type="application/ld+json">
        {JSON.stringify(schemaData)}
      </script>

      <div className="bg-white py-12">
        <div className="container mx-auto px-4">
          
          {/* Breadcrumbs */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link to="/" className="hover:text-brand-blue">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/products" className="hover:text-brand-blue">Products</Link>
            <span className="mx-2">/</span>
            <Link to={`/products?category=${product.category}`} className="hover:text-brand-blue">{product.category}</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">{product.title}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Gallery */}
            <div className="space-y-4">
              <div className="aspect-square bg-gray-100 rounded-xl overflow-hidden border border-gray-200">
                <img 
                  src={product.images[activeImage]} 
                  alt={product.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex gap-4 overflow-x-auto pb-2">
                {product.images.map((img, idx) => (
                  <button 
                    key={idx}
                    onClick={() => setActiveImage(idx)}
                    className={`relative w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden border-2 ${activeImage === idx ? 'border-brand-blue' : 'border-transparent'}`}
                  >
                    <img src={img} alt={`View ${idx + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Info */}
            <div>
              <div className="mb-6">
                <span className="text-brand-orange font-bold text-sm tracking-wide uppercase">{product.category}</span>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">{product.title}</h1>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <span>SKU: {product.sku}</span>
                  <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                  {product.stock > 0 ? (
                    <span className="text-green-600 flex items-center gap-1 font-medium"><Check size={16} /> In Stock</span>
                  ) : (
                    <span className="text-red-600 flex items-center gap-1 font-medium"><AlertCircle size={16} /> Out of Stock</span>
                  )}
                </div>
              </div>

              <div className="text-4xl font-bold text-brand-blue mb-6">
                ₹{product.price.toLocaleString('en-IN')}
                <span className="text-lg text-gray-400 font-normal ml-2">incl. GST</span>
              </div>

              <div className="prose prose-sm text-gray-600 mb-8">
                <p>{product.long_desc}</p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 mb-8 border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-4">Technical Specifications</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-8">
                  {Object.entries(product.specs).map(([key, value]) => (
                    <div key={key} className="flex justify-between border-b border-gray-200 pb-2 last:border-0">
                      <span className="text-gray-500">{key}</span>
                      <span className="font-medium text-gray-900">{value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                 <Link 
                  to={`/contact?product=${encodeURIComponent(product.title)}&sku=${product.sku}`}
                  className="flex-1 bg-brand-blue text-white py-4 px-8 rounded-lg font-bold text-center hover:bg-blue-800 transition-colors flex items-center justify-center gap-2"
                >
                  <ShoppingCart size={20} />
                  Enquire to Buy
                </Link>
                <button className="flex-1 border-2 border-gray-300 text-gray-700 py-4 px-8 rounded-lg font-bold hover:border-gray-400 hover:bg-gray-50 transition-colors">
                  Download Spec Sheet
                </button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};