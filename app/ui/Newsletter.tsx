'use client';
import { useState } from 'react';
import Lottie from 'lottie-react';
import { Sparkles } from 'lucide-react';
import { SPARKLE_LOTTIE } from '../lib/data';
import { MagneticButton } from './MagneticButton';

export function Newsletter() {
    const [val, setVal] = useState('');
    const [ok, setOk] = useState<boolean | null>(null);
    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);
        setOk(valid);
        if (valid) setVal('');
    };
    return (
        <section className="py-16 bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-3">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-lg">
                        <Sparkles className="w-4 h-4 text-amber-600" />
                        <span className="text-sm font-semibold text-amber-900">خبرنامه ویژه</span>
                    </div>
                    <h3 className="text-3xl lg:text-4xl font-extrabold text-gray-900">تخفیف‌های داغ و محصولات تازه</h3>
                    <p className="text-gray-700 max-w-lg">با عضویت، زودتر از همه از پیشنهادهای پریمیوم و پک‌های هدیه مطلع شو.</p>
                    <div className="flex gap-3 pt-2">
                        <form onSubmit={onSubmit} className="flex gap-3 w-full">
                            <input
                                value={val}
                                onChange={(e) => setVal(e.target.value)}
                                placeholder="ایمیل شما..."
                                className="flex-1 px-4 py-3 bg-white rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-amber-400"
                            />
                            <MagneticButton className="px-6 py-3 bg-gradient-to-r from-amber-600 to-orange-600 text-white rounded-xl font-bold shadow-lg">
                                عضویت
                            </MagneticButton>
                        </form>
                    </div>
                    {ok !== null && (
                        <div className={`text-sm ${ok ? 'text-emerald-600' : 'text-rose-600'}`}>
                            {ok ? 'با موفقیت عضو شدی!' : 'ایمیل معتبر نیست.'}
                        </div>
                    )}
                </div>
                <div className="hidden lg:flex items-center justify-center">
                    <Lottie animationData={SPARKLE_LOTTIE} loop className="w-40 h-40" />
                </div>
            </div>
        </section>
    );
}