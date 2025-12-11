'use client';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Sparkles, ChevronRight } from 'lucide-react';
import { CATEGORIES } from '../lib/data';
import { MagneticButton } from './MagneticButton';

export function FiltersSidebar() {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const setX = gsap.quickSetter(el, 'x', 'px');
        const setY = gsap.quickSetter(el, 'y', 'px');
        const onMove = (e: MouseEvent) => {
            const { innerWidth, innerHeight } = window;
            const dx = (e.clientX / innerWidth - 0.5) * 18;
            const dy = (e.clientY / innerHeight - 0.5) * 14;
            setX(dx); setY(dy);
        };
        window.addEventListener('pointermove', onMove, { passive: true });
        return () => window.removeEventListener('pointermove', onMove);
    }, []);

    return (
        <aside
            ref={ref}
            className="sticky top-24 h-[calc(100vh-8rem)] hidden xl:block rounded-2xl bg-white/85 backdrop-blur-md shadow-2xl border border-amber-100 p-4 self-start" // Added self-start
        >
            {/* ... (Sidebar content using CATEGORIES import and MagneticButton) ... */}
            <div className="flex items-center gap-2 mb-4 text-gray-900">
                <Sparkles className="w-5 h-5 text-amber-600" />
                <span className="font-bold">فیلترهای سریع</span>
            </div>
            <div className="space-y-6 text-sm">
                <div>
                    <div className="font-bold text-amber-800 mb-2">دسته‌بندی</div>
                    <ul className="space-y-2 text-gray-700">
                        {CATEGORIES.map(cat => (
                            <li key={cat.key} className="flex items-center justify-between cursor-pointer hover:text-gray-900">
                                <span>{cat.title}</span>
                                <ChevronRight className="w-4 h-4 text-gray-400" />
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <div className="font-bold text-amber-800 mb-2">قیمت</div>
                    <input type="range" min={0} max={600000} defaultValue={300000} className="w-full" />
                    <div className="text-gray-600 mt-1">حداکثر: ۳۰۰,۰۰۰ تومان</div>
                </div>
                <div>
                    <div className="font-bold text-amber-800 mb-2">برچسب‌ها</div>
                    <div className="flex flex-wrap gap-2">
                        {['پرفروش', 'پریمیوم', 'ارگانیک', 'جدید', 'تخفیف'].map(t => (
                            <span key={t} className="px-2 py-1 bg-rose-100 text-rose-700 rounded-lg">{t}</span>
                        ))}
                    </div>
                </div>
                <div className="pt-2">
                    <MagneticButton className="w-full px-4 py-2 bg-gradient-to-r from-amber-600 to-orange-600 text-white rounded-xl font-bold shadow-lg">
                        اعمال فیلتر
                    </MagneticButton>
                </div>
            </div>
        </aside>
    );
}