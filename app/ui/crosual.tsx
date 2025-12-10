'use client';
import { useState, useRef, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, ShoppingCart, Eye, Heart } from "lucide-react";

export function CarouselCardSmooth() {
  const slides = [
    { 
      img: "🥜", 
      title: "پسته ویژه", 
      price: "450,000",
      desc: "پسته اکبری برشته با کیفیت عالی",
      link: "/products/pistachio" 
    },
    { 
      img: "🌰", 
      title: "بادام هندی", 
      price: "320,000",
      desc: "بادام هندی روست شده مرغوب",
      link: "/products/almond" 
    },
    { 
      img: "🍇", 
      title: "کشمش سبز", 
      price: "185,000",
      desc: "کشمش سبز قلمی درجه یک",
      link: "/products/raisin" 
    },
    { 
      img: "🍫", 
      title: "شکلات تلخ", 
      price: "225,000",
      desc: "شکلات تلخ 85% کاکائو",
      link: "/products/choco" 
    },
  ];

  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const resetTimer = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    timerRef.current = setInterval(() => {
      if (!isAnimating) {
        setIsAnimating(true);
        setCurrent((prev) => (prev + 1) % slides.length);
        setTimeout(() => setIsAnimating(false), 600);
      }
    }, 4000);
  }, [isAnimating, slides.length]);

  const goToNext = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrent((prev) => (prev + 1) % slides.length);
    setTimeout(() => setIsAnimating(false), 600);
    resetTimer();
  }, [isAnimating, slides.length, resetTimer]);

  const goToPrev = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
    setTimeout(() => setIsAnimating(false), 600);
    resetTimer();
  }, [isAnimating, slides.length, resetTimer]);

  const goToSlide = useCallback((index: number) => {
    if (isAnimating || index === current) return;
    setIsAnimating(true);
    setCurrent(index);
    setTimeout(() => setIsAnimating(false), 600);
    resetTimer();
  }, [isAnimating, current, resetTimer]);

  useEffect(() => {
    resetTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const getSlideStyle = (index: number) => {
    const diff = index - current;
    const normalizedDiff = diff > slides.length / 2 ? diff - slides.length : diff < -slides.length / 2 ? diff + slides.length : diff;

    if (normalizedDiff === 0) {
      return {
        transform: 'translateX(0) scale(1) rotateY(0deg)',
        opacity: 1,
        zIndex: 20,
        transition: 'all 0.7s cubic-bezier(0.34, 1.56, 0.64, 1)',
      };
    } else if (Math.abs(normalizedDiff) === 1) {
      return {
        transform: `translateX(${normalizedDiff * 85}%) scale(0.8) rotateY(${-normalizedDiff * 15}deg)`,
        opacity: 0.5,
        zIndex: 10,
        transition: 'all 0.7s cubic-bezier(0.34, 1.56, 0.64, 1)',
        pointerEvents: 'none' as const,
      };
    } else {
      return {
        transform: `translateX(${normalizedDiff * 100}%) scale(0.6)`,
        opacity: 0,
        zIndex: 0,
        transition: 'all 0.7s cubic-bezier(0.34, 1.56, 0.64, 1)',
        pointerEvents: 'none' as const,
      };
    }
  };

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Container with perspective for 3D effect */}
      <div className="relative h-[340px] w-full flex items-center justify-center" style={{ perspective: '1200px' }}>
        {/* Slides */}
        <div className="relative w-full max-w-[280px] h-full">
          {slides.map((slide, index) => (
            <div
              key={index}
              style={getSlideStyle(index)}
              className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full"
            >
              <div className="w-full h-full bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100 hover:shadow-3xl transition-shadow duration-300">
                {/* Image Area */}
                <div className="h-[52%] bg-gradient-to-br  flex items-center justify-center relative overflow-hidden">
                  {/* Decorative circles */}
                  <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/30 rounded-full blur-2xl"></div>
                  <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-orange-300/20 rounded-full blur-2xl"></div>
                  
                  <div className="text-7xl select-none relative z-10 animate-bounce-slow">{slide.img}</div>
                  
                  {/* Quick Actions */}
                  {index === current && (
                    <div className="absolute top-2 right-2 animate-in fade-in slide-in-from-top duration-500">
                      <button className="w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-rose-50 hover:scale-110 transition-all duration-300 shadow-lg group">
                        <Heart className="w-4 h-4 text-rose-500 group-hover:fill-rose-500 transition-all" />
                      </button>
                    </div>
                  )}

                  {/* Discount Badge */}
                  {index === 0 && (
                    <div className="absolute top-2 left-2 bg-gradient-to-r from-rose-500 to-orange-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg animate-pulse">
                      ۲۰٪ تخفیف
                    </div>
                  )}
                </div>

                {/* Content Area */}
                <div className="h-[48%] bg-white p-3.5 flex flex-col justify-between">
                  <div>
                    <h3 className="text-base font-black text-gray-900 mb-1 line-clamp-1">
                      {slide.title}
                    </h3>
                    <p className="text-xs text-gray-600 mb-2 line-clamp-1">
                      {slide.desc}
                    </p>
                    <div className="flex items-baseline gap-1 mb-2">
                      <span className="text-lg font-black bg-gradient-to-r from-orange-600 to-rose-600 bg-clip-text text-transparent">
                        {slide.price}
                      </span>
                      <span className="text-xs text-gray-500">تومان</span>
                    </div>
                  </div>

                  {/* Buttons */}
                  {index === current && (
                    <div className="flex gap-2 animate-in slide-in-from-bottom duration-500">
                      <button className="flex-1 px-2.5 py-2 bg-gradient-to-r from-orange-500 via-orange-600 to-rose-500 text-white rounded-lg text-xs font-bold hover:scale-105 hover:shadow-lg active:scale-95 transition-all duration-300 flex items-center justify-center gap-1">
                        <ShoppingCart className="w-3.5 h-3.5" />
                        افزودن
                      </button>
                      <button 
                        onClick={() => window.location.href = slide.link}
                        className="px-2.5 py-2 bg-gray-100 text-gray-900 rounded-lg text-xs font-bold hover:bg-gray-200 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center gap-1"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        جزئیات
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons with new design */}
        <button
          onClick={goToPrev}
          disabled={isAnimating}
          className="absolute -left-3 lg:left-0 top-1/2 -translate-y-1/2 w-10 h-10 bg-gradient-to-br from-orange-500 to-rose-500 hover:from-orange-600 hover:to-rose-600 rounded-full shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed z-30 group"
        >
          <ChevronLeft className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
        </button>
        
        <button
          onClick={goToNext}
          disabled={isAnimating}
          className="absolute -right-3 lg:right-0 top-1/2 -translate-y-1/2 w-10 h-10 bg-gradient-to-br from-orange-500 to-rose-500 hover:from-orange-600 hover:to-rose-600 rounded-full shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed z-30 group"
        >
          <ChevronRight className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
        </button>
      </div>

      {/* Dots Navigation with new style */}
      <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 flex justify-center items-center gap-1.5">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            disabled={isAnimating}
            className={`transition-all duration-300 rounded-full ${
              index === current
                ? 'w-6 h-2 bg-gradient-to-r from-orange-500 to-rose-500 shadow-md'
                : 'w-2 h-2 bg-gray-300 hover:bg-gray-400 hover:scale-125'
            } disabled:cursor-not-allowed`}
          />
        ))}
      </div>

      <style jsx>{`
        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}