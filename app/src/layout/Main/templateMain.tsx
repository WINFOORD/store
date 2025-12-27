'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import {
  Sparkles,
  ArrowLeftCircle,
  ShoppingBag,
  ChevronRight,
  ChevronLeft,
  Star,
  Menu,
  X,
  ArrowRight,
} from 'lucide-react';
import { colors } from '../../colors';
import CategoryCarousel from '../../ui/main/crosual';

type CarouselItem = {
  img: string;
  label: string;
  desc: string;
  tag: string;
};

const CAROUSEL_ITEMS: CarouselItem[] = [
  {
    img: 'https://images.unsplash.com/photo-1536620948473-195849b13237?q=80',
    label: 'پسته احمدآقایی ممتاز',
    desc: 'نمک ملایم، برشته‌شدن حرفه‌ای، مناسب پذیرایی لوکس.',
    tag: 'پرفروش',
  },
  {
    img: 'https://images.unsplash.com/photo-1596591606975-97ee5cef3a1e?q=80',
    label: 'کلکسیون بادام لوکس',
    desc: 'ترکیب بادام درختی و بادام هندی با طعم طبیعی.',
    tag: 'ویژه',
  },
  {
    img: 'https://images.unsplash.com/photo-1508061253366-f7da158b6d46?q=80',
    label: 'گردوی دوپر ممتاز',
    desc: 'مغز درشت، تازه، مناسب سالاد و صبحانه.',
    tag: 'جدید',
  },
  {
    img: 'https://images.unsplash.com/photo-1623428187969-5da2dcea5ebf?q=80',
    label: 'فندق برشته ارگانیک',
    desc: 'بدون افزودنی، روست متوسط، با عطر قوی.',
    tag: 'ارگانیک',
  },
  {
    img: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?q=80',
    label: 'انجیر خشک ممتاز',
    desc: 'شیرین، نرم، مناسب مصرف روزانه و دمنوش.',
    tag: 'سلامت',
  },
];

