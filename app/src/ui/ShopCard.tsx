"use client"
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, Star, Sparkles, Heart, Eye } from 'lucide-react';
import OptimizedImage from './optimizeImage';

// Props type for the main component
interface LuxuryShopCardsProps {
  dict: any; // Use your actual Dictionary type
  locale: string;
}

interface ShopCardProps {
  image: string;
  title: string;
  desc?: string;
  price: string;
  offPrice?: string;
  offer?: boolean;
  rating?: number;
  reviews?: number;
  index?: number;
  dict: any;
  locale: string;
}

function ShopCard({
  image,
  title,
  desc,
  price,
  offPrice,
  offer = false,
  rating = 0,
  reviews = 0,
  index = 0,
  dict,
  locale,
}: ShopCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);

  const isRTL = locale === 'fa' || locale === 'ar';

  const handleAddToCart = () => {
    setCartCount(prev => prev + 1);
  };

  const handleDecrement = () => {
    if (cartCount > 0) {
      setCartCount(prev => prev - 1);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 60, rotateX: 10 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        duration: 0.7, 
        delay: index * 0.15,
        ease: [0.22, 0.61, 0.36, 1]
      }}
      whileHover={{ y: -12, transition: { duration: 0.4 } }}
      className="group relative bg-white rounded-[28px] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ transformStyle: 'preserve-3d' }}
    >
      {/* Image Container with Parallax */}
      <div className="relative w-full aspect-[3/3] overflow-hidden bg-linear-to-br from-gray-100 via-gray-50 to-white">
        <motion.div
          className="absolute inset-0"
          animate={{ 
            scale: isHovered ? 1.15 : 1,
          }}
          transition={{ duration: 0.8, ease: [0.22, 0.61, 0.36, 1] }}
        >
          <OptimizedImage
          fill
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
        </motion.div>
        
        {/* Animated linear Overlay */}
        <motion.div
          className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0.3 }}
          transition={{ duration: 0.5 }}
        />

        {/* Shimmer Effect */}
        <motion.div
          className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent"
          animate={{
            x: isHovered ? ['0%', '200%'] : '0%',
          }}
          transition={{
            duration: 1.5,
            ease: "easeInOut",
          }}
          style={{ transform: 'skewX(-20deg)' }}
        />

        {/* Top Actions */}
        <div className={`absolute top-4 ${isRTL ? 'left-4' : 'right-4'} flex flex-col gap-2`}>
          {/* Favorite Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsFavorite(!isFavorite)}
            className="w-11 h-11 bg-white/95 backdrop-blur-md rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all"
          >
            <motion.div
              animate={{ scale: isFavorite ? [1, 1.3, 1] : 1 }}
              transition={{ duration: 0.3 }}
            >
              <Heart
                className={`w-5 h-5 transition-colors ${
                  isFavorite ? 'fill-rose-500 text-rose-500' : 'text-gray-600'
                }`}
              />
            </motion.div>
          </motion.button>

          {/* Quick View */}
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: isHovered ? 1 : 0,
              scale: isHovered ? 1 : 0,
            }}
            transition={{ delay: 0.1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-11 h-11 bg-white/95 backdrop-blur-md rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all"
          >
            <Eye className="w-5 h-5 text-gray-600" />
          </motion.button>
        </div>

        {/* Offer Badge */}
        {offer && (
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ 
              delay: 0.3, 
              type: "spring", 
              stiffness: 200,
              damping: 12
            }}
            className={`absolute top-4 ${isRTL ? 'right-4' : 'left-4'}`}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-linear-to-r from-rose-500 to-pink-500 rounded-full blur-md opacity-60" />
              <div className="relative bg-linear-to-r from-rose-500 to-pink-500 text-white text-xs font-bold px-4 py-2 rounded-full shadow-xl">
                <Sparkles className="w-3 h-3 inline-block mr-1" />
                {dict.product.discount}
              </div>
            </div>
          </motion.div>
        )}

        {/* Cart Count Badge */}
        <AnimatePresence>
          {cartCount > 0 && (
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0, rotate: 180 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
              className={`absolute top-4 ${isRTL ? 'left-4' : 'right-4'}`}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-linear-to-br from-emerald-500 to-green-600 rounded-full blur-md opacity-60" />
                <div className="relative w-12 h-12 bg-linear-to-br from-emerald-500 to-green-600 text-white rounded-full flex items-center justify-center shadow-xl font-bold text-lg">
                  <motion.span
                    key={cartCount}
                    initial={{ scale: 1.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {cartCount}
                  </motion.span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Add to Cart Button */}
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ 
            y: isHovered ? 0 : 80, 
            opacity: isHovered ? 1 : 0 
          }}
          transition={{ duration: 0.4, ease: [0.22, 0.61, 0.36, 1] }}
          className="absolute bottom-4 left-4 right-4"
        >
          <AnimatePresence mode="wait">
            {cartCount === 0 ? (
              <motion.button
                key="add-button"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={handleAddToCart}
                className="w-full bg-linear-to-r from-emerald-500 via-green-500 to-emerald-600 text-white py-3.5 rounded-2xl font-bold flex items-center justify-center gap-2 shadow-2xl hover:shadow-emerald-500/50 transition-all relative overflow-hidden group/btn"
              >
                <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent group-hover/btn:animate-shimmer" />
                <ShoppingCart className="w-5 h-5" />
                <span>{dict.product.addToCart}</span>
              </motion.button>
            ) : (
              <motion.div
                key="counter"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="flex items-center gap-3 bg-white/98 backdrop-blur-xl rounded-2xl p-2 shadow-2xl"
              >
                <motion.button
                  whileHover={{ scale: 1.15, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setCartCount(prev => prev + 1)}
                  className="w-11 h-11 bg-linear-to-br from-emerald-500 to-green-600 text-white rounded-xl flex items-center justify-center font-bold text-2xl shadow-lg hover:shadow-emerald-500/50 transition-all"
                >
                  +
                </motion.button>
                <div className="flex-1 text-center">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={cartCount}
                      initial={{ y: -20, opacity: 0, scale: 1.5 }}
                      animate={{ y: 0, opacity: 1, scale: 1 }}
                      exit={{ y: 20, opacity: 0, scale: 0.5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="text-2xl font-bold bg-linear-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent"
                    >
                      {cartCount}
                    </motion.span>
                  </AnimatePresence>
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.15, rotate: -90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={handleDecrement}
                  className="w-11 h-11 bg-linear-to-br from-gray-500 to-gray-600 text-white rounded-xl flex items-center justify-center font-bold text-2xl shadow-lg hover:shadow-gray-500/50 transition-all"
                >
                  −
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Content */}
      <div className="p-6" dir={isRTL ? 'rtl' : 'ltr'}>
        {/* Rating */}
        {rating > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-2 mb-3"
          >
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 + i * 0.05 }}
                >
                  <Star
                    className={`w-4 h-4 ${
                      i < Math.floor(rating)
                        ? 'fill-amber-400 text-amber-400'
                        : 'text-gray-300'
                    }`}
                  />
                </motion.div>
              ))}
            </div>
            <span className="text-sm font-semibold text-gray-700">
              {rating.toFixed(1)}
            </span>
            <span className="text-xs text-gray-500">
              ({reviews} {dict.product.rating})
            </span>
          </motion.div>
        )}

        {/* Title */}
        <motion.h3
          className="font-bold text-gray-900 mb-2 text-xl leading-tight"
          animate={{ 
            color: isHovered ? '#000' : '#111827',
            x: isHovered ? (isRTL ? -4 : 4) : 0
          }}
          transition={{ duration: 0.3 }}
        >
          {title}
        </motion.h3>

        {/* Description */}
        {desc && (
          <motion.p
            className="text-sm text-gray-600 mb-4 line-clamp-2 leading-relaxed"
            animate={{ opacity: isHovered ? 1 : 0.7 }}
          >
            {desc}
          </motion.p>
        )}

        {/* Price Section */}
        <div className="flex items-center justify-between">
          <div className="flex items-baseline gap-2">
            <motion.span
              className="text-3xl font-bold bg-linear-to-r from-gray-900 via-gray-800 to-gray-700 bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {price}
            </motion.span>
            {offPrice && (
              <motion.span
                initial={{ opacity: 0, x: isRTL ? 10 : -10 }}
                animate={{ opacity: 0.5, x: 0 }}
                className="text-base text-gray-400 line-through"
              >
                {offPrice}
              </motion.span>
            )}
          </div>

          {/* Discount Badge */}
          {offPrice && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -12 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ delay: 0.3, type: "spring" }}
              whileHover={{ scale: 1.1, rotate: 3 }}
              className="text-xs font-bold text-rose-600 bg-linear-to-r from-rose-50 to-pink-50 px-3 py-1.5 rounded-full shadow-sm"
            >
              {dict.product.save} {Math.round((1 - parseFloat(price.replace(/[^0-9.]/g, '')) / parseFloat(offPrice.replace(/[^0-9.]/g, ''))) * 100)}%
            </motion.div>
          )}
        </div>
      </div>

      {/* Hover Glow Effect */}
      <motion.div
        className="absolute inset-0 rounded-[28px] pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        style={{
          boxShadow: '0 0 40px rgba(16, 185, 129, 0.3)',
        }}
      />
    </motion.div>
  );
}

