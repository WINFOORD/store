import Link from 'next/link'
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'
import { Locale } from '../../i18n/config'
import { Dictionary } from '../../i18n/Dictionary'

type Props = {
  locale: Locale
  dict: Dictionary
}

export  function Footers({ locale, dict }: Props) {
  const currentYear = new Date().getFullYear()

  return (
  <footer className="bg-[#2d2822] text-[#f9f4ee] py-20 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
          <div className="max-w-sm">
            <h2 className="text-3xl font-black mb-6 tracking-tighter">NUTS<span className="text-[#b59e88]">ROYAL</span></h2>
            <p className="text-[#b59e88] leading-loose text-sm italic">
              "هدف ما تنها فروش آجیل نیست، بلکه خلق تجربه‌ای از شکوه و اصالت است که در هر دانه نهفته است."
            </p>
          </div>
          <div className="grid grid-cols-2 gap-16">
            <div className="space-y-4">
              <h4 className="font-bold text-[#e2c6aa]">دسترسی سریع</h4>
              <ul className="text-sm space-y-2 opacity-70">
                <li>حساب کاربری</li>
                <li>پیگیری سفارش</li>
                <li>سوالات متداول</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-bold text-[#e2c6aa]">تماس با ما</h4>
              <p className="text-sm opacity-70 leading-relaxed">تهران، زعفرانیه، مجتمع تجاری لوکس<br />۰۲۱-۲۲۰۰۰۰۰۰</p>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto border-t border-[#5a4f44] mt-20 pt-10 text-center opacity-40 text-[10px] tracking-widest uppercase">
          © 2025 Royal Nuts Boutique. Designed for Luxury.
        </div>
      </footer>
  )
}