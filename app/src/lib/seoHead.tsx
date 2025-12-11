'use client'

import { usePathname } from 'next/navigation'

interface SEOHeadProps {
  title?: string
  description?: string
  image?: string
  locale?: 'fa' | 'en' | 'ar'
  type?: 'website' | 'article' | 'product'
}

export default function SEOHead({
  title,
  description,
  image,
  locale = 'fa',
  type = 'website'
}: SEOHeadProps) {
  const pathname = usePathname()
  const baseUrl = 'https://yourstore.com'
  const currentUrl = `${baseUrl}${pathname}`

  const localeMap = {
    fa: 'fa_IR',
    en: 'en_US',
    ar: 'ar_SA'
  }

  // JSON-LD برای BreadcrumbList
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: pathname.split('/').filter(Boolean).map((segment, index, arr) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: segment,
      item: `${baseUrl}/${arr.slice(0, index + 1).join('/')}`
    }))
  }

  // JSON-LD برای WebSite
  const websiteJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'فروشگاه آنلاین',
    url: baseUrl,
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${baseUrl}/${locale}/search?q={search_term_string}`
      },
      'query-input': 'required name=search_term_string'
    }
  }

  // JSON-LD برای Organization
  const organizationJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'فروشگاه آنلاین',
    url: baseUrl,
    logo: `${baseUrl}/logo.png`,
    sameAs: [
      'https://facebook.com/yourstore',
      'https://twitter.com/yourstore',
      'https://instagram.com/yourstore',
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
    </>
  )
}