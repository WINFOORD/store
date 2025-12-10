'use client';

import { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ShoppingCart, Star } from 'lucide-react';

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
}: ShopCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [cartCount, setCartCount] = useState(0);

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
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      whileHover={{ y: -8 }}
      className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative w-full aspect-[3/4] overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
        <motion.img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
          animate={{ scale: isHovered ? 1.08 : 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />
        
        {/* Gradient Overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />

        {/* Offer Badge */}
        {offer && (
          <motion.div
            initial={{ scale: 0, rotate: -45 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="absolute top-4 left-4 bg-gradient-to-r from-rose-500 to-pink-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg"
          >
            تخفیف
          </motion.div>
        )}

        {/* Cart Count Badge */}
        {cartCount > 0 && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="absolute top-4 right-4 w-10 h-10 bg-gradient-to-br from-emerald-500 to-green-600 text-white rounded-full flex items-center justify-center shadow-lg font-bold"
          >
            {cartCount}
          </motion.div>
        )}

        {/* Add to Cart Button */}
        <motion.div
          initial={{ y: 60, opacity: 0 }}
          animate={{ 
            y: isHovered ? 0 : 60, 
            opacity: isHovered ? 1 : 0 
          }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="absolute bottom-4 left-4 right-4"
        >
          {cartCount === 0 ? (
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleAddToCart}
              className="w-full bg-gradient-to-r from-emerald-500 to-green-600 text-white py-3 rounded-full font-semibold flex items-center justify-center gap-2 shadow-xl hover:from-emerald-600 hover:to-green-700 transition-all"
            >
              <ShoppingCart className="w-5 h-5" />
              افزودن به سبد
            </motion.button>
          ) : (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="flex items-center gap-2 bg-white/95 backdrop-blur-md rounded-full p-2 shadow-xl"
            >
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setCartCount(prev => prev + 1)}
                className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-green-600 text-white rounded-full flex items-center justify-center font-bold text-xl shadow-md hover:shadow-lg transition-shadow"
              >
                +
              </motion.button>
              <div className="flex-1 text-center">
                <motion.span 
                  key={cartCount}
                  initial={{ scale: 1.3, color: "#10b981" }}
                  animate={{ scale: 1, color: "#111827" }}
                  className="text-xl font-bold"
                >
                  {cartCount}
                </motion.span>
              </div>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleDecrement}
                className="w-10 h-10 bg-gradient-to-br from-gray-500 to-gray-600 text-white rounded-full flex items-center justify-center font-bold text-xl shadow-md hover:shadow-lg transition-shadow"
              >
                −
              </motion.button>
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Rating */}
        {rating > 0 && (
          <div className="flex items-center gap-2 mb-2">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-3.5 h-3.5 ${
                    i < Math.floor(rating)
                      ? 'fill-amber-400 text-amber-400'
                      : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
            <span className="text-xs font-medium text-gray-600">
              {rating.toFixed(1)} ({reviews})
            </span>
          </div>
        )}

        {/* Title */}
        <motion.h3 
          className="font-bold text-gray-900 mb-1 text-lg leading-tight"
          animate={{ color: isHovered ? '#000' : '#111827' }}
        >
          {title}
        </motion.h3>

        {/* Description */}
        {desc && (
          <p className="text-sm text-gray-500 mb-3 line-clamp-2 leading-relaxed">
            {desc}
          </p>
        )}

        {/* Price */}
        <div className="flex items-baseline gap-2">
          <motion.span 
            className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent"
            whileHover={{ scale: 1.05 }}
          >
            {price}
          </motion.span>
          {offPrice && (
            <motion.span 
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-sm text-gray-400 line-through"
            >
              {offPrice}
            </motion.span>
          )}
        </div>

        {/* Discount Percentage */}
        {offPrice && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block mt-2 text-xs font-semibold text-rose-600 bg-rose-50 px-2 py-1 rounded-full"
          >
            Save {Math.round((1 - parseFloat(price.replace(/[^0-9.]/g, '')) / parseFloat(offPrice.replace(/[^0-9.]/g, ''))) * 100)}%
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}

// Main component with scroll animations
export default function LuxuryShopCards() {
  const products = [
    {
      image: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=800&q=80",
      title: "Premium Cashew Nuts",
      desc: "Fresh and high-quality cashew nuts",
      price: "€13.00",
      offPrice: "€15.00",
      offer: true,
      rating: 4.7,
      reviews: 2338,
    },
    {
      image: "https://images.unsplash.com/photo-1578775887804-699de7086ff9?w=800&q=80",
      title: "Mixed Nuts Deluxe",
      desc: "A perfect blend of premium nuts",
      price: "€18.00",
      offPrice: "€22.00",
      offer: true,
      rating: 4.9,
      reviews: 1856,
    },
    {
      image: "https://images.unsplash.com/photo-1568471173238-64ed8e7e9f49?w=800&q=80",
      title: "Organic Almonds",
      desc: "Certified organic raw almonds",
      price: "€16.00",
      rating: 4.8,
      reviews: 2104,
    },
    {
      image: "https://images.unsplash.com/photo-1607623488235-80ff081b5c38?w=800&q=80",
      title: "Pistachio Paradise",
      desc: "Roasted and lightly salted pistachios",
      price: "€20.00",
      offPrice: "€24.00",
      offer: true,
      rating: 4.6,
      reviews: 1523,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative pt-20 pb-16 px-4 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-rose-50 to-pink-50 rounded-full mb-6"
          >
            <span className="text-sm font-semibold bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">
              ✨ Premium Collection
            </span>
          </motion.div>
          
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold mb-4"
          >
            <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
              Indulge in Luxury
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Curated selection of premium nuts and dried fruits, 
            handpicked for those who appreciate the finer things
          </motion.p>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-rose-200/20 to-pink-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-amber-200/20 to-orange-200/20 rounded-full blur-3xl" />
      </motion.section>

      {/* Products Grid */}
      <section className="max-w-7xl mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <ShopCard key={index} {...product} index={index} />
          ))}
        </div>
      </section>

      {/* Floating CTA */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="max-w-4xl mx-auto px-4 pb-20"
      >
        <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 rounded-3xl p-8 md:p-12 text-center text-white shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-rose-500/10 to-pink-500/10" />
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Join Our Premium Club
            </h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Get exclusive access to limited editions and early releases
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-gray-900 px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-xl transition-shadow"
            >
              Explore Collection
            </motion.button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}