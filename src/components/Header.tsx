'use client';

import { Search, ShoppingCart } from 'lucide-react';
import { useCartStore } from '@/store/cart';
import Link from 'next/link';

interface HeaderProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export default function Header({ searchQuery, onSearchChange }: HeaderProps) {
  const totalItems = useCartStore(state => state.getTotalItems());

  return (
    <header className="bg-blue-600 text-white py-3 px-6">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-xl font-semibold">
          Logo
        </Link>

        {/* Search Bar */}
        <div className="flex-1 max-w-lg mx-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search for products..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-md text-gray-900 text-sm focus:outline-none focus:ring-1 focus:ring-blue-300"
            />
          </div>
        </div>

        {/* Cart */}
        <div className="flex items-center">
          <Link href="/cart" className="bg-blue-700 hover:bg-blue-800 px-4 py-2 rounded-md flex items-center space-x-2 transition-colors">
            <ShoppingCart className="w-4 h-4" />
            <span className="text-sm font-medium">Cart</span>
            {totalItems > 0 && (
              <span className="bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center ml-1">
                {totalItems}
              </span>
            )}
          </Link>
        </div>
      </div>
    </header>
  );
}
