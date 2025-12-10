import { Flame, PackageOpen, HandPlatter, Cookie, ShieldCheck } from 'lucide-react';

export function Marquee() {
    return (
        <div className="overflow-hidden bg-white border-y border-gray-100">
            <div className="flex items-center gap-10 whitespace-nowrap animate-[marquee_18s_linear_infinite] py-3 px-4 text-gray-700">
                <span className="inline-flex items-center gap-2"><Flame className="w-4 h-4 text-orange-600" /> روست تازه روز</span>
                <span className="inline-flex items-center gap-2"><PackageOpen className="w-4 h-4 text-amber-700" /> بسته‌بندی پریمیوم</span>
                <span className="inline-flex items-center gap-2"><HandPlatter className="w-4 h-4 text-emerald-700" /> انتخاب دست‌چین</span>
                <span className="inline-flex items-center gap-2"><Cookie className="w-4 h-4 text-rose-600" /> تنقلات خوشمزه</span>
                <span className="inline-flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-gray-800" /> تضمین کیفیت</span>
            </div>
            <style>{`@keyframes marquee {0%{transform:translateX(0)}100%{transform:translateX(-50%)}}`}</style>
        </div>
    );
}