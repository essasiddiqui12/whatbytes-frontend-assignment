'use client';

import { useState } from 'react';
import { Search, ShoppingCart, User } from 'lucide-react';
import { useCartStore } from '@/store/cart';
import Link from 'next/link';

interface HeaderProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export default function Header({ searchQuery, onSearchChange }: HeaderProps) {
  const totalItems = useCartStore(state => state.getTotalItems());

  return (
    <header className="bg-blue-600 text-white py-4 px-6">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold">
          Logo
        </Link>

        {/* Search Bar */}
        <div className="flex-1 max-w-md mx-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search for products..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
          </div>
        </div>

        {/* Cart and Profile */}
        <div className="flex items-center space-x-4">
          <Link href="/cart" className="relative p-2 hover:bg-blue-700 rounded-lg transition-colors">
            <ShoppingCart className="w-6 h-6" />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {totalItems}
              </span>
            )}
            <span className="ml-2 hidden md:inline">Cart</span>
          </Link>
          
          <div className="p-2 hover:bg-blue-700 rounded-lg transition-colors cursor-pointer">
            <User className="w-6 h-6" />
          </div>
        </div>
      </div>
    </header>
  );
}
