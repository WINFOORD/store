'use client';
import { useState } from 'react';
import { ShoppingCart, X, ArrowLeft, Sparkles } from 'lucide-react';
import { colors } from '../../colors';

// JSON Content
const cartContent = {
  title: "سبد خرید",
  subtitle: "آماده پرداخت",
  stats: {
    itemsLabel: "تعداد محصولات",
    itemsUnit: "عدد",
    totalLabel: "مبلغ کل",
    currency: "تومان"
  },
  cta: "مشاهده و پرداخت"
};


// Lightweight Magnetic Button
function MagneticButton({ children, className = '', ...props }: { children: React.ReactNode; className?: string; [key: string]: any }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: { currentTarget: { getBoundingClientRect: () => any; }; clientX: number; clientY: number; }) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 15;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 15;
    setPosition({ x, y });
  };

  return (
    <button
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setPosition({ x: 0, y: 0 })}
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
        transition: 'transform 0.15s ease-out'
      }}
      {...props}
    >
      {children}
    </button>
  );
}

export  function StickyCartBar({ totalItems = 3, totalPrice = 1250000 }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      <style>{`
        @keyframes pulse-ring {
          0%, 100% {
            transform: scale(1);
            opacity: 0.6;
          }
          50% {
            transform: scale(1.3);
            opacity: 0;
          }
        }

        .pulse-ring {
          animation: pulse-ring 2.5s ease-in-out infinite;
        }
      `}</style>

      <div className="fixed bottom-6 left-6 z-50" style={colors as React.CSSProperties}>
        {/* Expanded Card */}
        <div
          className="absolute bottom-0 left-0 transition-all duration-400 ease-out origin-bottom-left"
          style={{
            opacity: isExpanded ? 1 : 0,
            transform: isExpanded ? 'scale(1) translateY(0)' : 'scale(0.9) translateY(10px)',
            pointerEvents: isExpanded ? 'auto' : 'none'
          }}
        >
          <div className="relative mb-4 w-[340px] rounded-3xl overflow-hidden shadow-2xl bg-white border border-[var(--color-tint-40)]">
            
            {/* Content */}
            <div className="relative p-6">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[var(--color-base)] flex items-center justify-center shadow-md">
                    <ShoppingCart className="w-5 h-5 text-white" strokeWidth={2.5} />
                  </div>
                  <div>
                    <h3 className="text-[var(--color-shade-80)] font-bold text-lg">
                      {cartContent.title}
                    </h3>
                    <p className="text-[var(--color-shade-40)] text-xs">
                      {cartContent.subtitle}
                    </p>
                  </div>
                </div>
                
                <button
                  onClick={() => setIsExpanded(false)}
                  className="w-8 h-8 rounded-lg bg-[var(--color-tint-20)] hover:bg-[var(--color-tint-40)] flex items-center justify-center transition-colors"
                >
                  <X className="w-4 h-4 text-[var(--color-shade-60)]" />
                </button>
              </div>

              {/* Stats */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center justify-between p-3 rounded-xl bg-[var(--color-tint-10)] border border-[var(--color-tint-40)]">
                  <span className="text-[var(--color-shade-60)] text-sm">
                    {cartContent.stats.itemsLabel}
                  </span>
                  <span className="text-[var(--color-shade-80)] font-bold text-lg">
                    {totalItems} {cartContent.stats.itemsUnit}
                  </span>
                </div>
                
                <div className="flex items-center justify-between p-3 rounded-xl bg-[var(--color-base)]/10 border border-[var(--color-base)]/30">
                  <span className="text-[var(--color-shade-60)] text-sm font-semibold">
                    {cartContent.stats.totalLabel}
                  </span>
                  <div className="text-left">
                    <span className="text-[var(--color-shade-80)] font-extrabold text-xl">
                      {totalPrice.toLocaleString()}
                    </span>
                    <span className="text-[var(--color-shade-60)] text-xs mr-1">
                      {cartContent.stats.currency}
                    </span>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <button className="w-full group rounded-xl bg-[var(--color-base)] hover:bg-[var(--color-shade-20)] px-6 py-3.5 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all duration-300">
                <span className="text-white font-bold text-base">
                  {cartContent.cta}
                </span>
                <ArrowLeft 
                  className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform" 
                  strokeWidth={2.5} 
                />
              </button>
            </div>

            {/* Bottom accent */}
            <div className="h-1 bg-gradient-to-r from-transparent via-[var(--color-base)] to-transparent"></div>
          </div>
        </div>

        {/* Floating Button */}
        <div className="relative">
          {/* Single pulse ring */}
          {totalItems > 0 && (
            <div className="absolute inset-0 rounded-full bg-[var(--color-base)]/30 pulse-ring"></div>
          )}

          <MagneticButton
            onClick={() => setIsExpanded(!isExpanded)}
            className="relative w-16 h-16 rounded-full bg-white shadow-2xl hover:shadow-[0_20px_50px_rgba(139,157,126,0.3)] transition-all duration-300 flex items-center justify-center group border-2 border-[var(--color-tint-40)] hover:border-[var(--color-base)]"
          >
            {/* Icon */}
            <ShoppingCart 
              className="w-7 h-7 text-[var(--color-base)] group-hover:scale-110 transition-transform" 
              strokeWidth={2.5} 
            />

            {/* Badge */}
            {totalItems > 0 && (
              <div className="absolute -top-1 -right-1 min-w-[24px] h-6 rounded-full bg-gradient-to-r from-red-500 to-red-600 border-2 border-white flex items-center justify-center px-1.5 shadow-lg">
                <span className="text-white text-xs font-bold">{totalItems}</span>
              </div>
            )}
          </MagneticButton>
        </div>
      </div>
    </>
  );
}