import type { Metadata } from 'next'

type Locale = 'fa' | 'en' | 'ar'

interface SEOConfig {
  title: string
  description: string
  keywords?: string[]
  image?: string
  locale: Locale
  type?: 'website' | 'article' | 'product'
  author?: string
  publishedTime?: string
  modifiedTime?: string
}

const baseUrl = 'https://yourstore.com'

const localeMap: Record<Locale, string> = {
  fa: 'fa_IR',
  en: 'en_US',
  ar: 'ar_SA',
}

export function generateSEOMetadata(
  config: SEOConfig,
  pathname: string
): Metadata {
  const {
    title,
    description,
    keywords = [],
    image = '/og-image.jpg',
    locale,
    type = 'website',
    author,
    publishedTime,
    modifiedTime,
  } = config

  const canonicalUrl = `${baseUrl}${pathname}`
  const imageUrl = image.startsWith('http') ? image : `${baseUrl}${image}`

  return {
    title,
    description,
    keywords,
    authors: author ? [{ name: author }] : undefined,
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: 'فروشگاه آنلاین',
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: localeMap[locale],
      type,
      publishedTime,
      modifiedTime,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [imageUrl],
    },
    alternates: {
      canonical: canonicalUrl,
      languages: {
        'fa-IR': `${baseUrl}/fa${pathname.replace(/^\/(fa|en|ar)/, '')}`,
        'en-US': `${baseUrl}/en${pathname.replace(/^\/(fa|en|ar)/, '')}`,
        'ar-SA': `${baseUrl}/ar${pathname.replace(/^\/(fa|en|ar)/, '')}`,
      },
    },
    robots: {
      index: true,
      follow: true,
    },
  }
}

// Helper برای ساخت JSON-LD Product Schema
export function generateProductSchema(product: {
  name: string
  description: string
  image: string
  price: number
  currency: string
  sku: string
  brand: string
  inStock: boolean
  rating?: { average: number; count: number }
  url: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    image: product.image,
    sku: product.sku,
    brand: {
      '@type': 'Brand',
      name: product.brand,
    },
    offers: {
      '@type': 'Offer',
      url: product.url,
      priceCurrency: product.currency,
      price: product.price,
      availability: product.inStock
        ? 'https://schema.org/InStock'
        : 'https://schema.org/OutOfStock',
      itemCondition: 'https://schema.org/NewCondition',
    },
    aggregateRating: product.rating
      ? {
          '@type': 'AggregateRating',
          ratingValue: product.rating.average,
          reviewCount: product.rating.count,
        }
      : undefined,
  }
}

// Helper برای ساخت JSON-LD Breadcrumb Schema
export function generateBreadcrumbSchema(
  items: Array<{ name: string; url: string }>
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

// Helper برای ساخت canonical URL
export function getCanonicalUrl(pathname: string, locale: Locale): string {
  const cleanPath = pathname.replace(/^\/(fa|en|ar)/, '')
  return `${baseUrl}/${locale}${cleanPath}`
}

// Helper برای ساخت alternate URLs
export function getAlternateUrls(pathname: string) {
  const cleanPath = pathname.replace(/^\/(fa|en|ar)/, '')
  return {
    'fa-IR': `${baseUrl}/fa${cleanPath}`,
    'en-US': `${baseUrl}/en${cleanPath}`,
    'ar-SA': `${baseUrl}/ar${cleanPath}`,
  }
}