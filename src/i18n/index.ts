import * as Localization from 'expo-localization';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en.json';
import vi from './locales/vi.json';

// Determine device locale safely (expo-localization type shapes vary)
function getDeviceLocale(): string {
  // Some versions expose `locale` (string), others expose `locales` (array)
  // Use safe checks instead of `any` to preserve TypeScript safety.

  // Try `Localization.locale` if it's a string
  if (typeof (Localization as any).locale === 'string') {
    return (Localization as any).locale;
  }

  // Try `Localization.locales` if it's an array with `languageTag`
  const maybeLocales = (Localization as unknown as { locales?: unknown }).locales;
  if (Array.isArray(maybeLocales) && maybeLocales.length > 0) {
    const first = maybeLocales[0] as { languageTag?: unknown };
    if (typeof first?.languageTag === 'string') return first.languageTag;
  }

  // Fallback
  return 'en-US';
}

const lng = String(getDeviceLocale()).split('-')[0];

i18n.use(initReactI18next).init({
  // use v4 compatibility which matches current i18next typings
  compatibilityJSON: 'v4',
  resources: {
    en: { translation: en },
    vi: { translation: vi },
  },
  lng,
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
});

export default i18n;
