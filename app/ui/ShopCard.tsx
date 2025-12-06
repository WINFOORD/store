'use client';

import { Star, Heart, ShoppingCart } from 'lucide-react';
import { ProductCardProps } from '../types';
import OptimizedImage from '../optimizeImage';
export function ShopCard({
  id,
  title,
  price,
  originalPrice,
  unit,
  rating,
  reviews,
  picture,
  bgColor,
  tag,
  onWishlistToggle,
  isWishlisted = false
}: ProductCardProps) {
  
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    console.log(`محصول ${title} به سبد خرید اضافه شد`);
  };

  const handleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onWishlistToggle) {
      onWishlistToggle(id);
    }
  };

  return (
    <div className="product-card group relative bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300">
      {/* تصویر محصول */}
      <div className={`relative ${bgColor} aspect-square overflow-hidden`}>
        <OptimizedImage
        fill
          src={picture}
          alt={title}
          className="w-full h-full object-cover mix-blend-multiply group-hover:scale-105 transition-transform duration-500"
        />
        
        {/* برچسب */}
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
          <Heart 
            className={`w-5 h-5 ${
              isWishlisted 
                ? 'fill-rose-500 text-rose-500' 
                : 'text-gray-600'
            }`} 
          />
        </button>

        {/* دکمه افزودن به سبد */}
        <button 
          onClick={handleAddToCart}
          className="absolute bottom-3 left-1/2 -translate-x-1/2 w-12 h-12 bg-green-500 text-white rounded-full shadow-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-green-600 transform group-hover:translate-y-0 translate-y-2"
        >
          <ShoppingCart className="w-5 h-5" />
        </button>
      </div>

      {/* اطلاعات محصول */}
      <div className="p-4">
        {/* امتیاز */}
        <div className="flex items-center gap-1 mb-2">
          <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
          <span className="text-sm font-semibold text-gray-900">{rating}</span>
          <span className="text-sm text-gray-500">({reviews.toLocaleString('fa-IR')} نظر)</span>
        </div>

        {/* نام محصول */}
        <h3 className="text-sm font-semibold text-gray-900 mb-3 line-clamp-2">
          {title}
        </h3>

        {/* قیمت */}
        <div className="flex items-baseline gap-2">
          <span className="text-xl font-bold text-gray-900">
            {price.toLocaleString('fa-IR')} تومان
          </span>
          {originalPrice && (
            <span className="text-sm text-gray-400 line-through">
              {originalPrice.toLocaleString('fa-IR')} تومان
            </span>
          )}
        </div>
        {unit && (
          <span className="text-xs text-gray-500">{unit}</span>
        )}
      </div>
    </div>
  );
}
