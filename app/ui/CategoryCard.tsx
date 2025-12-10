'use client';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

export function CategoryCard({ title, emoji, color }: { title: string; emoji: string; color: string }) {
    return (
        <motion.div
            className="rounded-2xl bg-white shadow-lg overflow-hidden"
            initial={{ y: 24, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
        >
            <div className={`p-6 bg-gradient-to-br ${color}`}>
                <div className="text-5xl text-center select-none">{emoji}</div>
            </div>
            <div className="p-4 flex items-center justify-between">
                <h3 className="font-bold text-gray-900">{title}</h3>
                <ChevronRight className="w-5 h-5 text-gray-400" />
            </div>
        </motion.div>
    );
}