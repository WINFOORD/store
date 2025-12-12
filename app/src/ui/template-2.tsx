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
    const products = [
        {
            image: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=800&q=80",
            title: "Premium Cashew Nuts",
            desc: "Fresh and high-quality cashew nuts",
            price: "€13.00",
            offPrice: "€15.00",
            offer: true,
            rating: 4.7,
            reviews: 2338,
        },
        {
            image: "https://images.unsplash.com/photo-1578775887804-699de7086ff9?w=800&q=80",
            title: "Mixed Nuts Deluxe",
            desc: "A perfect blend of premium nuts",
            price: "€18.00",
            offPrice: "€22.00",
            offer: true,
            rating: 4.9,
            reviews: 1856,
        },
        {
            image: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=800&q=80",
            title: "Organic Almonds",
            desc: "Certified organic raw almonds",
            price: "€16.00",
            rating: 4.8,
            reviews: 2104,
        },
        {
            image: "https://images.unsplash.com/photo-1578775887804-699de7086ff9?w=800&q=80",
            title: "شکلات فرانسوی مخصوص",
            desc: "دارای گواهینامه رسمی",
            price: "2,100,000 تومان",
            offPrice: " 2.400,000",
            offer: true,
            rating: 3,
            reviews: 1523,
        },
    ];


    const toggleWishlist = (id: number) => {
        setWishlist(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);
    };

    useEffect(() => {
        const ctx = gsap.context(() => {
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
                className="relative min-h-[84vh] bg-linear-to-b from-stone-300 via-gray-100 to-gray-100 overflow-hidden "
            >
 


                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center py-16">
                    {/* Content */}
                    <div className="space-y-7 z-10">
                        <div className="hero-kicker inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-md shadow-lg">
                            <Sparkles className="w-4 h-4 text-yellow-700" />
                            <span className="text-sm font-semibold text-gray-900">پریمیوم، ارگانیک، خوش‌طعم</span>
                        </div>
                        <h1 className="space-y-2">
                            <div className="hero-title-1 text-6xl lg:text-7xl font-black text-stone-900 leading-tight">طعم واقعی</div>
                            <div className="hero-title-2 text-6xl lg:text-7xl font-black bg-linear-to-r from-stone-100 via-stone-700 to-stone-400 bg-clip-text text-transparent leading-tight">
                                لذت خالص
                            </div>
                        </h1>
                        <p className="hero-sub text-lg text-gray-700 max-w-lg">
                            فروشگاه آنلاین آجیل و خشکبار باکیفیت؛ بسته‌بندی تمیز، ارسال سریع، و تجربه‌ی خرید مدرن با انیمیشن‌های چشم‌نواز.
                        </p>
                        <div className="hero-cta flex flex-wrap gap-4">
                            <Link href="/products">
                                <MagneticButton className="group px-7 py-4 bg-linear-to-r from-stone-950 to-stone-800 text-white rounded-xl font-bold shadow-xl hover:shadow-2xl flex items-center gap-2">
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


                    < CarouselCardSmooth />
                </div>

                {/* Wave */}
              

            </section>
  

            <LuxuryShopCards />


        </div>
    )
}