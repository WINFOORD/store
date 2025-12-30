
import { motion } from 'framer-motion';

import { ChevronRight } from "lucide-react";

export function ProductSection({ title, subtitle, products, features, reverse = false }: any) {
  return (
    <section className={`py-12 sm:py-16 lg:py-20 ${reverse ? 'bg-[var(--color-tint-10)]' : 'bg-white'} relative overflow-hidden px-4 sm:px-6`}>
      <div className="max-w-7xl mx-auto">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center ${reverse ? 'lg:flex-row-reverse' : ''}`}>
          <motion.div
            initial={{ opacity: 0, x: reverse ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className={`text-right ${reverse ? 'lg:order-2' : ''}`}
          >
            <span className="text-[var(--color-base)] font-semibold tracking-wider uppercase text-xs sm:text-sm mb-2 block">
              کیفیت برتر
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--color-shade-80)] mb-4">
              {title}
            </h2>
            <p className="text-base sm:text-lg text-[var(--color-shade-60)] mb-6 leading-relaxed">{subtitle}</p>
            <div className="space-y-3 mb-6">
              {features.map((feature: any, i: number) => (
                <div key={i} className="flex items-center gap-3 justify-start">
                  <div className="w-2 h-2 rounded-full bg-[var(--color-base)] flex-shrink-0" />
                  <p className="text-[var(--color-shade-60)] text-sm">{feature}</p>
                </div>
              ))}
            </div>
            <button className="bg-[var(--color-base)] hover:bg-[var(--color-shade-20)] text-white px-6 py-3 rounded-lg text-sm sm:text-base font-semibold transition-colors inline-flex items-center gap-2">
              مشاهده محصولات
              <ChevronRight className="w-4 h-4" />
            </button>
          </motion.div>

          <div className={`grid grid-cols-2 gap-4 ${reverse ? 'lg:order-1' : ''}`}>
            <div className="col-span-2 relative h-[280px] sm:h-[320px] lg:h-[360px] rounded-2xl overflow-hidden group shadow-lg">
              <img src={products[0].img} alt="product" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-4 right-4 text-white text-right">
                <p className="text-xs sm:text-sm mb-1">{products[0].weight}</p>
                <h3 className="text-lg sm:text-xl font-bold mb-1">{products[0].title}</h3>
                <span className="text-sm font-bold text-[var(--color-tint-80)]">{products[0].price} تومان</span>
              </div>
            </div>
            {products.slice(1, 3).map((product: any) => (
              <div key={product.id} className="relative h-[160px] sm:h-[180px] lg:h-[200px] rounded-xl overflow-hidden group shadow-md">
                <img src={product.img} alt="product" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-3 right-3 text-white text-right">
                  <h4 className="font-semibold text-xs sm:text-sm mb-0.5">{product.title}</h4>
                  <span className="text-xs font-bold text-[var(--color-tint-80)]">{product.price} ت</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}