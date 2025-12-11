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
  const locale = params.locale;
  const dict = await getDictionary(locale); // حالا await می‌کنی و با locale درست

  // stateful parts رو می‌تونی توی client component جدا کنی، مثلاً یک ClientHome بساز
  return (
    <>
      <Header locale={locale} dict={dict} /> {/* حالا dict آبجکت هست */}

      <HeaderNuts />
      <HomeMain />
      <StickyCartBar totalItems={2} totalPrice={1500} />
      {/* برای QuickView که state داره، می‌تونی 'use client' جدا بسازی */}
      {/* <ClientQuickView products={PRODUCTS} /> */}
      <div className='flex'></div>
    </>
  );
}

// // یک client component جدا برای قسمت stateful
// 'use client';
// import { useState } from 'react';
// import { QuickView } from '../src/ui/QuickView';

// type ClientProps = {
//   products: typeof PRODUCTS;
// };

// function ClientQuickView({ products }: ClientProps) {
//   const [quickOpen, setQuickOpen] = useState(false);
//   const [selectedProduct, setSelectedProduct] = useState(products[0]);

//   const handleOpen = (productIndex: number) => {
//     setSelectedProduct(products[productIndex]);
//     setQuickOpen(true);
//   };

//   const handleClose = () => setQuickOpen(false);

//   return (
//     <QuickView open={quickOpen} product={selectedProduct} onClose={handleClose} />
//   );
// }