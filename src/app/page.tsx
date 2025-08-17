'use client';

import { useState, useMemo } from 'react';
import { products } from '@/data/products';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import ProductCard from '@/components/ProductCard';
import Footer from '@/components/Footer';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      // Filter by search query
      const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           product.description.toLowerCase().includes(searchQuery.toLowerCase());
      
      // Filter by category
      const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
      
      // Filter by price range
      const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
      
      return matchesSearch && matchesCategory && matchesPrice;
    });
  }, [searchQuery, selectedCategory, priceRange]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />
      
      <div className="flex">
        <Sidebar
          selectedCategory={selectedCategory}
          priceRange={priceRange}
          onCategoryChange={setSelectedCategory}
          onPriceRangeChange={setPriceRange}
        />
        
        <main className="flex-1 p-4 bg-gray-50">
          <div className="max-w-6xl">
            <h1 className="text-xl font-semibold text-gray-900 mb-4">Product Listing</h1>
            
            {filteredProducts.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No products found matching your criteria.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </main>
      </div>
      
      <Footer />
    </div>
  );
}
