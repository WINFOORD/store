import { BadgePercent, Boxes, Candy, Flame, Gift, Heart, Leaf, Nut, PackageOpen, Sparkles, Truck } from "lucide-react";

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
    { id: 1, title: 'شکلات', description: 'ترکیب دست‌چین با روست طلایی و بافت کرانچی', price: 360000, originalPrice: 420000,  picture: '', tag: 'پرفروش',  category: 'nuts', href: '/test' , icon : 'truck'},
    { id: 2, title: 'آجیل', description: 'نمک دریا، روست دقیق برای عطر ملایم', price: 470000,  picture: '', tag: 'پریمیوم',  category: 'pistachio', href: '/test' , icon : 'truck' },
    { id: 3, title: 'بیسکوییت', description: 'منبع طبیعی فیبر و پروتئین، بدون افزودنی', price: 295000,  picture: '', tag: 'سلامتی',  category: 'nuts' , href: '/test' , icon : 'truck'},
    { id: 4, title: 'میوه خشک', description: 'شیرینی طبیعی، انرژی‌زا، مناسب میان‌وعده', price: 185000, originalPrice: 210000,  picture: '', tag: 'ارگانیک',  category: 'dried', href: '/test' , icon : 'truck' },
    { id: 5, title: 'پروتئینی', description: 'کاکائو خالص با رایحه‌ی میوه‌ای، فاخر و خوش‌طعم', price: 225000,  picture: '', tag: 'جدید',  category: 'choco', href: '/test' , icon : 'truck' },
    { id: 6, title: 'رژیمی', description: 'بافت نرم، شیرینی معتدل، بسته‌بندی بهداشتی', price: 160000,  picture: '', tag: 'طبیعی',  category: 'dried' , href: '/test' , icon : 'truck' },
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
    { title: 'آجیل کامل', icon: Nut, href: '/products/nuts', desc: 'انواع مغزها و آجیل‌های شور و خام' },
    { title: 'خشکبار', icon: Leaf, href: '/products/dried-fruits', desc: 'میوه‌های خشک شده طبیعی و ارگانیک' },
    { title: 'شکلات', icon: Candy, href: '/products/chocolates', desc: 'شکلات‌های لوکس، کاکائو و ترافل' },
    { title: 'پک هدیه', icon: Gift, href: '/products/gifts', desc: 'سبدهای زیبا برای مناسبت‌ها' },
    { title: 'ارگانیک', icon: Sparkles, href: '/products/organic', desc: 'محصولات بدون مواد افزودنی' },
    { title: 'سفارش عمده', icon: PackageOpen, href: '/products/bulk', desc: 'خرید با تخفیف‌های ویژه حجمی' },
];

export const resources = [
    { title: 'راهنمای خرید', icon: Flame, desc: 'چگونه بهترین محصول را انتخاب کنید', href: '/guides' },
    { title: 'نکات نگهداری', icon: PackageOpen, desc: 'حفظ تازگی آجیل در خانه', href: '/guides/storage' },
    { title: 'مقالات سلامت', icon: Heart, desc: 'خواص و فواید تغذیه‌ای', href: '/blog' },
    { title: 'دستور پخت', icon: Candy, desc: 'دستورهای غذایی با مغزها و خشکبار', href: '/recipes' },
];

