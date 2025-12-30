'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { Coffee, Cookie, Apple, Milk, Candy, IceCream, ArrowRight } from 'lucide-react';
import { colors } from '../../colors';

const categories = [
  { 
    id: 1, 
    title: 'آجیل', 
    en: 'Artisan Nuts', 
    icon: Coffee, 
    img: 'https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=800&q=80',
  },
  { 
    id: 2, 
    title: 'میوه خشک', 
    en: 'Dried Harmony', 
    icon: Apple, 
    img: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=800&q=80',
  },
  { 
    id: 3, 
    title: 'خشکبار', 
    en: 'Noble Cocoa', 
    icon: Cookie, 
    img: 'https://images.unsplash.com/photo-1481391319762-47dff72954d9?w=800&q=80',
  },
  { 
    id: 4, 
    title: 'نوشیدنی', 
    en: 'Fresh Dairy', 
    icon: Milk, 
    img: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?w=800&q=80',
  },
  { 
    id: 5, 
    title: 'شکلات', 
    en: 'Delicate Sweets', 
    icon: Candy, 
    img: 'https://images.unsplash.com/photo-1582058091505-f87a2e55a40f?w=800&q=80',
  },
  { 
    id: 6, 
    title: 'سازمانی', 
    en: 'Creamy Bliss', 
    icon: IceCream, 
    img: 'https://images.unsplash.com/photo-1501443762994-82bd5dace89a?w=800&q=80',
  },
  { 
    id: 7, 
    title: 'کادویی', 
    en: 'Gift Sets', 
    icon: Candy, 
    img: 'https://images.unsplash.com/photo-1582058091505-f87a2e55a40f?w=800&q=80',
  },
  { 
    id: 8, 
    title: 'شیرینی', 
    en: 'Pastries', 
    icon: IceCream, 
    img: 'https://images.unsplash.com/photo-1501443762994-82bd5dace89a?w=800&q=80',
  },
];

function CategoryCard({ cat, index }: { cat: typeof categories[0]; index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = cat.icon;

  return (
    <div
      className="category-card relative cursor-pointer group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={cat.img}
            alt={cat.title}
            className="w-full h-full object-cover transition-transform duration-700"
            style={{
              transform: isHovered ? 'scale(1.1)' : 'scale(1)',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/60" />
        </div>

        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-between p-4">
          {/* Top: Icon */}
          <div className="flex justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
              <Icon className="w-4 h-4 text-white" />
            </div>
          </div>

          {/* Bottom: Title */}
          <div className="space-y-1">
            <h3 
              className="text-xl font-bold text-white transition-transform duration-400"
              style={{
                transform: isHovered ? 'translateY(-5px)' : 'translateY(0)',
              }}
            >
              {cat.title}
            </h3>
            <span 
              className="inline-block text-white/60 text-xs tracking-wider uppercase font-light transition-opacity duration-400"
              style={{
                opacity: isHovered ? 1 : 0.7,
              }}
            >
              {cat.en}
            </span>
          </div>
        </div>

        {/* Border on Hover */}
        <div
          className="absolute inset-0 border-2 rounded-2xl pointer-events-none transition-colors duration-300"
          style={{
            borderColor: isHovered ? 'rgba(255,255,255,0.3)' : 'transparent',
          }}
        />
      </div>
    </div>
  );
}

export function ElegantCategories() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set('.category-card', { opacity: 0, y: 30 });

      gsap.to('.category-card', {
        opacity: 1,
        y: 0,
        stagger: 0.08,
        duration: 0.8,
        ease: 'power3.out',
        delay: 0.3,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      style={colors as any}
      className="relative bg-gradient-to-br from-[var(--color-tint-10)] via-white to-[var(--color-tint-60)]"
      dir="rtl"
    >
      {/* Categories Section - 40vh */}
      <div className="px-6 md:px-10 pb-8 pt-4 min-h-[40vh]">
        <div className="max-w-7xl mx-auto">
          {/* Optional Header */}
          <div className="text-center mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-shade-80)] mb-2">
              دسته‌بندی محصولات
            </h2>
            <p className="text-sm text-[var(--color-shade-60)]">
              از آجیل و میوه خشک تا شکلات و نوشیدنی
            </p>
          </div>

          {/* Categories Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4">
            {categories.map((cat, index) => (
              <CategoryCard key={cat.id} cat={cat} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}