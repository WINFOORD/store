'use client'

import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from 'framer-motion';

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
const FAQS = [
  { q: "آیا محصولات شما دارای تضمین تازگی هستند؟", a: "بله، تمامی محصولات ما به صورت هفتگی برشته‌کاری می‌شوند و در بسته‌بندی‌های ایزوله برای حفظ عطر و طعم نگهداری می‌گردند." },
  { q: "شرایط ارسال به شهرستان چگونه است؟", a: "ارسال برای تهران از طریق پیک اختصاصی (۳ ساعته) و برای تمام ایران از طریق پست پیشتاز در بسته‌بندی‌های مقاوم انجام می‌شود." },
  { q: "امکان شخصی‌سازی باکس‌های هدیه وجود دارد؟", a: "بله، در بخش سفارش سازمانی می‌توانید نوع محصول، چیدمان و حتی حک لوگو روی جعبه را انتخاب کنید." },
];

  return (
     <section className="py-20 sm:py-32 lg:py-40 bg-white px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
       <div className="text-center mb-8 sm:mb-12">
          <span className="text-[var(--color-base)] font-semibold tracking-wider uppercase text-xs sm:text-sm mb-2 block">
            راهنما
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-shade-80)]">
            سوالات متداول
          </h2>
        </div>
        <div className="space-y-3 sm:space-y-4">
          {FAQS.map((faq, i) => (
            <div key={i} className="border-b border-[var(--color-tint-40)]">
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)} 
                className="w-full py-4 sm:py-6 flex justify-between items-center text-right gap-4"
              >
                <span className="text-sm sm:text-base font-medium text-[var(--color-shade-60)]">{faq.q}</span>
                <ChevronDown className={`w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 transition-transform text-[var(--color-shade-20)] ${openIndex === i ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }} 
                    animate={{ height: 'auto', opacity: 1 }} 
                    exit={{ height: 0, opacity: 0 }} 
                    className="overflow-hidden"
                  >
                    <p className="pb-4 sm:pb-6 text-sm sm:text-base text-[var(--color-shade-60)]/70 font-light leading-relaxed">{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
