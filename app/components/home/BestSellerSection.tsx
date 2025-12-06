import { Product } from '@/app/types';
import Link from 'next/link';
import { ProductCard } from '../ProductCard';

interface BestsellersSectionProps {
  products: Product[];
}

const gradients = [
  'from-pink-300 to-pink-400',
  'from-yellow-300 to-yellow-400',
  'from-cyan-300 to-cyan-400',
  'from-purple-300 to-purple-400'
];

export function BestsellersSection({ products }: BestsellersSectionProps) {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="flex justify-between items-center mb-8">
        <h3 className="text-3xl font-bold text-gray-900">Our bestsellers</h3>
        <Link href="/bestsellers" className="text-sm font-medium hover:underline">
          Explore favorites →
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.slice(0, 4).map((product, index) => (
          <ProductCard
            key={product.id}
            product={product}
            gradient={gradients[index % gradients.length]}
          />
        ))}
      </div>
    </section>
  );
}
