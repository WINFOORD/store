import Link from 'next/link';
import Image from 'next/image';
import OptimizedImage from '@/app/src/ui/optimizeImage';
import { Button } from '@/app/src/ui/Button';

export function HeroSection() {
  return (
    <section className="relative bg-linear-to-br from-pink-200 via-pink-300 to-pink-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Wrap it, gift it,<br />snack it.
            </h2>
            <Link href="/gifts">
              <Button size="lg">
                See gift sets
              </Button>
            </Link>
          </div>

          {/* Product Image */}
          <div className="relative">
            <div className="relative z-10 transform hover:scale-105 transition duration-500">
              <div className="relative w-full h-96 lg:h-[500px]">
                <OptimizedImage
                  src="/images/hero-gift-box.jpg"
                  alt="Gift box with products"
                  fill
                  className="object-contain rounded-lg"

                />
              </div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-teal-400 rounded-full opacity-50 blur-2xl"></div>
              <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-pink-400 rounded-full opacity-50 blur-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
