// ===================================
// NavCardItem.tsx - برای کارت‌های لینک اصلی (محصولات، منابع، خدمات مشتریان، درباره ما و ورود)
// ===================================
import Link from 'next/link';
import { ElementType } from 'react';

type NavCardItemProps = {
    title: string;
    desc: string;
    href: string;
    Icon: ElementType; // Lucide icon
};

export function NavCardItem({ title, desc, href, Icon }: NavCardItemProps) {


    return (
        <Link
            href={href}
            className={`group p-4 rounded-2xl border border-gray-100/50 bg-gray-50/50 hover:shadow-xl hover:scale-[1.02] transition-all duration-300 backdrop-blur-sm `}
        >
            <div className="flex items-start gap-4">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center `}>
                    <Icon className={`w-5 h-5 `} />
                </div>
                <div className="flex-1">
                    <div className={`font-bold text-gray-900 mb-0.5 `}>{title}</div>
                    <div className="text-xs text-gray-500">{desc}</div>
                </div>
            </div>
        </Link>
    );
}

// ===================================
// StatCard.tsx - برای نمایش آمار داخل مگامنوی خدمات مشتریان
// ===================================
type StatCardProps = {
    num: string;
    label: string;
    color: string; // شامل کلاس‌های from-X-500 to-Y-500
};

export function StatCard({ num, label, color }: StatCardProps) {
    return (
        <div className={`rounded-2xl bg-linear-to-br ${color} p-5 text-white text-center shadow-lg hover:scale-105 transition-transform duration-300`}>
            <div className="text-2xl font-black mb-1">{num}</div>
            <div className="text-xs opacity-90">{label}</div>
        </div>
    );
}

// ===================================
// CTABanner.tsx - برای بنرهای CTA در مگامنو (مثل پک هدیه یا راهنما)
// ===================================
type CTABannerProps = {
    title: string;
    subtitle: string;
    buttonText: string;
    href: string;
    fromColor: string; // مثال: 'from-amber-500'
    toColor: string; // مثال: 'to-orange-500'
};

export function CTABanner({ title, subtitle, buttonText, href, fromColor, toColor }: CTABannerProps) {
    return (
        <Link
            href={href}
            className={`relative mt-4 block rounded-2xl bg-linear-to-r ${fromColor} ${toColor} p-6 text-white overflow-hidden group hover:shadow-2xl transition-all duration-300`}
        >
            {/* Hover Overlay */}
            <div className={`absolute inset-0 bg-linear-to-r  opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
            <div className="relative z-10 flex items-center justify-between">
                <div>
                    <div className="text-lg font-black mb-1">{title}</div>
                    <div className="text-sm opacity-90">{subtitle}</div>
                </div>
                <span className="px-6 py-3 bg-white text-gray-900 rounded-xl font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                    {buttonText}
                </span>
            </div>
        </Link>
    );
}