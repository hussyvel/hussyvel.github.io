export type Locale = 'pt' | 'en' | 'fr'

export const locales: Locale[] = ['pt', 'en', 'fr']

export const defaultLocale: Locale = 'pt'

export const localeNames: Record<Locale, string> = {
  pt: 'Português',
  en: 'English',
  fr: 'Français',
}

export const localeFlags: Record<Locale, string> = {
  pt: '🇧🇷',
  en: '🇺🇸',
  fr: '🇫🇷',
}
