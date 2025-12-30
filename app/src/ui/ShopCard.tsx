"use client"
import { useState } from 'react';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronDown, Truck, Briefcase, Award } from 'lucide-react';
import { colors } from '../colors';
import { ProductCard } from './Card';
import { TrustedCompaniesSection } from './main/partnersSection';
import { BusinessServices } from './main/BusinessServices';
import { FAQSection } from './main/Faq';
import { ProductSection } from './main/ProductSection';
import {  PRODUCTSCard, PRODUCTSection } from '../lib/data';

function FreshNutsSection() {
  <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>

  return (
    <section className="py-16 bg-gradient-to-br from-[var(--color-tint-10)] to-white" style={colors as React.CSSProperties} dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="mb-12 text-center">
          <span className="text-[var(--color-base)] font-semibold tracking-wider uppercase text-sm mb-2 block">
            محصولات پرفروش
          </span>
          <h2 className="text-4xl font-bold text-[var(--color-shade-80)] mb-3">
            آجیل و خشکبار تازه
          </h2>
          <p className="text-[var(--color-shade-60)] max-w-2xl mx-auto">
            بهترین کیفیت را با مناسب‌ترین قیمت تجربه کنید
          </p>
        </header>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
          {PRODUCTSection.freshNuts.map((product, i) => (
            <ProductCard
              key={product.id}
              variant="main"
              index={i}
              title={product.title}
              price={product.price}
              originalPrice={product.originalPrice}
              unit={product.unit}
              image={product.image}
              bgColor={product.bgColor}
              score={product.score}
              reviews={product.reviews}
              isOrganic={product.isOrganic}
              note={product.note}
              discount={product.discount}
              category={product.category}
            />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="bg-[var(--color-base)] hover:bg-[var(--color-shade-20)] text-white px-8 py-3.5 rounded-xl text-base font-semibold transition-all duration-300 hover:shadow-xl hover:scale-105">
            مشاهده همه محصولات
          </button>
        </div>
      </div>
    </section>
  );
}

export default function AjilSarayShop() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className=" bg-linear-to-t from-[var(--color-tint-10)] to-[var(--color-tint-10)]" dir="rtl" style={colors as React.CSSProperties}>
      <main>
        <FreshNutsSection />

        <ProductSection
          title="محصولات ارگانیک"
          subtitle="محصولات کاملاً ارگانیک با گواهینامه‌های بین‌المللی. کشت بدون سموم شیمیایی"
          products={PRODUCTSCard.organic}
          features={[
            "گواهینامه EU Organic",
            "کشت بدون سموم",
            "حمایت از کشاورزی پایدار"
          ]}
          reverse={false}
        />
        <ProductSection
          title="میوه‌های خشک طبیعی"
          subtitle="میوه‌های خشک شده با فرآیند طبیعی بدون افزودنی. سرشار از ویتامین و مواد مغذی"
          products={PRODUCTSCard.dried}
          features={[
            "خشک شده به روش طبیعی",
            "بدون شکر افزودنی",
            "غنی از ویتامین و آنتی اکسیدان"
          ]}
          reverse={true}
        />


        <ProductSection
          title="محصولات ارگانیک"
          subtitle="محصولات کاملاً ارگانیک با گواهینامه‌های بین‌المللی. کشت بدون سموم شیمیایی"
          products={PRODUCTSCard.organic}
          features={[
            "گواهینامه EU Organic",
            "کشت بدون سموم",
            "حمایت از کشاورزی پایدار"
          ]}
          reverse={false}
        />

        <TrustedCompaniesSection />
        <BusinessServices />
        <FAQSection />
      </main>
    </div>
  );
}