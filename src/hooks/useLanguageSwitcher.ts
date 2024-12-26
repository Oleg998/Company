import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const useLanguageSwitcher = (lang: string) => {
  const { i18n } = useTranslation();

  useEffect(() => {
    if (lang) {
      i18n.changeLanguage(lang);
    }
  }, [lang, i18n]);
};

export default useLanguageSwitcher;
