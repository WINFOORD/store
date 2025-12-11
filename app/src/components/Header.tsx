import Link from 'next/link'
import { ShoppingCart, Search, User } from 'lucide-react'
import LanguageSwitcher from './SwitchLang'
import { Input } from '../ui/Input'
import { Dictionary } from '../i18n/Dictionary'
import { Locale } from '../i18n/config'

type Props = {
  locale: Locale
  dict: Dictionary
}

export default function Header({ locale, dict }: Props) {
  return (
    <header className="border-b sticky top-0 bg-white z-50 shadow-sm">
      <div className="container mx-auto px-4">
        {/* Top Bar */}
        <div className="flex items-center justify-between py-3 text-sm border-b">
          <div className="flex items-center gap-4">
            <span className="text-gray-600">
              {dict.footer.followUs}
            </span>
            {/* Social Links */}
          </div>
          <div className="flex items-center gap-4">
            <LanguageSwitcher currentLocale={locale} />
          </div>
        </div>

        {/* Main Header */}
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href={`/${locale}`} className="text-2xl font-bold text-blue-600">
            Store
          </Link>

          {/* Search */}
          <div className="flex-1 max-w-xl mx-8">
            <Input  />
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <Link
              href={`/${locale}/profile`}
              className="flex items-center gap-2 hover:text-blue-600 transition-colors"
            >
              <User className="w-5 h-5" />
              <span className="hidden md:inline">{dict.common.profile}</span>
            </Link>

            <Link
              href={`/${locale}/cart`}
              className="flex items-center gap-2 hover:text-blue-600 transition-colors relative"
            >
              <ShoppingCart className="w-5 h-5" />
              <span className="hidden md:inline">{dict.common.cart}</span>
              {/* Cart Badge */}
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
            </Link>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex items-center gap-6 py-3 overflow-x-auto">
          <Link
            href={`/${locale}/products`}
            className="whitespace-nowrap hover:text-blue-600 transition-colors"
          >
            {dict.common.products}
          </Link>
          <Link
            href={`/${locale}/products?filter=new`}
            className="whitespace-nowrap hover:text-blue-600 transition-colors"
          >
            {dict.nav.new}
          </Link>
          <Link
            href={`/${locale}/products?filter=bestsellers`}
            className="whitespace-nowrap hover:text-blue-600 transition-colors"
          >
            {dict.nav.bestsellers}
          </Link>
          <Link
            href={`/${locale}/products?filter=offers`}
            className="whitespace-nowrap hover:text-blue-600 transition-colors text-red-600"
          >
            {dict.nav.offers}
          </Link>
          <Link
            href={`/${locale}/about`}
            className="whitespace-nowrap hover:text-blue-600 transition-colors"
          >
            {dict.common.about}
          </Link>
          <Link
            href={`/${locale}/contact`}
            className="whitespace-nowrap hover:text-blue-600 transition-colors"
          >
            {dict.common.contact}
          </Link>
        </nav>
      </div>
    </header>
  )
}