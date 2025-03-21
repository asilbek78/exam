import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import Uz from "../../public/Language/uz.json";
import En from "../../public/Language/en.json";
import Ru from "../../public/Language/ru.json"


i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: "uz",
    lng: "uz",
    resources: {
      en: {translation: En},
      uz: {translation: Uz},
      ru: {translation: Ru}
    }
  });

export default i18n;
