'use client';

import { motion, useSpring, useMotionValue } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Coffee, Cookie, Apple, Milk, Candy, IceCream } from 'lucide-react';
import OptimizedImage from '../../ui/optimizeImage';
import {colors} from '../../colors';
gsap.registerPlugin(ScrollTrigger);
 
const categories = [
  { id: 1, title: 'آجیل و مغزیجات', en: 'Artisan Nuts', icon: Coffee, img: 'https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=800&q=80' },
  { id: 2, title: 'میوه خشک', en: 'Dried Harmony', icon: Apple, img: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=800&q=80' },
  { id: 3, title: 'شکلات دست‌ساز', en: 'Noble Cocoa', icon: Cookie, img: 'https://images.unsplash.com/photo-1481391319762-47dff72954d9?w=800&q=80' },
  { id: 4, title: 'لبنیات', en: 'Fresh Dairy', icon: Milk, img: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?w=800&q=80' },
  { id: 5, title: 'شیرینی', en: 'Delicate Sweets', icon: Candy, img: 'https://images.unsplash.com/photo-1582058091505-f87a2e55a40f?w=800&q=80' },
  { id: 6, title: 'بستنی', en: 'Creamy Bliss', icon: IceCream, img: 'https://images.unsplash.com/photo-1501443762994-82bd5dace89a?w=800&q=80' },
];

function Card({ cat, index }: { cat: typeof categories[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseX = useSpring(x, { stiffness: 100, damping: 30 });
  const mouseY = useSpring(y, { stiffness: 100, damping: 30 });

  useEffect(() => {
    if (!cardRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(cardRef.current, {
        scrollTrigger: {
          trigger: cardRef.current,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
        y: 100,
        opacity: 0,
        rotationX: 30,
        scale: 0.9,
        duration: 1.2,
        delay: index * 0.15,
        ease: 'power3.out',
      });

      if (imageRef.current) {
        gsap.from(imageRef.current, {
          scrollTrigger: {
            trigger: cardRef.current,
            start: 'top 80%',
          },
          scale: 1.8,
          duration: 1.8,
          delay: index * 0.15 + 0.3,
          ease: 'power2.out',
        });
      }
    }, cardRef);

    return () => ctx.revert();
  }, [index]);

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

  const Icon = cat.icon;

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={resetMouse}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.4 }}
      className="relative group cursor-pointer aspect-12/10 overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-shadow duration-700"
      style={{ perspective: '2000px' }}
    >
     <motion.div
        ref={imageRef}
        style={{ x: mouseX, y: mouseY }}
        className="absolute inset-0 scale-110"
      >
        <OptimizedImage
        fill
          src={cat.img}
          alt={cat.title}
          
          className="w-full h-full object-cover "
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent" />
      </motion.div>

      <motion.div
        className="absolute top-6 right-6 w-14 h-14  backdrop-blur-md rounded-2xl flex items-center justify-center shadow-lg"
        whileHover={{ rotate: 360, scale: 1.15 }}
        transition={{ duration: 0.6 }}
      >
        <Icon className="w-7 h-7 text-white" strokeWidth={2} />
      </motion.div>

      <div className="absolute inset-0 p-8 flex flex-col justify-end items-center text-center text-white">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 0.8, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.15 + 0.4 }}
          className="text-xs tracking-[0.35em] uppercase mb-3 font-light"
        >
          {cat.en}
        </motion.span>

        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.15 + 0.5 }}
          className="text-3xl md:text-4xl font-bold tracking-wide mb-6 group-hover:tracking-wider transition-all duration-700"
        >
          {cat.title}
        </motion.h3>
        <div className="w-px h-0 bg-white group-hover:h-18 transition-all duration-700 ease-out " />

        <motion.div
          className="w-px bg-white/60"
          initial={{ height: 0 }}
          whileHover={{ height: 64 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        />
      </div>

      <motion.div
        className="absolute inset-4 border border-white/20 rounded-3xl pointer-events-none"
        whileHover={{ borderColor: 'rgba(255,255,255,0.5)' }}
        transition={{ duration: 0.5 }}
      />

      <motion.div
        className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 pointer-events-none"
        initial={{ x: '-100%' }}
        whileHover={{ x: '100%' }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
      />
    </motion.div>
  );
}

export function ElegantCategories() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // انیمیشن ساده و ایمن عنوان بدون دستکاری DOM (جلوگیری از بهم‌ریختگی فارسی)
      gsap.from('.section-title', {
        scrollTrigger: {
          trigger: '.section-title',
          start: 'top 85%',
        },
        y: 80,
        opacity: 0,
        duration: 1.4,
        ease: 'power4.out',
      });

      gsap.from('.section-subtitle', {
        scrollTrigger: {
          trigger: '.section-title',
          start: 'top 85%',
        },
        y: 40,
        opacity: 0,
        duration: 1,
        delay: 0.4,
        ease: 'power3.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
    style={colors as any}
    ref={sectionRef}
    className="relative  bg-transparent py-20 overflow-hidden  "
    dir="rtl"
    >

 <div className=' -mt-20'>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#F9F4EE" fill-opacity="1" d="M0,96L80,101.3C160,107,320,117,480,122.7C640,128,800,128,960,122.7C1120,117,1280,107,1360,101.3L1440,96L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg>
          </div>
        <div className="text-center   -mt-50">
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-shade-80)] via-[var(--color-shade-20)]/50 to-[var(--color-shade-80)/80] pointer-events-none" />

          <h2 className="section-title text-7xl md:text-8xl bac font-black text-[var(--color-tint-80)] tracking-tight">
            کالکشن برتر
          </h2>
          <motion.p
            className="section-subtitle my-6 text-xl text-[var(--color-tint-80)] max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            بهترین انتخاب برای هر سلیقه
          </motion.p>
        </div>
         <div className='rotate-180 -mt-60'>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#F9F4EE" fill-opacity="1" d="M0,96L80,101.3C160,107,320,117,480,122.7C640,128,800,128,960,122.7C1120,117,1280,107,1360,101.3L1440,96L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg>
          </div>
      <div className="mx-auto px-6 relative z-10 bg-gradient-to-t from-[var(--color-tint-80)] via-[var(--color-tint-60)] to-[var(--color-tint-80)] h-[110vh]">

        <div className="grid grid-cols-1 max-w-7xl mx-auto md:grid-cols-2 lg:grid-cols-3 gap-10 scale-90 ">
          {categories.map((cat, index) => (
            <Card key={cat.id} cat={cat} index={index} />
          ))}
        </div>

        <div className="text-center my-20">
          <motion.button
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.96 }}
            className="px-12 py-5 bg-[#b59e88] text-white rounded-full font-bold text-lg shadow-2xl hover:shadow-black/30 transition-all duration-300 inline-flex items-center gap-3"
          >
            مشاهده همه محصولات
            <motion.span
              className="inline-block"
              whileHover={{ x: 6 }}
              transition={{ duration: 0.3 }}
            >
              →
            </motion.span>
          </motion.button>
        </div>
      </div>
    </section>
  );
}

export default ElegantCategories;