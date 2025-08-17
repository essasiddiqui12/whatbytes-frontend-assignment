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
    <div className="bg-blue-600 text-white p-4 w-64">
      {/* Filters Title */}
      <div className="bg-blue-700 -mx-4 -mt-4 px-4 py-3 mb-4">
        <h2 className="text-lg font-semibold">Filters</h2>
      </div>

      {/* Category Filter */}
      <div className="mb-6">
        <h3 className="text-base font-medium mb-3">Category</h3>
        <div className="space-y-2">
          {categories.map((category) => (
            <label key={category} className="flex items-center cursor-pointer text-sm">
              <input
                type="radio"
                name="category"
                value={category}
                checked={selectedCategory === category}
                onChange={(e) => onCategoryChange(e.target.value)}
                className="w-3 h-3 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 mr-2"
              />
              <span className="capitalize">
                {category === 'all' ? 'All' : category}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Price Range Filter */}
      <div className="mb-6">
        <h3 className="text-base font-medium mb-3">Price</h3>
        <div className="space-y-3">
          <div className="relative">
            <input
              type="range"
              min="0"
              max="1000"
              value={priceRange[1]}
              onChange={(e) => handlePriceChange(Number(e.target.value), 1)}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
            />
            <div className="flex justify-between text-xs mt-1">
              <span>0</span>
              <span>1000</span>
            </div>
          </div>
          <div className="text-center text-xs">
            ${priceRange[0]} - ${priceRange[1]}
          </div>
        </div>
      </div>

      {/* Second Category Section (matching original design) */}
      <div className="mb-6">
        <h3 className="text-base font-medium mb-3">Category</h3>
        <div className="space-y-2">
          {categories.map((category) => (
            <label key={`alt-${category}`} className="flex items-center cursor-pointer text-sm">
              <input
                type="radio"
                name="alt-category"
                value={category}
                checked={selectedCategory === category}
                onChange={(e) => onCategoryChange(e.target.value)}
                className="w-3 h-3 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 mr-2"
              />
              <span className="capitalize">
                {category === 'all' ? 'All' : category}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Price Input */}
      <div>
        <h3 className="text-base font-medium mb-3">Price</h3>
        <input
          type="number"
          placeholder="5000"
          className="w-full px-3 py-1.5 bg-white text-gray-900 rounded text-sm border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
      </div>
    </div>
  );
}
