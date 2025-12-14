"use client"
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, Heart } from 'lucide-react';

interface ProductCardProps {
  image: string;
  title: string;
  weight: string;
  price: string;
  originalPrice?: string;
  index?: number;
}

function ProductCard({
  image,
  title,
  weight,
  price,
  originalPrice,
  index = 0,
}: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [quantity, setQuantity] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group"
    >
      <div className="relative bg-white rounded-2xl overflow-hidden">
        {/* Image Container */}
        <div className="relative aspect-square overflow-hidden bg-neutral-50">
          <motion.img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
            animate={{ scale: isHovered ? 1.05 : 1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          />
          
          {/* Overlay on hover */}
          <motion.div
            className="absolute inset-0 bg-black/0"
            animate={{ backgroundColor: isHovered ? 'rgba(0,0,0,0.05)' : 'rgba(0,0,0,0)' }}
            transition={{ duration: 0.3 }}
          />

          {/* Favorite Button */}
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ 
              opacity: isHovered ? 1 : 0,
              scale: isHovered ? 1 : 0.8
            }}
            transition={{ duration: 0.2 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsFavorite(!isFavorite)}
            className="absolute top-4 left-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg"
          >
            <Heart
              className={`w-5 h-5 transition-colors ${
                isFavorite ? 'fill-rose-500 text-rose-500' : 'text-neutral-600'
              }`}
            />
          </motion.button>

          {/* Discount Badge */}
          {originalPrice && (
            <div className="absolute top-4 right-4 bg-amber-400 text-amber-900 text-xs font-bold px-3 py-1.5 rounded-full">
              {Math.round((1 - parseFloat(price.replace(/[^0-9]/g, '')) / parseFloat(originalPrice.replace(/[^0-9]/g, ''))) * 100)}%
            </div>
          )}

          {/* Add to Cart - Hover State */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ 
              y: isHovered ? 0 : 20,
              opacity: isHovered ? 1 : 0
            }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="absolute bottom-4 left-4 right-4"
          >
            <AnimatePresence mode="wait">
              {quantity === 0 ? (
                <motion.button
                  key="add-btn"
                  initial={{ scale: 0.9 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0.9 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setQuantity(1)}
                  className="w-full bg-neutral-900 text-white py-3 rounded-xl font-medium text-sm hover:bg-neutral-800 transition-colors"
                >
                  افزودن به سبد
                </motion.button>
              ) : (
                <motion.div
                  key="counter"
                  initial={{ scale: 0.9 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0.9 }}
                  className="flex items-center gap-2 bg-white rounded-xl p-1 shadow-lg"
                >
                  <button
                    onClick={() => setQuantity(q => Math.max(0, q - 1))}
                    className="w-10 h-10 bg-neutral-100 hover:bg-neutral-200 rounded-lg flex items-center justify-center transition-colors"
                  >
                    <Minus className="w-4 h-4 text-neutral-700" />
                  </button>
                  <span className="flex-1 text-center font-bold text-neutral-900">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(q => q + 1)}
                    className="w-10 h-10 bg-neutral-900 hover:bg-neutral-800 rounded-lg flex items-center justify-center transition-colors"
                  >
                    <Plus className="w-4 h-4 text-white" />
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Product Info */}
        <div className="p-4 space-y-2">
          <div>
            <h3 className="font-semibold text-neutral-900 text-lg mb-1 leading-tight">
              {title}
            </h3>
            <p className="text-sm text-neutral-500">{weight}</p>
          </div>

          <div className="flex items-center justify-between pt-1">
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold text-neutral-900">
                {price}
              </span>
              {originalPrice && (
                <span className="text-sm text-neutral-400 line-through">
                  {originalPrice}
                </span>
              )}
            </div>

            {/* Quick Add Button - Always Visible on Mobile */}
            <div className="lg:hidden">
              <AnimatePresence mode="wait">
                {quantity === 0 ? (
                  <motion.button
                    key="mobile-add"
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setQuantity(1)}
                    className="w-10 h-10 bg-neutral-900 text-white rounded-lg flex items-center justify-center"
                  >
                    <Plus className="w-5 h-5" />
                  </motion.button>
                ) : (
                  <motion.div
                    key="mobile-counter"
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    className="flex items-center gap-1 bg-neutral-100 rounded-lg p-1"
                  >
                    <button
                      onClick={() => setQuantity(q => Math.max(0, q - 1))}
                      className="w-8 h-8 bg-white rounded flex items-center justify-center"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="w-8 text-center text-sm font-bold">
                      {quantity}
                    </span>
                    <button
                      onClick={() => setQuantity(q => q + 1)}
                      className="w-8 h-8 bg-neutral-900 text-white rounded flex items-center justify-center"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function MinimalNutShop() {
  const products = [
    {
      image: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=800&q=80",
      title: "بادام هندی درجه یک",
      weight: "۲۵۰ گرم",
      price: "۱۸۵,۰۰۰",
      originalPrice: "۲۲۰,۰۰۰",
    },
    {
      image: "https://images.unsplash.com/photo-1578775887804-699de7086ff9?w=800&q=80",
      title: "مخلوط آجیل لوکس",
      weight: "۵۰۰ گرم",
      price: "۳۲۰,۰۰۰",
      originalPrice: "۳۸۰,۰۰۰",
    },
    {
      image: "https://images.unsplash.com/photo-1568471173238-64ed8e7e9f49?w=800&q=80",
      title: "بادام کالیفرنیا",
      weight: "۲۵۰ گرم",
      price: "۱۵۰,۰۰۰",
    },
    {
      image: "https://images.unsplash.com/photo-1607623488235-80ff081b5c38?w=800&q=80",
      title: "پسته اکبری",
      weight: "۲۵۰ گرم",
      price: "۴۵۰,۰۰۰",
      originalPrice: "۵۲۰,۰۰۰",
    },
    {
      image: "https://images.unsplash.com/photo-1582058091505-f87a2e55a40f?w=800&q=80",
      title: "گردو مغز",
      weight: "۲۵۰ گرم",
      price: "۱۹۵,۰۰۰",
    },
    {
      image: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=800&q=80",
      title: "کشمش آفتابی",
      weight: "۵۰۰ گرم",
      price: "۸۵,۰۰۰",
      originalPrice: "۱۰۵,۰۰۰",
    },
    {
      image: "https://images.unsplash.com/photo-1589927986089-35812388d1f4?w=800&q=80",
      title: "فندق شکسته",
      weight: "۲۵۰ گرم",
      price: "۲۲۰,۰۰۰",
    },
    {
      image: "https://images.unsplash.com/photo-1600717980972-3a0a1c0f4873?w=800&q=80",
      title: "تخمه آفتابگردان",
      weight: "۵۰۰ گرم",
      price: "۶۵,۰۰۰",
      originalPrice: "۸۰,۰۰۰",
    },
  ];

  return (
    <div className="min-h-screen bg-neutral-50" dir="rtl">
      {/* Header */}
      <section className="pt-20 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-4"
          >
            <h1 className="text-5xl lg:text-6xl font-bold text-neutral-900 tracking-tight">
              محصولات ما
            </h1>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              تازه‌ترین و باکیفیت‌ترین آجیل و خشکبار
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="max-w-7xl mx-auto px-4 pb-20">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} index={index} />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto px-4 pb-20"
      >
        <div className="bg-neutral-900 rounded-3xl p-12 md:p-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            ارسال رایگان برای سفارش‌های بالای ۵۰۰ هزار تومان
          </h2>
          <p className="text-neutral-300 text-lg mb-8">
            تحویل سریع در تمام نقاط کشور
          </p>
          <button className="bg-white text-neutral-900 px-8 py-4 rounded-xl font-bold hover:bg-neutral-100 transition-colors">
            مشاهده شرایط ارسال
          </button>
        </div>
      </motion.section>
    </div>
  );
}