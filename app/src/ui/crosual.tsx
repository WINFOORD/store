'use client';

import { motion, useSpring, useMotionValue } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import OptimizedImage from './optimizeImage';

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
function CategoryCard({ cat, index }: { cat: typeof slides[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseX = useSpring(x, { stiffness: 100, damping: 30 });
  const mouseY = useSpring(y, { stiffness: 100, damping: 30 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (rect) {
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      x.set((e.clientX - centerX) * 0.04);
      y.set((e.clientY - centerY) * 0.04);
    }
  };

  const resetMouse = () => {
    x.set(0);
    y.set(0);
  };


  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={resetMouse}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.4 }}
      className="relative group cursor-pointer h-[46vh] w-full aspect-[9/5]  overflow-hidden rounded-3xl shadow-xl shadow-white/10 transition-shadow duration-700"
      style={{ perspective: '2000px' }}
    >
      <motion.div
        ref={imageRef}
        style={{ x: mouseX, y: mouseY }}
        className="absolute inset-0  scale-105 transition-transform duration-500 "
      >
        <OptimizedImage
          fill
          src={cat.img}
          alt={cat.title}
          className="  object-cover   "
        />
        <div className="absolute  inset-0 bg-gradient-to-t from-black/50  via-black/10 to-transparent" />
      </motion.div>
      <div className="absolute inset-0 p-8 flex flex-col  justify-end items-center text-center text-white">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 0.8, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-xs tracking-[0.35em] uppercase mb-3 font-light"
        >
          {cat.price}
        </motion.span>

        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-3xl md:text-4xl font-bold tracking-wide mb-6 group-hover:tracking-wider transition-all duration-700"
        >
          {cat.title}
        </motion.h3>

        <div className="w-px h-0 bg-white group-hover:h-16 transition-all duration-700 ease-out" />
      </div>

      <motion.div
        className="absolute inset-4 border border-white/20 rounded-3xl pointer-events-none"
        whileHover={{ borderColor: 'rgba(255,255,255,0.5)' }}
        transition={{ duration: 0.5 }}
      />

      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 pointer-events-none"
        initial={{ x: '-100%' }}
        whileHover={{ x: '100%' }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
      />
    </motion.div>
  );
}

export function CategoryCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="" dir="rtl">


      <div className="  relative z-10">


        <div className="relative w-full  flex items-center justify-center">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="relative w-full "
          >
            <CategoryCard cat={slides[index]} index={index} />
          </motion.div>

          <div className="absolute -bottom-10 left-1/2  -translate-x-1/2 flex gap-4">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className="group flex items-center gap-2 "
              >
                <div
                  className={`h-px transition-all duration-500 ${index === i ? 'w-12 bg-stone-900' : 'w-6 bg-stone-400'
                    }`}
                />
                <span
                  className={`text-[10px] tracking-wider ${index === i ? 'text-stone-900' : 'text-stone-400'
                    }`}
                >
                  {i + 1}
                </span>
              </button>
            ))}
          </div>
        </div>


      </div>
    </section>
  );
}

export default CategoryCarousel;