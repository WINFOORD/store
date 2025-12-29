'use client';

import { useState, useEffect, useRef } from 'react';
import { Menu, X, ShoppingCart, Search, MapPin, User, Info, Heart, Sparkles, ShoppingBag, ChevronDown, ChevronUp, UserCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import LanguageSwitcher from '../../ui/SwitchLang';
import { MegaMenuItem } from '../../ui/header/MegaMenuItem';
import { integrations, products, resources } from '../../lib/data';
import { colors } from '../../colors';

// --- Nav Card Component ---
function NavCardItem({ title, desc, href, Icon }: { title: string; desc: string; href: string; Icon: any }) {
  return (
    <a 
      href={href}
      className="group block p-4 border-b border-[var(--color-tint-40)] hover:bg-[var(--color-tint-80)] rounded-xl transition-all duration-300 hover:shadow-lg"
    >
      <div className="flex items-start gap-3">
        <Icon className="w-5 h-5 text-[var(--color-shade-20)] mt-1 group-hover:text-[var(--color-shade-80)] transition-colors" />
        <div>
          <h4 className="text-sm font-bold text-[var(--color-shade-80)] mb-1">{title}</h4>
          <p className="text-xs text-[var(--color-shade-40)] font-light leading-relaxed">{desc}</p>
        </div>
      </div>
    </a>
  );
}

// --- Mobile Menu Section with Accordion ---
function MobileMenuSection({ title, items, icon: Icon }: { title: string; items: any[]; icon?: any }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-[var(--color-tint-40)] pb-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-3 text-right"
      >
        <div className="flex items-center gap-3">
          {Icon && <Icon className="w-5 h-5 text-[var(--color-shade-40)]" />}
          <span className="text-lg font-bold text-[var(--color-shade-80)]">{title}</span>
        </div>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-[var(--color-shade-40)]" />
        ) : (
          <ChevronDown className="w-5 h-5 text-[var(--color-shade-40)]" />
        )}
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="pt-2 pr-8 space-y-3">
              {items.map((item: any, i: number) => (
                <a
                  key={i}
                  href={item.href}
                  className="block py-2 text-[var(--color-shade-60)] hover:text-[var(--color-shade-80)] transition-colors"
                >
                  <div className="font-semibold text-sm mb-1">{item.title}</div>
                  <div className="text-xs text-[var(--color-shade-40)]">{item.desc}</div>
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// --- CTA Banner Component ---
function CTABanner({ title, subtitle, buttonText, href }: { title: string; subtitle: string; buttonText: string; href: string }) {
  return (
    <div className="mt-6 p-6 rounded-2xl bg-[var(--color-shade-80)] text-[var(--color-tint-80)] relative overflow-hidden shadow-xl">
      <div className="absolute top-0 right-10 w-64 h-64 bg-white/5 rounded-full -mr-16 -mt-16 blur-3xl" />
      <h4 className="text-lg font-black mb-2 relative z-10">{title}</h4>
      <p className="text-sm text-[var(--color-tint-40)] mb-5 font-light relative z-10">{subtitle}</p>
      <a 
        href={href}
        className="inline-block text-xs font-bold tracking-widest uppercase border border-[var(--color-base)]/40 px-8 py-3 rounded-full hover:bg-[var(--color-base)] hover:text-[var(--color-shade-80)] transition-all duration-500 relative z-10"
      >
        {buttonText}
      </a>
    </div>
  );
}

export function HeaderNuts({ locale = 'fa', dict = {} }: any) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 50);
      lastScrollY.current = currentScrollY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const headerClasses = `fixed left-1/2 -translate-x-1/2 z-[150] transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] 
    ${isScrolled 
      ? 'top-3 w-[95%] max-w-5xl rounded-full bg-[var(--color-shade-40)]/60 backdrop-blur-2xl py-2 shadow-2xl' 
      : 'top-0 w-full max-w-7xl backdrop-blur-xl pt-2'
    }`;

  const aboutUsLinks = [
    { title: 'داستان ما', icon: Info, href: '/about/story', desc: 'تاریخچه برند' },
    { title: 'اعضای تیم', icon: User, href: '/about/team', desc: 'متخصصین حرفه‌ای' },
    { title: 'فرصت‌های شغلی', icon: Heart, href: '/about/careers', desc: 'همکاری با ما' },
  ];

  return (
    <header className={headerClasses} style={colors as any} dir="rtl">
      <div className="w-full mx-auto px-4 sm:px-8">
        {/* Row 1: Logo, Search, Actions */}
        <div className="flex items-center justify-between gap-3 sm:gap-6">
          
          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-2 sm:gap-4 group">
            <div className={`relative flex items-center justify-center transition-all mt-1 duration-700 ease-in-out ${isScrolled ? 'w-8 h-8 sm:w-10 sm:h-10' : 'w-8 h-8 sm:w-10 sm:h-10'}`}>
              <div className="absolute inset-0 border border-[var(--color-shade-20)] rotate-45 group-hover:rotate-90 transition-transform duration-1000" />
              <div className="absolute inset-[2px] bg-[var(--color-shade-60)] shadow-2xl transition-colors" />
              <span className={`relative font-serif text-white transition-all duration-500 ${isScrolled ? 'text-xs sm:text-sm' : 'text-sm sm:text-xl'} tracking-tighter`}>AS</span>
            </div>

            <div className="flex flex-col">
              <span className={`font-serif leading-none transition-all duration-500 ${isScrolled ? 'text-sm sm:text-lg' : 'text-sm sm:text-xl'} font-black ${isScrolled ? 'text-[var(--color-shade-40)]' : 'text-[var(--color-shade-40)] tracking-[0.1em] sm:tracking-[0.2em]'}`}>
                Ajil<span className={`${isScrolled ? 'text-white' : 'text-[var(--color-shade-20)]'} font-light ml-1`}>Saraye</span>
              </span>
              <div className="flex items-center gap-1 overflow-hidden">
                <MapPin className={`w-2.5 h-2.5 sm:w-3 sm:h-3 ${isScrolled ? 'text-[var(--color-shade-40)]' : 'text-[var(--color-shade-40)]'}`} />
                <span className={`text-[10px] sm:text-[12px] tracking-tight sm:tracking-[1em] uppercase font-bold ${isScrolled ? 'text-white/50' : 'text-[var(--color-shade-40)]'}`}>Babol</span>
              </div>
            </div>
          </Link>

          {/* Desktop Search Bar */}
          <div className="hidden lg:block flex-1 max-w-xl">
            <div className="relative group">
              <input
                placeholder="جستجوی طعم‌های خاص..."
                className="w-full rounded-full px-10 py-3 outline-none transition-all duration-300 border bg-white/10 border-[var(--color-tint-20)] text-[var(--color-shade-60)] focus:border-[var(--color-base)]"
              />
              <Search className={`absolute right-5 top-1/2 -translate-y-1/2 w-4 h-4 ${isScrolled ? 'text-white/40' : 'text-[var(--color-shade-40)]'}`} />
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Language Switcher - Hidden on mobile */}
            <div className="hidden md:block">
              <LanguageSwitcher currentLocale={locale} />
            </div>
            
            {/* User Login Icon - Hidden on mobile, shown on desktop */}
            <Link 
              href="/login" 
              className={`hidden md:flex p-2 rounded-full transition-colors ${isScrolled ? 'text-white hover:bg-white/10' : 'text-[var(--color-shade-40)] hover:bg-[var(--color-shade-40)]/10'}`}
              title="ورود / ثبت نام"
            >
              <UserCircle className="w-5 h-5" />
            </Link>

            {/* Mobile User Icon - Shown only on mobile */}
            <Link 
              href="/login" 
              className={`md:hidden flex p-2 rounded-full transition-colors ${isScrolled ? 'text-white' : 'text-[var(--color-shade-40)]'}`}
            >
              <UserCircle className="w-4 h-4 sm:w-5 sm:h-5" />
            </Link>

            {/* Mobile Search Icon */}
            <button
              className={`lg:hidden p-2 rounded-full transition-colors ${isScrolled ? 'text-white' : 'text-[var(--color-shade-40)]'}`}
              onClick={() => setMobileSearchOpen(!mobileSearchOpen)}
            >
              <Search className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>

            {/* Cart */}
            <Link href="/cart" className={`group relative flex items-center gap-2 px-3 sm:px-6 py-2 sm:py-2.5 rounded-full transition-all duration-300 ${
              isScrolled ? 'text-white' : 'text-[var(--color-shade-40)]'
            }`}>
              <ShoppingCart className="w-4 h-4 transition-transform group-hover:-rotate-12" />
              <span className="text-xs sm:text-sm font-black tracking-tight hidden sm:inline">سبد خرید</span>
            </Link>

            {/* Mobile Menu Button */}
            <button
              className={`md:hidden p-2 rounded-full border transition-colors ${isScrolled ? 'border-white/20 text-white' : 'border-[var(--color-shade-20)] text-[var(--color-shade-80)]'}`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Search Bar (Expandable) */}
        <AnimatePresence>
          {mobileSearchOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="lg:hidden overflow-hidden mt-3"
            >
              <div className="relative">
                <input
                  placeholder="جستجو..."
                  className="w-full rounded-full px-10 py-2.5 text-sm outline-none bg-white/10 border border-[var(--color-tint-20)] text-[var(--color-shade-60)] focus:border-[var(--color-base)]"
                  autoFocus
                />
                <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--color-shade-40)]" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Row 2: Navigation Mega Menus (Desktop Only) */}
        {!isScrolled && (
          <nav className="hidden md:flex items-center justify-center gap-20 lg:gap-40 mt-4">
            
            <MegaMenuItem title="محصولات" width="large">
              <div className="grid grid-cols-3 gap-4 mb-6">
                {products.map((item: any, i: number) => (
                  <NavCardItem key={i} title={item.title} desc={item.desc} href={item.href} Icon={item.icon} />
                ))}
              </div>
              <CTABanner title="پک‌های هدیه لوکس" subtitle="برای مناسبت‌ها و هدیه‌های خاطره‌ساز" buttonText="خرید پک هدیه" href="/gifts" />
            </MegaMenuItem>

            <MegaMenuItem title="راهنما و پشتیبانی" width="medium">
              <div className="grid grid-cols-2 gap-4 mb-6">
                {resources.map((r: any, i: number) => (
                  <NavCardItem key={i} title={r.title} desc={r.desc} href={r.href} Icon={r.icon} />
                ))}
              </div>
            </MegaMenuItem>

            <MegaMenuItem title="خدمات ما" width="medium">
              <div className="grid grid-cols-2 gap-4">
                {integrations.map((item: any, i: number) => (
                  <NavCardItem key={i} title={item.title} desc={item.desc} href={item.href} Icon={item.icon} />
                ))}
              </div>
            </MegaMenuItem>

            <MegaMenuItem title="درباره ما" width="small">
              <div className="flex flex-col gap-2">
                {aboutUsLinks.map((item: any, i: number) => (
                  <NavCardItem key={i} title={item.title} desc={item.desc} href={item.href} Icon={item.icon} />
                ))}
              </div>
            </MegaMenuItem>

          </nav>
        )}
      </div>

      {/* Mobile Menu Overlay - Enhanced */}
      <AnimatePresence>
        {mobileMenuOpen && (
       <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden fixed inset-0 bg-[var(--color-tint-80)] z-[110] p-6 overflow-y-auto"
          >
            {/* Header */}
            <div className="sticky top-0 bg-[var(--color-tint-80)] z-30 border-b border-[var(--color-tint-40)] px-6 py-4">
              <div className="flex justify-between items-center">
                <div className="font-serif text-2xl font-black text-[var(--color-shade-80)] uppercase tracking-tighter">منو</div>
                <button onClick={() => setMobileMenuOpen(false)} className="p-2 bg-[var(--color-shade-80)] text-white rounded-full hover:rotate-90 transition-transform duration-300">
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>
            
            {/* Menu Content */}
            <div className="px-6 py-6 space-y-6">
              
              {/* Products Section */}
              <MobileMenuSection 
                title="محصولات" 
                items={products}
                icon={Sparkles}
              />

              {/* Resources Section */}
              <MobileMenuSection 
                title="راهنما و پشتیبانی" 
                items={resources}
                icon={Info}
              />

              {/* Integrations Section */}
              <MobileMenuSection 
                title="خدمات ما" 
                items={integrations}
                icon={ShoppingBag}
              />

              {/* About Us Section */}
              <MobileMenuSection 
                title="درباره ما" 
                items={aboutUsLinks}
                icon={Heart}
              />

              {/* Login Button for Mobile */}
              <div className="pt-2">
                <Link 
                  href="/login" 
                  className="flex items-center justify-center gap-3 w-full py-3 bg-[var(--color-shade-40)] text-white rounded-2xl font-bold text-base shadow-lg hover:shadow-xl transition-all duration-300"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <UserCircle className="w-5 h-5" />
                  ورود / ثبت نام
                </Link>
              </div>

              {/* CTA Section */}
              <div className="pt-2">
                <Link 
                  href="/cart" 
                  className="flex items-center justify-center gap-3 w-full py-3 bg-gradient-to-r from-[var(--color-shade-60)] to-[var(--color-shade-80)] text-white rounded-2xl font-black text-md shadow-xl hover:shadow-2xl transition-all duration-300"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <ShoppingCart className="w-6 h-6" />
                  مشاهده سبد خرید
                </Link>
              </div>

              {/* Language Switcher for Mobile */}
              <div className="pt-4 flex justify-center">
                <LanguageSwitcher currentLocale={locale} />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}