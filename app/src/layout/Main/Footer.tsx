import Link from 'next/link'
import { Instagram, Twitter, Linkedin, MapPin, Phone, Mail } from 'lucide-react'
import { Locale } from '../../i18n/config'
import { Dictionary } from '../../i18n/Dictionary'
import { colors } from '../../colors'

type Props = {
  locale: Locale
  dict: Dictionary
}

export function Footers({ locale, dict }: Props) {
  const currentYear = new Date().getFullYear()

  return (
    <footer 
      className="bg-[var(--color-shade-80)]/60 py-8 sm:py-12 lg:py-16 text-[#2D2D2D]"
      style={colors as any}
      role="contentinfo"
      aria-label="Footer"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 mb-12 sm:mb-16 lg:mb-20">
          
          {/* Brand Identity Section */}
          <div className="sm:col-span-2 lg:col-span-5 space-y-6 sm:space-y-8 text-right">
            <h2 
              className="text-2xl sm:text-3xl lg:text-4xl font-extralight tracking-[0.1em] text-[var(--color-tint-40)]"
              itemProp="name"
            >
              AJIL SARA<span className="text-[var(--color-shade-20)] font-serif ml-2">BABOL</span>
            </h2>
            <div className="relative">
              <span className="absolute -right-3 sm:-right-4 -top-1 sm:-top-2 text-[var(--color-tint-20)]/80 text-4xl sm:text-5xl lg:text-6xl font-serif" aria-hidden="true">"</span>
              <blockquote className="text-[var(--color-tint-20)] leading-relaxed text-sm sm:text-base lg:text-lg max-w-sm italic pr-3 sm:pr-4">
                هدف ما تنها فروش آجیل نیست، بلکه خلق تجربه‌ای از شکوه و اصالت است که در هر دانه نهفته است.
              </blockquote>
            </div>
            
            {/* Social Media Links */}
            <nav aria-label="Social media links" className="flex gap-4 sm:gap-6 items-center pt-3 sm:pt-4 justify-start">
              <a 
                href="https://instagram.com/ajilsarababol" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-[#b8b8b8] hover:text-[#C5A059] transition-colors"
              >
                <Instagram className="w-5 h-5 sm:w-6 sm:h-6" aria-hidden="true" />
              </a>
              <a 
                href="https://twitter.com/ajilsarababol" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="text-[#b8b8b8] hover:text-[#C5A059] transition-colors"
              >
                <Twitter className="w-5 h-5 sm:w-6 sm:h-6" aria-hidden="true" />
              </a>
              <a 
                href="https://linkedin.com/company/ajilsarababol" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-[#b8b8b8] hover:text-[#C5A059] transition-colors"
              >
                <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" aria-hidden="true" />
              </a>
            </nav>
          </div>

          {/* Navigation Links */}
          <nav 
            className="lg:col-span-3 space-y-4 sm:space-y-6"
            aria-label="Quick navigation"
          >
            <h3 className="text-xs sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.3em] text-[#C5A059] font-semibold border-b border-[#C5A059]/20 pb-2 inline-block">
              دسترسی سریع
            </h3>
            <ul className="space-y-3 sm:space-y-4">
              {[
                { label: 'حساب کاربری', href: '/account' },
                { label: 'پیگیری سفارش', href: '/track-order' },
                { label: 'سوالات متداول', href: '/faq' },
                { label: 'درباره ما', href: '/about' }
              ].map((item) => (
                <li key={item.label}>
                  <Link 
                    href={item.href} 
                    className="text-sm sm:text-base text-[#d4d4d4] hover:text-[#C5A059] hover:pr-2 sm:hover:pr-3 transition-all duration-300 font-medium flex items-center gap-2"
                  >
                    <span className="w-1 h-1 bg-[#C5A059]/30 rounded-full" aria-hidden="true"></span>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact Info */}
          <address 
            className="sm:col-span-2 lg:col-span-4 space-y-4 sm:space-y-6 not-italic"
            itemScope 
            itemType="https://schema.org/LocalBusiness"
          >
            <h3 className="text-xs sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.3em] text-[#C5A059] font-semibold border-b border-[#C5A059]/20 pb-2 inline-block">
              بوتیک مرکزی
            </h3>
            
            <meta itemProp="name" content="آجیل سرای بابل" />
            
            <div className="space-y-3 sm:space-y-4">
              {/* Address */}
              <div className="flex items-start sm:items-center gap-3 sm:gap-4 group">
                <div className="w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0 rounded-full flex items-center justify-center shadow-sm border border-[#7a6342]">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-[#C5A059]" aria-hidden="true" />
                </div>
                <p 
                  className="text-sm sm:text-base text-[#ffffff] leading-relaxed font-light group-hover:text-[#C5A059] transition-colors"
                  itemProp="address"
                  itemScope
                  itemType="https://schema.org/PostalAddress"
                >
                  <span itemProp="addressLocality">بابل</span> - <span itemProp="streetAddress">میدان حمزه کلا</span>
                </p>
              </div>
              
              {/* Phone */}
              <div className="flex items-center gap-3 sm:gap-4 group">
                <div className="w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0 rounded-full flex items-center justify-center shadow-sm border border-[#7a6342]">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-[#C5A059]" aria-hidden="true" />
                </div>
                <a 
                  href="tel:+982122000000"
                  className="text-xs sm:text-sm text-[#ffffff] font-medium tracking-[0.1em] sm:tracking-[0.15em] group-hover:text-[#C5A059] transition-colors"
                  itemProp="telephone"
                  aria-label="تماس با شماره +۹۸ (۲۱) ۲۲۰۰ ۰۰۰۰"
                >
                  +۹۸ (۲۱) ۲۲۰۰ ۰۰۰۰
                </a>
              </div>
              
              {/* Email */}
              <div className="flex items-center gap-3 sm:gap-4 group">
                <div className="w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0 rounded-full flex items-center justify-center shadow-sm border border-[#7a6342]">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-[#C5A059]" aria-hidden="true" />
                </div>
                <a 
                  href="mailto:concierge@nutsroyal.com"
                  className="text-xs sm:text-sm text-[#ffffff] font-light group-hover:text-[#C5A059] transition-colors break-all"
                  itemProp="email"
                  aria-label="ایمیل به concierge@nutsroyal.com"
                >
                  concierge@nutsroyal.com
                </a>
              </div>
            </div>
          </address>
        </div>

        {/* Copyright Section */}
        <div className="pt-6 sm:pt-8 lg:pt-10 border-t border-[#EAE3D9] flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6">
          <p className="text-[8px] sm:text-[9px] tracking-[0.15em] sm:tracking-[0.2em] uppercase text-[#999] font-medium text-center sm:text-right">
            © {currentYear} Ajil Sara Babol. تمامی حقوق محفوظ است.
          </p>
          <nav aria-label="Legal links" className="flex gap-4 sm:gap-6 lg:gap-8 text-[8px] sm:text-[9px] tracking-[0.15em] sm:tracking-[0.2em] uppercase text-[#999]">
            <Link 
              href="/privacy-policy" 
              className="hover:text-[#C5A059] transition-colors whitespace-nowrap"
            >
              حریم خصوصی
            </Link>
            <Link 
              href="/terms-of-service" 
              className="hover:text-[#C5A059] transition-colors whitespace-nowrap"
            >
              شرایط استفاده
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}