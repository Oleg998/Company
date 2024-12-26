import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import ukrainian from "./locales/ukrainian.json";
import english from "./locales/english.json";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: english },
    ua: { translation: ukrainian },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
