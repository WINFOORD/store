"use client"
import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { 
  Plus, Heart, ChevronLeft, ChevronRight, ShoppingBag, 
  Search, Menu, Star, Clock, MapPin, ArrowLeft, Gem,
  Badge
} from 'lucide-react';
import {colors} from '../colors';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}



// --- دیتای محصولات (گسترش یافته) ---
const PRODUCTS = {
  nuts: [
    { id: 1, title: "پسته اکبری زعفرانی", price: "۸۹۰,۰۰۰", weight: "۵۰۰ گرم", img: "https://images.unsplash.com/photo-1531300185372-b7cbe2eddf0b?w=600" },
    { id: 2, title: "بادام کاغذی شور", price: "۴۵۰,۰۰۰", weight: "۵۰۰ گرم", img: "https://images.unsplash.com/photo-1508747703725-719777637510?w=600" },
    { id: 3, title: "فندق برشته ممتاز", price: "۵۲۰,۰۰۰", weight: "۵۰۰ گرم", img: "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?w=600" },
  ],
  chocolates: [
    { id: 4, title: "ترافل دست‌ساز فرانسوی", price: "۷۸۰,۰۰۰", weight: "باکس ۱۶ عددی", img: "https://images.unsplash.com/photo-1549007994-cb92caebd54b?w=600" },
    { id: 5, title: "شکلات تلخ ۸۵٪ ارگانیک", price: "۳۲۰,۰۰۰", weight: "۲۰۰ گرم", img: "https://images.unsplash.com/photo-1511381939415-e44015466834?w=600" },
  ],
  pastries: [
    { id: 6, title: "باقلوا استانبولی وی‌آی‌پی", price: "۶۵۰,۰۰۰", weight: "۱ کیلوگرم", img: "https://images.unsplash.com/photo-1519676867240-f031ee04a703?w=600" },
    { id: 7, title: "سوهان عسلی کره‌ای", price: "۲۸۰,۰۰۰", weight: "۵۰۰ گرم", img: "https://images.unsplash.com/photo-1590080875515-8a03b334752a?w=600" },
  ],
  giftPacks: [
    { id: 8, title: "پک هدیه «فیروزه»", price: "۳,۴۰۰,۰۰۰", weight: "ترکیب آجیل و زعفران", img: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=600" },
    { id: 9, title: "باکس لوکس یلدا", price: "۱,۹۵۰,۰۰۰", weight: "بسته‌بندی چوبی", img: "https://images.unsplash.com/photo-1608797178974-15b35a64ede9?w=600" },
  ]

  };



// --- کامپوننت کارت محصول لوکس ---
function ProductCard({ p }: { p: any }) {
  return (
    <motion.div 
      whileHover={{ y: -12 }}
      className="flex-shrink-0 w-[300px] group bg-[var(--color-tint-80)] rounded-[40px] p-4 border border-[var(--color-tint-40)] shadow-sm hover:shadow-2xl transition-all duration-500"
    >
      <div className="relative h-[320px] rounded-[32px] overflow-hidden mb-6">
        <img src={p.img} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt={p.title} />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-shade-80)]/40 to-transparent" />
        <button className="absolute top-4 left-4 w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white hover:text-[var(--color-shade-80)] transition-all">
          <Heart className="w-5 h-5" />
        </button>
      </div>
      <div className="px-2 text-right">
        <h3 className="text-[var(--color-shade-80)] font-black text-xl mb-1">{p.title}</h3>
        <p className="text-[var(--color-shade-40)] text-sm mb-4">{p.weight}</p>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-black text-[var(--color-shade-60)]">{p.price} <small className="text-xs">تومان</small></span>
          <button className="bg-[var(--color-shade-80)] text-white w-12 h-12 rounded-2xl flex items-center justify-center hover:bg-[var(--color-shade-60)] transition-colors">
            <Plus className="w-6 h-6" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default function UltimateLuxuryShop() {
  const container = useRef(null);

  useEffect(() => {
    // انیمیشن‌های ظهور بخش‌ها
    const sections = gsap.utils.toArray('.reveal-section');
    sections.forEach((section: any) => {
      gsap.from(section, {
        scrollTrigger: {
          trigger: section,
          start: "top 85%",
        },
        y: 60,
        opacity: 0,
        duration: 1.5,
        ease: "power4.out"
      });
    });
  }, []);

  return (
    <div className="h-screen bg-[var(--color-tint-80)] overflow-hidden" dir="rtl" style={colors as any}>
      
 

      {/* 2. Hero Section (Ultra High End) */}



    <section className="py-24 bg-[var(--color-tint-40)] ">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          <div className="lg:col-span-1 reveal">
            <Badge>شکلات‌های دست‌ساز</Badge>
            <h2 className="text-5xl font-black text-[#2d2822] mt-4 mb-6 leading-tight">شیرینیِ <br /> لحظات خاص</h2>
            <p className="text-[#5a4f44] mb-8 leading-loose">ما با ترکیب کاکائوی اصیل بلژیکی و مغزهای تازه، طعمی را خلق کرده‌ایم که در هیچ جای دیگری تجربه نخواهید کرد.</p>
            <button className="flex items-center gap-3 text-[#2d2822] font-black group">
              مشاهده همه شکلات‌ها
              <div className="w-12 h-px bg-[#2d2822] group-hover:w-20 transition-all" />
            </button>
          </div>
          <div className="lg:col-span-2 flex gap-8 overflow-x-auto pb-6 scrollbar-hide">
                           {PRODUCTS.nuts.map(p => <ProductCard key={p.id} p={p} />)}

                 {PRODUCTS.nuts.map(p => <ProductCard key={p.id} p={p} />)}

          </div>
        </div>
      </section>
      {/* 3. آجیل و خشکبار (Horizontal Scroll) */}
      <section className="py-24 reveal-section bg-[var(--color-tint-60)]">
        <div className="px-6 md:px-20 flex items-end justify-between mb-12">
          <div>
            <h2 className="text-5xl font-black text-[var(--color-shade-80)] mb-4 uppercase">The Nuts</h2>
            <div className="w-24 h-2 bg-[var(--color-base)] rounded-full" />
          </div>
          <button className="text-[var(--color-shade-40)] font-bold flex items-center gap-2 hover:text-[var(--color-shade-80)] transition-colors">
            مشاهده همه <ArrowLeft className="w-5 h-5" />
          </button>
        </div>
        <div className="flex gap-10 overflow-x-auto px-6 md:px-20 pb-10 scrollbar-hide">
          {PRODUCTS.nuts.map(p => <ProductCard key={p.id} p={p} />)}
          {PRODUCTS.nuts.map(p => <ProductCard key={p.id + 10} p={p} />)} {/* تکرار برای پر شدن اسکرول */}
        </div>
      </section>

      {/* 4. بخش ویژه شکلات (Luxury Chocolate Bar) */}
      <section className="py-24 bg-[var(--color-shade-80)] text-[var(--color-tint-80)] reveal-section relative overflow-hidden">
        <div className="absolute right-0 top-0 w-full h-full opacity-10 pointer-events-none">
          <img src="https://www.transparenttextures.com/patterns/carbon-fibre.png" alt="pattern" />
        </div>
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <img src={PRODUCTS.chocolates[0].img} className="rounded-3xl h-80 w-full object-cover shadow-2xl" />
              <img src={PRODUCTS.chocolates[1].img} className="rounded-3xl h-80 w-full object-cover shadow-2xl mt-12" />
            </div>
          </div>
          <div>
            <span className="text-[var(--color-base)] font-bold tracking-widest uppercase">The Chocolate Lounge</span>
            <h2 className="text-6xl font-black mt-4 mb-8">شکلات‌هایی برای <br /> لحظات ناب</h2>
            <p className="text-xl text-[var(--color-tint-40)] mb-10 leading-relaxed">
              ترکیب کاکائوی ۷۰٪ دست‌چین شده با مغزهای برشته شده در دمای ملایم. لذتی که تکرار نخواهد شد.
            </p>
            <div className="flex gap-6">
              {PRODUCTS.chocolates.map(p => (
                <div key={p.id} className="bg-white/10 backdrop-blur-md p-6 rounded-[30px] border border-white/10">
                  <h4 className="font-bold text-lg mb-2">{p.title}</h4>
                  <p className="text-[var(--color-base)] font-black">{p.price} تومان</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. شیرینی و پک‌های هدیه (Grid Layout) */}
      <section className="py-24 px-6 md:px-20 reveal-section">
        <h2 className="text-5xl font-black text-[var(--color-shade-80)] text-center mb-20 uppercase tracking-tighter">Gifts & Sweets</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[...PRODUCTS.pastries, ...PRODUCTS.giftPacks].map(p => (
             <ProductCard key={p.id} p={p} />
          ))}
        </div>
      </section>

      {/* 6. اعتماد و ارزش‌ها (Clean & Professional) */}
      <section className="py-20 border-y border-[var(--color-tint-40)] bg-[var(--color-tint-60)]/30 reveal-section">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-between gap-12">
          <div className="flex items-center gap-4">
            <Clock className="w-10 h-10 text-[var(--color-shade-40)]" />
            <div>
              <h4 className="font-black text-[var(--color-shade-80)]">تحویل اکسپرس</h4>
              <p className="text-sm text-[var(--color-shade-40)]">ارسال زیر ۳ ساعت در تهران</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <MapPin className="w-10 h-10 text-[var(--color-shade-40)]" />
            <div>
              <h4 className="font-black text-[var(--color-shade-80)]">مبدا مستقیم</h4>
              <p className="text-sm text-[var(--color-shade-40)]">خرید مستقیم از کشاورز</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Star className="w-10 h-10 text-[var(--color-shade-40)]" />
            <div>
              <h4 className="font-black text-[var(--color-shade-80)]">ضمانت بازگشت</h4>
              <p className="text-sm text-[var(--color-shade-40)]">بدون قید و شرط</p>
            </div>
          </div>
        </div>
      </section>

    
    </div>
  );
}