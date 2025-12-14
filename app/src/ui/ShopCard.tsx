"use client"
import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Plus, Minus, Heart, ChevronLeft, ChevronRight, TrendingUp, Award, Package, HelpCircle, Star, Shield, Truck, Leaf, Gift, Sparkles } from 'lucide-react';

interface ProductCardProps {
  image: string;
  title: string;
  weight: string;
  price: string;
  originalPrice?: string;
}

function ProductCard({ image, title, weight, price, originalPrice }: ProductCardProps) {
  const [quantity, setQuantity] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="flex-shrink-0 w-72"
    >
      <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300">
        <div className="relative aspect-square overflow-hidden bg-neutral-50">
          <motion.img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
            animate={{ scale: isHovered ? 1.05 : 1 }}
            transition={{ duration: 0.4 }}
          />
          
          <motion.div
            className="absolute inset-0 bg-black/0"
            animate={{ backgroundColor: isHovered ? 'rgba(0,0,0,0.05)' : 'rgba(0,0,0,0)' }}
          />

          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            onClick={() => setIsFavorite(!isFavorite)}
            className="absolute top-4 left-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg"
          >
            <Heart className={`w-5 h-5 ${isFavorite ? 'fill-rose-500 text-rose-500' : 'text-neutral-600'}`} />
          </motion.button>

          {originalPrice && (
            <div className="absolute top-4 right-4 bg-amber-400 text-amber-900 text-xs font-bold px-3 py-1.5 rounded-full">
              {Math.round((1 - parseFloat(price.replace(/[^0-9]/g, '')) / parseFloat(originalPrice.replace(/[^0-9]/g, ''))) * 100)}%
            </div>
          )}
        </div>

        <div className="p-4 space-y-3">
          <div>
            <h3 className="font-semibold text-neutral-900 text-lg mb-1">{title}</h3>
            <p className="text-sm text-neutral-500">{weight}</p>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold text-neutral-900">{price}</span>
              {originalPrice && (
                <span className="text-sm text-neutral-400 line-through">{originalPrice}</span>
              )}
            </div>

            <AnimatePresence mode="wait">
              {quantity === 0 ? (
                <motion.button
                  key="add"
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setQuantity(1)}
                  className="w-10 h-10 bg-neutral-900 text-white rounded-lg flex items-center justify-center hover:bg-neutral-800 transition-colors"
                >
                  <Plus className="w-5 h-5" />
                </motion.button>
              ) : (
                <motion.div
                  key="counter"
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  className="flex items-center gap-1 bg-neutral-100 rounded-lg p-1"
                >
                  <button
                    onClick={() => setQuantity(q => Math.max(0, q - 1))}
                    className="w-8 h-8 bg-white rounded flex items-center justify-center hover:bg-neutral-50"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-8 text-center text-sm font-bold">{quantity}</span>
                  <button
                    onClick={() => setQuantity(q => q + 1)}
                    className="w-8 h-8 bg-neutral-900 text-white rounded flex items-center justify-center hover:bg-neutral-800"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function ProductCarousel({ title, icon: Icon, products }: { title: string; icon: any; products: any[] }) {
  const [dragStart, setDragStart] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [currentScroll, setCurrentScroll] = useState(0);
  const containerRef = useState<any>(null);

  const scrollLeft = () => {
    const container = document.getElementById(`carousel-${title}`);
    if (container) {
      container.scrollBy({ left: -320, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    const container = document.getElementById(`carousel-${title}`);
    if (container) {
      container.scrollBy({ left: 320, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-between mb-12"
        >
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-neutral-900 rounded-2xl flex items-center justify-center shadow-lg">
              <Icon className="w-7 h-7 text-white" />
            </div>
            <h2 className="text-4xl font-bold text-neutral-900">{title}</h2>
          </div>

          <div className="flex gap-3">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollLeft}
              className="w-12 h-12 bg-neutral-100 hover:bg-neutral-200 rounded-xl flex items-center justify-center transition-colors shadow-sm"
            >
              <ChevronRight className="w-6 h-6 text-neutral-700" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollRight}
              className="w-12 h-12 bg-neutral-100 hover:bg-neutral-200 rounded-xl flex items-center justify-center transition-colors shadow-sm"
            >
              <ChevronLeft className="w-6 h-6 text-neutral-700" />
            </motion.button>
          </div>
        </motion.div>

        <div 
          id={`carousel-${title}`}
          className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-4 cursor-grab active:cursor-grabbing snap-x snap-mandatory"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
        >
          {products.map((product, index) => (
            <div key={index} className="snap-start">
              <ProductCard {...product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


function FeaturesGrid() {
  const features = [
    { icon: Truck, title: "ارسال رایگان", desc: "برای سفارش بالای ۵۰۰ هزار تومان", color: "from-blue-500 to-cyan-500" },
    { icon: Shield, title: "ضمانت کیفیت", desc: "تضمین اصالت و تازگی محصولات", color: "from-emerald-500 to-green-500" },
    { icon: Leaf, title: "۱۰۰٪ ارگانیک", desc: "محصولات طبیعی و سالم", color: "from-green-500 to-lime-500" },
    { icon: Gift, title: "پک هدیه", desc: "بسته‌بندی زیبا برای هدیه", color: "from-rose-500 to-pink-500" },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-neutral-900 mb-4">چرا ما را انتخاب کنید؟</h2>
          <p className="text-xl text-neutral-600">مزایای خرید از فروشگاه ما</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="relative group"
            >
              <div className="bg-gradient-to-br from-neutral-50 to-neutral-100 rounded-3xl p-8 text-center space-y-4 hover:shadow-xl transition-shadow duration-300">
                <div className={`w-16 h-16 mx-auto bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-neutral-900">{feature.title}</h3>
                <p className="text-neutral-600">{feature.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  const testimonials = [
    { name: "سارا احمدی", text: "کیفیت محصولات عالیه و بسته‌بندی خیلی تمیز بود!", rating: 5 },
    { name: "علی رضایی", text: "سریع رسید و قیمت‌ها هم مناسب بود. قطعاً دوباره سفارش میدم", rating: 5 },
    { name: "مریم کریمی", text: "پک هدیه که گرفتم خیلی زیبا بود. ممنون از خدمات عالیتون", rating: 5 },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-neutral-50 to-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-neutral-900 mb-4">نظر مشتریان</h2>
          <p className="text-xl text-neutral-600">رضایت شما، افتخار ماست</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-neutral-700 mb-6 leading-relaxed">{item.text}</p>
              <p className="font-bold text-neutral-900">{item.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    { question: "چطور سفارش بدم؟", answer: "کافیه محصولات مورد نظرتون رو به سبد خرید اضافه کنید و در پایان فرآیند خرید، آدرس و اطلاعات تماستون رو وارد کنید." },
    { question: "هزینه ارسال چقدره؟", answer: "برای سفارش‌های بالای ۵۰۰ هزار تومان، ارسال کاملاً رایگانه. برای سفارش‌های زیر این مبلغ، هزینه ارسال ۳۰ هزار تومان هست." },
    { question: "چند روز طول میکشه تا سفارشم برسه؟", answer: "سفارشات شما در تهران ظرف ۱ تا ۲ روز و در شهرستان‌ها ظرف ۳ تا ۵ روز کاری ارسال میشه." },
    { question: "آیا محصولات تازه و باکیفیت هستن؟", answer: "تمام محصولات ما از برترین برندها تهیه میشن و کیفیتشون رو با ضمانت بازگشت وجه تضمین می‌کنیم." },
    { question: "میتونم سفارشم رو لغو کنم؟", answer: "بله، تا قبل از ارسال می‌تونید سفارشتون رو لغو کنید و وجه پرداختی به حساب شما برگردانده میشه." },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-neutral-900 rounded-2xl mb-6">
            <HelpCircle className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-5xl font-bold text-neutral-900 mb-4">سوالات متداول</h2>
          <p className="text-xl text-neutral-600">پاسخ سوالات پرتکرار شما</p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full bg-neutral-50 hover:bg-neutral-100 rounded-2xl p-6 text-right transition-colors"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-neutral-900">{faq.question}</h3>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronLeft className="w-6 h-6 text-neutral-600" />
                  </motion.div>
                </div>
                
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="mt-4 text-neutral-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function UltimateNutShop() {
  const nuts = [
    { image: "https://images.unsplash.com/photo-1508747703725-719777637510?w=800&q=80", title: "بادام هندی درجه یک", weight: "۲۵۰ گرم", price: "۱۸۵,۰۰۰", originalPrice: "۲۲۰,۰۰۰" },
    { image: "https://images.unsplash.com/photo-1599599811947-e13d6218c635?w=800&q=80", title: "بادام کالیفرنیا", weight: "۲۵۰ گرم", price: "۱۵۰,۰۰۰" },
    { image: "https://images.unsplash.com/photo-1631728827665-1815bd37f47d?w=800&q=80", title: "پسته اکبری ممتاز", weight: "۲۵۰ گرم", price: "۴۵۰,۰۰۰", originalPrice: "۵۲۰,۰۰۰" },
    { image: "https://images.unsplash.com/photo-1595855759908-31f2a3e2e6c8?w=800&q=80", title: "گردو مغز ایرانی", weight: "۲۵۰ گرم", price: "۱۹۵,۰۰۰" },
    { image: "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?w=800&q=80", title: "فندق شکسته لایه", weight: "۲۵۰ گرم", price: "۲۲۰,۰۰۰" },
    { image: "https://images.unsplash.com/photo-1580467109568-bab18c5f781a?w=800&q=80", title: "آجیل مخلوط ویژه", weight: "۵۰۰ گرم", price: "۳۲۰,۰۰۰", originalPrice: "۳۸۰,۰۰۰" },
  ];

  const bestsellers = [
    { image: "https://images.unsplash.com/photo-1599599707199-60e65df4ca33?w=800&q=80", title: "مخلوط آجیل لوکس", weight: "۵۰۰ گرم", price: "۳۲۰,۰۰۰", originalPrice: "۳۸۰,۰۰۰" },
    { image: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=800&q=80", title: "کشمش آفتابی طلایی", weight: "۵۰۰ گرم", price: "۸۵,۰۰۰", originalPrice: "۱۰۵,۰۰۰" },
    { image: "https://images.unsplash.com/photo-1587577557040-00d1c84c724a?w=800&q=80", title: "تخمه آفتابگردان", weight: "۵۰۰ گرم", price: "۶۵,۰۰۰", originalPrice: "۸۰,۰۰۰" },
    { image: "https://images.unsplash.com/photo-1600271886742-7029f07c7012?w=800&q=80", title: "بادام زمینی برشته", weight: "۳۰۰ گرم", price: "۷۵,۰۰۰" },
    { image: "https://images.unsplash.com/photo-1615485500834-bc10199bc727?w=800&q=80", title: "پک ویژه شب یلدا", weight: "۱ کیلو", price: "۵۵۰,۰۰۰", originalPrice: "۶۵۰,۰۰۰" },
    { image: "https://images.unsplash.com/photo-1608797178974-15b35a64ede9?w=800&q=80", title: "آجیل عید نوروز", weight: "۱ کیلو", price: "۴۸۰,۰۰۰" },
  ];

  return (
    <div className="min-h-screen" dir="rtl">
      {/* Hero */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl lg:text-8xl font-black text-white drop-shadow-2xl mb-6"
          >
            فروشگاه آجیل
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl text-white/90 drop-shadow-lg"
          >
            تازه‌ترین و باکیفیت‌ترین محصولات
          </motion.p>
        </div>
      </section>

      <ProductCarousel title="آجیل" icon={Package} products={nuts} />
      
      
      <ProductCarousel title="پرفروش‌ترین‌ها" icon={TrendingUp} products={bestsellers} />
      
      <FeaturesGrid />
      
      <TestimonialsSection />
      
      <FAQSection />

      {/* Final CTA */}
      <section className="py-32 px-4 bg-gradient-to-br from-neutral-800 via-neutral-900 to-neutral-950">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.5 }}
            className=" rounded-[40px] p-16 text-center relative overflow-hidden"
          >
            <motion.div
              animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl"
            />
            <div className="relative z-10 space-y-6">
              <Award className="w-20 h-20 text-amber-400 mx-auto" />
              <h2 className="text-5xl font-black text-white">عضویت در باشگاه مشتریان</h2>
              <p className="text-xl text-neutral-300 max-w-2xl mx-auto">
                تخفیف‌های ویژه، ارسال رایگان و جوایز نقدی
              </p>
              <button className="bg-white text-neutral-900 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-neutral-100 transition-colors shadow-2xl">
                ثبت‌نام رایگان
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}