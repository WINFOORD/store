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
            <div className="px-4 py-2 rounded-xl bg-black/30 backdrop-blur-xs shadow-2xl hover:bg-black/70 transition-colors duration-300 flex items-center gap-4">
                <ShoppingCart className="w-5 h-5 text-gray-100" />
                <div className="text-sm text-gray-100">
                    <span className="font-bold">{totalItems} آیتم</span> | جمع: <span className="font-extrabold">{totalPrice.toLocaleString()} تومان</span>
                </div>
                <Link href="/cart">
                    <MagneticButton className="px-4 py-2 ring ring-gray-500 text-green-100  rounded-md font-bold">رفتن به سبد</MagneticButton>
                </Link>
            </div>
        </motion.div>
    );
}