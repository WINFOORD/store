import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import AddToCartButton from '@/app/src/ui/AddToCartBtn'
import { Locale } from '@/app/src/i18n/config'
import { getDictionary } from '@/app/src/i18n/Dictionary'

type Props = {
    params: { locale: string; slug: string }
}

async function getProduct(slug: string, locale: Locale) {
    const res = await fetch(`https://yourapi.com/products/${slug}?locale=${locale}`, {
        next: { revalidate: 3600 }
    })

    if (!res.ok) return null
    return res.json()
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug, locale } = params
    const product = await getProduct(slug, locale as Locale)

    if (!product) {
        return { title: 'Product Not Found' }
    }

    return {
        title: product.name,
        description: product.description,
        openGraph: {
            title: product.name,
            description: product.description,
            images: [product.image],
            type: 'website',
        },
        alternates: {
            canonical: `https://yourstore.com/${locale}/products/${slug}`,
            languages: {
                'fa-IR': `https://yourstore.com/fa/products/${slug}`,
                'en-US': `https://yourstore.com/en/products/${slug}`,
                'ar-SA': `https://yourstore.com/ar/products/${slug}`,
            },
        },
    }
}

export default async function ProductPage({ params }: Props) {
    const { slug, locale } = params
    const [product, dict] = await Promise.all([
        getProduct(slug, locale as Locale),
        getDictionary(locale as Locale)
    ])

    if (!product) {
        notFound()
    }

    // JSON-LD Schema
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: product.name,
        image: product.image,
        description: product.description,
        sku: product.sku,
        brand: {
            '@type': 'Brand',
            name: product.brand,
        },
        offers: {
            '@type': 'Offer',
            url: `https://yourstore.com/${locale}/products/${slug}`,
            priceCurrency: locale === 'fa' ? 'IRR' : 'USD',
            price: product.price,
            availability: product.inStock
                ? 'https://schema.org/InStock'
                : 'https://schema.org/OutOfStock',
        },
    }

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <div className="container mx-auto px-4 py-8">
                {/* Breadcrumb */}
                <nav className="mb-6 text-sm flex items-center gap-2 text-gray-600">
                    <a href={`/${locale}`} className="hover:text-blue-600">
                        {dict.common.home}
                    </a>
                    <span>/</span>
                    <a href={`/${locale}/products`} className="hover:text-blue-600">
                        {dict.common.products}
                    </a>
                    <span>/</span>
                    <span className="text-gray-900">{product.name}</span>
                </nav>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* تصویر محصول */}
                    <div className="relative aspect-square rounded-lg overflow-hidden">
                        <Image
                            src={product.image}
                            alt={product.name}
                            fill
                            className="object-cover"
                            priority
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </div>

                    {/* اطلاعات محصول */}
                    <div className="space-y-6">
                        <div>
                            <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
                            <div className="flex items-center gap-4 text-sm text-gray-600">
                                <span>
                                    {dict.product.sku}: {product.sku}
                                </span>
                                <span>
                                    {dict.product.brand}: {product.brand}
                                </span>
                            </div>
                        </div>

                        {/* قیمت */}
                        <div className="bg-gray-50 rounded-lg p-4">
                            <div className="text-3xl font-bold text-blue-600">
                                {product.price.toLocaleString(locale)}
                                {locale === 'fa' ? ' تومان' : ' $'}
                            </div>
                            {product.discount && (
                                <div className="text-sm text-gray-500 line-through mt-1">
                                    {product.originalPrice.toLocaleString(locale)}
                                    {locale === 'fa' ? ' تومان' : ' $'}
                                </div>
                            )}
                        </div>

                        {/* موجودی */}
                        <div className="flex items-center gap-2">
                            <div
                                className={`w-3 h-3 rounded-full ${product.inStock ? 'bg-green-500' : 'bg-red-500'
                                    }`}
                            />
                            <span className={product.inStock ? 'text-green-600' : 'text-red-600'}>
                                {product.inStock ? dict.product.inStock : dict.product.outOfStock}
                            </span>
                        </div>

                        {/* دکمه افزودن به سبد */}
                        <AddToCartButton
                            product={product}
                            locale={locale as Locale}
                            dict={dict}
                        />

                        {/* توضیحات */}
                        <div>
                            <h2 className="text-xl font-bold mb-3">{dict.product.description}</h2>
                            <p className="text-gray-700 leading-relaxed">
                                {product.description}
                            </p>
                        </div>

                        {/* مشخصات */}
                        {product.specifications && (
                            <div>
                                <h2 className="text-xl font-bold mb-3">{dict.product.specifications}</h2>
                                <div className="space-y-2">
                                    {Object.entries(product.specifications).map(([key, value]) => (
                                        <div key={key} className="flex justify-between py-2 border-b">
                                            <span className="text-gray-600">{key}</span>
                                            <span className="font-medium">{value as string}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}