'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Heart, ShoppingCart } from 'lucide-react';
import { Product } from '../types';

import { formatPrice } from '../lib/utils';
import OptimizedImage from '../ui/optimizeImage';
import { useCartStore } from '../store/cartStore';
import { Button } from '../ui/Button';


interface ProductCardProps {
  product: Product;
  gradient?: string;
}

export function ProductCard({ product, gradient = 'from-pink-300 to-pink-400' }: ProductCardProps) {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const addItem = useCartStore((state) => state.addItem);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addItem(product);
  };

  return (
    <Link href={`/product/${product?.slug}`} className="group block">
      <div className="relative">
        <div className={`relative bg-linear-to-br ${gradient} rounded-2xl overflow-hidden aspect-square mb-4 transform group-hover:scale-105 transition duration-300`}>
          <OptimizedImage
            src={product?.image}
            alt={product?.name}
            fill
            className="object-cover mix-blend-multiply"
          />

          {product?.discount && (
            <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
              -{product?.discount}%
            </div>
          )}

          <button
            onClick={(e) => {
              e.preventDefault();
              setIsWishlisted(!isWishlisted);
            }}
            className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md opacity-0 group-hover:opacity-100 transition"
          >
            <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-red-500 text-red-500' : ''}`} />
          </button>

          <Button
            onClick={handleAddToCart}
            size="sm"
            className="absolute bottom-4 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition"
          >
            <ShoppingCart className="w-4 h-4 mr-2" />
            Add to Cart
          </Button>
        </div>

        <h4 className="font-semibold text-gray-900 mb-1">{product?.name}</h4>
        <div className="flex items-center gap-2">
          {product?.discount ? (
            <>
              <p className="text-lg font-bold text-gray-900">
                {formatPrice(product?.price * (1 - product?.discount / 100))}
              </p>
              <p className="text-sm text-gray-500 line-through">
                {formatPrice(product?.price)}
              </p>
            </>
          ) : (
            <p className="text-lg font-bold text-gray-900">{formatPrice(product?.price)}</p>
          )}
        </div>
      </div>
    </Link>
  );
}