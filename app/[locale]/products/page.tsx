import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { generateBreadcrumbSchema, generateSEOMetadata } from '@/app/src/lib/seo';


type Props = {
  params: { locale: string }
  searchParams: { category?: string; page?: string }
}

async function getProducts(locale: string, category?: string, page: number = 1) {
  const params = new URLSearchParams({
    locale,
    page: page.toString(),
    ...(category && { category })
  })
  
  const res = await fetch(`https://yourapi.com/products?${params}`, {
    next: { revalidate: 3600 }
  })
  
  if (!res.ok) throw new Error('Failed to fetch products')
  return res.json()
}

export async function generateMetadata({ params, searchParams }: Props): Promise<Metadata> {
  const { locale } = params
  const { category } = searchParams
  
  const titles = {
    fa: category ? `محصولات ${category}` : 'تمام محصولات',
    en: category ? `${category} Products` : 'All Products',
    ar: category ? `منتجات ${category}` : 'جميع المنتجات'
  }
  
  const descriptions = {
    fa: `خرید آنلاین ${category || 'محصولات'} با بهترین قیمت و کیفیت - ارسال رایگان`,
    en: `Shop ${category || 'products'} online with best prices - Free shipping`,
    ar: `تسوق ${category || 'المنتجات'} عبر الإنترنت بأفضل الأسعار - شحن مجاني`
  }

  return generateSEOMetadata(
    {
      title: titles[locale as keyof typeof titles],
      description: descriptions[locale as keyof typeof descriptions],
      locale: locale as 'fa' | 'en' | 'ar',
      keywords: category ? [category, 'خرید', 'آنلاین'] : ['محصولات', 'فروشگاه'],
    },
    `/products${category ? `?category=${category}` : ''}`
  )
}

export default async function ProductsPage({ params, searchParams }: Props) {
  const { locale } = params
  const { category, page = '1' } = searchParams
  
  const data = await getProducts(locale, category, parseInt(page))
  const products = data.products || []
  
  // Breadcrumb Schema
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: locale === 'fa' ? 'خانه' : locale === 'en' ? 'Home' : 'الرئيسية', url: `https://yourstore.com/${locale}` },
    { name: locale === 'fa' ? 'محصولات' : locale === 'en' ? 'Products' : 'المنتجات', url: `https://yourstore.com/${locale}/products` },
  ])
  
  // ItemList Schema
  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: products.map((product: any, index: number) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Product',
        name: product.name,
        image: product.image,
        url: `https://yourstore.com/${locale}/products/${product.slug}`,
      }
    }))
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="mb-6 text-sm" aria-label="Breadcrumb">
          <ol className="flex items-center gap-2">
            <li>
              <Link href={`/${locale}`} className="text-blue-600 hover:underline">
                {locale === 'fa' ? 'خانه' : locale === 'en' ? 'Home' : 'الرئيسية'}
              </Link>
            </li>
            <li>/</li>
            <li className="text-gray-600">
              {locale === 'fa' ? 'محصولات' : locale === 'en' ? 'Products' : 'المنتجات'}
            </li>
          </ol>
        </nav>

        <h1 className="text-3xl font-bold mb-8">
          {locale === 'fa' ? 'تمام محصولات' : locale === 'en' ? 'All Products' : 'جميع المنتجات'}
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product: any) => (
            <article
              key={product.id}
              className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
            >
              <Link href={`/${locale}/products/${product.slug}`}>
                <div className="relative aspect-square">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
                    loading="lazy"
                  />
                </div>
                <div className="p-4">
                  <h2 className="font-semibold text-lg mb-2 line-clamp-2">
                    {product.name}
                  </h2>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-blue-600">
                      {product.price.toLocaleString()}
                      {locale === 'fa' ? ' تومان' : ' $'}
                    </span>
                    {product.inStock ? (
                      <span className="text-green-600 text-sm">
                        {locale === 'fa' ? 'موجود' : locale === 'en' ? 'In Stock' : 'متوفر'}
                      </span>
                    ) : (
                      <span className="text-red-600 text-sm">
                        {locale === 'fa' ? 'ناموجود' : locale === 'en' ? 'Out of Stock' : 'غير متوفر'}
                      </span>
                    )}
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>

        {/* Pagination */}
        {data.totalPages > 1 && (
          <nav className="mt-8 flex justify-center gap-2" aria-label="Pagination">
            {Array.from({ length: data.totalPages }, (_, i) => i + 1).map((p) => (
              <Link
                key={p}
                href={`/${locale}/products?page=${p}${category ? `&category=${category}` : ''}`}
                className={`px-4 py-2 rounded ${
                  p === parseInt(page)
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 hover:bg-gray-300'
                }`}
              >
                {p}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </>
  )
}