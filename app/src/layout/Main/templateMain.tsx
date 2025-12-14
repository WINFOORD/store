'use client';
import { useEffect, useMemo, useRef } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Leaf, ShieldCheck, Truck } from 'lucide-react';
import { MagneticButton } from '../../ui/MagneticButton';
import CategoryCarousel from '../../ui/main/crosual';

gsap.registerPlugin(ScrollTrigger);

export function HomeMain() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-kicker', { y: 30, opacity: 0, duration: 0.8, ease: 'power3.out', delay: 0.3 });
      gsap.from('.hero-title-1', { y: 80, opacity: 0, duration: 1.2, ease: 'power4.out', delay: 0.4 });
      gsap.from('.hero-title-2', { y: 80, opacity: 0, duration: 1.2, ease: 'power4.out', delay: 0.5 });
      gsap.from('.hero-sub', { y: 40, opacity: 0, duration: 0.9, ease: 'power3.out', delay: 0.7 });
      gsap.from('.hero-cta', { scale: 0.86, opacity: 0, duration: 0.8, ease: 'back.out(1.7)', delay: 0.9 });

      // Floating hero objects (اگر داشتی، اینجا اضافه کن)
      gsap.to('.hero-float', { y: -18, duration: 2, ease: 'power1.inOut', repeat: -1, yoyo: true, stagger: 0.25 });

      // پارالاکس ماوس (اختیاری، اگر عناصر .hero-float داری)
      const onMove = (e: MouseEvent) => {
        const { innerWidth, innerHeight } = window;
        const nx = (e.clientX / innerWidth - 0.5) * 2;
        const ny = (e.clientY / innerHeight - 0.5) * 2;
        gsap.utils.toArray<HTMLElement>('.hero-float').forEach((el, i) => {
          gsap.to(el, { x: nx * 7 * (i + 1), y: ny * 5 * (i + 1), duration: 0.6, ease: 'power2.out' });
        });
      };
      window.addEventListener('pointermove', onMove, { passive: true });

      // انیمیشن اسکرول برای عناصر دیگر
      gsap.utils.toArray<HTMLElement>('.section-title').forEach((el) => {
        gsap.from(el, {
          scrollTrigger: { trigger: el, start: 'top 85%' },
          y: 30, opacity: 0, duration: 0.7, ease: 'power3.out',
        });
      });

      gsap.utils.toArray<HTMLElement>('.feature-card').forEach((el, idx) => {
        gsap.from(el, {
          scrollTrigger: { trigger: el, start: 'top 85%' },
          y: 24, opacity: 0, duration: 0.6, delay: idx * 0.08, ease: 'power3.out',
        });
      });

      return () => {
        window.removeEventListener('pointermove', onMove);
      };
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="overflow-hidden" dir="rtl">
      <section
        ref={heroRef}
        className="relative h-screen overflow-hidden bg-cover bg-center bg-no-repeat bg-fixed"
        style={{ backgroundImage: "url('/images/bg-4.webp')" }} // هماهنگ با body
      >
        {/* Overlay دقیقاً مثل body::after */}
        <div
          className="absolute inset-0 z-10"
          style={{
            background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))',
            filter: 'grayscale(40%)',
          }}
        />

        {/* محتوا بالای overlay */}
        <div className="relative z-20 h-full flex flex-col">
          <div className="flex flex-col lg:grid  lg:grid-cols-2 max-sm:gap-3 max-sm:flex-col-reverse max-sm:mt-10 gap-12 lg:gap-20 items-center py-16 lg:py-42 max-w-8xl mx-auto max-sm:px-2 lg:px-8">
            {/* متن - در موبایل پایین‌تر */}
            <div className="space-y-10 order-2 lg:order-1 text-right">
              <h1 className="space-y-4">
                <div className="hero-title-1 text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black bg-clip-text text-transparent bg-gradient-to-r from-amber-300 via-orange-300 to-amber-300 leading-tight [text-shadow:_0_4px_20px_rgba(0,0,0,0.4)]">
                  طعم واقعی
                </div>
                <div className="hero-title-2 text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black bg-clip-text text-transparent bg-gradient-to-r from-yellow-100 via-amber-100 to-yellow-50 leading-tight [text-shadow:_0_4px_20px_rgba(0,0,0,0.4)]">
                  لذت خالص
                </div>
              </h1>

              <p className="hero-sub text-lg lg:text-xl text-gray-100 max-w-xl leading-relaxed [text-shadow:_0_2px_10px_rgba(0,0,0,0.8)]">
                فروشگاه آنلاین آجیل و خشکبار باکیفیت؛ بسته‌بندی تمیز، ارسال سریع، و تجربه‌ی خرید مدرن با انیمیشن‌های چشم‌نواز.
              </p>

              <div className="hero-cta flex flex-wrap gap-4">
                <Link href="/products">
                  <MagneticButton className="group px-8 py-4 bg-gradient-to-r from-black to-black hover:from-orange-600 hover:to-amber-700 text-white rounded-2xl font-bold shadow-2xl hover:shadow-amber-500/60 flex items-center gap-3 transition-all duration-300">
                    <span className="text-lg">شروع خرید</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </MagneticButton>
                </Link>

                <Link href="/about">
                  <button className="px-8 py-4 bg-white/10 backdrop-blur-md border-2 border-white/30 text-white rounded-2xl font-bold shadow-xl hover:bg-white/20 hover:border-white/50 transform hover:-translate-y-1 transition-all duration-300">
                    <span className="text-lg">شناخت برند</span>
                  </button>
                </Link>
              </div>

              {/* کارت‌های ویژگی */}
              <div className="max-sm:hidden grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6">
                <div className="feature-card flex items-start gap-3 bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className="p-2 bg-amber-500/20 rounded-lg">
                    <Truck className="w-6 h-6 text-amber-400" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white mb-1">ارسال رایگان</div>
                    <div className="text-xs text-gray-300">بالای ۵۰۰ هزار تومان</div>
                  </div>
                </div>

                <div className="feature-card flex items-start gap-3 bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className="p-2 bg-emerald-500/20 rounded-lg">
                    <Leaf className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white mb-1">ارگانیک</div>
                    <div className="text-xs text-gray-300">دوستدار محیط‌زیست</div>
                  </div>
                </div>

                <div className="feature-card flex items-start gap-3 bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className="p-2 bg-rose-500/20 rounded-lg">
                    <ShieldCheck className="w-6 h-6 text-rose-400" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white mb-1">تضمین کیفیت</div>
                    <div className="text-xs text-gray-300">رضایت ۱۰۰٪ شما</div>
                  </div>
                </div>
              </div>
            </div>

            {/* کاروسل - در موبایل بالاتر */}
            <div className="relative order-1 lg:order-2">
              <CategoryCarousel />
            </div>
          </div>
        </div>
      </section>

      {/* بخش‌های بعدی مثل محصولات ویژه */}
    </div>
  );
}