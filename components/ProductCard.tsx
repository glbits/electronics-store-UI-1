import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../types';
import { ArrowRight } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  // Optimize image URL for smaller width in cards to save bandwidth
  const optimizeUrl = (url: string) => {
    if (url.includes('unsplash.com')) {
      return url.replace('w=800', 'w=400'); // Request smaller image for card
    }
    return url;
  };

  return (
    <div className="group bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col h-full">
      <div className="relative aspect-square overflow-hidden bg-gray-100">
        <img 
          src={optimizeUrl(product.images[0])} 
          alt={product.title} 
          loading="lazy"
          onLoad={() => setIsImageLoaded(true)}
          className={`w-full h-full object-cover group-hover:scale-105 transition-all duration-700 ease-in-out ${
            isImageLoaded ? 'opacity-100 blur-0' : 'opacity-0 blur-sm'
          }`}
        />
        
        {/* Loading Skeleton Pulse */}
        {!isImageLoaded && (
          <div className="absolute inset-0 bg-gray-200 animate-pulse"></div>
        )}

        {product.stock < 5 && product.stock > 0 && (
          <span className="absolute top-2 left-2 bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded">
            LOW STOCK
          </span>
        )}
        {product.stock === 0 && (
          <span className="absolute top-2 left-2 bg-gray-500 text-white text-[10px] font-bold px-2 py-1 rounded">
            SOLD OUT
          </span>
        )}
      </div>
      
      <div className="p-4 flex flex-col flex-grow">
        <div className="text-xs text-brand-orange font-semibold uppercase tracking-wider mb-1">
          {product.category}
        </div>
        <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 leading-tight">
          <Link to={`/products/${product.id}`} className="hover:text-brand-blue transition-colors">
            {product.title}
          </Link>
        </h3>
        <p className="text-gray-500 text-sm mb-4 line-clamp-2 flex-grow">
          {product.short_desc}
        </p>
        
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
          <span className="text-xl font-bold text-brand-blue">
            ₹{product.price.toLocaleString('en-IN')}
          </span>
          <Link 
            to={`/products/${product.id}`}
            className="inline-flex items-center gap-1 text-sm font-medium text-gray-600 hover:text-brand-orange transition-colors"
          >
            View <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
};