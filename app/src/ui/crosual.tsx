import { useEffect, useState } from "react";
import { motion } from 'framer-motion';
import OptimizedImage from "./optimizeImage";

export function CarouselCardSmooth() {
  const [index, setIndex] = useState(0);

  const slides = [
    { 
      id: 1, 
      img: '/images/giftpack.webp', 
      title: 'پک هدیه', 
      sub: 'وارداتی', 
      price: 'T 250,000 ' 
    },
    { 
      id: 2, 
      img: '/images/yalda.webp', 
      title: 'پک های شیشه ای', 
      sub: 'ارگانیک', 
      price: 'T 370,000' 
    },
    { 
      id: 3, 
     img: '/images/yaldaPack.webp', 
      title: 'پک شب یلدا', 
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
    <div className="relative w-full h-[500px]  flex items-center justify-center">
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -30 }}
        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        className="relative w-[500px] h-[520px]"
      >
        {/* Image Container with Editorial Frame */}
        <div className="relative w-full h-full p-2  border border-stone-200 bg-white shadow-xl rounded-xl">
          <div className="relative w-full h-full overflow-hidden">
            <OptimizedImage
              src={slides[index].img || '/images/placeholder.png'}
              alt={slides[index].title}
              fill
              className="transition-transform rounded-2xl duration-[3s] hover:scale-105"
            />
            
          </div>
          
          {/* Floating Price Tag */}
      
        </div>

        {/* Text Overlay - Dior Inspired Typography */}
        <div className="flex mt-2 gap-4 justify-center align-middle items-center">
             <div className="absolute w-60 text-center -bottom-15 rounded-b-full bg-stone-900 text-white px-5 py-2 text-xl tracking-[0.25em] ">
           {slides[index].title}
              <h5 className="text-stone-500 text-xs tracking-[0.3em] uppercase  ">
            {slides[index].sub}
          </h5>
          </div>
       
        </div>
      </motion.div>

      {/* Minimal Navigation Dots */}
      <div className="absolute -bottom-25 left-1/2 -translate-x-1/2 flex gap-4">
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