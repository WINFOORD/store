import Link from 'next/link'
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'
import { Locale } from '../i18n/config'
import { Dictionary } from '../i18n/Dictionary'

type Props = {
  locale: Locale
  dict: Dictionary
}

export default function Footer({ locale, dict }: Props) {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* درباره ما */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">
              {dict.footer.aboutUs}
            </h3>
            <p className="text-sm leading-relaxed mb-4">
              {dict.seo.homeDescription}
            </p>
            <div className="flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-500 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* لینک‌های سریع */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">
              {dict.common.products}
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href={`/${locale}/products`}
                  className="hover:text-white transition-colors"
                >
                  {dict.common.products}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/products?filter=new`}
                  className="hover:text-white transition-colors"
                >
                  {dict.nav.new}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/products?filter=bestsellers`}
                  className="hover:text-white transition-colors"
                >
                  {dict.nav.bestsellers}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/products?filter=offers`}
                  className="hover:text-white transition-colors"
                >
                  {dict.nav.offers}
                </Link>
              </li>
            </ul>
          </div>

          {/* اطلاعات */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">
              {dict.footer.aboutUs}
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href={`/${locale}/about`}
                  className="hover:text-white transition-colors"
                >
                  {dict.common.about}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/contact`}
                  className="hover:text-white transition-colors"
                >
                  {dict.common.contact}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/faq`}
                  className="hover:text-white transition-colors"
                >
                  {dict.footer.faq}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/terms`}
                  className="hover:text-white transition-colors"
                >
                  {dict.footer.termsOfService}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/privacy`}
                  className="hover:text-white transition-colors"
                >
                  {dict.footer.privacyPolicy}
                </Link>
              </li>
            </ul>
          </div>

          {/* خبرنامه */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">
              {dict.footer.newsletter}
            </h3>
            <p className="text-sm mb-4">{dict.footer.subscribeText}</p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder={dict.auth.email}
                className="flex-1 px-3 py-2 rounded bg-gray-800 border border-gray-700 focus:border-blue-500 focus:outline-none text-sm"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded text-white text-sm font-medium transition-colors"
              >
                {dict.footer.subscribe}
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>
            © {currentYear} Store. {dict.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  )
}