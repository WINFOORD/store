// HeaderNuts.tsx (بازنویسی شده)

'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import {
    Menu, X, ShoppingCart, Search, Sun, Moon, MapPin, User, Info,
    Sparkles, Gift, Flame, Leaf, PackageOpen, Truck, Heart, Nut, Candy
} from 'lucide-react';
import { Dictionary } from '../i18n/Dictionary'
import { Locale } from '../i18n/config';
import LanguageSwitcher from '../components/SwitchLang';
import { MegaMenuItem } from '../ui/MegaMenuItem';
import { CTABanner, NavCardItem, StatCard } from '../ui/NavCardItem'; // کامپوننت جدید
import { integrations, products, resources } from '../lib/data';


type Props = {
    locale: Locale
    dict: Dictionary
}

// === داده‌های ناوبری جدید (بدون تغییر) ===
const aboutUsLinks = [
    { title: 'داستان ما', icon: Info, href: '/about/story', desc: 'با  تاریخچه ما آشنا شوید' },
    { title: 'اعضای تیم', icon: User, href: '/about/team', desc: 'مغزهای  پشت این تجارت' },
    { title: 'فرصت‌های شغلی', icon: Heart, href: '/about/careers', desc: 'به تیم ما بپیوندید' },
];

const authLinks = [
    { title: 'ورود', icon: User, href: '/auth/login', desc: 'ورود به حساب کاربری موجود' },
    { title: 'ثبت نام', icon: Sparkles, href: '/auth/signup', desc: 'ایجاد حساب کاربری جدید' },
    { title: 'فراموشی رمز عبور', icon: X, href: '/auth/reset', desc: 'بازیابی رمز عبور' },
];
// ======================================

