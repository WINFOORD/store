'use client'

import { usePathname, useRouter } from 'next/navigation'
import { useCallback } from 'react'

type Locale = 'fa' | 'en' | 'ar'

export function useLocale() {
  const pathname = usePathname()
  const router = useRouter()

  // استخراج locale از pathname
  const currentLocale = (pathname.split('/')[1] || 'fa') as Locale

  // تغییر زبان
  const changeLocale = useCallback((newLocale: Locale) => {
    const segments = pathname.split('/')
    segments[1] = newLocale
    const newPath = segments.join('/')
    
    // ذخیره در Cookie
    document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000`
    
    router.push(newPath)
  }, [pathname, router])

  // دریافت ترجمه بر اساس locale
  const t = useCallback((translations: Record<Locale, string>) => {
    return translations[currentLocale] || translations.fa
  }, [currentLocale])

  // دریافت جهت متن
  const dir = currentLocale === 'en' ? 'ltr' : 'rtl'

  return {
    locale: currentLocale,
    changeLocale,
    t,
    dir,
    isRTL: dir === 'rtl',
    isLTR: dir === 'ltr',
  }
}

// Hook برای ترجمات
export function useTranslations() {
  const { t } = useLocale()

  return {
    common: {
      home: t({ fa: 'خانه', en: 'Home', ar: 'الرئيسية' }),
      products: t({ fa: 'محصولات', en: 'Products', ar: 'المنتجات' }),
      about: t({ fa: 'درباره ما', en: 'About Us', ar: 'من نحن' }),
      contact: t({ fa: 'تماس با ما', en: 'Contact', ar: 'اتصل بنا' }),
      cart: t({ fa: 'سبد خرید', en: 'Cart', ar: 'عربة التسوق' }),
      search: t({ fa: 'جستجو', en: 'Search', ar: 'بحث' }),
    },
    product: {
      addToCart: t({ fa: 'افزودن به سبد', en: 'Add to Cart', ar: 'أضف إلى السلة' }),
      price: t({ fa: 'قیمت', en: 'Price', ar: 'السعر' }),
      inStock: t({ fa: 'موجود', en: 'In Stock', ar: 'متوفر' }),
      outOfStock: t({ fa: 'ناموجود', en: 'Out of Stock', ar: 'غير متوفر' }),
    },
    seo: {
      loading: t({ fa: 'در حال بارگذاری...', en: 'Loading...', ar: 'جاري التحميل...' }),
      error: t({ fa: 'خطا در بارگذاری', en: 'Loading Error', ar: 'خطأ في التحميل' }),
    }
  }
}