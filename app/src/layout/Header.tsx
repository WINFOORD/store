'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';
import {
    Menu, X, ChevronDown, ShoppingCart, Search, Sparkles, Gift, Boxes,
    Leaf, Flame, BadgePercent, Truck, Heart, Nut, Candy, PackageOpen,
    Moon, Sun, Globe, MapPin
} from 'lucide-react';
import { Dictionary } from '../i18n/Dictionary'
import { Locale } from '../i18n/config';
import LanguageSwitcher from '../components/SwitchLang';
import { integrations, products, PRODUCTS, resources } from '../lib/data';
type Props = {
  locale: Locale
  dict: Dictionary
}
/**
 * HeaderNuts — هدر مدرن و لوکس با دراپ‌دان مگامنو برای فروشگاه خشکبار
 * ویژگی‌ها:
 * - حالت دارک/لایت
 * - انتخابگر زبان (فارسی، عربی، انگلیسی)
 * - انیمیشن‌های GSAP و Framer Motion
 * - طراحی مینیمال و لوکس
 * - لوگو و برند حرفه‌ای
 */

export function HeaderNuts( {locale, dict }: Props) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [openMega, setOpenMega] = useState<null | 'products' | 'resources' | 'integrations'>(null);
    const [darkMode, setDarkMode] = useState(true);

    const [showLangMenu, setShowLangMenu] = useState(false);
    const megaRef = useRef<HTMLDivElement>(null);


    useEffect(() => {
        if (openMega && megaRef.current) {
            gsap.fromTo(
                megaRef.current.children,
                { opacity: 0, y: 20, scale: 0.95 },
                { opacity: 1, y: 0, scale: 1, duration: 0.4, stagger: 0.05, ease: 'power3.out' }
            );
        }
    }, [openMega]);


    const megaVariants = {
        hidden: { opacity: 0, y: 12, scale: 0.96, pointerEvents: 'none' as const },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            pointerEvents: 'auto' as const,
            transition: {
                duration: 0.3,
                ease: [0.16, 1, 0.3, 1]
            }
        },
        exit: {
            opacity: 0,
            y: 8,
            scale: 0.98,
            transition: { duration: 0.2 }
        }
    };

    return (
        <header className="bg-white backdrop-blur-xl sticky top-0 z-50 border-b border-amber-100/20 transition-colors duration-300">
            <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 px-6 py-4">

                {/* Logo & Brand */}
                <Link href="/" className="flex items-center gap-3 group">
                    <div className="relative">
                        <div className="absolute inset-0 bg-linear-to-br from-amber-400 to-orange-500 rounded-2xl blur-md opacity-40 group-hover:opacity-60 transition-opacity"></div>
                        <div className="relative w-12 h-12 rounded-2xl bg-linear-to-br from-amber-400 to-orange-500 flex items-center justify-center text-white text-2xl shadow-lg transform group-hover:scale-105 transition-transform">
                            🥜
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-xl font-black bg-linear-to-r from-amber-600 to-orange-600 dark:from-amber-400 dark:to-orange-400 bg-clip-text text-transparent">
                                        {dict.seo.homeTitle}
                        </span>
                        <span className="text-[10px] text-gray-500  items-center gap-1">
                            <MapPin className="w-3 h-3" />
                            babol
                        </span>
                    </div>
                </Link>

                {/* Search */}
                <div className="hidden md:block flex-1 max-w-2xl">
                    <div className="relative group">
                        <input
                            placeholder={dict.header.searchPlaceholder}
                            className="w-full rounded-2xl py-3.5 px-6 pr-14 bg-gray-50/50  border border-gray-200/50  shadow-sm outline-none focus:ring-2 focus:ring-amber-400/50  focus:bg-white  transition-all duration-300 text-gray-900 :text-gray-400 "
                        />
                        <div className="absolute right-5 top-1/2 -translate-y-1/2">
                            <Search className="w-5 h-5 text-gray-400 group-focus-within:text-amber-500 transition-colors" />
                        </div>
                    </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-2">

                
            <LanguageSwitcher currentLocale={locale} />

                    <button
                        onClick={() => setDarkMode(!darkMode)}
                        className="p-2.5 rounded-xl  bg-gray-50/50  border border-gray-200/50  hover:border-amber-300  transition-all duration-300 group"
                    >
                        {darkMode ? (
                            <Sun className="w-4 h-4 text-amber-500 group-hover:rotate-45 transition-transform duration-300" />
                        ) : (
                            <Moon className="w-4 h-4 text-gray-600 group-hover:text-amber-600 transition-colors" />
                        )}
                    </button>

               

                    <Link
                        href="/cart"
                        className="hidden md:flex px-4 py-2.5 rounded-xl bg-linear-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white items-center gap-2 shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 transition-all duration-300 group"
                    >
                        <ShoppingCart className="w-4 h-4 group-hover:scale-110 transition-transform" />
                        <span className="text-sm font-bold">{dict.header.cart}</span>
                    </Link>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden p-2.5 rounded-xl  border border-gray-200/50 50"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {mobileMenuOpen ? <X size={20} className="text-gray-700 " /> : <Menu size={20} className="text-gray-700 " />}
                    </button>
                </div>
            </div>

            {/* Desktop nav */}
            <div className="hidden md:block border-t   border-gray-100/50 ">
                <div className=" mx-auto ">
                    <nav className="flex items-center justify-center gap-40  text-gray-700 ">

                        {/* Products mega */}
                        <div
                            className="relative"
                            onMouseEnter={() => setOpenMega('products')}
                            onMouseLeave={() => setOpenMega(null)}
                        >
                            <button className="flex items-center gap-2 px-4 py-4 hover:text-amber-600  transition-colors group">
                                <span className="font-medium">{dict.product.category}</span>
                                <ChevronDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
                            </button>
                            <AnimatePresence>
                                {openMega === 'products' && (
                                    <motion.div
                                        ref={megaRef}
                                        initial="hidden"
                                        animate="visible"
                                        exit="exit"
                                        className="absolute left-1/2 -translate-x-1/2 mt-0 w-[980px] rounded-3xl bg-white/95 900/95 backdrop-blur-xl shadow-2xl border border-gray-100/50 800/50 p-8 overflow-hidden"
                                    >
                                        {/* linear Background */}
                                     
                                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-linear-to-tr from-rose-400/10 to-pink-500/10 rounded-full blur-3xl"></div>

                                        <div className="relative grid grid-cols-3 gap-4">
                                           {products.map(({ title, icon: Icon, href }, i) => (
                                                 <Link
                                                    key={i}
                                                    href={href}
                                                    className="group p-6 rounded-2xl border border-gray-100/50 50 bg-gray-50/50 50 hover:border-amber-200 700 hover:shadow-xl hover:scale-[1.02] transition-all duration-300 backdrop-blur-sm"
                                                >
                                                    <div className="flex items-center gap-4">
                                                        <div className="w-12 h-12 rounded-xl  flex items-center justify-center border border-gray-300 ">
                                                            <Icon className="w-6 h-6 " />
                                                        </div>
                                                        <div className="flex">
                                                            <div className="font-bold text-gray-900   group-hover:text-amber-600 ">{title}</div>
                                                         
                                                        </div>
                                                    </div>
                                                </Link>
                                            ))}
                                        </div>

                                        {/* Highlight CTA */}
                                        <div className="relative mt-2 rounded-2xl bg-linear-to-r from-amber-500 to-orange-500 p-6 text-white flex items-center justify-between overflow-hidden group hover:shadow-2xl transition-all duration-300">
                                            <div className="absolute inset-0 bg-linear-to-r from-orange-600 to-amber-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                            <div className="relative z-10">
                                                <div className="text-lg font-black mb-1">پک‌های هدیه لوکس</div>
                                                <div className="text-sm opacity-90">برای مناسبت‌ها و هدیه‌های خاطره‌ساز</div>
                                            </div>
                                            <Link
                                                href="/gifts"
                                                className="relative z-10 px-6 py-3 bg-white text-gray-900 rounded-xl font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                                            >
                                                خرید پک هدیه
                                            </Link>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        {/* Resources mega */}
                        <div
                            className="relative"
                            onMouseEnter={() => setOpenMega('resources')}
                            onMouseLeave={() => setOpenMega(null)}
                        >
                            <button className="flex items-center gap-2 px-4 py-4 hover:text-amber-600  transition-colors group">
                                <span className="font-medium">{dict.header.support}</span>
                                <ChevronDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
                            </button>
                            <AnimatePresence>
                                {openMega === 'resources' && (
                                    <motion.div
                                        ref={megaRef}
                                        initial="hidden"
                                        animate="visible"
                                        exit="exit"
                                        className="absolute left-1/2 -translate-x-1/2 mt-0 w-[760px] rounded-3xl bg-white/95  backdrop-blur-xl shadow-2xl border border-gray-100/50  p-8 overflow-hidden"
                                    >
                                        <div className="absolute top-0 left-0 w-64 h-64 bg-linear-to-br from-rose-400/10 to-pink-500/10 rounded-full blur-3xl"></div>

                                        <div className="relative grid grid-cols-2 gap-4">
                                            {resources.map((r, i) => (
                                                <Link
                                                    key={i}
                                                    href={r.href}
                                                    className="group p-6 rounded-2xl border border-gray-100/50 50 bg-gray-50/50 50 hover:border-amber-200 700 hover:shadow-xl hover:scale-[1.02] transition-all duration-300 backdrop-blur-sm"
                                                >
                                                    <div className="flex items-start gap-4">
                                                        <div className="w-12 h-12 rounded-xl  flex items-center justify-center border border-gray-300 ">
                                                            <r.icon className="w-6 h-6 " />
                                                        </div>
                                                        <div className="flex-1">
                                                            <div className="font-bold text-gray-900  mb-1 group-hover:text-amber-600 ">{r.title}</div>
                                                            <div className="text-xs text-gray-600 ">{r.desc}</div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            ))}

                                        </div>

                                        <div className="relative mt-6 rounded-2xl bg-linear-to-r from-rose-500 to-pink-500 p-6 text-white flex items-center justify-between overflow-hidden group hover:shadow-2xl transition-all duration-300">
                                            <div className="absolute inset-0 bg-linear-to-r from-pink-600 to-rose-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                            <div className="relative z-10">
                                                <div className="font-extrabold mb-1">راهنمای انتخاب مغزها</div>
                                                <div className="text-sm opacity-90">طعم، بافت و کاربردها را حرفه‌ای بشناس</div>
                                            </div>
                                            <Link
                                                href="/guides/buying-nuts"
                                                className="relative z-10 px-6 py-3 bg-white text-gray-900 rounded-xl font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                                            >
                                                مطالعه راهنما
                                            </Link>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        {/* Integrations mega */}
                        <div
                            className="relative"
                            onMouseEnter={() => setOpenMega('integrations')}
                            onMouseLeave={() => setOpenMega(null)}
                        >
                            <button className="flex items-center gap-2 px-4 py-4 hover:text-amber-600  transition-colors group">
                                <span className="font-medium">{dict.header.integrations}</span>
                                <ChevronDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
                            </button>
                            <AnimatePresence>
                                {openMega === 'integrations' && (
                                    <motion.div
                                        ref={megaRef}
                                        initial="hidden"
                                        animate="visible"
                                        exit="exit"
                                        className="absolute left-1/2 -translate-x-1/2 mt-0 w-[880px] rounded-3xl bg-white/95 95 backdrop-blur-xl shadow-2xl border border-gray-100/50  p-8 overflow-hidden"
                                    >
                                        <div className="absolute top-0 right-0 w-64 h-64 bg-linear-to-br from-blue-400/10 to-purple-500/10 rounded-full blur-3xl"></div>

                                        <div className="relative grid grid-cols-2 gap-4">
                                            {integrations.map((item, i) => (
                                                <Link
                                                    key={i}
                                                    href={item.href}
                                                    className="group p-6 rounded-2xl border border-gray-100/50 50 bg-gray-50/50 50 hover:border-amber-200 700 hover:shadow-xl hover:scale-[1.02] transition-all duration-300 backdrop-blur-sm"
                                                >
                                                    <div className="flex items-start gap-4">
                                                        <div className="w-12 h-12 rounded-xl  flex items-center justify-center border border-gray-300 ">
                                                            <item.icon className="w-6 h-6 " />
                                                        </div>
                                                        <div className="flex-1">
                                                            <div className="font-bold text-gray-900  mb-1 group-hover:text-amber-600 ">{item.title}</div>
                                                            <div className="text-xs text-gray-600 ">{item.desc}</div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            ))}
                                        </div>

                                        {/* Stats */}
                                        <div className="relative mt-6 grid grid-cols-3 gap-4">
                                            {[
                                                { num: '۲٬۴۲۰', label: 'کل ادغام‌ها', color: 'from-blue-500 to-cyan-500' },
                                                { num: '۱٬۲۱۰', label: 'فعال', color: 'from-green-500 to-emerald-500' },
                                                { num: '۳۱۶', label: 'جدید', color: 'from-orange-500 to-amber-500' }
                                            ].map((stat, i) => (
                                                <div key={i} className={`rounded-2xl bg-linear-to-br ${stat.color} p-5 text-white text-center shadow-lg hover:scale-105 transition-transform duration-300`}>
                                                    <div className="text-2xl font-black mb-1">{stat.num}</div>
                                                    <div className="text-xs opacity-90">{stat.label}</div>
                                                </div>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        <Link
                            href="/pricing"
                            className="px-4 py-4 hover:text-amber-600 dark:hover:text-amber-400 transition-colors font-medium"
                        >
                            {dict.header.pricing}
                        </Link>
                    </nav>
                </div>
            </div>

        </header>
    )
}