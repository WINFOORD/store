"use client"
import { useState } from 'react';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronDown, Truck, Briefcase, Award } from 'lucide-react';
import { colors } from '../colors';
import { ProductCard } from './main/Card';

 const PRODUCT = {
    freshNuts: [
      {
        id: 1,
        title: 'Organic cocoa and raspberry energy ball 30g',
        price: 1.50,
        originalPrice: 80.00,
        unit: 'per 1 kg',
        image: 'https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=800&q=80',
        bgColor: '#7DD3FC',
        score: 4.7,
        reviews: 202,
        isOrganic: true,
        note: true,
        discount: 40,
        category: 'انرژی بال'
      },
      {
        id: 2,
        title: 'Freeze-dried strawberry slices 350g',
        price: 25.00,
        originalPrice: 71.43,
        unit: 'per 1 kg',
        image: 'https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=800&q=80',
        bgColor: '#FCA5A5',
        score: 4.8,
        reviews: 2870,
        isOrganic: false,
        note: false,
        discount: 35,
        category: 'میوه خشک'
      },
      {
        id: 3,
        title: 'Vegan vanilla flavoured protein powder 1kg',
        price: 24.00,
        image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?w=800&q=80',
        bgColor: '#C4B5FD',
        score: 4.5,
        reviews: 654,
        isOrganic: false,
        note: true,
        category: 'پروتئین'
      },
      {
        id: 4,
        title: 'Organic walnut pieces 1kg',
        price: 13.50,
        image: 'https://images.unsplash.com/photo-1508747703725-719777637510?w=800&q=80',
        bgColor: '#FCA5A5',
        score: 4.7,
        reviews: 791,
        isOrganic: true,
        note: true,
        category: 'آجیل'
      }
    ]
  };



