import { BadgePercent, Boxes, Candy, Flame, Gift, Leaf, Nut, PackageOpen, Sparkles, Truck } from "lucide-react";

// Imports for Lottie are moved here as it's a constant
export const SPARKLE_LOTTIE = {
    v: '5.7.4', fr: 29.97, ip: 0, op: 60, w: 64, h: 64, nm: 'sparkle', ddd: 0, assets: [],
    layers: [{
        ddd: 0, ind: 1, ty: 4, nm: 'star', sr: 1,
        ks: {
            o: { a: 1, k: [{ t: 0, s: 0 }, { t: 10, s: 100 }, { t: 50, s: 0 }] },
            r: { a: 1, k: [{ t: 0, s: 0 }, { t: 60, s: 180 }] },
            p: { a: 0, k: [32, 32, 0] },
            a: { a: 0, k: [0, 0, 0] },
            s: { a: 1, k: [{ t: 0, s: [0, 0, 100] }, { t: 15, s: [120, 120, 100] }, { t: 60, s: [0, 0, 100] }] }
        },
        shapes: [
            { ty: 'sr', d: 1, p: { a: 0, k: [0, 0] }, s: { a: 0, k: 18 }, r: { a: 0, k: 5 }, or: { a: 0, k: 18 }, ir: { a: 0, k: 8 }, i: { a: 0, k: 5 }, o: { a: 0, k: 5 }, tr: { a: 0, k: { p: [0, 0], a: [0, 0], s: [100, 100], r: 0, o: 100 } } },
            { ty: 'fl', c: { a: 0, k: [1, 0.72, 0.27, 1] }, o: { a: 0, k: 100 } },
        ],
        ao: 0
    }]
};

export type Product = {
    id: number;
    title: string;
    description: string;
    price: number;
    originalPrice?: number;
    picture: string;
    tag?: string;
    category: string;
    href: string;
    icon:string;
};

export type CategoryKey = 'nuts' | 'pistachio' | 'dried' | 'choco';

export type Category = {
    key: CategoryKey;
    title: string;
    emoji: string;
    color: string;
};

export type Banner = {
    id: number;
    title: string;
    subtitle: string;
    gradient: string;
    cta?: string;
    emoji: string; 
};

export const PRODUCTS: Product[] = [
    { id: 1, title: 'شکلات', description: 'ترکیب دست‌چین با روست طلایی و بافت کرانچی', price: 360000, originalPrice: 420000,  picture: '🥜', tag: 'پرفروش',  category: 'nuts', href: '/test' , icon : 'truck'},
    { id: 2, title: 'آجیل', description: 'نمک دریا، روست دقیق برای عطر ملایم', price: 470000,  picture: '🌿', tag: 'پریمیوم',  category: 'pistachio', href: '/test' , icon : 'truck' },
    { id: 3, title: 'بیسکوییت', description: 'منبع طبیعی فیبر و پروتئین، بدون افزودنی', price: 295000,  picture: '🌰', tag: 'سلامتی',  category: 'nuts' , href: '/test' , icon : 'truck'},
    { id: 4, title: 'میوه خشک', description: 'شیرینی طبیعی، انرژی‌زا، مناسب میان‌وعده', price: 185000, originalPrice: 210000,  picture: '🍇', tag: 'ارگانیک',  category: 'dried', href: '/test' , icon : 'truck' },
    { id: 5, title: 'پروتئینی', description: 'کاکائو خالص با رایحه‌ی میوه‌ای، فاخر و خوش‌طعم', price: 225000,  picture: '🍫', tag: 'جدید',  category: 'choco', href: '/test' , icon : 'truck' },
    { id: 6, title: 'رژیمی', description: 'بافت نرم، شیرینی معتدل، بسته‌بندی بهداشتی', price: 160000,  picture: '🍯', tag: 'طبیعی',  category: 'dried' , href: '/test' , icon : 'truck' },
];

export const CATEGORIES: Category[] = [
    { key: 'nuts', title: 'آجیل و مغزها', emoji: '🥜', color: 'from-amber-100 to-amber-300' },
    { key: 'pistachio', title: 'پسته و بادام', emoji: '🌿', color: 'from-emerald-100 to-emerald-300' },
    { key: 'dried', title: 'خشکبار', emoji: '🍇', color: 'from-lime-100 to-green-300' },
    { key: 'choco', title: 'شکلات و تنقلات', emoji: '🍫', color: 'from-neutral-100 to-neutral-300' },
] as const;

export const BANNERS: Banner[] = [
    { id: 1, title: 'تخفیف ویژه', subtitle: 'تا ۴۰٪ تخفیف محصولات منتخب', gradient: 'from-purple-500 via-pink-500 to-rose-500', cta: 'مشاهده محصولات', emoji: '🔥' },
    { id: 2, title: 'محصولات جدید', subtitle: 'تازه‌ترین آجیل‌های فصل', gradient: 'from-emerald-500 via-teal-500 to-cyan-500', cta: 'کاوش کنید', emoji: '✨' },
    { id: 3, title: 'پک هدیه', subtitle: 'بسته‌بندی لاکچری برای عزیزانتان', gradient: 'from-amber-500 via-orange-500 to-red-500', cta: 'انتخاب هدیه', emoji: '🎁' },
];

    export const products = [
        { title: 'آجیل و مغزها', icon: Nut, linear: 'from-amber-100 to-orange-200', href: '/products?c=nuts' },
        { title: 'خشکبار ارگانیک', icon: Leaf, linear: 'from-emerald-100 to-emerald-300', href: '/products?c=dried' },
        { title: 'شکلات و تنقلات', icon: Candy, linear: 'from-neutral-100 to-neutral-300', href: '/products?c=choco' },
        { title: 'پک‌های هدیه', icon: Gift, linear: 'from-rose-100 to-pink-200', href: '/gifts' },
        { title: 'پیشنهاد ویژه', icon: BadgePercent, linear: 'from-amber-100 to-rose-100', href: '/deals' },
        { title: 'روست تازه روز', icon: Flame, linear: 'from-orange-100 to-amber-200', href: '/fresh-roast' },
    ];

    export const resources = [
        { title: 'راهنمای خرید آجیل', desc: 'انتخاب هوشمندانه برای سلیقه شما', href: '/guides/buying-nuts', icon: Candy },
        { title: 'آموزش نگهداری', desc: 'تازه و خوش‌طعم نگهش دار', href: '/guides/storage', icon: Candy },
        { title: 'وبلاگ کیفیت و اصالت', desc: 'داستان مزه‌های اصیل', href: '/blog', icon: Candy },
        { title: 'پرسش‌های متداول', desc: 'سریع به پاسخ برس', href: '/faq', icon: Candy },
    ];

    export const integrations = [
        { title: 'ارسال سریع', icon: Truck, desc: 'اتصال به سرویس پست پیشرفته', href: '/integrations/shipping' },
        { title: 'بسته‌بندی لوکس', icon: PackageOpen, desc: 'سفارشی‌سازی پک‌های هدیه', href: '/integrations/packaging' },
        { title: 'باشگاه مشتریان', icon: Sparkles, desc: 'امتیاز و تخفیف‌های وفاداری', href: '/integrations/loyalty' },
        { title: 'مدیریت انبار', icon: Boxes, desc: 'همگام‌سازی موجودی و سفارش', href: '/integrations/inventory' },
    ];