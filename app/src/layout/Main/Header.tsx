'use client';

import { useState, useEffect } from 'react';
import { Menu, X, ShoppingCart, Search, Sun, Moon, MapPin, User, Info, Heart, Gift, Truck, Phone, Mail, Clock, Sparkles, Leaf, PackageOpen, Flame, Candy, Nut } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import LanguageSwitcher from '../../ui/SwitchLang';
import { MegaMenuItem } from '../../ui/header/MegaMenuItem';
import { integrations, products, resources } from '../../lib/data';

// Mock Types & Data
type Locale = 'en' | 'fa' | 'ar';
type Dictionary = {
  seo: { homeTitle: string };
  header: { searchPlaceholder: string; cart: string; support: string };
  product: { category: string };
  footer: { customerService: string };
};

const mockDict: Dictionary = {
  seo: { homeTitle: 'PREMIUM | فروشگاه آجیل' },
  header: { 
    searchPlaceholder: 'جستجوی محصولات...', 
    cart: 'سبد خرید',
    support: 'راهنما'
  },
  product: { category: 'محصولات' },
  footer: { customerService: 'خدمات مشتریان' }
};







const aboutUsLinks = [
  { title: 'داستان ما', icon: Info, href: '/about/story', desc: 'تاریخچه برند' },
  { title: 'اعضای تیم', icon: User, href: '/about/team', desc: 'متخصصین حرفه‌ای' },
  { title: 'فرصت‌های شغلی', icon: Heart, href: '/about/careers', desc: 'همکاری با ما' },
];

const authLinks = [
  { title: 'ورود', icon: User, href: '/auth/login', desc: 'ورود به حساب کاربری' },
  { title: 'ثبت نام', icon: Sparkles, href: '/auth/signup', desc: 'عضویت رایگان' },
  { title: 'فراموشی رمز', icon: X, href: '/auth/reset', desc: 'بازیابی رمز عبور' },
];

// Mega Menu Item Component


// Nav Card Component
function NavCardItem({ title, desc, href, Icon, color = 'stone' }: { title: string; desc: string; href: string; Icon: any; color?: string }) {


  return (
    <a 
      href={href}
      className={`group block p-4 border-b hover:scale-[1.02] border-gray-300  rounded-xl transition-all duration-300 hover:shadow-xl`}
    >
      <div className="flex items-start gap-3">
        <Icon className="w-4 h-4 text-stone-400 mt-1 group-hover:text-stone-900 transition-colors" />
        <div>
          <h4 className="text-sm font-light text-stone-900 mb-1">{title}</h4>
          <p className="text-xs text-stone-500 font-light">{desc}</p>
        </div>
      </div>
    </a>
  );
}

// CTA Banner Component
function CTABanner({ title, subtitle, buttonText, href, fromColor, toColor }: { title: string; subtitle: string; buttonText: string; href: string; fromColor?: string; toColor?: string }) {
  return (
    <div className="mt-6 p-6 rounded-xl bg-stone-900 text-white relative overflow-hidden">
      <div className="absolute top-0 right-10 w-72 h-72  bg-white/5 rounded-full -mr-16 -mt-16" />
      <h4 className="text-lg font-light mb-2 relative z-10">{title}</h4>
      <p className="text-sm text-stone-400 mb-4 font-light relative z-10">{subtitle}</p>
      <a 
        href={href}
        className="inline-block text-xs flex justify-end tracking-[0.2em] uppercase border border-white/20 px-6 py-2 hover:bg-white hover:text-stone-900 transition-all duration-300 relative z-10"
      >
        {buttonText}
      </a>
    </div>
  );
}

// Stat Card Component

