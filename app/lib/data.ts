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
    category: string[];
    
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
    { id: 1, title: 'آجیل مخلوط لاکچری', description: 'ترکیب دست‌چین با روست طلایی و بافت کرانچی', price: 360000, originalPrice: 420000, rating: 4.9, reviews: 312, picture: '🥜', tag: 'پرفروش', color: 'from-amber-200 to-orange-300', category: 'nuts' },
    { id: 2, title: 'پسته اکبری برشته', description: 'نمک دریا، روست دقیق برای عطر ملایم', price: 470000, rating: 4.8, reviews: 178, picture: '🌿', tag: 'پریمیوم', color: 'from-emerald-200 to-emerald-300', category: 'pistachio' },
    { id: 3, title: 'بادام درختی خام', description: 'منبع طبیعی فیبر و پروتئین، بدون افزودنی', price: 295000, rating: 4.6, reviews: 104, picture: '🌰', tag: 'سلامتی', color: 'from-amber-100 to-rose-200', category: 'nuts' },
    { id: 4, title: 'کشمش سبز قلمی', description: 'شیرینی طبیعی، انرژی‌زا، مناسب میان‌وعده', price: 185000, originalPrice: 210000, rating: 4.7, reviews: 139, picture: '🍇', tag: 'ارگانیک', color: 'from-green-200 to-lime-300', category: 'dried' },
    { id: 5, title: 'شکلات تلخ ۸۵٪', description: 'کاکائو خالص با رایحه‌ی میوه‌ای، فاخر و خوش‌طعم', price: 225000, rating: 4.8, reviews: 212, picture: '🍫', tag: 'جدید', color: 'from-neutral-200 to-neutral-300', category: 'choco' },
    { id: 6, title: 'خرما مضافتی اعلا', description: 'بافت نرم، شیرینی معتدل، بسته‌بندی بهداشتی', price: 160000, rating: 4.6, reviews: 97, picture: '🍯', tag: 'طبیعی', color: 'from-amber-100 to-amber-300', category: 'dried' },
    { id: 7, title: 'بادام هندی روست سبک', description: 'روست سبک، کرانچی و دل‌چسب', price: 340000, originalPrice: 380000, rating: 4.7, reviews: 126, picture: '🥥', tag: 'تخفیف', color: 'from-rose-200 to-pink-300', category: 'nuts' },
    { id: 8, title: 'نوقا مغزدار عسلی', description: 'لطیف، مغزدار، هدیه‌ای خوشمزه', price: 210000, rating: 4.5, reviews: 68, picture: '🍬', tag: 'دسر', color: 'from-amber-200 to-orange-400', category: 'choco' },
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