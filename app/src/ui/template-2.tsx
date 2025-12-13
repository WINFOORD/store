'use client';
import { useEffect, useMemo, useRef, useState } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGsapCarousel } from '../hooks/hook';
import { BANNERS, Product, PRODUCTS } from '../lib/data';
import { MagneticButton } from './MagneticButton';
import { ArrowRight, ChevronLeft, ChevronRight, Leaf, ShieldCheck, Sparkles, Truck } from 'lucide-react';
import { CarouselCardSmooth } from './crosual';
import LuxuryShopCards from './ShopCard';

gsap.registerPlugin(ScrollTrigger);

export function HomeMain() {
    const heroRef = useRef<HTMLDivElement>(null);
    const carouselRef = useRef<HTMLDivElement>(null);
    const [wishlist, setWishlist] = useState<number[]>([]);
    const [quickOpen, setQuickOpen] = useState(false);
    const [quickProduct, setQuickProduct] = useState<Product | null>(null);
    const [cartCount, setCartCount] = useState(2);
    const [cartTotal, setCartTotal] = useState(585000);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.hero-kicker', { y: 30, opacity: 0, duration: 0.8, ease: 'power3.out', delay: 0.3 });
            gsap.from('.hero-title-1', { y: 80, opacity: 0, duration: 1.2, ease: 'power4.out', delay: 0.4 });
            gsap.from('.hero-title-2', { y: 80, opacity: 0, duration: 1.2, ease: 'power4.out', delay: 0.5 });
            gsap.from('.hero-sub', { y: 40, opacity: 0, duration: 0.9, ease: 'power3.out', delay: 0.7 });
            gsap.from('.hero-cta', { scale: 0.86, opacity: 0, duration: 0.8, ease: 'back.out(1.7)', delay: 0.9 });

            // Floating hero objects
            gsap.to('.hero-float', { y: -18, duration: 2, ease: 'power1.inOut', repeat: -1, yoyo: true, stagger: 0.25 });

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
     

            <section
                ref={heroRef}
                className="hero-section-wrapper relative  min-h-screen overflow-hidden"
            >
                
                {/* Content layer above background */}
                <div className="relative z-10 h-full  flex flex-col">
                    
                    {/* Main Content */}
                    <div className="flex w-full  justify-center   mt-8 mx-auto px-4 sm:px-6 lg:px-8  lg:grid-cols-2 gap-24 items-center py-16 lg:py-36">
                        {/* Left Content */}
                        <div className="space-y-10">
                            
                            
                            <h1 className="space-y-3">
                                <div className="hero-title-1 text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black bg-clip-text text-transparent  bg-linear-to-r from-amber-600 via-orange-300 to-amber-300 leading-tight drop-shadow-2xl">
                                    طعم واقعی
                                </div>
                                <div className="hero-title-2 text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black bg-linear-to-r from-yellow-100 via-red-100 to-yellow-100 bg-clip-text text-transparent leading-tight drop-shadow-2xl">
                                    لذت خالص
                                </div>
                            </h1>
                            
                            <p className="hero-sub text-lg lg:text-xl text-gray-100 max-w-xl leading-relaxed drop-shadow-lg">
                                فروشگاه آنلاین آجیل و خشکبار باکیفیت؛ بسته‌بندی تمیز، ارسال سریع، و تجربه‌ی خرید مدرن با انیمیشن‌های چشم‌نواز.
                            </p>
                            
                            <div className="hero-cta flex flex-wrap gap-4">
                                <Link href="/products">
                                    <MagneticButton className="group px-8 py-4 bg-linear-to-r from-black to-black hover:from-orange-500 hover:to-amber-600 text-white rounded-2xl font-bold shadow-2xl hover:shadow-amber-500/50 flex items-center gap-3 transition-all duration-300">
                                        <span className="text-lg">شروع خرید</span>
                                        <ArrowRight className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                                    </MagneticButton>
                                </Link>
                                <Link href="/about">
                                    <button className="px-8 py-4 bg-white/10 backdrop-blur-md border-2 border-white/30 text-white rounded-2xl font-bold shadow-xl hover:bg-white/20 hover:border-white/50 transform hover:-translate-y-1 transition-all duration-300">
                                        <span className="text-lg">شناخت برند</span>
                                    </button>
                                </Link>
                            </div>
                            
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6">
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

                        {/* Right Content - Carousel */}
                        <div className="relative">
                            <CarouselCardSmooth />
                        </div>
                    </div>
                </div>
            </section>

            <LuxuryShopCards />
        </div>
    );
}