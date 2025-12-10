'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, X } from 'lucide-react';
import { Product } from '../lib/data';
import { MagneticButton } from './MagneticButton';

export function QuickView({
    open,
    product,
    onClose,
}: {
    open: boolean;
    product: Product | null;
    onClose: () => void;
}) {
    return (
        <AnimatePresence>
            {open && product && (
                <motion.div
                    className="fixed inset-0 z-[95] bg-black/40 flex items-center justify-center p-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <motion.div
                        className="relative max-w-lg w-full rounded-2xl bg-white shadow-2xl overflow-hidden"
                        initial={{ y: 40, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 40, opacity: 0 }}
                        transition={{ type: 'spring', stiffness: 160, damping: 20 }}
                    >
                        <button
                            onClick={onClose}
                            className="absolute top-3 left-3 p-2 rounded-full bg-gray-100 hover:bg-gray-200"
                        >
                            <X className="w-4 h-4 text-gray-700" />
                        </button>
                        <div className={`p-6 bg-gradient-to-br ${product.color}`}>
                            <div className="text-7xl text-center">{product.picture}</div>
                        </div>
                        <div className="p-6 space-y-3">
                            <h3 className="font-extrabold text-gray-900 text-lg">{product.title}</h3>
                            <p className="text-sm text-gray-600">{product.description}</p>
                            <div className="flex items-center gap-2 text-sm text-gray-700">
                                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                                <span>{product.rating.toFixed(1)}</span>
                                <span className="text-gray-400">({product.reviews} نظر)</span>
                            </div>
                            <div className="flex items-baseline gap-2">
                                <span className="font-extrabold text-gray-900">{product.price.toLocaleString()} تومان</span>
                                {product.originalPrice && product.originalPrice > 0 && (
                                    <span className="text-gray-400 line-through">{product.originalPrice.toLocaleString()} تومان</span>
                                )}
                            </div>
                            <div className="pt-2 flex items-center gap-2">
                                <MagneticButton className="px-4 py-2 bg-gradient-to-r from-amber-600 to-orange-600 text-white rounded-xl font-bold shadow-lg">
                                    افزودن به سبد
                                </MagneticButton>
                                <button className="px-4 py-2 bg-gray-100 text-gray-900 rounded-xl font-bold hover:bg-gray-200">
                                    مشاهده جزئیات
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}