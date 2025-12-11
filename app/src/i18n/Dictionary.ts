import fa from './dictionaries/fa.json'
import en from './dictionaries/en.json'
import ar from './dictionaries/ar.json'
import { Locale, defaultLocale } from './config'

export  function getDictionary(locale: Locale) {
  const dicts = { fa, en, ar }
  return dicts[locale] || dicts[defaultLocale]
}

export type Dictionary = Record<string, any>
