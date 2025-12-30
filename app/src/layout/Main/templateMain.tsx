'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { Sparkles, ArrowRight, Coffee, Cookie, Apple, Milk, Candy, IceCream } from 'lucide-react';
import CategoryCarousel from '../../ui/main/crosual';
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
  }
];

function CategoryCard({ cat, index }: { cat: typeof categories[0]; index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = cat.icon;

  return (
    <div
      className="category-card relative cursor-pointer rounded-3xl group transition-all duration-500"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      data-hovered={isHovered}
    >
      <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
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

        <div className="absolute inset-0 flex flex-col justify-between p-4">
          <div className="flex justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
              <Icon className="w-4 h-4 text-white" />
            </div>
          </div>

          <div className="space-y-1">
            <h3 className="text-xl font-bold text-white">{cat.title}</h3>
            <span className="text-white/60 text-xs tracking-wider uppercase font-light">
              {cat.en}
            </span>
          </div>
        </div>

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


export  function HomeMain() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set('.hero-shell', { opacity: 0, y: 30 });
      gsap.set('.hero-title-line', { opacity: 0, y: 40 });
      gsap.set('.hero-desc', { opacity: 0, y: 20 });
      gsap.set('.hero-btn', { opacity: 0, y: 20 });
      gsap.set('.stat-item', { opacity: 0, y: 20 });
      gsap.set('.tag-chip', { opacity: 0, y: 10 });
      gsap.set('.category-card', { opacity: 0, y: 30 });

      const tl = gsap.timeline({
        defaults: { ease: 'power3.out', duration: 1 },
      });

      tl.to('.hero-shell', { opacity: 1, y: 0 })
        .to('.hero-title-line', { opacity: 1, y: 0, stagger: 0.12 }, '-=0.7')
        .to('.hero-desc', { opacity: 1, y: 0 }, '-=0.6')
        .to('.hero-btn', { opacity: 1, y: 0, stagger: 0.1 }, '-=0.6')
        .to('.stat-item', { opacity: 1, y: 0, stagger: 0.1 }, '-=0.7')
        .to('.tag-chip', { opacity: 1, y: 0, stagger: 0.06 }, '-=0.9')
        .to('.category-card', { opacity: 1, y: 0, stagger: 0.08 }, '-=0.6');
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      style={colors as any}
      className="relative h-screen w-full overflow-auto bg-gradient-to-b from-[var(--color-tint-10)] via-white to-[var(--color-tint-40)]"
      dir="rtl"
    >
      <div className="relative z-10 h-full flex flex-col">
        {/* Hero Section - 55% */}
         <main className="relative z-10 h-[67vh] flex items-end">
        <div className="w-full mx-auto px-6 md:px-10">
          <div className="hero-shell h-[55vh] max-sm:mx-0 mx-32 rounded-[32px]  bg-white/90 border border-white/70 shadow-[0_24px_70px_rgba(0,0,0,0.10)] backdrop-blur-2xl px-6 md:px-10 md:py-8 flex flex-col lg:flex-row items-stretch gap-10 lg:gap-16">
            {/* ستون متن */}
            <section className="flex-1  flex-col justify-between gap-6">
              <div className="flex flex-col gap-6 text-center lg:text-right items-center lg:items-start">
                {/* بج بالا */}
                <div className="inline-flex items-center gap-2 rounded-full bg-[var(--color-tint-20)]/80 px-4 py-1.5 border border-[var(--color-tint-40)]/80 backdrop-blur-md">
                  <Sparkles className="w-4 h-4 text-[var(--color-base)]" />
                  <span className="text-[var(--color-shade-60)] text-xs tracking-[0.3em] font-semibold">
                    PREMIUM • ۱۴۰۳
                  </span>
                </div>

                {/* تیتر */}
                <div className="space-y-8">
                  <p className="hero-title-line text-[11px] tracking-[0.35em] text-[var(--color-shade-40)]">
                    انتخابی برای سلیقه‌های خاص
                  </p>
                  <h1 className="space-y-6">
                   
                    <span className="hero-title-line block text-3xl md:text-4xl  text-[var(--color-shade-60)]">
                      برای طعم‌های اصیل طبیعت
                    </span>
                  </h1>
                </div>

                {/* توضیح */}
                <p className="hero-desc text-[var(--color-shade-60)] text-sm md:text-base leading-relaxed max-w-md">
                  مجموعه‌ای از بهترین خشکبارهای ایران، با کیفیت ممتاز و بسته‌بندی لوکس، انتخابی ویژه برای شما که به دنبال تجربه‌ای متفاوت هستید.
                </p>

                {/* تگ‌ها */}
                <div className="flex flex-wrap gap-2 justify-center lg:justify-start mt-2">
                  <TagChip label="ارسال سریع" />
                  <TagChip label="بسته‌بندی هدیه" />
                  <TagChip label="تحویل درب منزل" />
                  <TagChip label="انتخاب ارگانیک" />
                </div>

                {/* دکمه‌ها */}
                <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-3">
                  <button className="hero-btn inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[var(--color-base)] hover:bg-[var(--color-shade-20)] text-white text-sm font-semibold shadow-lg hover:shadow-xl active:scale-[0.97] transition-all">
                    <ArrowRight className="w-5 h-5" />
                    شروع خرید
                  </button>

                  <button className="hero-btn max-sm:hidden px-8 py-4 rounded-full text-[var(--color-shade-60)] text-sm font-medium bg-white/90 hover:bg-white border border-[var(--color-tint-40)] transition-colors">
                    مشاهده پکیج‌های ویژه ۱۴۰۳
                  </button>
                </div>
              </div>

              {/* استت‌ها */}
              <section className="mt-8 grid grid-cols-3 gap-4 text-center lg:text-right">
                <StatItem label="رضایت مشتری" value="۹۸٪" />
                <StatItem label="مدت ارسال" value="۱–۳ روز" />
                <StatItem label="پکیج فعال" value="۲۴+" />
              </section>
            </section>

            {/* ستون کروژال */}
            <section
              className="flex-1 flex flex-col gap-5 max-sm:hidden"
              style={{ perspective: '1600px' }}
            >
              
              <CategoryCarousel />
            </section>
          </div>
        </div>
      </main>

        {/* Categories Section - 40% */}
        <div className="flex-1  md:px-10 pb-8 overflow-y-auto">
          <div className="max-w-[85%] mx-auto">
           <div className="categories-grid mt-7 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
  {categories.map((cat, index) => (
    <CategoryCard key={cat.id} cat={cat} index={index} />
  ))}
</div>

          </div>
        </div>
      </div>
    </section>
  );
}

function TagChip({ label }: { label: string }) {
  return (
    <span className="tag-chip inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[var(--color-tint-20)]/90 border border-[var(--color-tint-40)]/80 text-[11px] text-[var(--color-shade-60)]">
      <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-base)]" />
      {label}
    </span>
  );
}

function StatItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="stat-item flex flex-col gap-1">
      <span className="text-[var(--color-shade-40)] text-[11px]">{label}</span>
      <span className="text-[var(--color-shade-80)] text-base font-semibold">{value}</span>
    </div>
  );
}