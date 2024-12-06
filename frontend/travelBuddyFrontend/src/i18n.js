import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en/translation.json';
import pl from './locales/pl/translation.json';
import es from './locales/es/translation.json';

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    pl: { translation: pl },
    es: { translation: es },
  },
  lng: 'en', // Domyślny język
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false, // React automatycznie zabezpiecza przed XSS
  },
});

export default i18n;
