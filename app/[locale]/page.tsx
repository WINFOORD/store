// حذف 'use client'
import { HeaderNuts } from '../src/layout/Header';
import { HomeMain } from '../src/ui/template-2';
import { StickyCartBar } from '../src/ui/StickyCartBar';
import { QuickView } from '../src/ui/QuickView';
import { PRODUCTS } from '../src/lib/data';
import Header from '../src/components/Header';
import { getDictionary } from '../src/i18n/Dictionary';
import { Locale } from '../src/i18n/config';

// حالا props دریافت کن
type Props = {
  params: { locale: Locale };
};

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  const dict = await getDictionary(locale); // حالا await می‌کنی و با locale درست

  // stateful parts رو می‌تونی توی client component جدا کنی، مثلاً یک ClientHome بساز
  return (
    <>

      <HeaderNuts dict={dict} locale={locale} />
      <HomeMain />
      <StickyCartBar totalItems={2} totalPrice={1500} />

      <div className='flex'></div>
    </>
  );
}
