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
    <footer className="bg-[var(--color-shade-80)]/60 py-8 text-[#2D2D2D]   "
    style={colors as any}
    >

      <div className="max-w-7xl mx-auto">
      
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-20">
          
          {/* Brand Identity Section */}
          <div className="md:col-span-5 space-y-8 text-right">
            <h2 className="text-4xl font-extralight tracking-[0.1em] text-[var(--color-tint-40)]">
             AJIL SARA<span className="text-[var(--color-shade-20)] font-serif  ml-2">BABOL</span>
            </h2>
            <div className="relative">
              <span className="absolute -right-4 -top-2 text-[var(--color-tint-20)]/80 text-6xl font-serif">“</span>
              <p className="text-[var(--color-tint-20)] leading-relaxed text-md max-w-sm  italic pr-4">
                هدف ما تنها فروش آجیل نیست، بلکه خلق تجربه‌ای از شکوه و اصالت است که در هر دانه نهفته است.
              </p>
            </div>
            <div className="flex gap-6 items-center pt-4 justify-start">
              <Instagram className="w-5 h-5 text-[#b8b8b8] hover:text-[#C5A059] transition-colors cursor-pointer" />
              <Twitter className="w-5 h-5 text-[#b8b8b8] hover:text-[#C5A059] transition-colors cursor-pointer" />
              <Linkedin className="w-5 h-5 text-[#b8b8b8] hover:text-[#C5A059] transition-colors cursor-pointer" />
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3 space-y-6">
            <h4 className="text-sm uppercase tracking-[0.3em] text-[#C5A059] font-semibold border-b border-[#C5A059]/20 pb-2 inline-block">
              دسترسی سریع
            </h4>
            <ul className="space-y-4">
              {['حساب کاربری', 'پیگیری سفارش', 'سوالات متداول', 'درباره ما'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-sm text-[#d4d4d4] hover:text-[#C5A059] hover:pr-3 transition-all duration-300 font-medium flex items-center gap-2">
                    <span className="w-1 h-1 bg-[#C5A059]/30 rounded-full"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-4 space-y-6">
            <h4 className="text-sm uppercase tracking-[0.3em] text-[#C5A059] font-semibold border-b border-[#C5A059]/20 pb-2 inline-block">
              بوتیک مرکزی
            </h4>
            <div className="space-y-3">
              <div className="flex align-middle items-center gap-4 group">
                <div className="w-12 h-12 rounded-full  flex items-center justify-center shadow-sm border border-[#7a6342]">
                  <MapPin className="w-5 h-5 text-[#C5A059]" />
                </div>
                <p className="text-sm  text-[#ffffff] leading-relaxed font-light group-hover:text-[#C5A059] transition-colors">
                  بابل   میدان حمزه کلا
                </p>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full  flex items-center justify-center shadow-sm border border-[#7a6342]">
                  <Phone className="w-5 h-5 text-[#C5A059]" />
                </div>
                <p className="text-xs text-[#ffffff] font-medium  tracking-[0.15em] group-hover:text-[#C5A059] transition-colors" >
                  +۹۸ (۲۱) ۲۲۰۰ ۰۰۰۰
                </p>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full  flex items-center justify-center shadow-sm border border-[#7a6342]">
                  <Mail className="w-5 h-5 text-[#C5A059]" />
                </div>
                <p className="text-xs text-[#ffffff] font-light group-hover:text-[#C5A059] transition-colors">
                  concierge@nutsroyal.com
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="pt-10 border-t border-[#EAE3D9] flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[9px] tracking-[0.2em] uppercase text-[#999] font-medium">
            © {currentYear} Winford Inc. All rights reserved.
          </p>
          <div className="flex gap-8 text-[9px] tracking-[0.2em] uppercase text-[#999]">
            <Link href="#" className="hover:text-[#C5A059] transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-[#C5A059] transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}