export function HeaderNuts({ locale, dict }: Props) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [darkMode, setDarkMode] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    // رصد موقعیت اسکرول (بدون تغییر)
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // کلاس‌های پویا بر اساس وضعیت اسکرول (بدون تغییر)
    const headerClasses = `
        bg-white/90 backdrop-blur-xl sticky top-0 z-50 transition-all duration-300
        ${isScrolled
            ? 'py-2 border-b border-amber-200/50 shadow-md'
            : 'py-4 border-b border-amber-100/20'
        }
    `;
    const logoSizeClass = isScrolled ? 'w-10 h-10' : 'w-12 h-12';
    const logoTextClass = isScrolled ? 'text-lg' : 'text-xl';


    return (
        <header className={headerClasses}>
            <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 px-6">
                {/* ... بخش‌های لوگو، جستجو و اکشن‌ها (بدون تغییر) ... */}
                <Link href="/" className="flex items-center gap-3 group">
                    <div className="relative transition-all duration-300">
                        <div className={`absolute inset-0 bg-linear-to-br from-amber-400 to-orange-500 rounded-2xl blur-md opacity-40 group-hover:opacity-60 transition-opacity ${isScrolled ? 'scale-90' : ''}`}></div>
                        <div className={`relative rounded-2xl bg-linear-to-br from-amber-400 to-orange-500 flex items-center justify-center text-white text-2xl shadow-lg transform group-hover:scale-105 transition-transform ${logoSizeClass}`}>
                            🥜
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <span className={`font-black bg-linear-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent transition-all duration-300 ${logoTextClass}`}>
                            {dict.seo.homeTitle.split('|')[0].trim()}
                        </span>
                        <span className="text-[10px] text-gray-500 flex items-center gap-1">
                            <MapPin className="w-3 h-3" />
                            babol
                        </span>
                    </div>
                </Link>

                {/* Search */}
                <div className="hidden lg:block flex-1 max-w-2xl">
                    <div className="relative group">
                        <input
                            placeholder={dict.header.searchPlaceholder}
                            className={`w-full rounded-2xl px-6 pr-14 bg-gray-50/50 border border-gray-200/50 shadow-sm outline-none focus:ring-2 focus:ring-amber-400/50 focus:bg-white transition-all duration-300 text-gray-900 ${isScrolled ? 'py-2.5' : 'py-3.5'}`}
                        />
                        <div className="absolute right-5 top-1/2 -translate-y-1/2">
                            <Search className="w-5 h-5 text-gray-400 group-focus-within:text-amber-500 transition-colors" />
                        </div>
                    </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-2">
                    <LanguageSwitcher currentLocale={locale} />

                    {/* Dark/Light Mode Toggle */}
                    <button
                        onClick={() => setDarkMode(!darkMode)}
                        className="p-2.5 rounded-xl bg-gray-50/50 border border-gray-200/50 hover:border-amber-300 transition-all duration-300 group"
                    >
                        {darkMode ? (
                            <Sun className="w-4 h-4 text-amber-500 group-hover:rotate-45 transition-transform duration-300" />
                        ) : (
                            <Moon className="w-4 h-4 text-gray-600 group-hover:text-amber-600 transition-colors" />
                        )}
                    </button>

                    {/* Cart CTA */}
                    <Link
                        href="/cart"
                        className="hidden md:flex px-4 py-2.5 rounded-xl bg-linear-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white items-center gap-2 shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 transition-all duration-300 group"
                    >
                        <ShoppingCart className="w-4 h-4 group-hover:scale-110 transition-transform" />
                        <span className="text-sm font-bold">{dict.header.cart}</span>
                    </Link>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden p-2.5 rounded-xl border border-gray-200/50"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {mobileMenuOpen ? <X size={20} className="text-gray-700" /> : <Menu size={20} className="text-gray-700" />}
                    </button>
                </div>
            </div>

            {/* Desktop Nav - استفاده از MegaMenuItem */}
            <div className="hidden md:block border-t border-gray-100/50">
                <div className="mx-auto">
                    <nav className="flex items-center justify-center gap-6 lg:gap-10 text-gray-700">

                        {/* ۱. مگامنوی محصولات */}
                        <MegaMenuItem
                            title={dict.product.category}
                            width="large"
                            bgColorClass="from-rose-400/10 to-pink-500/10"
                        >
                            <div className="grid grid-cols-3 gap-4">
                                {products.map(({ title, icon, href, desc }, i) => (
                                    <NavCardItem
                                        key={i}
                                        title={title}
                                        desc={desc}
                                        href={href}
                                        Icon={icon}
                                        color="amber" // رنگ اصلی برای محصولات
                                    />
                                ))}
                            </div>

                            {/* Highlight CTA - Gift Box */}
                            <CTABanner
                                title="پک‌های هدیه لوکس"
                                subtitle="برای مناسبت‌ها و هدیه‌های خاطره‌ساز"
                                buttonText="خرید پک هدیه"
                                href="/gifts"
                                fromColor="from-amber-500"
                                toColor="to-orange-500"
                            />
                        </MegaMenuItem>

                        {/* ۲. مگامنوی راهنما/منابع */}
                        <MegaMenuItem
                            title={dict.header.support}
                            width="medium"
                            bgColorClass="from-rose-400/10 to-pink-500/10"
                        >
                            <div className="grid grid-cols-2 gap-4">
                                {resources.map((r, i) => (
                                    <NavCardItem
                                        key={i}
                                        title={r.title}
                                        desc={r.desc}
                                        href={r.href}
                                        Icon={r.icon}
                                        color="rose" // رنگ برای منابع
                                    />
                                ))}
                            </div>
                            {/* CTA Guide */}
                            <CTABanner
                                title="راهنمای انتخاب مغزها"
                                subtitle="طعم، بافت و کاربردها را حرفه‌ای بشناس"
                                buttonText="مطالعه راهنما"
                                href="/guides/buying-nuts"
                                fromColor="from-rose-500"
                                toColor="to-pink-500"
                            />
                        </MegaMenuItem>

                        {/* ۳. مگامنوی خدمات مشتریان */}
                        <MegaMenuItem
                            title={dict.footer.customerService}
                            width="medium"
                            bgColorClass="from-blue-400/10 to-purple-500/10"
                        >
                            <div className="grid grid-cols-2 gap-4">
                                {integrations.map((item, i) => (
                                    <NavCardItem
                                        key={i}
                                        title={item.title}
                                        desc={item.desc}
                                        href={item.href}
                                        Icon={item.icon}
                                        color="blue" // رنگ برای خدمات مشتریان
                                    />
                                ))}
                            </div>

                            <div className="relative mt-6 grid grid-cols-3 gap-4">
                                {[
                                    { num: '۲٬۴۲۰', label: 'رضایت', color: 'from-blue-500 to-cyan-500' },
                                    { num: '۱٬۲۱۰', label: 'سفارش موفق', color: 'from-green-500 to-emerald-500' },
                                    { num: '۳۱۶', label: 'پشتیبانی آنلاین', color: 'from-orange-500 to-amber-500' }
                                ].map((stat, i) => (
                                    <StatCard
                                        key={i}
                                        num={stat.num}
                                        label={stat.label}
                                        color={stat.color}
                                    />
                                ))}
                            </div>
                        </MegaMenuItem>

                        {/* ۴. مگامنوی درباره ما */}
                        <MegaMenuItem
                            title="درباره ما"
                            width="medium"
                            bgColorClass="from-green-400/10 to-teal-500/10"
                        >
                            <div className="grid grid-cols-3 gap-4">
                                {aboutUsLinks.map((item, i) => (
                                    <NavCardItem
                                        key={i}
                                        title={item.title}
                                        desc={item.desc}
                                        href={item.href}
                                        Icon={item.icon}
                                        color="teal" // رنگ برای درباره ما
                                    />
                                ))}
                            </div>
                        </MegaMenuItem>

                        {/* ۵. مگامنوی ورود/ثبت نام */}
                        <MegaMenuItem
                            title="ورود / ثبت نام"
                            width="small"
                            bgColorClass="from-indigo-400/10 to-violet-500/10"
                        >
                            <div className="grid grid-cols-1 gap-4">
                                {authLinks.map((item, i) => (
                                    <NavCardItem
                                        key={i}
                                        title={item.title}
                                        desc={item.desc}
                                        href={item.href}
                                        Icon={item.icon}
                                        color="indigo" // رنگ برای ورود/ثبت نام
                                    />
                                ))}
                            </div>
                        </MegaMenuItem>

                    </nav>
                </div>
            </div>

            {/* Mobile Menu Content (برای تکمیل باید اضافه شود) */}

        </header>
    )
}