import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translation_en from './en.json';
import translation_zh from './zh.json';
import Storage from '@/utils/localStoage';

const resources = {
  en: {
    translation: translation_en,
  },
  zh: {
    translation: translation_zh,
  },
};

//@ts-ignore
i18n.use(initReactI18next).init({
  resources,
  lng: Storage.get('lng') || 'zh',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