// Main component - NOW RECEIVES dict AND locale AS PROPS
export default function LuxuryShopCards({ dict, locale }: LuxuryShopCardsProps) {
  const isRTL = locale === 'fa' || locale === 'ar';

  const products = [
    {
      image: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=800&q=80",
      title: locale === 'fa' ? 'بادام هندی درجه یک' : locale === 'ar' ? 'الكاجو الفاخر' : 'Premium Cashew Nuts',
      desc: locale === 'fa' ? 'بادام هندی تازه و با کیفیت' : locale === 'ar' ? 'الكاجو طازج وعالي الجودة' : 'Fresh and high-quality cashew nuts',
      price: "€13.00",
      offPrice: "€15.00",
      offer: true,
      rating: 4.7,
      reviews: 2338,
    },
    {
      image: "https://images.unsplash.com/photo-1578775887804-699de7086ff9?w=800&q=80",
      title: locale === 'fa' ? 'آجیل مخلوط لوکس' : locale === 'ar' ? 'المكسرات المختلطة الفاخرة' : 'Mixed Nuts Deluxe',
      desc: locale === 'fa' ? 'ترکیبی عالی از آجیل درجه یک' : locale === 'ar' ? 'مزيج مثالي من المكسرات الممتازة' : 'A perfect blend of premium nuts',
      price: "€18.00",
      offPrice: "€22.00",
      offer: true,
      rating: 4.9,
      reviews: 1856,
    },
    {
      image: "https://images.unsplash.com/photo-1568471173238-64ed8e7e9f49?w=800&q=80",
      title: locale === 'fa' ? 'بادام ارگانیک' : locale === 'ar' ? 'اللوز العضوي' : 'Organic Almonds',
      desc: locale === 'fa' ? 'بادام خام ارگانیک با گواهی' : locale === 'ar' ? 'اللوز الخام العضوي المعتمد' : 'Certified organic raw almonds',
      price: "€16.00",
      rating: 4.8,
      reviews: 2104,
    },
    {
      image: "https://images.unsplash.com/photo-1607623488235-80ff081b5c38?w=800&q=80",
      title: locale === 'fa' ? 'پسته بهشتی' : locale === 'ar' ? 'الفستق الرائع' : 'Pistachio Paradise',
      desc: locale === 'fa' ? 'پسته برشته شده با نمک کم' : locale === 'ar' ? 'الفستق المحمص قليل الملح' : 'Roasted and lightly salted pistachios',
      price: "€20.00",
      offPrice: "€24.00",
      offer: true,
      rating: 4.6,
      reviews: 1523,
    },
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 via-white to-gray-50" dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="relative pt-28 pb-20 px-4 overflow-hidden"
      >
     

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-linear-to-r from-rose-50 via-pink-50 to-rose-50 rounded-full mb-8 shadow-lg"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-4 h-4 text-rose-600" />
            </motion.div>
            <span className="text-sm font-bold bg-linear-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">
              {dict.header.offers}
            </span>
          </motion.div>
          
          <motion.h1
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-6xl md:text-7xl font-bold mb-6 leading-tight"
          >
            <motion.span
              className="inline-block bg-linear-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent"
              animate={{ backgroundPosition: ['0%', '100%', '0%'] }}
              transition={{ duration: 5, repeat: Infinity }}
            >
              {dict.product.brand}
            </motion.span>
          </motion.h1>
          
          <motion.p
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            {dict.product.description}
          </motion.p>
        </div>
      </motion.section>

      {/* Products Grid */}
      <section className="max-w-7xl mx-auto px-4 pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <ShopCard key={index} {...product} index={index} dict={dict} locale={locale} />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="max-w-5xl mx-auto px-4 pb-24"
      >
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="relative bg-linear-to-r from-gray-900 via-gray-800 to-gray-900 rounded-[32px] p-10 md:p-16 text-center text-white shadow-2xl overflow-hidden"
        >
          {/* Animated Background */}
          <motion.div
            className="absolute inset-0"
            animate={{
              background: [
                'radial-linear(circle at 20% 50%, rgba(244, 63, 94, 0.15) 0%, transparent 50%)',
                'radial-linear(circle at 80% 50%, rgba(236, 72, 153, 0.15) 0%, transparent 50%)',
                'radial-linear(circle at 20% 50%, rgba(244, 63, 94, 0.15) 0%, transparent 50%)',
              ],
            }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          
          <div className="relative z-10">
            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              className="text-4xl md:text-5xl font-bold mb-5"
            >
              {dict.product.wishlist}
            </motion.h2>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto"
            >
              {dict.product.wishlist}
            </motion.p>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(255,255,255,0.2)' }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-gray-900 px-10 py-4 rounded-full font-bold shadow-xl hover:shadow-2xl transition-all text-lg"
            >
              {dict.categories_nut_specific.organic}
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}