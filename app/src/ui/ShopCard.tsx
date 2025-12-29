"use client"
import { useState, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import { 
  Plus, Heart, ArrowLeft, Star, Clock, MapPin, ChevronRight, Sparkles, Award, ShoppingBag,
  ChevronDown,
  Truck,
  Briefcase
} from 'lucide-react';
import { colors } from '../colors';
import OptimizedImage from './optimizeImage';

// --- Section 1: Hero-style Fresh Nuts ---
function FreshNutsSection() {
  const sectionRef = useRef(null);
  return (
    <section ref={sectionRef} className="py-20 sm:py-32 lg:py-40 bg-[var(--color-tint-60)] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-[0.03] pointer-events-none select-none">
        <h2 className="text-[25vw] font-black uppercase tracking-tighter">Premium</h2>
      </div>

      <div className="mx-auto px-4 sm:px-8 md:px-20 lg:px-60 relative z-10">
        <header className="mb-12 sm:mb-16 lg:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6 sm:gap-8">
          <div className="max-w-xl">
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-[var(--color-shade-60)] font-medium tracking-[0.2em] uppercase text-xs sm:text-sm mb-3 sm:mb-4 block"
            >
               popular 
            </motion.span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-[var(--color-shade-60)] leading-tight">
              پرفروش <br /> <span className="font-serif text-[var(--color-shade-20)]">ترین ها</span>
            </h2>
          </div>
          <p className="text-[var(--color-shade-60)] max-w-xs text-base sm:text-lg border-r-2 border-[var(--color-shade-20)] pr-4 sm:pr-6">
            تجربه‌ای فراتر از طعم، ادای احترامی به اصالت و کیفیت محصولات مزارع برتر.
          </p>
        </header>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 w-full gap-3 sm:gap-4 lg:gap-8">
          {PRODUCTS.freshNuts.slice(0, 5).map((product, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group"
            >
              <div className="relative aspect-[3/5] overflow-hidden bg-[#D9D9D9] rounded-xl sm:rounded-2xl shadow-lg sm:shadow-2xl">
                <motion.img
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 1.2, ease: [0.33, 1, 0.68, 1] }}
                  src={product.img}
                  className="w-full h-full object-cover grayscale-[40%] group-hover:grayscale-0 transition-all"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-2 sm:bottom-4 left-0 w-full p-3 sm:p-6 lg:p-8 mb-2 sm:mb-4 translate-y-8 group-hover:translate-y-0 transition-transform duration-500 text-right">
                    <p className="text-[var(--color-tint-40)] text-xs sm:text-sm">{product.weight}</p>
                    <h3 className="text-sm sm:text-lg lg:text-xl font-light text-white">{product.title}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// --- Section 3: High-End Chocolate Feature ---
function ChocolatesSection() {
  return (
    <section className="py-20 sm:py-32 lg:py-40 bg-[var(--color-tint-60)] px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-20 lg:gap-32 items-center">
          <div className="order-2 lg:order-1 relative">
            <div className="absolute -top-6 sm:-top-10 -right-6 sm:-right-10 w-32 sm:w-48 lg:w-64 h-32 sm:h-48 lg:h-64 bg-[var(--color-tint-80)] rounded-full -z-10" />
            <motion.div 
              initial={{ clipPath: 'inset(100% 0 0 0)' }}
              whileInView={{ clipPath: 'inset(0% 0 0 0)' }}
              transition={{ duration: 1.5, ease: [0.77, 0, 0.175, 1] }}
              className="relative aspect-square overflow-hidden rounded-sm"
            >
              <OptimizedImage fill alt='image' src="https://images.unsplash.com/photo-1549007994-cb92caebd54b?w=800" className="w-full h-full object-cover" />
            </motion.div>
            
            <motion.div 
              whileHover={{ y: -10 }} 
              className="hidden lg:block absolute bottom-6 lg:bottom-10 -left-6 lg:-left-10 bg-white p-6 lg:p-8 shadow-2xl max-w-xs border-t-4 border-[var(--color-shade-20)]"
            >
              <h4 className="font-bold text-lg lg:text-xl mb-2 text-[var(--color-shade-60)]">فراتر از یک طعم</h4>
              <p className="text-xs lg:text-sm text-gray-500 leading-relaxed font-light">هر ترافل ما حاصل ۴۸ ساعت فرآیند هنرمندانه و ترکیب کاکائوی خالص است.</p>
            </motion.div>
          </div>
          
          <div className="order-1 lg:order-2 text-right">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extralight mb-6 sm:mb-8 text-[var(--color-shade-60)]">
              شکلات‌های <br /> <span className="font-serif italic tracking-tight">Artisanal</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-600 mb-8 sm:mb-12 leading-relaxed font-light">
              ما در خلق هر قطعه شکلات، تعادلی ظریف میان تلخی کاکائو و شیرینی خاطرات برقرار کرده‌ایم. مجموعه‌ای برای کسانی که به جزئیات اهمیت می‌دهند.
            </p>
            <div className="space-y-6 sm:space-y-8 mb-8 sm:mb-12">
              {['دست‌ساز و ارگانیک', 'بسته‌بندی زیست‌تخریب‌پذیر', 'ارسال در بسته‌بندی خنک'].map((text, i) => (
                <div key={i} className="flex items-center gap-3 sm:gap-4 group justify-start">
                  <div className="w-2 h-2 rounded-full bg-[var(--color-shade-20)] group-hover:w-6 sm:group-hover:w-8 transition-all duration-300" />
                  <span className="text-xs sm:text-sm uppercase tracking-wider sm:tracking-widest text-[var(--color-shade-60)]">{text}</span>
                </div>
              ))}
            </div>
            <button className="px-8 sm:px-12 py-4 sm:py-5 bg-[var(--color-shade-60)] text-white hover:bg-[var(--color-shade-20)] transition-colors duration-500 text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.3em] uppercase rounded-lg">
              کاوش کلکسیون
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

// --- Trusted Companies Section - Sophisticated & Mature ---

// لوگوهای فیک با استفاده از تصاویر Placeholder که شبیه لوگوهای واقعی هستند
const PARTNERS = [
  { id: 1, name: "Luxury Group", logo: "https://cdn.worldvectorlogo.com/logos/chanel-2.svg" },
  { id: 2, name: "Tech Pioneers", logo: "https://cdn.worldvectorlogo.com/logos/tesla-9.svg" },
  { id: 3, name: "Global Finance", logo: "https://cdn.worldvectorlogo.com/logos/goldman-sachs-1.svg" },
  { id: 4, name: "Elite Hotels", logo: "https://cdn.worldvectorlogo.com/logos/ritz-carlton.svg" },
  { id: 5, name: "Aviation Corp", logo: "https://cdn.worldvectorlogo.com/logos/emirates-3.svg" },
  { id: 6, name: "Design Studio", logo: "https://cdn.worldvectorlogo.com/logos/hermes-france.svg" },
];

export function TrustedCompaniesSection() {
  return (
    <section className="py-32 bg-[var(--color-tint-80)] relative overflow-hidden">
      {/* المان تزئینی پس‌زمینه */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-[0.02] pointer-events-none">
        <span className="text-[30vw] font-serif  whitespace-nowrap">Partnership</span>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl text-right">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-[var(--color-shade-20)] tracking-[0.3em] uppercase text-xs font-bold mb-4 block"
            >
              B2B Exclusive
            </motion.span>
            <h2 className="text-4xl md:text-5xl font-extralight text-[var(--color-shade-60)] leading-tight">
              میزبانی از <br /> 
              <span className="font-serif italic text-[var(--color-shade-20)]">برترین مجموعه‌های ایران</span>
            </h2>
          </div>
          <p className="text-[var(--color-shade-60)]/60 max-w-xs text-right font-light leading-relaxed border-r border-[var(--color-shade-20)]/30 pr-6">
            ما مفتخریم که طعم اصیل محصولاتمان را به میز پذیرایی و هدایای سازمانی بزرگترین نام‌ها آورده‌ایم.
          </p>
        </div>

        {/* گرید لوگوها با استایل مینیمال */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12 items-center">
          {PARTNERS.map((partner, i) => (
            <motion.div
              key={partner.id}
              initial={{ opacity: 0, filter: 'grayscale(100%)' }}
              whileInView={{ opacity: 0.5, filter: 'grayscale(100%)' }}
              whileHover={{ opacity: 1, filter: 'grayscale(0%)', y: -5 }}
              transition={{ duration: 0.5 }}
              className="flex justify-center items-center px-4"
            >
              <img 
                src={partner.logo} 
                alt={partner.name} 
                className="h-8 md:h-10 w-auto object-contain transition-all"
              />
            </motion.div>
          ))}
        </div>

        {/* بخش آمار عددی با استایل ظریف */}
        <div className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-[var(--color-shade-20)]/10 pt-16">
          <div className="text-center group">
            <h4 className="text-4xl font-serif text-[var(--color-shade-60)] mb-2 tracking-tighter ">
              +۱۵۰
            </h4>
            <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--color-shade-20)] font-bold">سازمان و ارگان</p>
          </div>
          <div className="text-center group">
            <h4 className="text-4xl font-serif text-[var(--color-shade-60)] mb-2 tracking-tighter ">
              ۹۸٪
            </h4>
            <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--color-shade-20)] font-bold">رضایت مندی سالانه</p>
          </div>
          <div className="text-center group">
            <h4 className="text-4xl font-serif text-[var(--color-shade-60)] mb-2 tracking-tighter ">
              ۲۴
            </h4>
            <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--color-shade-20)] font-bold">ساعت پشتیبانی اختصاصی</p>
          </div>
        </div>

        
      </div>
    </section>
  );
}

function BusinessServices() {
  return (
    <section className="py-20 sm:py-28 lg:py-32 bg-[var(--color-tint-60)] px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <header className="mb-12 sm:mb-16 lg:mb-20 text-center">
          <span className="text-[var(--color-shade-20)] tracking-[0.3em] sm:tracking-[0.4em] uppercase text-[9px] sm:text-[10px] font-black">Partnerships</span>
          <h2 className="text-3xl sm:text-4xl font-extralight mt-3 sm:mt-4">
            خدمات تجاری <span className="font-serif text-[var(--color-shade-20)]">آجیل سرای بابل</span>
          </h2>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
          <motion.div 
            whileHover={{ y: -8 }} 
            className="p-8 sm:p-10 lg:p-12 bg-[var(--color-tint-10)] shadow-lg sm:shadow-xl border border-[var(--color-tint-40)] rounded-xl sm:rounded-2xl group relative overflow-hidden text-right"
          >
            <Briefcase className="w-10 h-10 sm:w-12 sm:h-12 text-[var(--color-shade-20)] mb-6 sm:mb-8 opacity-40" />
            <h3 className="text-xl sm:text-2xl font-light mb-3 sm:mb-4 text-[var(--color-shade-60)]">سفارش سازمانی VIP</h3>
            <p className="text-sm text-[var(--color-shade-60)]/70 leading-relaxed sm:leading-loose mb-8 sm:mb-10 font-light">
              طراحی و شخصی‌سازی پک‌های هدیه با لوگوی مجموعه شما. انتخابی برازنده برای قدردانی از شرکای تجاری.
            </p>
            <button className="text-[9px] sm:text-[10px] uppercase tracking-[0.15em] sm:tracking-[0.2em] font-bold border-b border-[var(--color-shade-20)] pb-1 hover:text-[var(--color-shade-20)] transition-colors">
              ثبت درخواست مشاوره
            </button>
          </motion.div>
          
          <motion.div 
            whileHover={{ y: -8 }} 
            className="p-8 sm:p-10 lg:p-12 bg-[var(--color-tint-10)] rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl group relative overflow-hidden text-right"
          >
            <Truck className="w-10 h-10 sm:w-12 sm:h-12 text-[var(--color-shade-20)] mb-6 sm:mb-8 opacity-40" />
            <h3 className="text-xl sm:text-2xl font-light mb-3 sm:mb-4">خرید عمده و تأمین</h3>
            <p className="text-sm leading-relaxed sm:leading-loose mb-8 sm:mb-10 font-light">
              تأمین مستقیم انواع مغزها برای هتل‌ها و رستوران‌های تراز اول با تضمین تازگی و قیمت رقابتی مزارع.
            </p>
            <button className="text-[9px] sm:text-[10px] uppercase tracking-[0.15em] sm:tracking-[0.2em] font-bold border-b border-[var(--color-shade-20)] pb-1 hover:text-[var(--color-shade-20)] transition-colors">
              دریافت لیست قیمت
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// --- FAQ Section ---
function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const faqs = [
    { q: "آیا محصولات شما دارای تضمین تازگی هستند؟", a: "بله، تمامی محصولات ما به صورت هفتگی برشته‌کاری می‌شوند و در بسته‌بندی‌های ایزوله برای حفظ عطر و طعم نگهداری می‌گردند." },
    { q: "شرایط ارسال به شهرستان چگونه است؟", a: "ارسال برای تهران از طریق پیک اختصاصی (۳ ساعته) و برای تمام ایران از طریق پست پیشتاز در بسته‌بندی‌های مقاوم انجام می‌شود." },
    { q: "امکان شخصی‌سازی باکس‌های هدیه وجود دارد؟", a: "بله، در بخش سفارش سازمانی می‌توانید نوع محصول، چیدمان و حتی حک لوگو روی جعبه را انتخاب کنید." },
  ];

  return (
    <section className="py-20 sm:py-32 lg:py-40 bg-[var(--color-tint-10)] px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-extralight text-center mb-12 sm:mb-16 text-[var(--color-shade-60)]">
          سوالات <span className="font-serif italic text-[var(--color-shade-20)]">متداول</span>
        </h2>
        <div className="space-y-3 sm:space-y-4">
          {faqs.map((faq, i) => (
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

// --- Main Layout ---
export default function UltimateLuxuryShop() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen bg-white" dir="rtl" style={colors as any}>
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 sm:h-1.5 mt-0.5 rounded-full bg-[var(--color-shade-60)]/70 z-[999] origin-right shadow-lg" 
        style={{ scaleX }} 
      />
      
      <main>
        <FreshNutsSection />
        
        <ProductSection
            title="شکلات‌های وارداتی"
            subtitle="برندهای معتبر جهانی از سوئیس، بلژیک و ایتالیا. اصالت و کیفیت تضمین شده با واردات مستقیم."
            products={PRODUCTS.freshNuts}
            features={[
            "واردات مستقیم از کشور مبدا",
            "گارانتی اصالت ۱۰۰٪",
            "نگهداری در سردخانه استاندارد"
            ]}
            reverse={true}
        />
        
        <ChocolatesSection />
        <TrustedCompaniesSection />
        <BusinessServices />
        <FAQSection />
      </main>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:italic,wght@400;700&display=swap');
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        body { background-color: #FBF9F6; color: #1A1A1A; }
        .font-serif { font-family: 'Playfair Display', serif; }
      `}</style>
    </div>
  );
}

function ProductSection({ title, subtitle, products, features, reverse = false }: any) {
  return (
    <section className={`py-20 sm:py-28 lg:py-32 ${!reverse ? 'bg-white' : 'bg-[var(--color-tint-80)]'} relative overflow-hidden px-4 sm:px-6 border-y border-[var(--color-tint-40)]/30`}>
      <div className="max-w-7xl mx-auto">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-20 items-center ${reverse ? 'lg:flex-row-reverse text-right' : 'text-right'}`}>
          <motion.div 
            initial={{ opacity: 0, x: reverse ? 50 : -50 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extralight text-[var(--color-shade-60)] mb-4 sm:mb-6">
              {title}
            </h2>
            <p className="text-base sm:text-lg text-[var(--color-shade-60)]/70 mb-8 sm:mb-12 leading-relaxed font-light">{subtitle}</p>
            <div className="space-y-4 sm:space-y-6 mb-8 sm:mb-10">
              {features.map((feature: any, i: number) => (
                <div key={i} className="flex items-center gap-3 sm:gap-4 justify-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-shade-20)] flex-shrink-0" />
                  <p className="text-[var(--color-shade-60)] font-light text-xs sm:text-sm tracking-wide uppercase">{feature}</p>
                </div>
              ))}
            </div>
            <button className="px-8 sm:px-10 py-3 sm:py-4 bg-[var(--color-shade-60)] text-white hover:bg-[var(--color-shade-20)] transition-all flex items-center gap-2 sm:gap-3 mr-0 ml-auto rounded-xl sm:rounded-2xl text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.3em] uppercase">
              مشاهده محصولات
              <ArrowLeft className="w-3 h-3 sm:w-4 sm:h-4" />
            </button>
          </motion.div>

          <div className="grid grid-cols-2 gap-4 sm:gap-6">
              <div className="col-span-2 relative h-[300px] sm:h-[350px] lg:h-[400px] rounded-2xl sm:rounded-3xl overflow-hidden group">
                <OptimizedImage alt='product' fill src={products[0].img} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 sm:bottom-6 right-4 sm:right-6 text-white text-right">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-light">{products[0].title}</h3>
                  <span className="text-xs sm:text-sm font-bold text-[var(--color-shade-20)]">{products[0].price} تومان</span>
                </div>
              </div>
              {products.slice(1, 3).map((product: any) => (
                <div key={product.id} className="relative h-[180px] sm:h-[220px] lg:h-[240px] rounded-xl sm:rounded-2xl overflow-hidden group">
                  <OptimizedImage alt='product' fill src={product.img} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute bottom-3 sm:bottom-4 right-3 sm:right-4 text-white text-right">
                    <h4 className="font-light text-xs sm:text-sm">{product.title}</h4>
                    <span className="text-[10px] sm:text-xs font-bold text-[var(--color-shade-20)]">{product.price}</span>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const PRODUCTS = {
    freshNuts: [
      { id: 1, title: "پسته اکبری زعفرانی", price: "۸۹۰,۰۰۰", weight: "۵۰۰ گرم", img: "https://images.unsplash.com/photo-1531300185372-b7cbe2eddf0b?w=600" },
      { id: 2, title: "بادام کاغذی شور", price: "۴۵۰,۰۰۰", weight: "۵۰۰ گرم", img: "https://images.unsplash.com/photo-1508747703725-719777637510?w=600" },
      { id: 3, title: "فندق برشته ممتاز", price: "۵۲۰,۰۰۰", weight: "۵۰۰ گرم", img: "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?w=600" },
      { id: 4, title: "پسته اکبری زعفرانی", price: "۸۹۰,۰۰۰", weight: "۵۰۰ گرم", img: "https://images.unsplash.com/photo-1531300185372-b7cbe2eddf0b?w=600" },
      { id: 5, title: "بادام کاغذی شور", price: "۴۵۰,۰۰۰", weight: "۵۰۰ گرم", img: "https://images.unsplash.com/photo-1508747703725-719777637510?w=600" }
    ],
};