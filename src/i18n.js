import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import en from './locales/en/translate.json'
import uk from './locales/ua/translate.json'
import pl from './locales/pl/translate.json'

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
        en: {
            translation: en
        },
        uk: {
            translation: uk
        },
        pl: {
            translation: pl
        }
      },
    fallbackLng: 'en',
    debug: true,

    interpolation: {
      escapeValue: false,
    }
  });


export default i18n;