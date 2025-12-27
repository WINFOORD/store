'use client';

import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { Coffee, Cookie, Apple, Milk, Candy, IceCream, ArrowRight } from 'lucide-react';
import { colors } from '../../colors';



const categories = [
  { 
    id: 1, 
    title: 'آجیل و مغزیجات', 
    en: 'Artisan Nuts', 
    icon: Coffee, 
    img: 'https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=800&q=80',
    color: 'from-amber-500/20 to-orange-500/20'
  },
  { 
    id: 2, 
    title: 'میوه خشک', 
    en: 'Dried Harmony', 
    icon: Apple, 
    img: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=800&q=80',
    color: 'from-rose-500/20 to-pink-500/20'
  },
  { 
    id: 3, 
    title: 'شکلات دست‌ساز', 
    en: 'Noble Cocoa', 
    icon: Cookie, 
    img: 'https://images.unsplash.com/photo-1481391319762-47dff72954d9?w=800&q=80',
    color: 'from-yellow-500/20 to-amber-500/20'
  },
  { 
    id: 4, 
    title: 'لبنیات', 
    en: 'Fresh Dairy', 
    icon: Milk, 
    img: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?w=800&q=80',
    color: 'from-blue-500/20 to-cyan-500/20'
  },
  { 
    id: 5, 
    title: 'شیرینی', 
    en: 'Delicate Sweets', 
    icon: Candy, 
    img: 'https://images.unsplash.com/photo-1582058091505-f87a2e55a40f?w=800&q=80',
    color: 'from-purple-500/20 to-pink-500/20'
  },
  { 
    id: 6, 
    title: 'بستنی', 
    en: 'Creamy Bliss', 
    icon: IceCream, 
    img: 'https://images.unsplash.com/photo-1501443762994-82bd5dace89a?w=800&q=80',
    color: 'from-teal-500/20 to-emerald-500/20'
  },
];

function Card({ cat, index }: { cat: typeof categories[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 0.5, 1], [100, 0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0.3]);
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7], [0.8, 1, 0.95]);
  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [25, 0, -15]);

  const springConfig = { stiffness: 150, damping: 30, mass: 0.5 };
  const springY = useSpring(y, springConfig);
  const springScale = useSpring(scale, springConfig);
  const springRotateX = useSpring(rotateX, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePosition({ x: x * 20, y: y * 20 });
  };

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 });
    setIsHovered(false);
  };

  const Icon = cat.icon;

  return (
    <motion.div
      ref={cardRef}
      style={{ 
        y: springY, 
        opacity, 
        scale: springScale,
        rotateX: springRotateX,
        transformStyle: 'preserve-3d',
        perspective: 1000
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="relative w-full h-full cursor-pointer group"
    >
      <motion.div
        animate={{
          rotateY: mousePosition.x,
          rotateX: -mousePosition.y,
        }}
        transition={{ type: "spring", stiffness: 200, damping: 30 }}
        className="relative w-full h-full"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Card Container */}
        <div className="relative w-full aspect-[3/2] rounded-[15px] overflow-hidden shadow-2xl">
          {/* Background Image with Parallax */}
          <motion.div
            className="absolute inset-0"
            animate={{
              scale: isHovered ? 1.05 : 1,
            }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <img
              src={cat.img}
              alt={cat.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-bl from-black/5 to-black/50" />
          </motion.div>

          {/* Content */}
          <div className="absolute inset-0 flex flex-col justify-between p-8 z-10" style={{ transform: 'translateZ(60px)' }}>
            {/* Top: View All Button (only visible on hover) */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{
                opacity: isHovered ? 1 : 0,
                y: isHovered ? 0 : -10,
              }}
              transition={{ duration: 0.3 }}
              className="flex justify-end"
            >
              <button className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-white text-sm font-medium hover:bg-white/20 transition-colors flex items-center gap-2 border border-white/20">
                مشاهده همه
                <ArrowRight className="w-3 h-3" />
              </button>
            </motion.div>

            {/* Bottom: Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="space-y-3"
            >
              {/* Persian Title */}
              <motion.h3
                className="text-3xl font-bold text-white"
                animate={{
                  y: isHovered ? -5 : 0,
                }}
                transition={{ duration: 0.4 }}
              >
                {cat.title}
              </motion.h3>

              {/* English Label */}
              <motion.span
                className="inline-block text-white/50 text-xs tracking-widest uppercase font-light"
                animate={{
                  opacity: isHovered ? 1 : 0.7,
                }}
                transition={{ duration: 0.4 }}
              >
                {cat.en}
              </motion.span>
            </motion.div>
          </div>

          {/* Subtle Border on Hover */}
          <motion.div
            className="absolute inset-0 border-2 border-white/0 rounded-[32px] pointer-events-none"
            animate={{
              borderColor: isHovered ? 'rgba(255,255,255,0.2)' : 'rgba(255,255,255,0)',
            }}
            transition={{ duration: 0.4 }}
          />
        </div>

        {/* 3D Shadow */}
        <motion.div
          className="absolute inset-0 rounded-[32px] bg-black/20 blur-2xl"
          style={{ transform: 'translateZ(-50px)' }}
          animate={{
            opacity: isHovered ? 0.4 : 0.2,
          }}
        />
      </motion.div>
    </motion.div>
  );
}

export  function ElegantCategories() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const headerY = useTransform(scrollYProgress, [0, 0.3], [100, 0]);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
  const headerScale = useTransform(scrollYProgress, [0, 0.2], [0.9, 1]);

  return (
    <section
      ref={sectionRef}
      style={colors as any}
      className="relative min-h-screen bg-[var(--color-tint-20)] overflow-hidden py-32"
      dir="rtl"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-40 right-40 w-[600px] h-[600px] rounded-full bg-[var(--color-base)]/5 blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          style={{ y: headerY, opacity: headerOpacity, scale: headerScale }}
          className="text-center mb-10 space-y-4"
        >
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl md:text-7xl font-bold text-[var(--color-shade-80)]"
          >
            کالکشن برتر
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-[var(--color-shade-60)] max-w-xl mx-auto"
          >
            بهترین انتخاب برای هر سلیقه
          </motion.p>
        </motion.div>

        {/* Categories Grid */}
        <div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          style={{ perspective: '2000px' }}
        >
          {categories.map((cat, index) => (
            <Card key={cat.id} cat={cat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}