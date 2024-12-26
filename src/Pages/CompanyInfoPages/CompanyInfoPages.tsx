import CompanyItems from "../../Components/CompanyItem/CompanyItem";
import css from "./companyInfo.module.css";
import { useTranslation } from "react-i18next";

const CompanyInfoPages= () => {
    const { t } = useTranslation();    
  return (
    <div className={css.container}>
      <h1> {t("PageName.Company")}</h1>
      <CompanyItems />
    </div>
  );
};

export default CompanyInfoPages;
