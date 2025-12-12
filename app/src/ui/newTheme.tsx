'use client';
import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Sparkles, Leaf, ShieldCheck, Truck, Heart, Star, ChevronRight } from 'lucide-react';

export  function HomeMain() {
    const heroRef = useRef<HTMLDivElement>(null);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const slides = [
        {
            title: "طعم تازگی را",
            subtitle: "با ما تجربه کنید",
            description: "مغزهای درجه یک با کیفیت بی‌نظیر",
            image: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=800&q=80",
            accent: "from-amber-500 to-orange-600"
        },
        {
            title: "طبیعی، سالم",
            subtitle: "و خوشمزه",
            description: "انتخابی عالی برای سلامتی شما",
            image: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=800&q=80",
            accent: "from-green-500 to-emerald-600"
        },
        {
            title: "هدیه‌ای",
            subtitle: "از دل طبیعت",
            description: "بسته‌بندی لوکس برای لحظات خاص",
            image: "https://images.unsplash.com/photo-1607623488235-e2c778491d6d?w=800&q=80",
            accent: "from-rose-500 to-pink-600"
        }
    ];

    const features = [
        {
            icon: ShieldCheck,
            title: "تضمین کیفیت",
            desc: "۱۰۰٪ طبیعی و تازه",
            color: "from-blue-500 to-cyan-500"
        },
        {
            icon: Truck,
            title: "ارسال رایگان",
            desc: "برای خریدهای بالای ۵۰۰ هزار تومان",
            color: "from-green-500 to-emerald-500"
        },
        {
            icon: Leaf,
            title: "ارگانیک",
            desc: "مغزها بدون مواد شیمیایی",
            color: "from-amber-500 to-orange-500"
        },
        {
            icon: Heart,
            title: "رضایت مشتری",
            desc: "بیش از ۲۴۰۰+ مشتری راضی",
            color: "from-rose-500 to-pink-500"
        }
    ];

    const products = [
        {
            name: "پسته احمد آقایی",
            price: "۳۲۰,۰۰۰",
            image: "https://images.unsplash.com/photo-1599599811136-3ecbcb0e7825?w=400&q=80",
            rating: 4.8,
            badge: "پرفروش"
        },
        {
            name: "بادام کالیفرنیا",
            price: "۲۸۵,۰۰۰",
            image: "https://images.unsplash.com/photo-1508747703725-719777637510?w=400&q=80",
            rating: 4.9,
            badge: "جدید"
        },
        {
            name: "گردو مغز ممتاز",
            price: "۴۱۰,۰۰۰",
            image: "https://images.unsplash.com/photo-1622484211331-c61b2e80c0f9?w=400&q=80",
            rating: 4.7,
            badge: null
        },
        {
            name: "مخلوط اجیل لوکس",
            price: "۱۹۵,۰۰۰",
            image: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=400&q=80",
            rating: 5.0,
            badge: "ویژه"
        }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [slides.length]);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({
                x: (e.clientX / window.innerWidth - 0.5) * 20,
                y: (e.clientY / window.innerHeight - 0.5) * 20
            });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <div ref={heroRef} className="min-h-screen bg-gradient-to-b from-amber-50 via-white to-orange-50">
            {/* Hero Section */}
            <section className="relative h-screen overflow-hidden">
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-amber-100 via-orange-50 to-rose-100" />
                
                {/* Animated Background Elements */}
                <div className="absolute inset-0 overflow-hidden">
                    <div 
                        className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-br from-amber-300/30 to-orange-400/30 rounded-full blur-3xl animate-pulse"
                        style={{ transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)` }}
                    />
                    <div 
                        className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-rose-300/30 to-pink-400/30 rounded-full blur-3xl animate-pulse"
                        style={{ transform: `translate(${-mousePosition.x}px, ${-mousePosition.y}px)` }}
                    />
                </div>

                {/* Main Hero Content */}
                <div className="relative h-full max-w-7xl mx-auto px-6 flex items-center">
                    <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
                        {/* Left Content */}
                        <div className="space-y-8 text-right animate-fadeInUp">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-lg">
                                <Sparkles className="w-4 h-4 text-amber-500" />
                                <span className="text-sm font-medium text-gray-700">تازه رسید - محصولات جدید فصل</span>
                            </div>
                            
                            <div className="space-y-4">
                                <h1 className="text-7xl font-black leading-tight">
                                    <span className="block text-gray-900">{slides[currentSlide].title}</span>
                                    <span className={`block bg-gradient-to-r ${slides[currentSlide].accent} bg-clip-text text-transparent`}>
                                        {slides[currentSlide].subtitle}
                                    </span>
                                </h1>
                                <p className="text-xl text-gray-600 max-w-lg">
                                    {slides[currentSlide].description}
                                </p>
                            </div>

                            <div className="flex items-center gap-4 justify-end">
                                <button className={`group px-8 py-4 bg-gradient-to-r ${slides[currentSlide].accent} text-white rounded-2xl font-bold text-lg shadow-2xl hover:shadow-amber-500/50 transform hover:scale-105 transition-all duration-300 flex items-center gap-3`}>
                                    <span>کاوش محصولات</span>
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </button>
                                <button className="px-8 py-4 bg-white/80 backdrop-blur-sm text-gray-900 rounded-2xl font-bold text-lg border-2 border-gray-200 hover:border-amber-400 transform hover:scale-105 transition-all duration-300">
                                    درباره ما
                                </button>
                            </div>

                            {/* Slide Indicators */}
                            <div className="flex gap-2 justify-end">
                                {slides.map((_, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => setCurrentSlide(idx)}
                                        className={`h-1.5 rounded-full transition-all duration-300 ${
                                            idx === currentSlide 
                                                ? 'w-12 bg-gradient-to-r from-amber-500 to-orange-500' 
                                                : 'w-6 bg-gray-300 hover:bg-gray-400'
                                        }`}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Right Content - Product Image */}
                        <div className="relative">
                            <div className="relative z-10">
                                <div className="relative w-full h-[600px] rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
                                    <img 
                                        src={slides[currentSlide].image}
                                        alt="Hero Product"
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                                </div>
                                
                                {/* Floating Elements */}
                                <div className="absolute -top-6 -right-6 bg-white rounded-2xl shadow-2xl p-4 animate-bounce">
                                    <div className="flex items-center gap-3">
                                        <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center">
                                            <Leaf className="w-6 h-6 text-white" />
                                        </div>
                                        <div className="text-right">
                                            <p className="text-xs text-gray-500">کاملا ارگانیک</p>
                                            <p className="font-bold text-gray-900">۱۰۰٪ طبیعی</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-2xl p-4 animate-pulse">
                                    <div className="flex items-center gap-3">
                                        <div className="text-left">
                                            <p className="text-xs text-gray-500">رتبه محصولات</p>
                                            <div className="flex gap-1">
                                                {[...Array(5)].map((_, i) => (
                                                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                                                ))}
                                            </div>
                                        </div>
                                        <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center">
                                            <span className="text-white font-bold text-lg">۴.۹</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 relative">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {features.map((feature, idx) => (
                            <div 
                                key={idx}
                                className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
                                style={{ animationDelay: `${idx * 100}ms` }}
                            >
                                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                                <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-4 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                                    <feature.icon className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2 text-right">{feature.title}</h3>
                                <p className="text-gray-600 text-right">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Products Section */}
            <section className="py-20 bg-gradient-to-b from-white to-amber-50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-5xl font-black text-gray-900 mb-4">محصولات ویژه</h2>
                        <p className="text-xl text-gray-600">برگزیده‌های ما برای شما</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {products.map((product, idx) => (
                            <div 
                                key={idx}
                                className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3"
                            >
                                <div className="relative h-64 overflow-hidden">
                                    <img 
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                    />
                                    {product.badge && (
                                        <div className="absolute top-4 right-4 px-4 py-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-full text-sm font-bold shadow-lg">
                                            {product.badge}
                                        </div>
                                    )}
                                    <button className="absolute bottom-4 left-1/2 -translate-x-1/2 px-6 py-3 bg-white/90 backdrop-blur-sm rounded-full font-bold text-gray-900 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 flex items-center gap-2 shadow-lg">
                                        <span>افزودن به سبد</span>
                                        <ChevronRight className="w-4 h-4" />
                                    </button>
                                </div>
                                <div className="p-6 text-right">
                                    <div className="flex items-center justify-between mb-2">
                                        <div className="flex gap-1">
                                            {[...Array(5)].map((_, i) => (
                                                <Star key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-amber-400 text-amber-400' : 'text-gray-300'}`} />
                                            ))}
                                        </div>
                                        <span className="text-sm text-gray-500">{product.rating}</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                                    <div className="flex items-center justify-between">
                                        <span className="text-2xl font-black bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                                            {product.price} تومان
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <button className="px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 inline-flex items-center gap-3">
                            <span>مشاهده همه محصولات</span>
                            <ArrowRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}