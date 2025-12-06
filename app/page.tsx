'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';
import { ArrowRight, Star, Sparkles } from 'lucide-react';
import { bestsellersData, giftSetsData } from './data/mockProducts';
import { ShopCard } from './ui/ShopCard';
import { NewCard } from './ui/NewCard';
import { Header } from './layout/Header';

gsap.registerPlugin(ScrollTrigger);

export default function HomePage() {

  const heroRef = useRef<HTMLDivElement>(null);
  const productsRef = useRef<HTMLDivElement>(null);
  const [activeWishlist, setActiveWishlist] = useState<number[]>([]);

  const toggleWishlist = (id: number) => {
    setActiveWishlist(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // انیمیشن Hero
      gsap.from('.hero-title', {
        y: 100,
        opacity: 0,
        duration: 1.2,
        ease: 'power4.out',
        stagger: 0.2
      });

      gsap.from('.hero-subtitle', {
        y: 50,
        opacity: 0,
        duration: 1,
        delay: 0.5,
        ease: 'power3.out'
      });

      gsap.from('.hero-cta', {
        scale: 0.8,
        opacity: 0,
        duration: 0.8,
        delay: 0.8,
        ease: 'back.out(1.7)'
      });

      // انیمیشن شناور برای محصولات
      gsap.to('.hero-product', {
        y: -20,
        duration: 2,
        ease: 'power1.inOut',
        repeat: -1,
        yoyo: true,
        stagger: 0.3
      });

      // نمایش محصولات
      gsap.from('.product-card', {
        scrollTrigger: {
          trigger: productsRef.current,
          start: 'top 80%',
        },
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out'
      });

    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="overflow-hidden">
      <Header/>
      {/* بخش Hero */}
      <section 
        ref={heroRef}
        className="relative min-h-[90vh] bg-linear-to-br from-amber-50 via-orange-50 to-rose-50 overflow-hidden"
      >
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* محتوای متنی */}
            <div className="space-y-8 z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-lg hero-subtitle">
                <Sparkles className="w-4 h-4 text-amber-600" />
                <span className="text-sm font-semibold text-amber-900">تازه‌ترین محصولات</span>
              </div>

              <h1 className="space-y-2">
                <div className="hero-title text-6xl lg:text-7xl font-black text-gray-900 leading-tight">
                  طعم واقعی
                </div>
                <div className="hero-title text-6xl lg:text-7xl font-black bg-linear-to-r from-amber-600 via-orange-600 to-rose-600 bg-clip-text text-transparent leading-tight">
                  لذت خالص
                </div>
              </h1>

              <p className="hero-subtitle text-xl text-gray-700 max-w-lg">
                بهترین خشکبار، آجیل، شکلات و تنقلات ارگانیک را با کیفیتی استثنایی تجربه کنید
              </p>

              <div className="flex flex-wrap gap-4 hero-cta">
                <Link href="/products">
                  <button className="group px-8 py-4 bg-linear-to-r from-amber-600 to-orange-600 text-white rounded-xl font-bold shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-2">
                    خرید محصولات
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </Link>
                <Link href="/about">
                  <button className="px-8 py-4 bg-white text-gray-900 rounded-xl font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                    درباره ما
                  </button>
                </Link>
              </div>

              {/* آمار */}
              <div className="flex gap-8 pt-8 hero-subtitle">
                <div>
                  <div className="text-3xl font-black text-gray-900">۵۰۰+</div>
                  <div className="text-sm text-gray-600">محصولات متنوع</div>
                </div>
                <div>
                  <div className="text-3xl font-black text-gray-900">۱۰k+</div>
                  <div className="text-sm text-gray-600">مشتری راضی</div>
                </div>
                <div className="flex items-center gap-1">
                  <Star className="w-6 h-6 fill-amber-400 text-amber-400" />
                  <div className="text-3xl font-black text-gray-900">۴.۹</div>
                </div>
              </div>
            </div>

            {/* نمایش محصولات */}
            <div className="relative h-[600px] hidden lg:block">
              {/* محصول اصلی */}
              <div className="hero-product absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                <div className="relative w-80 h-80 bg-linear-to-br from-amber-200 to-orange-300 rounded-3xl shadow-2xl rotate-6 hover:rotate-0 transition-transform duration-500">
                  <div className="absolute inset-4 bg-white rounded-2xl shadow-inner flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-6xl mb-4">🍫</div>
                      <div className="text-2xl font-bold text-gray-900">شکلات تلخ</div>
                      <div className="text-amber-600 font-bold mt-2">کیفیت پرمیوم</div>
                    </div>
                  </div>
                  <div className="absolute -top-4 -right-4 w-16 h-16 bg-rose-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                    ۲۰٪
                  </div>
                </div>
              </div>

              <div className="hero-product absolute top-20 right-0 z-10">
                <div className="w-48 h-48 bg-linear-to-br from-rose-200 to-pink-300 rounded-2xl shadow-xl -rotate-12 hover:rotate-0 transition-transform duration-500">
                  <div className="absolute inset-3 bg-white rounded-xl flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-4xl mb-2">🥜</div>
                      <div className="text-sm font-bold">بادام زمینی</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="hero-product absolute bottom-20 left-0 z-10">
                <div className="w-52 h-52 bg-linear-to-br from-green-200 to-emerald-300 rounded-2xl shadow-xl rotate-12 hover:rotate-0 transition-transform duration-500">
                  <div className="absolute inset-3 bg-white rounded-xl flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-4xl mb-2">🌰</div>
                      <div className="text-sm font-bold">آجیل مخلوط</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" className="w-full h-auto">
            <path
              fill="#ffffff"
              d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
            />
          </svg>
        </div>
      </section>

      {/* بخش پرفروش‌ترین‌ها */}
      <section ref={productsRef} className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              پرفروش‌ترین محصولات
            </h2>
            <Link href="/bestsellers">
              <button className="text-gray-700 hover:text-gray-900 font-medium flex items-center gap-1 group">
                مشاهده همه
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {bestsellersData.map((item) => (
              <ShopCard
                key={item.id}
                id={item.id}
                title={item.title}
                price={item.price}
                originalPrice={item.originalPrice}
                unit={item.unit}
                rating={item.rating}
                reviews={item.reviews}
                picture={item.picture}
                bgColor={item.bgColor}
                tag={item.tag}
                description={item.description}
                onWishlistToggle={toggleWishlist}
                isWishlisted={activeWishlist.includes(item.id)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* بخش پک‌های هدیه */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              پک‌های هدیه ویژه
            </h2>
            <Link href="/gifts">
              <button className="text-gray-700 hover:text-gray-900 font-medium flex items-center gap-1 group">
                همه پک‌ها
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {giftSetsData.map((item) => (
              <NewCard
                key={item.id}
                id={item.id}
                title={item.title}
                picture={item.picture}
                bgColor={item.bgColor}
                tag={item.tag}
              />
            ))}
          </div>
        </div>
      </section>

      {/* بخش ویژگی‌ها */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: '🚚',
                title: 'ارسال رایگان',
                description: 'برای خریدهای بالای ۵۰۰ هزار تومان'
              },
              {
                icon: '🌱',
                title: 'محصولات ارگانیک',
                description: 'بسته‌بندی دوستدار محیط زیست'
              },
              {
                icon: '⭐',
                title: 'تضمین کیفیت',
                description: 'رضایت ۱۰۰٪ شما تضمین می‌شود'
              }
            ].map((feature, index) => (
              <div key={index} className="text-center p-6">
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}