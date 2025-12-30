"use client"

import { useState, memo } from 'react';
import { Heart, ShoppingCart, Info, Star, Zap, TrendingUp } from 'lucide-react';
import { colors } from '../colors';

// JSON Content for i18n
const cardContent = {
  fa: {
    organic: "ارگانیک",
    note: "یادداشت",
    addToCart: "افزودن به سبد",
    new: "جدید",
    bestseller: "پرفروش"
  },
  en: {
    organic: "Organic",
    note: "Note",
    addToCart: "Add to Cart",
    new: "New",
    bestseller: "Best Seller"
  }
};

interface ProductCardProps {
  title: string;
  price: number;
  originalPrice?: number;
  unit?: string;
  image: string;
  bgColor?: string;
  score?: number;
  reviews?: number;
  isOrganic?: boolean;
  note?: boolean;
  discount?: number;
  category?: string;
  variant?: 'detailed' | 'main' | 'minimal';
  index?: number;
  isNew?: boolean;
  isBestseller?: boolean;
  lang?: 'fa' | 'en';
  onAddToCart?: () => void;
}

export const ProductCard = memo<ProductCardProps>(({
  title,
  price,
  originalPrice,
  unit,
  image,
  bgColor,
  score,
  reviews,
  isOrganic,
  note,
  discount,
  category,
  variant = 'main',
  index = 0,
  isNew,
  isBestseller,
  lang = 'fa',
  onAddToCart,
}) => {
  const [isLiked, setIsLiked] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const text = cardContent[lang];



  const handleAddToCart = () => {
    if (onAddToCart) onAddToCart();
  };

  // ============ VARIANT: DETAILED ============
  if (variant === 'detailed') {
    return (
      <div
        className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
        style={{
          animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
          ...colors
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Image Container - Smaller */}
        <div className="relative aspect-[4/3] overflow-hidden">
          <div
            className="absolute inset-0 transition-all duration-500"
            style={{
              backgroundColor: bgColor || 'var(--color-tint-20)',
              opacity: imageLoaded ? 1 : 0.3,
              transform: isHovered ? 'scale(1.1)' : 'scale(1)'
            }}
          />

          <img
            src={image}
            alt={title}
            loading="lazy"
            onLoad={() => setImageLoaded(true)}
            className="relative w-full h-full object-cover transition-transform duration-700"
            style={{ transform: isHovered ? 'scale(1.08)' : 'scale(1)' }}
          />

          <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-black/0 to-black/40 group-hover:to-black/50 transition-all duration-300" />

          {/* Badges Top */}
          <div className="absolute top-3 left-3 right-3 flex items-start justify-between gap-2 z-10">
            <div className="flex flex-col gap-1.5">
              {isOrganic && (
                <div className="bg-green-500 text-white px-2.5 py-1.5 rounded-xl text-[10px] font-bold flex items-center gap-1.5 shadow-lg backdrop-blur-sm">
                  <div className="w-3 h-3 bg-white/90 rounded-full flex items-center justify-center">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                  </div>
                  {text.organic}
                </div>
              )}

              {isNew && (
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-2.5 py-1.5 rounded-xl text-[10px] font-bold flex items-center gap-1 shadow-lg">
                  <Zap className="w-3 h-3" />
                  {text.new}
                </div>
              )}
            </div>

            {note && (
              <button className="bg-white/95 backdrop-blur-sm hover:bg-white text-[var(--color-shade-60)] px-2.5 py-1.5 rounded-xl text-[10px] font-medium flex items-center gap-1 shadow-lg transition-all hover:scale-105">
                <Info className="w-3 h-3" />
                {text.note}
              </button>
            )}
          </div>



          {/* Category + Cart */}
          <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
            {category && (
              <div className="bg-white/95 backdrop-blur-sm text-[var(--color-shade-80)] px-3 py-1.5 rounded-xl text-xs font-semibold shadow-md">
                {category}
              </div>
            )}

            <button
              onClick={handleAddToCart}
              className="w-11 h-11 rounded-full bg-[var(--color-base)] hover:bg-[var(--color-shade-20)] text-white flex items-center justify-center shadow-xl transition-all duration-300 hover:scale-110"
              style={{
                opacity: isHovered ? 1 : 0,
                transform: isHovered ? 'translateY(0)' : 'translateY(10px)'
              }}
            >
              <ShoppingCart className="w-5 h-5" strokeWidth={2.5} />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 relative">
          {score && (
            <div className="flex items-center gap-1.5 mb-2">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span className="text-[var(--color-shade-80)] font-bold text-sm">{score}</span>
              {reviews && <span className="text-[var(--color-shade-40)] text-xs">({reviews})</span>}
            </div>
          )}

          <h3 className="text-[var(--color-shade-80)] font-semibold text-sm mb-3 line-clamp-2 min-h-[2.5rem] leading-snug">
            {title}
          </h3>

          <div className="flex items-end justify-between">
            <div className="flex flex-col">
              {originalPrice && (
                <span className="text-[var(--color-shade-40)] text-xs line-through mb-0.5">
                  €{originalPrice}
                </span>
              )}
              <div className="flex items-baseline gap-1">
                <span className="text-[var(--color-shade-80)] font-bold text-lg">€{price}</span>
                {unit && <span className="text-[var(--color-shade-40)] text-xs">{unit}</span>}
              </div>
            </div>

            {discount && (
              <div className="bg-red-500 text-white px-2 py-1 rounded-lg text-xs font-bold shadow-md">
                -{discount}%
              </div>
            )}
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[var(--color-base)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
    );
  }

  // ============ VARIANT: MAIN (Default) ============
  if (variant === 'main') {
    return (
      <div
        className="group relative bg-gradient-to-br from-white to-[var(--color-tint-10)] rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 border border-[var(--color-tint-40)]"
        style={{
          animation: `scaleIn 0.6s ease-out ${index * 0.1}s both`,
          ...colors
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Image */}
        <div className="relative aspect-square overflow-hidden rounded-3xl m-3">
          <div
            className="absolute inset-0 transition-all duration-500"
            style={{
              backgroundColor: bgColor || 'var(--color-tint-20)',
              opacity: imageLoaded ? 0.8 : 0.3,
            }}
          />

          <img
            src={image}
            alt={title}
            loading="lazy"
            onLoad={() => setImageLoaded(true)}
            className="relative w-full h-full object-cover transition-all duration-700"
            style={{
              transform: isHovered ? 'scale(1.1) rotate(2deg)' : 'scale(1) rotate(0deg)'
            }}
          />

          {/* Floating Badges */}
          {(isOrganic || isBestseller) && (
            <div className="absolute top-3 left-3 flex flex-col gap-2">
              {isOrganic && (
                <div className=" backdrop-blur-xs text-emerald-500 ring ring-[var(--color-base)] px-3 py-1.5 rounded-full text-[10px] font-bold shadow-xl">
                  {text.organic}
                </div>
              )}
              {isBestseller && (
                <div className="bg-gradient-to-r from-orange-400 to-red-500 text-white px-3 py-1.5 rounded-full text-[10px] font-bold flex items-center gap-1 shadow-xl">
                  <TrendingUp className="w-3 h-3" />
                  {text.bestseller}
                </div>
              )}
            </div>
          )}


          {/* Cart */}
          <button
            onClick={handleAddToCart}
            className="absolute bottom-3 right-3 w-10 h-10 rounded-full bg-[var(--color-base)] hover:bg-[var(--color-shade-20)] text-white flex items-center justify-center shadow-xl transition-all duration-300"
            style={{
              opacity: isHovered ? 1 : 0,
              transform: isHovered ? 'scale(1)' : 'scale(0.8)'
            }}
          >
            <ShoppingCart className="w-4 h-4" strokeWidth={2.5} />
          </button>
        </div>

        {/* Content */}
        <div className="px-4 pb-4">
          {score && (
            <div className="flex items-center gap-1 mb-2">
              <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
              <span className="text-[var(--color-shade-80)] font-bold text-xs">{score}</span>
            </div>
          )}

          <h3 className="text-[var(--color-shade-80)] font-bold text-sm mb-2 line-clamp-2 min-h-[2.5rem]">
            {title}
          </h3>

          <div className="flex items-center justify-between">
            <div>
              <div className="text-[var(--color-base)] font-extrabold text-xl">€{price}</div>
              {unit && <div className="text-[var(--color-shade-40)] text-[10px]">{unit}</div>}
            </div>
            {discount && (
              <div className="bg-red-500 text-white px-2.5 py-1 rounded-full text-xs font-bold">
                -{discount}%
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  // ============ VARIANT: MINIMAL ============
  return (
    <div
      className="group relative bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
      style={{
        animation: `slideInRight 0.5s ease-out ${index * 0.08}s both`,
        ...colors
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex gap-3 p-3">
        {/* Small Image */}
        <div className="relative w-24 h-24 rounded-xl overflow-hidden flex-shrink-0">
          <div
            className="absolute inset-0"
            style={{ backgroundColor: bgColor || 'var(--color-tint-20)' }}
          />
          <img
            src={image}
            alt={title}
            loading="lazy"
            className="relative w-full h-full object-cover transition-transform duration-500"
            style={{ transform: isHovered ? 'scale(1.15)' : 'scale(1)' }}
          />

          {isOrganic && (
            <div className="absolute top-1 left-1 bg-green-500 w-5 h-5 rounded-full flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-full" />
            </div>
          )}
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col justify-between min-w-0">
          <div>
            <h3 className="text-[var(--color-shade-80)] font-semibold text-xs mb-1 line-clamp-2 leading-tight">
              {title}
            </h3>
            {score && (
              <div className="flex items-center gap-1">
                <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                <span className="text-[var(--color-shade-60)] text-[10px] font-bold">{score}</span>
              </div>
            )}
          </div>

          <div className="flex items-center justify-between">
            <div className="text-[var(--color-shade-80)] font-bold text-base">€{price}</div>
            <button
              onClick={handleAddToCart}
              className="w-8 h-8 rounded-lg bg-[var(--color-base)] hover:bg-[var(--color-shade-20)] text-white flex items-center justify-center transition-all hover:scale-105"
            >
              <ShoppingCart className="w-4 h-4" strokeWidth={2.5} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
});

ProductCard.displayName = 'ProductCard';