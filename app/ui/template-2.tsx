'use client';
import { useEffect, useMemo, useRef, useState } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGsapCarousel } from '../hooks/hook';
import { BANNERS, Product, PRODUCTS } from '../lib/data';
import { MagneticButton } from './MagneticButton';
import { ArrowRight, ChevronLeft, ChevronRight, Leaf, ShieldCheck, Sparkles, Truck } from 'lucide-react';
import {  CarouselCardSmooth } from './crosual';

gsap.registerPlugin(ScrollTrigger);


function HeroBanner() {

    const trackRef = useRef<HTMLDivElement>(null);
    useGsapCarousel(trackRef, BANNERS.length);

    const navigate = (direction: 'next' | 'prev') => {
        const track = trackRef.current;
        if (!track) return;
        const fn = direction === 'next' ? (track as any).__carouselNext : (track as any).__carouselPrev;
        if (typeof fn === 'function') fn();
    };

    return (
        <section className="mt-16 relative overflow-hidden h-[400px] md:h-[500px] lg:h-[600px] rounded-b-[40px] shadow-2xl bg-white">
            <div className="absolute inset-0 overflow-hidden">
                <div ref={trackRef} className="flex h-full w-[300%] lg:w-[300%] transition-transform duration-700 ease-in-out">
                    {BANNERS.map((b, index) => (
                        <div key={b.id} className="w-1/3 flex-shrink-0 relative">
                            <div className={`absolute inset-0 bg-linear-to-br ${b.linear} opacity-90`}></div>
                            <div className="relative z-10 p-8 md:p-12 lg:p-20 text-white flex flex-col justify-center h-full">
                                <h1 className="text-3xl md:text-5xl lg:text-7xl font-extrabold mb-4">{b.title}</h1>
                                <p className="text-lg md:text-2xl mb-8 max-w-xl">{b.subtitle}</p>
                                <MagneticButton className="self-start px-8 py-3 bg-white text-gray-900 rounded-xl font-bold shadow-lg flex items-center gap-2">
                                    {b.cta || 'مشاهده'} <ArrowRight className="w-5 h-5 rtl:rotate-180" />
                                </MagneticButton>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="absolute inset-0 flex items-center justify-between p-4 z-20 pointer-events-none">
                <button onClick={() => navigate('prev')} className="p-3 bg-white/50 text-gray-900 rounded-full shadow-lg pointer-events-auto hover:bg-white/80 transition" aria-label="قبلی">
                    <ChevronRight className="w-6 h-6" />
                </button>
                <button onClick={() => navigate('next')} className="p-3 bg-white/50 text-gray-900 rounded-full shadow-lg pointer-events-auto hover:bg-white/80 transition" aria-label="بعدی">
                    <ChevronLeft className="w-6 h-6" />
                </button>
            </div>
        </section>
    );
}


export function HomeMain(){
      const heroRef = useRef<HTMLDivElement>(null);
    const carouselRef = useRef<HTMLDivElement>(null);
    const [wishlist, setWishlist] = useState<number[]>([]);
    const [quickOpen, setQuickOpen] = useState(false);
    const [quickProduct, setQuickProduct] = useState<Product | null>(null);
    const [cartCount, setCartCount] = useState(2);
    const [cartTotal, setCartTotal] = useState(585000);


    // Hooks for carousel
    useGsapCarousel(carouselRef, BANNERS.length);
    const onQuickView = (p: Product) => {
        setQuickProduct(p);
        setQuickOpen(true);
    };
    const toggleWishlist = (id: number) => {
        setWishlist(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);
    };

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Hero entrance
            gsap.from('.hero-kicker', { y: 30, opacity: 0, duration: 0.8, ease: 'power3.out' });
            gsap.from('.hero-title-1', { y: 80, opacity: 0, duration: 1.2, ease: 'power4.out', delay: 0.1 });
            gsap.from('.hero-title-2', { y: 80, opacity: 0, duration: 1.2, ease: 'power4.out', delay: 0.2 });
            gsap.from('.hero-sub', { y: 40, opacity: 0, duration: 0.9, ease: 'power3.out', delay: 0.4 });
            gsap.from('.hero-cta', { scale: 0.86, opacity: 0, duration: 0.8, ease: 'back.out(1.7)', delay: 0.6 });

            // Floating hero objects
            gsap.to('.hero-float', { y: -18, duration: 2, ease: 'power1.inOut', repeat: -1, yoyo: true, stagger: 0.25 });
            
            // Parallax pointer for hero floats
            const xs = gsap.utils.toArray<HTMLElement>('.hero-float').map(el => gsap.quickSetter(el, 'x', 'px'));
            const ys = gsap.utils.toArray<HTMLElement>('.hero-float').map(el => gsap.quickSetter(el, 'y', 'px'));
            const onMove = (e: MouseEvent) => {
                const { innerWidth, innerHeight } = window;
                const nx = (e.clientX / innerWidth - 0.5) * 2;
                const ny = (e.clientY / innerHeight - 0.5) * 2;
                xs.forEach((setter, i) => setter(nx * 7 * (i + 1)));
                ys.forEach((setter, i) => setter(ny * 5 * (i + 1)));
            };
            window.addEventListener('pointermove', onMove, { passive: true });
            
            // Titles & cards reveal on scroll
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
    
    const featured = useMemo(() => PRODUCTS.slice(0, 4), []);
    const recommended = useMemo(() => PRODUCTS.slice(4, 8), []);
    
    return (
        <div className="overflow-hidden">
            {/* <Header /> */}
          
            <section
                ref={heroRef}
                className="relative min-h-[84vh] bg-linear-to-br from-amber-50 via-orange-50 to-rose-50 overflow-hidden "
            >
                 <div className="absolute -top-10 rotate-180 left-0 right-0">
                    <svg viewBox="0 0 1440 120" className="w-full h-auto">
                        <path
                            fill="#ffffff"
                            d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
                        />
                    </svg>
                </div>
                
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center py-16">
                    {/* Content */}
                    <div className="space-y-7 z-10">
                        <div className="hero-kicker inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-lg">
                            <Sparkles className="w-4 h-4 text-amber-600" />
                            <span className="text-sm font-semibold text-amber-900">پریمیوم، ارگانیک، خوش‌طعم</span>
                        </div>
                        <h1 className="space-y-2">
                            <div className="hero-title-1 text-6xl lg:text-7xl font-black text-gray-900 leading-tight">طعم واقعی</div>
                            <div className="hero-title-2 text-6xl lg:text-7xl font-black bg-linear-to-r from-amber-600 via-orange-600 to-rose-600 bg-clip-text text-transparent leading-tight">
                                لذت خالص
                            </div>
                        </h1>
                        <p className="hero-sub text-lg text-gray-700 max-w-lg">
                            فروشگاه آنلاین آجیل و خشکبار باکیفیت؛ بسته‌بندی تمیز، ارسال سریع، و تجربه‌ی خرید مدرن با انیمیشن‌های چشم‌نواز.
                        </p>
                        <div className="hero-cta flex flex-wrap gap-4">
                            <Link href="/products">
                                <MagneticButton className="group px-7 py-4 bg-linear-to-r from-amber-600 to-orange-600 text-white rounded-xl font-bold shadow-xl hover:shadow-2xl flex items-center gap-2">
                                    شروع خرید
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </MagneticButton>
                            </Link>
                            <Link href="/about">
                                <button className="px-7 py-4 bg-white text-gray-900 rounded-xl font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                                    شناخت برند
                                </button>
                            </Link>
                        </div>
                        <div className="flex gap-8 pt-4">
                            <div className="feature-card flex items-center gap-3">
                                <Truck className="w-5 h-5 text-amber-700" />
                                <div>
                                    <div className="text-sm font-bold text-gray-900">ارسال رایگان</div>
                                    <div className="text-xs text-gray-600">بالای ۵۰۰ هزار تومان</div>
                                </div>
                            </div>
                            <div className="feature-card flex items-center gap-3">
                                <Leaf className="w-5 h-5 text-emerald-700" />
                                <div>
                                    <div className="text-sm font-bold text-gray-900">ارگانیک</div>
                                    <div className="text-xs text-gray-600">بسته‌بندی دوستدار محیط‌زیست</div>
                                </div>
                            </div>
                            <div className="feature-card flex items-center gap-3">
                                <ShieldCheck className="w-5 h-5 text-rose-700" />
                                <div>
                                    <div className="text-sm font-bold text-gray-900">تضمین کیفیت</div>
                                    <div className="text-xs text-gray-600">رضایت ۱۰۰٪ شما</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Visuals */}

           
                        < CarouselCardSmooth/>
                </div>

                {/* Wave */}
                <div className="absolute bottom-0 left-0 right-0">
                    <svg viewBox="0 0 1440 120" className="w-full h-auto">
                        <path
                            fill="#ffffff"
                            d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
                        />
                    </svg>
                </div>

                
            </section>


           
        </div>
    )
}