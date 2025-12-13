// حذف 'use client'
import { HeaderNuts } from '../src/layout/Header';
import { HomeMain } from '../src/ui/template-2';
import { StickyCartBar } from '../src/ui/StickyCartBar';
import { getDictionary } from '../src/i18n/Dictionary';
import { Locale } from '../src/i18n/config';

type Props = {
  params: { locale: Locale };
};

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  const dict = await getDictionary(locale); 

  return (
    <>

      <HeaderNuts dict={dict} locale={locale} />
      <HomeMain />
      <StickyCartBar totalItems={2} totalPrice={1500} />
      

      <div className='flex'></div>
    </>
  );
}
