'use client';

import { categories, Category } from '@/data/products';

interface SidebarProps {
  selectedCategory: string;
  priceRange: [number, number];
  onCategoryChange: (category: string) => void;
  onPriceRangeChange: (range: [number, number]) => void;
}

export default function Sidebar({
  selectedCategory,
  priceRange,
  onCategoryChange,
  onPriceRangeChange
}: SidebarProps) {
  const handlePriceChange = (value: number, index: number) => {
    const newRange: [number, number] = [...priceRange];
    newRange[index] = value;
    onPriceRangeChange(newRange);
  };

  return (
    <div className="bg-blue-600 text-white p-6 w-80">
      {/* Filters Title */}
      <h2 className="text-xl font-semibold mb-6">Filters</h2>

      {/* Category Filter */}
      <div className="mb-8">
        <h3 className="text-lg font-medium mb-4">Category</h3>
        <div className="space-y-3">
          {categories.map((category) => (
            <label key={category} className="flex items-center cursor-pointer">
              <input
                type="radio"
                name="category"
                value={category}
                checked={selectedCategory === category}
                onChange={(e) => onCategoryChange(e.target.value)}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
              />
              <span className="ml-3 capitalize">
                {category === 'all' ? 'All' : category}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Price Range Filter */}
      <div className="mb-8">
        <h3 className="text-lg font-medium mb-4">Price</h3>
        <div className="space-y-4">
          <div className="relative">
            <input
              type="range"
              min="0"
              max="1000"
              value={priceRange[1]}
              onChange={(e) => handlePriceChange(Number(e.target.value), 1)}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
            />
            <div className="flex justify-between text-sm mt-2">
              <span>0</span>
              <span>1000</span>
            </div>
          </div>
          <div className="text-center text-sm">
            ${priceRange[0]} - ${priceRange[1]}
          </div>
        </div>
      </div>

      {/* Alternative Category Section (matching design) */}
      <div className="mb-8">
        <h3 className="text-lg font-medium mb-4">Category</h3>
        <div className="space-y-3">
          {categories.map((category) => (
            <label key={`alt-${category}`} className="flex items-center cursor-pointer text-gray-200">
              <input
                type="radio"
                name="alt-category"
                value={category}
                checked={selectedCategory === category}
                onChange={(e) => onCategoryChange(e.target.value)}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
              />
              <span className="ml-3 capitalize">
                {category === 'all' ? 'All' : category}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Price Input */}
      <div>
        <h3 className="text-lg font-medium mb-4">Price</h3>
        <input
          type="number"
          placeholder="5000"
          className="w-full px-3 py-2 bg-white text-gray-900 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    </div>
  );
}
