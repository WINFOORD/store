'use client';

import { useEffect, useRef } from 'react';
import { Nut, Sparkles, ChevronLeft } from 'lucide-react';
import { gsap } from 'gsap';

// پالت رنگی هماهنگ با بقیه اجزا
const colors = {
  '--color-base': '#e2c6aa',
  '--color-shade-80': '#2d2822',
  '--color-tint-80': '#f9f4ee',
};

export function HomeMain() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set('.floating-card', { opacity: 0, y: 60, rotateX: 15 });

      const tl = gsap.timeline({
        defaults: { ease: 'expo.out', duration: 1.2 },
      });

      tl.from('.hero-badge', { y: -30, opacity: 0, filter: 'blur(8px)' })
        .from('.hero-title-line', {
          y: 100,
          opacity: 0,
          stagger: 0.2,
          filter: 'blur(12px)',
        }, '-=0.8')
        .from('.hero-desc', { y: 30, opacity: 0, filter: 'blur(5px)' }, '-=1')
        .from('.hero-btn', { scale: 0.9, opacity: 0, stagger: 0.2 }, '-=0.7')
        .to('.floating-card', {
          opacity: 1,
          y: 0,
          rotateX: 0,
          stagger: 0.1,
          duration: 1.5,
        }, '-=1.2');

      // پارالاکس هوشمند
      const handleMouseMove = (e: MouseEvent) => {
        const x = (e.clientX / window.innerWidth - 0.5);
        const y = (e.clientY / window.innerHeight - 0.5);
        
        gsap.to('.floating-card', {
          x: i => x * (i + 1) * 15,
          y: i => y * (i + 1) * 15,
          rotateY: x * 10,
          rotateX: -y * 10,
          duration: 1,
          ease: 'power2.out',
        });
      };

      window.addEventListener('mousemove', handleMouseMove);
      return () => window.removeEventListener('mousemove', handleMouseMove);
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const cards = [
    { img: 'https://images.unsplash.com/photo-1536620948473-195849b13237?q=80', label: 'پسته ممتاز' },
    { img: 'https://images.unsplash.com/photo-1596591606975-97ee5cef3a1e?q=80', label: 'بادام لوکس' },
    { img: 'https://images.unsplash.com/photo-1508061253366-f7da158b6d46?q=80', label: 'گردو دوپر' },
    { img: 'https://images.unsplash.com/photo-1623428187969-5da2dcea5ebf?q=80', label: 'فندق بوداده' },
    { img: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?q=80', label: 'انجیر مرطوب' },
  ];

  return (
<section 
      ref={containerRef}
      className="relative h-screen w-full bg-[var(--color-shade-80)] overflow-hidden flex flex-col items-center"
      style={colors as any}
    >
 <div 
        className="absolute inset-0 z-0 opacity-40 scale-105"
        style={{
          backgroundImage: "url('/images/bg-3.webp')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Content Container */}
      <div className="relative z-20 container mx-auto px-6 pt-20 md:pt-36">
        <div className="flex flex-col items-center text-center">
          
          {/* Badge */}
          <div className="hero-badge flex items-center gap-3 px-6 py-2 rounded-full border border-[var(--color-base)]/30 bg-[var(--color-base)]/5 backdrop-blur-md mb-8">
            <Sparkles className="w-4 h-4 text-[var(--color-base)]" />
            <span className="text-[var(--color-base)] text-xs font-bold tracking-[0.3em] uppercase">Premium Selection 2024</span>
          </div>

          {/* Main Title */}
          <h1 className="mb-8 select-none">
            <span className="hero-title-line block text-5xl md:text-8xl font-black text-[var(--color-tint-80)] tracking-tighter leading-none">
              طعم اصیل <span className="font-serif italic text-[var(--color-base)]">طبیعت</span>
            </span>
            <span className="hero-title-line block text-4xl md:text-7xl font-light text-[var(--color-base)] mt-2">
               در بسته‌بندی‌های مدرن
            </span>
          </h1>

          {/* Description */}
          <p className="hero-desc max-w-2xl text-[var(--color-tint-80)]/60 text-lg md:text-xl font-light leading-relaxed mb-12">
            ما در <span className="text-[var(--color-base)] font-bold">آجیل‌سرای بابل</span>، هنر انتخاب بهترین مغزها را با تکنولوژی روز ترکیب کرده‌ایم تا تجربه‌ای متفاوت از خرید آنلاین را برای شما رقم بزنیم.
          </p>

          {/* Actions */}
          <div className="flex flex-wrap items-center justify-center gap-6 mb-24">
            <button className="hero-btn group relative px-10 py-5 bg-[var(--color-base)] text-[var(--color-shade-80)] rounded-full font-black overflow-hidden transition-transform hover:scale-105 active:scale-95">
              <span className="relative z-10 flex items-center gap-2">
                شروع خرید آنلاین <ChevronLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
              </span>
            </button>
            <button className="hero-btn flex items-center gap-3 px-10 py-5 border border-[var(--color-base)]/20 text-[var(--color-tint-80)] rounded-full font-bold hover:bg-white/5 transition-colors">
              مشاهده کاتالوگ <Nut className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Floating Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-8 max-w-7xl mx-auto" style={{ perspective: '1000px' }}>
          {cards.map((card, i) => (
            <div
              key={i}
              className={`floating-card group relative aspect-[4/5] rounded-[32px] overflow-hidden border border-white/10 shadow-2xl transition-all duration-500 ${
                i % 2 !== 0 ? 'mt-12' : ''
              }`}
            >
              <img 
                src={card.img} 
                alt={card.label}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale-[0.3] group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-shade-80)] via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-6 left-0 right-0 text-center">
                <p className="text-[var(--color-base)] font-serif italic text-lg">{card.label}</p>
                <div className="w-8 h-[1px] bg-[var(--color-base)]/50 mx-auto mt-2 transition-all duration-500 group-hover:w-16" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative Bottom Blur */}
    </section>
  );
}