export const integrations = [
    { title: 'تماس با ما', icon: Truck, desc: 'پشتیبانی فروش و پیگیری سفارش', href: '/contact' },
    { title: 'سوالات متداول', icon: Heart, desc: 'جواب سؤالات پرتکرار', href: '/faq' },
    { title: 'شرایط ارسال', icon: Truck, desc: 'جزئیات زمان و هزینه ارسال', href: '/shipping' },
    { title: 'حساب کاربری', icon: Nut, desc: 'پیگیری سفارش و جزئیات پروفایل', href: '/profile' },
];
export const PRODUCTSection = {
  freshNuts: [
    {
      id: 1,
      title: 'Organic cocoa and raspberry energy ball 30g',
      price: 1.50,
      originalPrice: 80.00,
      unit: 'per 1 kg',
      image: 'https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=800&q=80',
      bgColor: '#7DD3FC',
      score: 4.7,
      reviews: 202,
      isOrganic: true,
      note: true,
      discount: 40,
      category: 'انرژی بال'
    },
    {
      id: 2,
      title: 'Freeze-dried strawberry slices 350g',
      price: 25.00,
      originalPrice: 71.43,
      unit: 'per 1 kg',
      image: 'https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=800&q=80',
      bgColor: '#FCA5A5',
      score: 4.8,
      reviews: 2870,
      isOrganic: false,
      note: false,
      discount: 35,
      category: 'میوه خشک'
    },
    {
      id: 3,
      title: 'Vegan vanilla flavoured protein powder 1kg',
      price: 24.00,
      image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?w=800&q=80',
      bgColor: '#C4B5FD',
      score: 4.5,
      reviews: 654,
      isOrganic: false,
      note: true,
      category: 'پروتئین'
    },
    {
      id: 4,
      title: 'Organic walnut pieces 1kg',
      price: 13.50,
      image: 'https://images.unsplash.com/photo-1508747703725-719777637510?w=800&q=80',
      bgColor: '#FCA5A5',
      score: 4.7,
      reviews: 791,
      isOrganic: true,
      note: true,
      category: 'آجیل'
    }
  ]
};



export const PRODUCTSCard = {
  freshNuts: [
    { id: 1, title: 'بادام مامایی آمریکایی', weight: '500 گرم', price: '۴۵۰,۰۰۰', img: 'https://images.unsplash.com/photo-1508747703725-719777637510?w=800&q=85' },
    { id: 2, title: 'گردو چندلر کالیفرنیا', weight: '500 گرم', price: '۳۸۰,۰۰۰', img: 'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=800&q=85' },
    { id: 3, title: 'پسته اکبری برشته', weight: '250 گرم', price: '۵۲۰,۰۰۰', img: 'https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=800&q=85' },
    { id: 4, title: 'مغز فندق ترک', weight: '500 گرم', price: '۴۲۰,۰۰۰', img: 'https://images.unsplash.com/photo-1618897996318-5a901fa6ca71?w=800&q=85' },
    { id: 5, title: 'کاجو هندی درجه یک', weight: '500 گرم', price: '۳۹۰,۰۰۰', img: 'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=800&q=85' }
  ],
  dried: [
    { id: 11, title: 'توت فرنگی خشک', weight: '250 گرم', price: '۲۸۰,۰۰۰', img: 'https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=800&q=85' },
    { id: 12, title: 'انجیر خشک شده', weight: '300 گرم', price: '۳۲۰,۰۰۰', img: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=800&q=85' },
    { id: 13, title: 'کیوی خشک', weight: '200 گرم', price: '۲۵۰,۰۰۰', img: 'https://images.unsplash.com/photo-1557800636-894a64c1696f?w=800&q=85' }
  ],
  organic: [
    { id: 21, title: 'مخلوط ارگانیک پریمیوم', weight: '500 گرم', price: '۵۸۰,۰۰۰', img: 'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=800&q=85' },
    { id: 22, title: 'بادام ارگانیک', weight: '500 گرم', price: '۴۹۰,۰۰۰', img: 'https://images.unsplash.com/photo-1590779033100-9f60a05a013d?w=800&q=85' },
    { id: 23, title: 'گردو ارگانیک', weight: '500 گرم', price: '۴۲۰,۰۰۰', img: 'https://images.unsplash.com/photo-1614961234441-64e415a6a4c7?w=800&q=85' }
  ],
  chocolate: [
    { id: 31, title: 'شکلات تلخ ۸۵٪ کاکائو', weight: '100 گرم', price: '۱۸۰,۰۰۰', img: 'https://images.unsplash.com/photo-1511381939415-e44015466834?w=800&q=85' },
    { id: 32, title: 'ترافل فندقی', weight: '150 گرم', price: '۲۲۰,۰۰۰', img: 'https://images.unsplash.com/photo-1548907040-4baa42d10919?w=800&q=85' },
    { id: 33, title: 'شکلات شیری با پسته', weight: '120 گرم', price: '۱۹۵,۰۰۰', img: 'https://images.unsplash.com/photo-1549007994-cb92caebd54b?w=800&q=85' }
  ]
};