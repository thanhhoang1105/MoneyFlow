import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import * as Localization from 'expo-localization';
import en from './locales/en.json';
import vi from './locales/vi.json';

// Determine device locale safely (expo-localization type shapes vary)
const deviceLocale =
  // try direct property
  (Localization as any).locale ||
  // or the first locale object
  (Localization as any).locales?.[0]?.languageTag ||
  'en-US';

const lng = String(deviceLocale).split('-')[0];

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
