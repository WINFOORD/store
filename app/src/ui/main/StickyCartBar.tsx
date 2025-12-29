'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ShoppingCart, ArrowLeft } from 'lucide-react';
import { MagneticButton } from '../MagneticButton';

export function StickyCartBar({ totalItems, totalPrice }: { totalItems: number; totalPrice: number }) {
  return (
    <motion.div
      className="fixed bottom-4 left-1/2 -translate-x-1/2 scale-85 z-[85] w-[calc(100%-2rem)] sm:w-auto sm:min-w-[400px] max-w-[600px]"
      initial={{ y: 60, opacity: 0, scale: 0.9 }}
      animate={{ y: 0, opacity: 1, scale: 1 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
    >
      <div className="relative overflow-hidden rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
        {/* Background with gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#2d2822]/10 via-[#5a4f44]/10 to-[#2d2822]/10"></div>
        <div className="absolute inset-0 bg-[#2d2822]/40 backdrop-blur-md"></div>
        
        {/* Content */}
        <div className="relative px-4 sm:px-4 py-3 sm:py-4 flex items-center justify-between gap-3 sm:gap-6">
          {/* Cart Icon and Info */}
          <div className="flex items-center gap-3 flex-1 min-w-0">
            <div className="bg-[#e2c6aa] p-2 sm:p-2.5 rounded-xl shadow-lg flex-shrink-0">
              <ShoppingCart className="w-5 h-5 sm:w-6 sm:h-6 text-[#2d2822]" strokeWidth={2.5} />
            </div>
            
            <div className="flex-1 min-w-0">
              <div className="flex items-baseline gap-2 flex-wrap">
                <span className="text-[#f9f4ee] font-bold text-sm sm:text-base">
                  {totalItems} محصول
                </span>
                <span className="hidden sm:inline text-[#e8d1bb] text-sm">|</span>
              </div>
              <div className="text-[#e2c6aa] font-extrabold text-base sm:text-lg mt-0.5 truncate">
                {totalPrice.toLocaleString()} 
                <span className="text-xs sm:text-sm font-normal mr-1">تومان</span>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <Link href="/cart" className="flex-shrink-0">
            <MagneticButton className="group  hover:bg-[#e2c6aa]/20 cursor-pointer px-4 sm:px-6 py-2.5 sm:py-3 text-white ring-1 ring-[#e2c6aa] rounded-xl font-bold text-sm sm:text-base shadow-lg transition-all duration-300 flex items-center gap-2 whitespace-nowrap">
              <span className="hidden sm:inline">مشاهده سبد</span>
              <span className="sm:hidden">سبد</span>
              <ArrowLeft className="w-4 h-4 group-hover:translate-x-1 transition-transform" strokeWidth={2.5} />
            </MagneticButton>
          </Link>
        </div>

        {/* Decorative line */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#e2c6aa] to-transparent opacity-50"></div>
      </div>
    </motion.div>
  );
}