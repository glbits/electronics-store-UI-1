import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Filter, X } from 'lucide-react';
import { SEO } from '../components/SEO';
import { ProductCard } from '../components/ProductCard';
import { products, categories } from '../data';
import { Category } from '../types';

export const Products: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category');
  
  const [selectedCategories, setSelectedCategories] = useState<string[]>(
    initialCategory ? [initialCategory] : []
  );
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 10000]);
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);

  // Sync state with URL params if they change externally
  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat) setSelectedCategories([cat]);
  }, [searchParams]);

  const toggleCategory = (cat: string) => {
    setSelectedCategories(prev => 
      prev.includes(cat) 
        ? prev.filter(c => c !== cat)
        : [...prev, cat]
    );
  };

  const filteredProducts = products.filter(product => {
    const matchCat = selectedCategories.length === 0 || selectedCategories.includes(product.category);
    const matchPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
    return matchCat && matchPrice;
  });

  return (
    <>
      <SEO 
        title="Browse Products | ElectroMart" 
        description="Browse our extensive catalog of electronics, wires, lights, and switches." 
      />

      <div className="bg-gray-50 min-h-screen py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            
            {/* Mobile Filter Toggle */}
            <div className="lg:hidden mb-4">
              <button 
                onClick={() => setIsMobileFiltersOpen(true)}
                className="flex items-center gap-2 bg-white border border-gray-300 px-4 py-2 rounded-lg text-gray-700 font-medium w-full justify-center"
              >
                <Filter size={18} /> Filters
              </button>
            </div>

            {/* Sidebar Filters */}
            <aside className={`
              fixed lg:relative inset-0 z-40 bg-white lg:bg-transparent lg:w-64 p-6 lg:p-0 overflow-y-auto lg:overflow-visible transition-transform duration-300
              ${isMobileFiltersOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
            `}>
              <div className="flex justify-between items-center lg:hidden mb-6">
                <h2 className="text-xl font-bold">Filters</h2>
                <button onClick={() => setIsMobileFiltersOpen(false)}><X size={24} /></button>
              </div>

              <div className="space-y-8">
                {/* Categories */}
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                  <h3 className="font-bold text-gray-900 mb-4">Categories</h3>
                  <div className="space-y-2">
                    {categories.map(cat => (
                      <label key={cat} className="flex items-center gap-3 cursor-pointer group">
                        <div className="relative flex items-center">
                          <input 
                            type="checkbox" 
                            checked={selectedCategories.includes(cat)}
                            onChange={() => toggleCategory(cat)}
                            className="peer h-4 w-4 rounded border-gray-300 text-brand-blue focus:ring-brand-blue"
                          />
                        </div>
                        <span className="text-gray-600 group-hover:text-brand-blue transition-colors">{cat}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Price Range */}
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                  <h3 className="font-bold text-gray-900 mb-4">Price Range</h3>
                  <div className="px-2">
                    <input 
                      type="range" 
                      min="0" 
                      max="5000" 
                      step="100"
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-brand-blue"
                    />
                    <div className="flex justify-between mt-2 text-sm text-gray-600">
                      <span>₹0</span>
                      <span>₹{priceRange[1].toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              </div>
            </aside>
            
            {/* Backdrop for mobile */}
            {isMobileFiltersOpen && (
              <div 
                className="fixed inset-0 bg-black/50 z-30 lg:hidden"
                onClick={() => setIsMobileFiltersOpen(false)}
              ></div>
            )}

            {/* Product Grid */}
            <div className="flex-1">
              <div className="mb-6 flex justify-between items-center">
                <h1 className="text-2xl font-bold text-gray-900">
                  {selectedCategories.length === 1 ? selectedCategories[0] : 'All Products'}
                  <span className="ml-2 text-sm font-normal text-gray-500">({filteredProducts.length} items)</span>
                </h1>
                <select className="bg-white border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-brand-blue focus:border-brand-blue block p-2">
                  <option>Sort by: Recommended</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                </select>
              </div>

              {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
                  {filteredProducts.map(product => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              ) : (
                <div className="bg-white p-12 text-center rounded-lg border border-gray-200">
                  <p className="text-gray-500 text-lg">No products found matching your criteria.</p>
                  <button 
                    onClick={() => {setSelectedCategories([]); setPriceRange([0, 10000]);}}
                    className="mt-4 text-brand-blue font-semibold hover:underline"
                  >
                    Clear all filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};