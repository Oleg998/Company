import Company from "Components/Company/Company";
import css from "./companypages.module.css";
import { useTranslation } from "react-i18next";

const CompanyPages = () => {
  const { t } = useTranslation();
  return (
    <div className={css.container}>
      <h1>{t("PageName.Company")}</h1>
      <Company />
    </div>
  );
};

export default CompanyPages;
