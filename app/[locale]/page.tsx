// حذف 'use client'

import { Locale } from "../src/i18n/config";
import { getDictionary } from "../src/i18n/Dictionary";
import ElegantCategories from "../src/layout/Main/categories";
import { Footers } from "../src/layout/Main/Footer";
import { HeaderNuts } from "../src/layout/Main/Header";
import { HomeMain } from "../src/layout/Main/templateMain";
import { products } from "../src/lib/data";
import { StickyCartBar } from "../src/ui/main/StickyCartBar";
import LuxuryShopCards from "../src/ui/ShopCard";



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
      <ElegantCategories />
      {/* <LuxuryShopCards   dict={dict} locale={locale}/> */}
      <StickyCartBar totalItems={2} totalPrice={1500} />
      <Footers locale={locale} dict={dict} />
    </>
  );
}
