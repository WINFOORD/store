'use client';

import { useState, useRef, useEffect, ReactNode, FC } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { gsap } from 'gsap';
import { ChevronDown } from 'lucide-react';

interface MegaMenuItemProps {
    title: string;
    children: ReactNode;
    width: 'small' | 'medium' | 'large'; 
}

// نگاشت عرض‌ها
const widthMap = {
    small: 'w-[320px]',
    medium: 'w-[650px]',
    large: 'w-[850px]',
};

// متغیرهای رنگی شما (برای اطمینان از اعمال در استایل‌های داخلی)
const colors = {
  '--color-base': '#e2c6aa',
  '--color-shade-80': '#2d2822',
  '--color-tint-80': '#f9f4ee',
};

const megaVariants: Variants = {
    hidden: { opacity: 0, y: 15, scale: 0.98, pointerEvents: 'none' as const },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        pointerEvents: 'auto' as const,
        transition: {
            duration: 0.4,
            ease: [0.23, 1, 0.32, 1], // لوکس‌ترین حالت Ease (Power4 Out)
        },
    },
    exit: {
        opacity: 0,
        y: 10,
        scale: 0.99,
        transition: { duration: 0.2 },
    },
};

export const MegaMenuItem: FC<MegaMenuItemProps> = ({
    title,
    children,
    width,
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const megaRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (isOpen && megaRef.current) {
            // انیمیشن GSAP برای ورود نرم المان‌های داخلی
            gsap.fromTo(
                megaRef.current.querySelectorAll('.mega-content-item'),
                { opacity: 0, y: 15 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.5,
                    stagger: 0.04,
                    ease: 'power2.out',
                    delay: 0.1
                }
            );
        }
    }, [isOpen]);

    return (
        <div
            className="relative"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
            style={colors as any}
        >
            <button className="flex items-center gap-2 px-2 py-4 transition-all duration-300 group">
                <span className={`text-[13px] font-bold tracking-widest uppercase transition-colors duration-300 ${
                    isOpen ? 'text-[var(--color-base)]' : 'text-[var(--color-shade-40)] group-hover:text-[var(--color-shade-80)]'
                }`}>
                    {title}
                </span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-500 ${
                    isOpen ? 'rotate-180 text-[var(--color-base)]' : 'text-[var(--color-shade-20)]'
                }`} />
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        ref={megaRef}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={megaVariants}
                        className={`absolute left-1/2 -translate-x-1/2 mt-2 ${widthMap[width]} 
                            bg-[var(--color-tint-80)]/95 backdrop-blur-2xl rounded-[24px] 
                            shadow-[0_25px_50px_-12px_rgba(45,40,34,0.15)] 
                            border border-[var(--color-base)]/20 p-8 overflow-hidden`}
                    >
                        {/* المان دکوراتیو داخلی برای حس لوکس بودن */}
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[var(--color-base)] to-transparent opacity-50" />
                        
                        {/* بک‌گراند بلوری دکوراتیو (Tint 20) */}
                        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-[var(--color-tint-20)] rounded-full blur-[100px] opacity-40 pointer-events-none" />
                        
                        {/* کانتینر محتوا */}
                        <div className="relative z-10 mega-content-item">
                            {children}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};