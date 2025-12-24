'use client';

import { useState, useRef, useEffect, ReactNode, FC } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { gsap } from 'gsap';
import { ChevronDown } from 'lucide-react';

interface MegaMenuItemProps {
    title: string;
    children: ReactNode;
    width: 'small' | 'medium' | 'large'; 
}

const widthMap = {
    small: 'w-[300px]',
    medium: 'w-[630px]',
    large: 'w-[750px]',
};

const megaVariants: Variants = {
    hidden: { opacity: 0, y: 12, scale: 0.96, pointerEvents: 'none' as const },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        pointerEvents: 'auto' as const,
        transition: {
            duration: 0.3,
            ease: [0.16, 1, 0.3, 1],
        },
    },
    exit: {
        opacity: 0,
        y: 8,
        scale: 0.98,
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
            gsap.fromTo(
                megaRef.current.children,
                { opacity: 0, y: 20, scale: 0.95 },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 0.4,
                    stagger: 0.05,
                    ease: 'power3.out',
                }
            );
        }
    }, [isOpen]);

    return (
        <div
            className="relative "
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
        >
            <button className="flex items-center gap-2 px-4 py-4 hover:text-amber-600 transition-colors group">
                <span className="text-[12.5px] text-stone-300 ">{title}</span>
                <ChevronDown className={`w-4 h-4 text-orange-300 transition-transform ${isOpen ? 'rotate-180 translate-y-0.5' : ''}`} />
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        ref={megaRef}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={megaVariants} // استفاده مستقیم از variants
                        className={`absolute left-1/2 -translate-x-1/2 mt-0 ${widthMap[width]}  rounded-xl bg-white backdrop-blur-xl shadow-2xl border border-gray-300 p-8 overflow-hidden`}
                    >
                        {/* بک‌گراند بلوری دینامیک برای زیبایی */}
                        <div className={`absolute bottom-0 left-0 w-64 h-64 rounded-full blur-3xl opacity-30`}></div>
                        
                        {/* محتوای واقعی دراپ‌دان */}
                        <div className="relative z-10">{children}</div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};