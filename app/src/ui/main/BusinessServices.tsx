import { motion} from 'framer-motion';
import { Briefcase, ChevronRight, Truck } from 'lucide-react';

export function BusinessServices() {
  return (
    <section className="py-12  sm:py-16 lg:py-20 bg-transparent px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <header className="mb-8 sm:mb-12 text-center">
          <span className="text-[var(--color-base)] font-semibold tracking-wider uppercase text-xs sm:text-sm mb-2 block">
            خدمات ویژه
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-shade-80)]">
            سفارشات سازمانی و عمده
          </h2>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          <motion.div
            whileHover={{ y: -5 }}
            className="p-6 sm:p-8 bg-white shadow-md hover:shadow-xl border border-[var(--color-tint-40)] rounded-xl group transition-all text-right"
          >
            <div className="flex items-center gap-3 mb-4">
              <Briefcase className="w-8 h-8 sm:w-10 sm:h-10 text-[var(--color-base)]" />
              <h3 className="text-xl sm:text-2xl font-bold text-[var(--color-shade-80)]">پک‌های هدیه سازمانی</h3>
            </div>
            <p className="text-sm sm:text-base text-[var(--color-shade-60)] leading-relaxed mb-6">
              طراحی و شخصی‌سازی پک‌های هدیه با لوگوی شرکت شما. گزینه‌ای عالی برای هدایای تجاری و مناسبت‌های خاص
            </p>
            <button className="text-sm font-semibold text-[var(--color-base)] hover:text-[var(--color-shade-20)] transition-colors inline-flex items-center gap-2">
              درخواست مشاوره رایگان
              <ChevronRight className="w-4 h-4" />
            </button>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="p-6 sm:p-8 bg-white shadow-md hover:shadow-xl border border-[var(--color-tint-40)] rounded-xl group transition-all text-right"
          >
            <div className="flex items-center gap-3 mb-4">
              <Truck className="w-8 h-8 sm:w-10 sm:h-10 text-[var(--color-base)]" />
              <h3 className="text-xl sm:text-2xl font-bold text-[var(--color-shade-80)]">خرید عمده</h3>
            </div>
            <p className="text-sm sm:text-base text-[var(--color-shade-60)] leading-relaxed mb-6">
              تأمین مستقیم برای رستوران‌ها، کافه‌ها و فروشگاه‌ها با قیمت ویژه و تضمین کیفیت
            </p>
            <button className="text-sm font-semibold text-[var(--color-base)] hover:text-[var(--color-shade-20)] transition-colors inline-flex items-center gap-2">
              دریافت لیست قیمت
              <ChevronRight className="w-4 h-4" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}