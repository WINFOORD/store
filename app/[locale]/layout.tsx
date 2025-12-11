import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getDictionary } from '../src/i18n/Dictionary'
import { Locale, locales } from '../src/i18n/config'
import { localeDirections } from '../src/i18n'

type Props = {
  children: React.ReactNode
  params: { locale: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locale = params.locale as Locale
  const dict = await getDictionary(locale)

  const localeMap = {
    fa: 'fa_IR',
    en: 'en_US',
    ar: 'ar_SA',
  }

  return {
    title: {
      default: dict.seo.homeTitle,
      template: `%s | ${dict.seo.homeTitle}`,
    },
    description: dict.seo.homeDescription,
    openGraph: {
      locale: localeMap[locale],
      type: 'website',
    },
    alternates: {
      canonical: `https://yourstore.com/${locale}`,
      languages: {
        'fa-IR': 'https://yourstore.com/fa',
        'en-US': 'https://yourstore.com/en',
        'ar-SA': 'https://yourstore.com/ar',
      },
    },
  }
}

// FIX #1: کلید باید دقیقا "locale" باشه
export async function generateStaticParams() {
  return locales.map(locale => ({ locale }))
}

export default async function LocaleLayout({ children, params }: Props) {
  const locale = params.locale as Locale

  if (!locales.includes(locale)) {
    notFound()
  }

  const dict = await getDictionary(locale)
  const dir = localeDirections[locale]

  return (
    <html lang={locale} dir={dir}>
      <body className="antialiased min-h-screen flex flex-col">

        <main className="flex-1">{children}</main>

        {/* FIX #2: prop باید lowercase باشه */}
      </body>
    </html>
  )
}