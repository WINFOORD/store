import { useEffect, useState } from "react";
import { motion } from 'framer-motion';
import OptimizedImage from "./optimizeImage";

export function CarouselCardSmooth() {
  const [index, setIndex] = useState(0);

  const slides = [
    { 
      id: 1, 
      img: null, 
      title: 'شکلات فرانسوی', 
      sub: 'وارداتی', 
      price: 'T 250,000 ' 
    },
    { 
      id: 2, 
      img: null, 
      title: 'تمشک آلمانی', 
      sub: 'ارگانیک', 
      price: 'T 370,000' 
    },
    { 
      id: 3, 
      img: null, 
      title: 'پسته سبز', 
      sub: 'پر فروش ترین این ماه', 
      price: 'T 1,200,000' 
    },
  ];

  // Auto-slide
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[550px]  flex items-center justify-center">
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -30 }}
        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        className="relative w-[400px] h-[520px]"
      >
        {/* Image Container with Editorial Frame */}
        <div className="relative w-full h-full p-6 border border-stone-200 bg-white shadow-xl rounded-md">
          <div className="relative w-full h-full overflow-hidden">
            <OptimizedImage
              src={'/images/placeholder.webp'}
              alt={slides[index].title}
              fill
              className="transition-transform duration-[3s] hover:scale-105"
            />
            <div className="absolute inset-0  bg-gradient-to-t from-black/10 to-transparent" />
          </div>
          
          {/* Floating Price Tag */}
          <div className="absolute -right-8 top-16 bg-stone-900 text-white px-5 py-2 text-xs font-light tracking-[0.25em] rounded-xs">
            {slides[index].price}
          </div>
        </div>

        {/* Text Overlay - Dior Inspired Typography */}
        <div className="absolute  -bottom-12 -left-8 text-left">
          <h3 className="text-5xl  bg-clip-text font-serif text-gray-950 leading-none font-light" 
          style={{ filter: 'drop-shadow(0 0 10px rgba(255, 255, 0, 0.2))' }}
          >
            {slides[index].title}
          </h3>
          <p className="text-stone-500 text-[11px] tracking-[0.3em] uppercase mt-1 font-light ">
            {slides[index].sub}
          </p>
        </div>
      </motion.div>

      {/* Minimal Navigation Dots */}
      <div className="absolute -top-5 left-1/2 -translate-x-1/2 flex gap-4">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className="group flex    items-center gap-2"
          >
            <div 
              className={`h-px transition-all duration-500 ${
                index === i ? 'w-12 bg-stone-900' : 'w-6 bg-stone-400'
              }`} 
            />
            <span 
              className={`text-[10px]  tracking-wider ${
                index === i ? 'text-stone-900' : 'text-stone-400'
              }`}
            >
              {i + 1}
            </span>
          </button>
        ))}
      </div>


    </div>
  );
}