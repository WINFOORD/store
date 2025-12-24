'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { Globe } from 'lucide-react'
import { useState } from 'react'
import { Locale, locales } from '../i18n/config'
import { localeFlags, localeNames } from '../i18n'

type Props = {
  currentLocale: Locale
}

export default function LanguageSwitcher({ currentLocale }: Props) {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  // حذف locale فعلی از pathname
  const getLocalizedPath = (newLocale: Locale) => {
    const segments = pathname.split('/')
    segments[1] = newLocale
    return segments.join('/')
  }

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg text-white hover:bg-white/10 transition-colors"
        aria-label="Change language"
        aria-expanded={isOpen}
      >
        <Globe className="w-4 h-4" />
        <span className="text-sm font-medium">
          {localeFlags[currentLocale]} {localeNames[currentLocale]}
        </span>
      </button>

      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Dropdown Menu */}
          <div className="absolute top-full mt-2 right-0 z-20 bg-white rounded-lg shadow-lg border border-gray-200 min-w-[160px] overflow-hidden">
            {locales.map((locale) => (
              <Link
                key={locale}
                href={getLocalizedPath(locale)}
                onClick={() => setIsOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 text-sm hover:bg-gray-50 transition-colors ${
                  currentLocale === locale
                    ? 'bg-blue-50 text-blue-600 font-medium'
                    : 'text-gray-700'
                }`}
              >
                <span className="text-xl">{localeFlags[locale]}</span>
                <span>{localeNames[locale]}</span>
                {currentLocale === locale && (
                  <span className="ml-auto text-blue-600">✓</span>
                )}
              </Link>
            ))}
          </div>
        </>
      )}
    </div>
  )
}