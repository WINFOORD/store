'use client';
import { useState } from 'react';
import Link from 'next/link';
import Lottie from 'lottie-react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    ArrowRight, Search, ShoppingCart, Star, Sparkles, Heart, X, ChevronRight,
    BadgePercent, Truck, ShieldCheck, Leaf, PackageOpen, Flame, HandPlatter, Cookie,
    Menu, ChevronDown, Home, Gift, ListTree, Settings, User, LogIn, LogOut, Phone, MapPin, Info,
    ChevronLeft
} from 'lucide-react';
import { BANNERS, CATEGORIES, SPARKLE_LOTTIE } from '../lib/data';

export function Header() {
    const [open, setOpen] = useState(false);
    const [hoverTab, setHoverTab] = useState<'categories' | 'gifts' | 'about' | null>(null);

    return (
        <header className="fixed top-0 left-0 right-0 z-[90] bg-white/80 backdrop-blur-md border-b border-amber-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2">
                    <Lottie animationData={SPARKLE_LOTTIE} loop className="w-6 h-6" />
                    <span className="font-extrabold text-gray-900">خشکبارستان</span>
                </Link>

                <nav className="hidden lg:flex items-center gap-6 text-gray-800">
                    {/* ... (Mega Menu logic for Categories and Gifts - using CATEGORIES and BANNERS imports) ... */}
                    <div
                        className="relative"
                        onMouseEnter={() => setHoverTab('categories')}
                        onMouseLeave={() => setHoverTab(null)}
                    >
                        <button className="inline-flex items-center gap-1 font-medium">
                            دسته‌بندی‌ها <ChevronDown className="w-4 h-4" />
                        </button>
                        <AnimatePresence>
                            {hoverTab === 'categories' && (
                                <motion.div
                                    className="absolute left-0 mt-3 w-[720px] rounded-2xl bg-white shadow-2xl border border-gray-100 p-6 grid grid-cols-3 gap-6"
                                    initial={{ opacity: 0, y: 8 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 8 }}
                                >
                                    {CATEGORIES.map((c) => (
                                        <Link href={`/products?c=${c.key}`} key={c.key} className="group">
                                            <div className={`rounded-xl bg-gradient-to-br ${c.color} p-6 mb-3`}>
                                                <div className="text-4xl">{c.emoji}</div>
                                            </div>
                                            <div className="font-bold text-gray-900 group-hover:text-amber-800">{c.title}</div>
                                            <div className="text-xs text-gray-600">مشاهده همه</div>
                                        </Link>
                                    ))}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    <div
                        className="relative"
                        onMouseEnter={() => setHoverTab('gifts')}
                        onMouseLeave={() => setHoverTab(null)}
                    >
                        <button className="inline-flex items-center gap-1 font-medium">
                            پک‌های هدیه <ChevronDown className="w-4 h-4" />
                        </button>
                        <AnimatePresence>
                            {hoverTab === 'gifts' && (
                                <motion.div
                                    className="absolute left-0 mt-3 w-[560px] rounded-2xl bg-white shadow-2xl border border-gray-100 p-6 grid grid-cols-2 gap-6"
                                    initial={{ opacity: 0, y: 8 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 8 }}
                                >
                                    {BANNERS.map((b) => (
                                        <Link href={`/gifts?b=${b.id}`} key={b.id} className="group">
                                            <div className={`rounded-xl bg-gradient-to-br ${b.gradient} p-6 mb-3`}>
                                                <div className="text-4xl">{b.emoji}</div>
                                            </div>
                                            <div className="font-bold text-gray-900 group-hover:text-rose-700">{b.title}</div>
                                            <div className="text-xs text-gray-600">{b.subtitle}</div>
                                        </Link>
                                    ))}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    <Link href="/about" className="font-medium">درباره ما</Link>
                    <Link href="/contact" className="font-medium">تماس با ما</Link>
                </nav>

                <div className="flex items-center gap-3">
                    <div className="hidden md:flex items-center gap-2 px-3 py-2 rounded-xl bg-gray-100 text-gray-700">
                        <Search className="w-4 h-4" />
                        <input placeholder="جستجوی محصول..." className="bg-transparent outline-none text-sm w-48" />
                    </div>
                    <Link href="/cart" className="relative">
                        <ShoppingCart className="w-6 h-6 text-gray-800" />
                        <span className="absolute -top-2 -right-2 bg-rose-500 text-white text-xs px-2 py-0.5 rounded-full">2</span>
                    </Link>
                    <button
                        onClick={() => setOpen(!open)}
                        className="lg:hidden p-2 rounded-xl bg-white border border-gray-200"
                        aria-label="Menu"
                    >
                        <Menu className="w-5 h-5 text-gray-800" />
                    </button>
                </div>
            </div>

            {/* Mobile drawer */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        className="lg:hidden fixed top-16 left-0 right-0 z-[95] bg-white border-b border-gray-100 shadow-xl"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                    >
                        <div className="px-4 py-4 space-y-3 text-gray-800">
                            <Link href="/" className="flex items-center gap-2">
                                <Home className="w-4 h-4" /> صفحه اصلی
                            </Link>
                            <Link href="/products" className="flex items-center gap-2">
                                <ListTree className="w-4 h-4" /> محصولات
                            </Link>
                            <Link href="/gifts" className="flex items-center gap-2">
                                <Gift className="w-4 h-4" /> پک‌های هدیه
                            </Link>
                            <Link href="/about" className="flex items-center gap-2">
                                <Info className="w-4 h-4" /> درباره ما
                            </Link>
                            <div className="flex items-center gap-2 pt-2 border-t border-gray-100">
                                <User className="w-4 h-4" /> حساب کاربری
                            </div>
                            <div className="flex items-center gap-2">
                                <LogIn className="w-4 h-4" /> ورود
                            </div>
                            <div className="flex items-center gap-2">
                                <LogOut className="w-4 h-4" /> خروج
                            </div>
                            <div className="flex items-center gap-2">
                                <Phone className="w-4 h-4" /> پشتیبانی: 021-xxx
                            </div>
                            <div className="flex items-center gap-2">
                                <MapPin className="w-4 h-4" /> تهران، ایران
                            </div>
                            <div className="flex items-center gap-2">
                                <Settings className="w-4 h-4" /> تنظیمات
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            
        </header>
    );
}