// Main Header Component
export  function HeaderNuts({ locale = 'fa', dict = mockDict }: { locale?: Locale; dict?: Dictionary }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

const headerClasses = `max-sm:rounded-none max-sm:pb-2 rounded-b-full fixed  bg-white backdrop-blur-xl top-0 z-50 transition-all left-1/2 -translate-x-1/2 w-full max-w-7xl mx-auto duration-500 ${
  isScrolled ? 'shadow-md bg-white/50' : ''
}`;
  

  return (
    
    <header className={headerClasses }>
      
      <div className="max-w-7xl mx-auto px-6">
   
  

        {/* Main Navigation Row */}
        <div className={`flex items-center justify-between ${isScrolled ? 'py-2' : 'pt-4 '} gap-4`}>
          
          {/* Logo */}
         <Link href="/" className="flex items-center gap-4 group">
  {/* Emblem - نشان مونوگرام */}
  <div className={`relative flex items-center justify-center transition-all duration-700 m-1 ease-in-out ${isScrolled ? 'w-10 h-10' : 'w-12 h-12'}`}>
    {/* Border Frame: یک قاب بسیار ظریف که با هاور می‌چرخد */}
    <div className="absolute inset-0 border border-stone-500 rotate-45 group-hover:rotate-90 transition-transform duration-1000" />
    
    {/* Background Square: تخت و با وقار */}
    <div className="absolute inset-[2px]  bg-stone-900 shadow-2xl transition-colors duration-500 group-hover:bg-stone-800" />
    
    {/* Initials: تایپوگرافی سریف سفید */}
    <span className={`relative font-serif text-white transition-all duration-500 ${isScrolled ? 'text-sm' : 'text-xl'} tracking-tighter`}>
      AS
    </span>
  </div>

  {/* Text Label - نام برند */}
  <div className="flex flex-col ">
    <div className={`flex items-baseline transition-all duration-500 ${isScrolled ? 'scale-80 origin-right' : 'scale-100'}`}>
      <span className="font-serif text-2xl tracking-tight text-stone-900">
        Ajil<span className=" font-light text-stone-500 ml-1">Saraye</span>
      </span>
    </div>
    
    <div className="flex items-center gap-2 overflow-hidden">
      <motion.div 
        initial={{ x: 20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        className="flex items-center gap-1"
      >
        <MapPin className="w-4 h-4 text-stone-400" />
        <span className="text-[12px] tracking-[0.4em] uppercase font-medium text-stone-500">
          Babol 
        </span>
      </motion.div>
    </div>
  </div>
</Link>

          {/* Search Bar - Desktop */}
          <div className="hidden lg:block flex-1 max-w-2xl">
            <div className="relative group">
              <input
                placeholder={dict.header.searchPlaceholder}
                className={`w-full rounded-sm px-6 pr-14 border-b outline-none focus:ring-1 focus:ring-stone-400 focus:bg-white transition-all duration-300 text-stone-900 font-light ${
                  isScrolled ? 'py-2.5' : 'py-2.5'
                }`}
              />
              <div className="absolute right-5 top-1/2 -translate-y-1/2">
                <Search className="w-4 h-4 text-stone-300 group-focus-within:text-stone-900 transition-colors" />
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            
                       <LanguageSwitcher currentLocale={locale} />
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2.5 rounded-sm bg-stone-50/50 border border-stone-200/50 hover:border-stone-300 transition-all duration-300 group"
            >
              {darkMode ? (
                <Sun className="w-4 h-4 text-amber-500 group-hover:rotate-45 transition-transform duration-300" />
              ) : (
                <Moon className="w-4 h-4 text-stone-600 group-hover:text-amber-600 transition-colors" />
              )}
            </button>

            {/* Cart Button */}
            <a
              href="/cart"
              className="hidden md:flex px-5 py-2.5 rounded-sm bg-gradient-to-r from-stone-700 transition-colors duration-300 to-stone-900 hover:from-stone-800 hover:to-stone-600 text-white items-center gap-2 shadow-lg shadow-amber-500/20 hover:shadow-amber-500/30   group"
            >
              <ShoppingCart className="w-4 h-4 group-hover:scale-110 transition-transform" />
              <span className="text-xs font-light tracking-wider uppercase">{dict.header.cart}</span>
            </a>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden p-2.5 rounded-sm border border-stone-200/50 hover:bg-stone-50 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-stone-700" /> : <Menu className="w-5 h-5 text-stone-700" />}
            </button>
          </div>
        </div>
        
      </div>

      <div className=" max-sm:hidden flex  mx-auto  ">
       
        {!isScrolled &&<div className="max-w-7xl mx-auto  ">
          
          <nav className="flex items-center justify-center gap-16">

            {/* Products Mega Menu */}
            <MegaMenuItem  title={dict.product.category} width="large">
              <div className="grid grid-cols-3 gap-3 mb-6">
                {products.map((item, i) => (
                  <NavCardItem key={i} {...item} Icon={item.icon} color="amber" />
                ))}
              </div>
              <CTABanner
                title="پک‌های هدیه لوکس"
                subtitle="برای مناسبت‌ها و هدیه‌های خاطره‌ساز"
                buttonText="خرید پک هدیه"
                href="/gifts"
                fromColor="from-amber-500"
                toColor="to-orange-500"
              />
            </MegaMenuItem>

            {/* Resources/Support Mega Menu */}
            <MegaMenuItem title={dict.header.support} width="medium">
              <div className="grid grid-cols-2 gap-3 mb-6">
                {resources.map((r, i) => (
                  <NavCardItem key={i} title={r.title} desc={r.desc} href={r.href} Icon={r.icon} color="rose" />
                ))}
              </div>
              <CTABanner
                title="راهنمای انتخاب مغزها"
                subtitle="طعم، بافت و کاربردها را حرفه‌ای بشناس"
                buttonText="مطالعه راهنما"
                href="/guides/buying-nuts"
                fromColor="from-rose-500"
                toColor="to-pink-500"
              />
            </MegaMenuItem>

            {/* Customer Service Mega Menu */}
            <MegaMenuItem title={dict.footer.customerService} width="medium">
              <div className="grid grid-cols-2 gap-3 mb-6">
                {integrations.map((item, i) => (
                  <NavCardItem key={i} title={item.title} desc={item.desc} href={item.href} Icon={item.icon} color="blue" />
                ))}
              </div>
             
            </MegaMenuItem>

            {/* About Us Mega Menu */}
            <MegaMenuItem title="درباره ما" width="medium">
              <div className="grid grid-cols-3 gap-3">
                {aboutUsLinks.map((item, i) => (
                  <NavCardItem key={i} title={item.title} desc={item.desc} href={item.href} Icon={item.icon} color="teal" />
                ))}
              </div>
            </MegaMenuItem>

            {/* Auth Mega Menu */}
            <MegaMenuItem title="ورود / ثبت نام" width="small">
              <div className="space-y-3">
                {authLinks.map((item, i) => (
                  <NavCardItem key={i} title={item.title} desc={item.desc} href={item.href} Icon={item.icon} color="indigo" />
                ))}
              </div>
            </MegaMenuItem>

          </nav>
        </div>}
    
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-stone-200 bg-white"
          >
            <div className="px-6 py-8 space-y-6 max-w-7xl mx-auto">
                          
              {/* Mobile Search */}
              <div className="relative">
                <input
                  placeholder={dict.header.searchPlaceholder}
                  className="w-full rounded-sm px-4 pr-12 py-3 bg-stone-50 border border-stone-200 outline-none focus:ring-1 focus:ring-stone-400 text-stone-900 font-light"
                />
                <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
              </div>

              {/* Mobile Menu Sections */}
              <div>
                <h3 className="text-xs tracking-[0.2em] uppercase text-stone-400 mb-4 font-light">محصولات</h3>
                <div className="space-y-3">
                  {products.slice(0, 4).map((item, i) => (
                    <a key={i} href={item.href} className="block text-sm text-stone-700 hover:text-stone-900 font-light">
                      {item.title}
                    </a>
                  ))}
                </div>
              </div>

              <div className="h-px bg-stone-200" />

              <div>
                <h3 className="text-xs tracking-[0.2em] uppercase text-stone-400 mb-4 font-light">خدمات</h3>
                <div className="space-y-3">
                  {integrations.slice(0, 3).map((item, i) => (
                    <a key={i} href={item.href} className="block text-sm text-stone-700 hover:text-stone-900 font-light">
                      {item.title}
                    </a>
                  ))}
                </div>
              </div>

              <div className="h-px bg-stone-200" />

              {/* Mobile Cart Button */}
              <a 
                href="/cart" 
                className="flex items-center justify-center gap-2 w-full py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-sm tracking-wider uppercase font-light rounded-sm"
              >
                <ShoppingCart className="w-4 h-4" />
                {dict.header.cart}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
          
    </header>
  );
}