export function HomeMain() {
  const containerRef = useRef<HTMLDivElement>(null);
  const autoplayRef = useRef<number | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % CAROUSEL_ITEMS.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) =>
      prev === 0 ? CAROUSEL_ITEMS.length - 1 : prev - 1,
    );
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // ورود کلی
      gsap.set('.hero-shell', { opacity: 0, y: 30 });
      gsap.set('.hero-title-line', { opacity: 0, y: 40 });
      gsap.set('.hero-desc', { opacity: 0, y: 20 });
      gsap.set('.hero-btn', { opacity: 0, y: 20 });
      gsap.set('.carousel-card', { opacity: 0, y: 40, scale: 0.9 });
      gsap.set('.stat-item', { opacity: 0, y: 20 });
      gsap.set('.tag-chip', { opacity: 0, y: 10 });

      const tl = gsap.timeline({
        defaults: { ease: 'power3.out', duration: 1 },
      });

      tl.to('.hero-shell', { opacity: 1, y: 0 })
        .to('.hero-title-line', { opacity: 1, y: 0, stagger: 0.12 }, '-=0.7')
        .to('.hero-desc', { opacity: 1, y: 0 }, '-=0.6')
        .to('.hero-btn', { opacity: 1, y: 0, stagger: 0.1 }, '-=0.6')
        .to('.carousel-card', { opacity: 1, y: 0, scale: 1, stagger: 0.12 }, '-=0.7')
        .to('.stat-item', { opacity: 1, y: 0, stagger: 0.1 }, '-=0.7')
        .to('.tag-chip', { opacity: 1, y: 0, stagger: 0.06 }, '-=0.9');

 
      // انیمیشن بک‌گراند (Vidrush Style)
      gsap.to('.bg-blob', {
        x: (i) => (i % 2 === 0 ? 80 : -80),
        y: (i) => (i % 2 === 0 ? -60 : 60),
        scale: 1.25,
        repeat: -1,
        yoyo: true,
        duration: 9,
        ease: 'sine.inOut',
        stagger: 0.6,
      });

      gsap.to('.bg-wave', {
        x: 40,
        repeat: -1,
        yoyo: true,
        duration: 14,
        ease: 'sine.inOut',
      });

      
    }, containerRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (autoplayRef.current) {
      window.clearInterval(autoplayRef.current);
    }
    autoplayRef.current = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % CAROUSEL_ITEMS.length);
    }, 5000);

    return () => {
      if (autoplayRef.current) {
        window.clearInterval(autoplayRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={containerRef}
      style={colors as any}
      className="relative h-screen w-full overflow-hidden bg-[var(--color-shade-80)] flex flex-col"
    >
      {/* بک‌گراند متحرک */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tl from-[var(--color-tint-80)] via-[var(--color-tint-80)] to-[var(--color-tint-20)]" />

      </div>



      {/* بدنه اصلی */}
      <main className="relative z-10 h-screen flex items-center">
        <div className="w-full mx-auto px-6 md:px-10 ">
          <div className="hero-shell h-[70vh] mx-32 rounded-[32px]  bg-white/60 border border-white/70 shadow-[0_24px_70px_rgba(0,0,0,0.10)] backdrop-blur-2xl px-6 md:px-10 py-8 md:py-10 flex flex-col lg:flex-row items-stretch gap-10 lg:gap-14">
            {/* ستون متن */}
            <section className="flex-1 flex flex-col justify-between gap-6">
              <div className="flex flex-col gap-6 text-center lg:text-right items-center lg:items-start">
                {/* بج بالا */}
                <div className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-1.5 border border-[var(--color-tint-40)]/80 backdrop-blur-md">
                  <Sparkles className="w-4 h-4 text-[var(--color-shade-40)]" />
                  <span className="text-[var(--color-shade-60)] text-xs tracking-[0.3em] font-semibold">
                    PREM IUM • ۱۴۰۳
                  </span>
                </div>

                {/* تیتر */}
                <div className="space-y-8">
                  <p className="hero-title-line text-[11px] tracking-[0.35em] text-[var(--color-shade-40)]">
                    انتخابی برای سلیقه‌های خاص
                  </p>
                  <h1 className="space-y-6">
                    <span className="hero-title-line block text-4xl md:text-5xl font-extrabold text-[var(--color-shade-80)] tracking-tight">
                      آیینی مدرن
                    </span>
                    <span className="hero-title-line block text-3xl md:text-4xl font-light text-[var(--color-shade-40)]">
                      برای طعم‌های اصیل طبیعت
                    </span>
                  </h1>
                </div>

                {/* توضیح */}
                <p className="hero-desc text-[var(--color-shade-60)] text-sm md:text-base leading-relaxed max-w-md">
                  از پسته احمدآقایی و فندق برشته تا انجیر خشک ممتاز؛ هر بسته،
                  ترکیبی است از انتخاب دقیق، رست کنترل‌شده و بسته‌بندی مینیمال برای
                  تجربه‌ای لوکس در هر سفارش آنلاین.
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
                  <button className="hero-btn inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[var(--color-shade-60)] text-[var(--color-tint-80)] text-sm font-semibold shadow-[0_10px_26px_rgba(0,0,0,0.1)] hover:scale-[1.03] active:scale-[0.97] transition-transform">
                    <ArrowRight className="w-5 h-5" />
                    شروع خرید
                  </button>

                  <button className="hero-btn px-8 py-4 rounded-full border border-[var(--color-shade-40)]/30 text-[var(--color-shade-60)] text-sm font-medium bg-white/70 hover:bg-white transition-colors">
                    مشاهده پکیج‌های ویژه ۱۴۰۳
                  </button>
                </div>
              </div>

              {/* استت‌ها */}
              <section className="mt-4 grid grid-cols-3 gap-4 text-center lg:text-right">
                <StatItem label="رضایت مشتری" value="۹۸٪" />
                <StatItem label="مدت ارسال" value="۱–۳ روز" />
                <StatItem label="پکیج فعال" value="۲۴+" />
              </section>
            </section>

            {/* ستون کروژال */}
            <section
              className="flex-1 flex flex-col gap-5"
              style={{ perspective: '1600px' }}
            >
              <div className="flex items-center justify-between">
                <div className="flex flex-col gap-1">
                  <p className="text-[11px] text-[var(--color-shade-60)] tracking-[0.2em]">
                    PREMIUM SELECTION
                  </p>
                  <p className="text-[var(--color-shade-40)] text-xs mx-auto font-semibold">
                    مجموعه انتخاب‌شده برای شما
                  </p>
                </div>

               
              </div>

         <CategoryCarousel />

             
            </section>
          </div>
        </div>
      </main>

     
    </section>
  );
}

// کامپوننت تگ کوچک
function TagChip({ label }: { label: string }) {
  return (
    <span className="tag-chip inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[var(--color-tint-60)]/80 border border-[var(--color-tint-40)]/80 text-[11px] text-[var(--color-shade-60)]">
      <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-base)]" />
      {label}
    </span>
  );
}

// کامپوننت استت
function StatItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="stat-item flex flex-col gap-1">
      <span className="text-[var(--color-shade-40)] text-[11px]">
        {label}
      </span>
      <span className="text-[var(--color-shade-80)] text-base font-semibold">
        {value}
      </span>
    </div>
  );
}


