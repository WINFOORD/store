'use client';

import { useEffect, useRef } from 'react';
import { ArrowRight, Nut, Sparkles } from 'lucide-react';
import { gsap } from 'gsap';
import { MagneticButton } from '../../ui/MagneticButton';

export function HomeMain() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // حالت اولیه کارت‌ها
      gsap.set('.floating-card', { opacity: 0, y: 40, filter: 'blur(10px)' });

      // تایم‌لاین ورود لاکچری
      const tl = gsap.timeline({
        defaults: { ease: 'power3.out', duration: 1.2 },
      });

      tl.from('.hero-badge', {
        y: -20,
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out',
        filter: 'blur(4px)',
      })
     
        .from(
          '.hero-title-line',
          {
            y: 80,
            opacity: 0,
            duration: 1.4,
            stagger: 0.18,
            ease: 'expo.out',
            filter: 'blur(6px)',
          },
          '-=0.5'
        )
        .from(
          '.hero-desc',
          {
            y: 40,
            opacity: 0,
            duration: 1,
            ease: 'power2.out',
            filter: 'blur(4px)',
          },
          '-=0.8'
        )
        .from(
          '.hero-btn',
          {
            opacity: 0,
            scale: 0.85,
            duration: 0.9,
            stagger: 0.15,
            ease: 'back.out(1.8)',
          },
          '-=0.6'
        )
        .to(
          '.floating-card',
          {
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            duration: 1,
            stagger: 0.15,
            ease: 'expo.out',
          },
          '-=1.2'
        );

      // پارالاکس 3D نرم و طبیعی
      const handleMouseMove = (e: MouseEvent) => {
        const x = (e.clientX / window.innerWidth - 0.5) * 2;
        const y = (e.clientY / window.innerHeight - 0.5) * 2;

        const cards = document.querySelectorAll('.floating-card');

        cards.forEach((card, i) => {
          const depth = (i + 1) * 0.6;

          gsap.to(card, {
            rotationY: x * (8 * depth),
            rotationX: -y * (6 * depth),
            x: x * (10 * depth),
            y: y * (10 * depth),
            duration: 0,
            ease: 'sine',
          });
        });
      };

      window.addEventListener('mousemove', handleMouseMove);

      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
      };
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const cards = [
    {
      img: 'https://images.unsplash.com/photo-1536620948473-195849b13237?auto=format&fit=crop&w=400&q=80',
      label: 'پسته دامغان',
    },
    {
      img: 'https://images.unsplash.com/photo-1596591606975-97ee5cef3a1e?auto=format&fit=crop&w=400&q=80',
      label: 'بادام کاغذی',
    },
    {
      img: 'https://images.unsplash.com/photo-1508061253366-f7da158b6d46?auto=format&fit=crop&w=400&q=80',
      label: 'مغز گردو',
    },
    {
      img: 'https://images.unsplash.com/photo-1623428187969-5da2dcea5ebf?auto=format&fit=crop&w=400&q=80',
      label: 'فندق خندان',
    },
    {
      img: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=400&q=80',
      label: 'انجیر خشک',
    },
  ];

  const getVStyle = (index: number) => {
    switch (index) {
      case 0:
      case 4:
        return 'lg:-mt-10';
      case 1:
      case 3:
        return 'lg:-mt-5';
      case 2:
        return 'mt-0';
      default:
        return '';
    }
  };

  return (
    <section
      className="relative h-screen overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/images/bg-3.webp')",
      }}
    >
      <div
        ref={containerRef}
        className="relative min-h-screen flex flex-col"
      >
        {/* Overlay گرادیانت تیره لوکس */}
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              'radial-gradient(circle at top, rgba(255,255,255,0.06), transparent 55%), linear-gradient(to bottom, rgba(0,0,0,0.85), rgba(0,0,0,0.3), rgba(0,0,0,0))',
          }}
        />

        {/* Glow ظریف اطراف مرکز */}
        <div className="pointer-events-none absolute inset-0 z-0 opacity-60 mix-blend-screen">
          <div className="absolute inset-40 bg-[radial-gradient(circle_at_center,rgba(248,191,88,0.22),transparent_65%)]" />
        </div>

        {/* Content */}
        <div className="relative z-10 mt-40 flex flex-col">
          {/* Hero */}
          <div className="flex flex-col items-center justify-center text-center max-w-6xl mx-auto px-4">
            {/* Badge */}
            <div className="hero-badge inline-flex items-center gap-2 px-5 py-2 rounded-full border border-orange-400/40 bg-gradient-to-r from-orange-500/15 via-orange-400/10 to-orange-300/15 backdrop-blur-xl text-orange-100 text-sm font-medium mb-8 shadow-[0_0_25px_rgba(248,191,88,0.35)]">
              <Sparkles className="w-4 h-4 text-orange-300" />
              <span>تکنولوژی در خدمت اصالت</span>
            </div>

            {/* Title */}
            <h1 className="font-black text-white tracking-tighter leading-[1.1] mb-6">
              <span
                className="hero-title-line block text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black bg-clip-text text-transparent bg-gradient-to-r from-orange-200 via-orange-300 to-orange-200 leading-tight drop-shadow-[0_10px_35px_rgba(0,0,0,0.8)]"
              >
                کیفیت برتر،خرید آسان
              </span>
           
            </h1>

            {/* Description */}
            <p className="hero-desc text-stone-200/75 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
              مجموعه‌ای از بهترین آجیل‌های ایرانی، دست‌چین‌شده و ممتاز؛
              مخصوص مشتریانی که فقط «بهترین» را انتخاب می‌کنند.
            </p>

            {/* Buttons */}
            <div className="flex  sm:flex-row items-center justify-center gap-5">
              <button className="hero-btn text-stone-100 px-6 py-3.5 rounded-xl font-medium hover:text-orange-200 transition-colors flex items-center gap-2 border border-white/10 hover:border-orange-300/40 bg-white/5 hover:bg-white/10 backdrop-blur-md group">
                مشاهده کاتالوگ ویژه
                <Nut className="w-5 h-5 transition-transform group-hover:rotate-12" />
              </button>
            </div>
          </div>

          {/* Floating Cards */}
          <div
            className="relative w-full lg:pb-20 mt-20"
            style={{ perspective: '3000px' }}
          >
            <div className="max-w-7xl mx-auto px-4">
              <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-5">
                {cards.map((card, i) => (
                  <div
                    key={i}
                    className={`floating-card group relative aspect-[3/3.5] rounded-3xl overflow-hidden 
                    shadow-[0_18px_40px_rgba(0,0,0,0.6)] hover:shadow-[0_25px_60px_rgba(248,191,88,0.45)]
                    transition-all duration-700 cursor-pointer backdrop-blur-xl border border-white/6
                    ${getVStyle(i)}`}
                    style={{
                      transformStyle: 'preserve-3d',
                      backfaceVisibility: 'hidden',
                      willChange: 'transform',
                    }}
                  >
                    <img
                      src={card.img}
                      alt={card.label}
                      className="w-full h-full object-cover grayscale-[0.25] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                    />

                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/45 to-transparent opacity-85 group-hover:opacity-95 transition-all duration-500" />

                    {/* Label */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 text-center transform translate-y-1 group-hover:-translate-y-1.5 transition-transform duration-400">
                      <p className="text-sm sm:text-base font-semibold text-stone-50 tracking-tight">
                        {card.label}
                      </p>
                      <p className="mt-1 text-[11px] sm:text-xs text-stone-300/70">
                        انتخابی برای میزهای پذیرایی خاص و مهمان‌های ویژه
                      </p>
                    </div>

                    {/* Shine effect */}
                    <div
                      className="pointer-events-none absolute inset-0  group-hover:opacity-100 transition-opacity duration-700"
                      style={{
                        background:
                          'linear-gradient(120deg, transparent 0%, rgba(255,255,255,0.25) 50%, transparent 100%)',
                        transform: 'translateX(-100%)',
                        animation: 'shine 1.8s ease-out forwards',
                      }}
                    />

                    {/* رفلکت بالا */}
                    <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-white/10 via-white/0 to-transparent opacity-60 mix-blend-screen" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* keyframes برای افکت shine */}
        <style>{`
          @keyframes shine {
            0% { transform: translateX(-120%); }
            100% { transform: translateX(220%); }
          }
        `}</style>
      </div>
    </section>
  );
}
