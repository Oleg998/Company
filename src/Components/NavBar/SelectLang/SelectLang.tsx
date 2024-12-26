import { useState, useRef, useEffect } from "react";
import css from "./selectLang.module.css";
import { useTranslation } from "react-i18next";
import { languages } from "./setting";
import { setLang } from "../../../Store/lang/lang-slice";
import { selectLang } from "Store/lang/lang-selectors";
import { useAppSelector, useAppDispatch } from "../../../hooks/useTypedRedux";
import useLanguageSwitcher from "../../../hooks/useLanguageSwitcher";

const SelectLang = () => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const { lang } = useAppSelector(selectLang);

  useLanguageSwitcher(lang);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelectLang = (lang: string) => {
    dispatch(setLang(lang));
    setOpen(false);
  };

  const selectedLanguage = languages.find((language) => language.code === lang);

  return (
    <div
      className={css.dropdown}
      ref={dropdownRef}
    >
      <div onClick={() => setOpen(!open)}>
        <img
          src={selectedLanguage ? selectedLanguage.flag : languages[0].flag}
          alt={lang}
          className={css.flag}
        />
        {lang.toUpperCase()}
      </div>
      <div className={`${css.options} ${open ? css.show : ""}`}>
        {languages.map((langOption) => (
          <div
            key={langOption.code}
            onClick={() => handleSelectLang(langOption.code)}
            className={`${css.option} ${
              langOption.code === lang ? css.selected : ""
            }`}
          >
            <img
              src={langOption.flag}
              alt={langOption.code}
              className={css.flag}
            />
            {t(`Language.${langOption.code}`)}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectLang;
