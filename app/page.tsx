'use client';
import { useState } from 'react';
import { Header } from './layout/Header';
import { PRODUCTS } from './lib/data';
import { QuickView } from './ui/QuickView';
import { HomeMain } from './ui/template-2';
import { StickyCartBar } from './ui/StickyCartBar';

export default function HomePage() {
  const [quickOpen, setQuickOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(PRODUCTS[0]);

  const handleOpen = (productIndex: number) => {
    setSelectedProduct(PRODUCTS[productIndex]);
    setQuickOpen(true);
  };

  const handleClose = () => setQuickOpen(false);

  return (
    <>
      <Header />
      <HomeMain />
      <StickyCartBar totalItems={2} totalPrice={1500} />
      <QuickView open={quickOpen} product={selectedProduct} onClose={handleClose} />
    </>
  );
}
