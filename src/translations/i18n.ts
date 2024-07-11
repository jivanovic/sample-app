import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './en.json';
import sl from './sl.json';
import { LANGUAGES } from '@app/constants/language';

const resources = { en, sl };

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  resources: resources,
  lng: LANGUAGES.ENG,
  fallbackLng: LANGUAGES.ENG,
  interpolation: { escapeValue: false },
});

export default i18n;