const PRODUCTS = {
  freshNuts: [
    { id: 1, title: 'بادام مامایی آمریکایی', weight: '500 گرم', price: '۴۵۰,۰۰۰', img: 'https://images.unsplash.com/photo-1508747703725-719777637510?w=800&q=85' },
    { id: 2, title: 'گردو چندلر کالیفرنیا', weight: '500 گرم', price: '۳۸۰,۰۰۰', img: 'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=800&q=85' },
    { id: 3, title: 'پسته اکبری برشته', weight: '250 گرم', price: '۵۲۰,۰۰۰', img: 'https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=800&q=85' },
    { id: 4, title: 'مغز فندق ترک', weight: '500 گرم', price: '۴۲۰,۰۰۰', img: 'https://images.unsplash.com/photo-1618897996318-5a901fa6ca71?w=800&q=85' },
    { id: 5, title: 'کاجو هندی درجه یک', weight: '500 گرم', price: '۳۹۰,۰۰۰', img: 'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=800&q=85' }
  ],
  dried: [
    { id: 11, title: 'توت فرنگی خشک', weight: '250 گرم', price: '۲۸۰,۰۰۰', img: 'https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=800&q=85' },
    { id: 12, title: 'انجیر خشک شده', weight: '300 گرم', price: '۳۲۰,۰۰۰', img: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=800&q=85' },
    { id: 13, title: 'کیوی خشک', weight: '200 گرم', price: '۲۵۰,۰۰۰', img: 'https://images.unsplash.com/photo-1557800636-894a64c1696f?w=800&q=85' }
  ],
  organic: [
    { id: 21, title: 'مخلوط ارگانیک پریمیوم', weight: '500 گرم', price: '۵۸۰,۰۰۰', img: 'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=800&q=85' },
    { id: 22, title: 'بادام ارگانیک', weight: '500 گرم', price: '۴۹۰,۰۰۰', img: 'https://images.unsplash.com/photo-1590779033100-9f60a05a013d?w=800&q=85' },
    { id: 23, title: 'گردو ارگانیک', weight: '500 گرم', price: '۴۲۰,۰۰۰', img: 'https://images.unsplash.com/photo-1614961234441-64e415a6a4c7?w=800&q=85' }
  ],
  chocolate: [
    { id: 31, title: 'شکلات تلخ ۸۵٪ کاکائو', weight: '100 گرم', price: '۱۸۰,۰۰۰', img: 'https://images.unsplash.com/photo-1511381939415-e44015466834?w=800&q=85' },
    { id: 32, title: 'ترافل فندقی', weight: '150 گرم', price: '۲۲۰,۰۰۰', img: 'https://images.unsplash.com/photo-1548907040-4baa42d10919?w=800&q=85' },
    { id: 33, title: 'شکلات شیری با پسته', weight: '120 گرم', price: '۱۹۵,۰۰۰', img: 'https://images.unsplash.com/photo-1549007994-cb92caebd54b?w=800&q=85' }
  ]
};

const FAQS = [
  { q: "آیا محصولات شما دارای تضمین تازگی هستند؟", a: "بله، تمامی محصولات ما به صورت هفتگی برشته‌کاری می‌شوند و در بسته‌بندی‌های ایزوله برای حفظ عطر و طعم نگهداری می‌گردند." },
  { q: "شرایط ارسال به شهرستان چگونه است؟", a: "ارسال برای تهران از طریق پیک اختصاصی (۳ ساعته) و برای تمام ایران از طریق پست پیشتاز در بسته‌بندی‌های مقاوم انجام می‌شود." },
  { q: "امکان شخصی‌سازی باکس‌های هدیه وجود دارد؟", a: "بله، در بخش سفارش سازمانی می‌توانید نوع محصول، چیدمان و حتی حک لوگو روی جعبه را انتخاب کنید." },
];

const PARTNERS = [
  { id: 1, name: "Luxury Group", logo: "https://cdn.worldvectorlogo.com/logos/chanel-2.svg" },
  { id: 2, name: "Tech Pioneers", logo: "https://cdn.worldvectorlogo.com/logos/tesla-9.svg" },
  { id: 3, name: "Global Finance", logo: "https://cdn.worldvectorlogo.com/logos/goldman-sachs-1.svg" },
  { id: 4, name: "Elite Hotels", logo: "https://cdn.worldvectorlogo.com/logos/ritz-carlton.svg" },
  { id: 5, name: "Aviation Corp", logo: "https://cdn.worldvectorlogo.com/logos/emirates-3.svg" },
  { id: 6, name: "Design Studio", logo: "https://cdn.worldvectorlogo.com/logos/hermes-france.svg" },
];

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
  <section className="py-16 bg-gradient-to-br from-[var(--color-tint-10)] to-white" style={colors} dir="rtl">
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

          {/* Products Grid - Usage Example */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
            {PRODUCT.freshNuts.map((product, i) => (
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

function ChocolatesSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-[var(--color-tint-10)] px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1548907040-4baa42d10919?w=800&q=85"
                alt="شکلات ترافل"
                className="w-full h-full object-cover"
              />
            </div>
            
            <motion.div 
              whileHover={{ y: -8 }} 
              className="hidden lg:block absolute bottom-6 -left-6 bg-white p-6 shadow-xl max-w-xs rounded-xl border-t-4 border-[var(--color-base)]"
            >
              <div className="flex items-center gap-2 mb-2">
                <Award className="w-5 h-5 text-[var(--color-base)]" />
                <h4 className="font-bold text-lg text-[var(--color-shade-80)]">کیفیت برتر</h4>
              </div>
              <p className="text-sm text-[var(--color-shade-60)] leading-relaxed">
                تمامی محصولات با گواهی استاندارد اروپایی و بسته‌بندی ایزوله
              </p>
            </motion.div>
          </motion.div>
          
          <div className="order-1 lg:order-2 text-right">
            <span className="text-[var(--color-base)] font-semibold tracking-wider uppercase text-xs sm:text-sm mb-2 block">
              طعم اصیل
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-[var(--color-shade-80)]">
              شکلات‌های وارداتی
            </h2>
            <p className="text-base sm:text-lg text-[var(--color-shade-60)] mb-6 leading-relaxed">
              مستقیم از بهترین برندهای سوئیس، بلژیک و ایتالیا. طعمی بی‌نظیر با کیفیتی استثنایی
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              {PRODUCTS.chocolate.map((item) => (
                <div key={item.id} className="flex items-center gap-3 bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                    <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-sm text-[var(--color-shade-80)] truncate">{item.title}</h4>
                    <p className="text-xs text-[var(--color-shade-60)]">{item.weight}</p>
                    <p className="text-sm font-bold text-[var(--color-base)]">{item.price} ت</p>
                  </div>
                </div>
              ))}
            </div>

            <button className="bg-[var(--color-base)] hover:bg-[var(--color-shade-20)] text-white px-6 py-3 rounded-lg text-sm sm:text-base font-semibold transition-colors inline-flex items-center gap-2">
              مشاهده همه شکلات‌ها
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustedCompaniesSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-8 sm:mb-12">
          <span className="text-[var(--color-base)] font-semibold tracking-wider uppercase text-xs sm:text-sm mb-2 block">
            شرکای تجاری ما
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--color-shade-80)] mb-3">
            اعتماد برندهای برتر
          </h2>
          <p className="text-[var(--color-shade-60)] max-w-2xl mx-auto text-sm sm:text-base">
            بیش از ۱۵۰ سازمان معتبر به کیفیت محصولات ما اعتماد کرده‌اند
          </p>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-6 sm:gap-8 items-center mb-12">
          {PARTNERS.map((partner) => (
            <motion.div
              key={partner.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 0.6, scale: 1 }}
              whileHover={{ opacity: 1, scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="flex justify-center items-center p-3 sm:p-4 bg-[var(--color-tint-10)] rounded-lg hover:bg-white hover:shadow-md transition-all"
            >
              <img 
                src={partner.logo} 
                alt={partner.name} 
                className="h-8 sm:h-10 w-auto object-contain grayscale hover:grayscale-0 transition-all"
              />
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 border-t border-[var(--color-tint-40)] pt-8">
          <div className="text-center p-4 bg-[var(--color-tint-10)] rounded-lg">
            <h4 className="text-3xl sm:text-4xl font-bold text-[var(--color-base)] mb-2">
              +۱۵۰
            </h4>
            <p className="text-xs sm:text-sm text-[var(--color-shade-60)] font-medium">سازمان و شرکت</p>
          </div>
          <div className="text-center p-4 bg-[var(--color-tint-10)] rounded-lg">
            <h4 className="text-3xl sm:text-4xl font-bold text-[var(--color-base)] mb-2">
              ۹۸٪
            </h4>
            <p className="text-xs sm:text-sm text-[var(--color-shade-60)] font-medium">رضایت مشتریان</p>
          </div>
          <div className="text-center p-4 bg-[var(--color-tint-10)] rounded-lg">
            <h4 className="text-3xl sm:text-4xl font-bold text-[var(--color-base)] mb-2">
              ۲۴/۷
            </h4>
            <p className="text-xs sm:text-sm text-[var(--color-shade-60)] font-medium">پشتیبانی آنلاین</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function BusinessServices() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-[var(--color-tint-10)] px-4 sm:px-6">
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

function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <span className="text-[var(--color-base)] font-semibold tracking-wider uppercase text-xs sm:text-sm mb-2 block">
            راهنما
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-shade-80)]">
            سوالات متداول
          </h2>
        </div>
        <div className="space-y-3">
          {FAQS.map((faq, i) => (
            <div key={i} className="border border-[var(--color-tint-40)] rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow">
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)} 
                className="w-full p-4 sm:p-5 flex justify-between items-center text-right gap-4 hover:bg-[var(--color-tint-10)] transition-colors"
              >
                <span className="text-sm sm:text-base font-semibold text-[var(--color-shade-80)]">{faq.q}</span>
                <ChevronDown className={`w-5 h-5 flex-shrink-0 transition-transform text-[var(--color-base)] ${openIndex === i ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }} 
                    animate={{ height: 'auto', opacity: 1 }} 
                    exit={{ height: 0, opacity: 0 }} 
                    className="overflow-hidden"
                  >
                    <p className="px-4 sm:px-5 pb-4 sm:pb-5 text-sm sm:text-base text-[var(--color-shade-60)] leading-relaxed">{faq.a}</p>
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

function ProductSection({ title, subtitle, products, features, reverse = false }: any) {
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

export default function AjilSarayShop() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className=" bg-linear-to-t from-[var(--color-tint-10)] to-[var(--color-tint-40)]" dir="rtl" style={colors as any}>

      
      <main>
        <FreshNutsSection />
        
        <ProductSection
          title="میوه‌های خشک طبیعی"
          subtitle="میوه‌های خشک شده با فرآیند طبیعی بدون افزودنی. سرشار از ویتامین و مواد مغذی"
          products={PRODUCTS.dried}
          features={[
            "خشک شده به روش طبیعی",
            "بدون شکر افزودنی",
            "غنی از ویتامین و آنتی اکسیدان"
          ]}
          reverse={false}
        />
        
        <ChocolatesSection />

        <ProductSection
          title="محصولات ارگانیک"
          subtitle="محصولات کاملاً ارگانیک با گواهینامه‌های بین‌المللی. کشت بدون سموم شیمیایی"
          products={PRODUCTS.organic}
          features={[
            "گواهینامه EU Organic",
            "کشت بدون سموم",
            "حمایت از کشاورزی پایدار"
          ]}
          reverse={true}
        />
        
        <TrustedCompaniesSection />
        <BusinessServices />
        <FAQSection />
      </main>
    </div>
  );
}