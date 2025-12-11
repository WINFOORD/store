'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ShoppingCart } from 'lucide-react';
import { MagneticButton } from './MagneticButton';

export function StickyCartBar({ totalItems, totalPrice }: { totalItems: number; totalPrice: number }) {
    return (
        <motion.div
            className="fixed bottom-3 left-1/2 -translate-x-1/2 z-[85]"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
        >
            <div className="px-4 py-3 rounded-2xl bg-white shadow-2xl border border-gray-100 flex items-center gap-4">
                <ShoppingCart className="w-5 h-5 text-gray-900" />
                <div className="text-sm text-gray-800">
                    <span className="font-bold">{totalItems} آیتم</span> | جمع: <span className="font-extrabold">{totalPrice.toLocaleString()} تومان</span>
                </div>
                <Link href="/cart">
                    <MagneticButton className="px-4 py-2 bg-emerald-600 text-white rounded-xl font-bold">رفتن به سبد</MagneticButton>
                </Link>
            </div>
        </motion.div>
    );
}