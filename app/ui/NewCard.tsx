'use client';

import { Heart } from 'lucide-react';
import { GiftCardProps } from '../types';
import OptimizedImage from '../optimizeImage';

export function NewCard({
  id,
  title,
  picture,
  bgColor,
  tag
}: GiftCardProps) {
  
  const handleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    console.log(`${title} به علاقه‌مندی‌ها اضافه شد`);
  };

  return (
    <div className="group relative bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer">
      <div className={`relative ${bgColor} aspect-square overflow-hidden`}>
        <OptimizedImage
        fill
          src={picture || '/images/default-product.jpg'}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        
        {/* برچسب جدید */}
        {tag && (
          <div className="absolute top-3 left-3 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full">
            {tag}
          </div>
        )}

        {/* دکمه علاقه‌مندی */}
        <button 
          onClick={handleWishlist}
          className="absolute top-3 right-3 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors"
        >
          <Heart className="w-5 h-5 text-gray-600 hover:text-rose-500 transition-colors" />
        </button>
      </div>

      {/* نام محصول */}
      <div className="p-4">
        <h3 className="text-base font-bold text-gray-900">{title}</h3>
      </div>
    </div>
  );
}