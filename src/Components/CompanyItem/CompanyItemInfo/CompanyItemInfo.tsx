import css from "./companyItemInfo.module.css";
import notImg from "../../../img/no_img.jpg";
import { useTranslation } from "react-i18next";
import { Company } from "../CompanyItem";
import RenderLinks from "Utils/RenderLink";

const CompanyItemInfo: React.FC<Company> = ({
  company_avatar,
  company_name,
  company_title,
  company_description,
  company_city,
  company_phone,
  company_links,
}) => {
  const { t } = useTranslation();
  return (
    <div className={css.companyDetails}>
      <img
        src={company_avatar || notImg}
        alt={`${company_name} logo`}
        className={css.avatar}
      />
      <div className={css.companyDetailsInfo}>
        <h2>
          {t("CompanyPage.name")}: {company_name}
        </h2>
        <h3>
          {t("CompanyPage.titel")}:{company_title || t("CompanyPage.notitel")}
        </h3>
        <p>
          {t("CompanyPage.description")}:{" "}
          {company_description || t("CompanyPage.nodescription")}
        </p>
        <p>
          {t("CompanyPage.city")}:{company_city || t("CompanyPage.noCity")}
        </p>
        <a href={`tel:${company_phone}`}>
          {t("CompanyPage.phone")}:{company_phone || t("CompanyPage.noPhone")}
        </a>
        <RenderLinks links={company_links} />
      </div>
    </div>
  );
};

export default CompanyItemInfo;
