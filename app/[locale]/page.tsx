// حذف 'use client'

import Footer from "../src/components/Footer";
import { Locale } from "../src/i18n/config";
import { getDictionary } from "../src/i18n/Dictionary";
import { HeaderNuts } from "../src/layout/Header";
import { products } from "../src/lib/data";
import { StickyCartBar } from "../src/ui/main/StickyCartBar";
import { HomeMain } from "../src/ui/main/templateMain";



type Props = {
  params: { locale: Locale };
};
const product = products;
export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  return (
    <>

      <HeaderNuts dict={dict} locale={locale} />
      <HomeMain />
      <StickyCartBar totalItems={2} totalPrice={1500} />
      <Footer locale={locale} dict={dict} />
    </>
  );
}
