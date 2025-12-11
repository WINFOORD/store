import { Locale } from './config'

export const localeNames: Record<Locale, string> = {
  fa: 'فارسی',
  en: 'English',
  ar: 'العربية',
}

export const localeDirections: Record<Locale, 'rtl' | 'ltr'> = {
  fa: 'rtl',
  en: 'ltr',
  ar: 'rtl',
}

export const localeFlags: Record<Locale, string> = {
  fa: '🇮🇷',
  en: '🇺🇸',
  ar: '🇸🇦',
}
