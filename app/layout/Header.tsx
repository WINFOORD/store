'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Search, Heart, User, ShoppingCart, Menu, X } from 'lucide-react';
import { useCartStore } from '../store/cartStore';
import { formatPrice } from '../lib/utils';
import { NAV_ITEMS } from '../constants/navigation';


export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const totalPrice = useCartStore((state) => state.getTotalPrice());
  
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex  items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className=" items-center">
            <h1 className="text-3xl ">آجیل سرای بابل</h1>
          </Link>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex flex-1 max-w-2xl mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="جستجوی محصول..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300"
              />
            </div>
          </div>

          {/* Right Icons */}
          <div className="flex items-center gap-4">
            <Link href="/wishlist" className="hidden md:block p-2 hover:bg-gray-100 rounded-lg transition">
              <Heart className="w-5 h-5" />
            </Link>
            <Link href="/account" className="hidden md:block p-2 hover:bg-gray-100 rounded-lg transition">
              <User className="w-5 h-5" />
            </Link>
            <Link href="/cart" className="relative p-2 hover:bg-gray-100 rounded-lg transition flex items-center">
              <span className="ml-2 text-sm font-medium">تومان{formatPrice(totalPrice)}</span>
              <ShoppingCart className="w-5 h-5" />
            </Link>
            <button 
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Navigation - Desktop */}
        <nav className="hidden md:block pb-4 overflow-x-auto">
          <div className="flex gap-6">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium whitespace-nowrap hover:text-gray-600 transition"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <div className="px-4 py-4">
            <div className="relative mb-4">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Enter search term..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300"
              />
            </div>
            <nav className="flex flex-col gap-2">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="py-2 text-sm font-medium hover:text-gray-600 transition"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
