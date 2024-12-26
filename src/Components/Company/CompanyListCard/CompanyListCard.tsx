import css from "./CompanyListCard.module.css";
import noImg from "../../../img/no_img.jpg";
import { useTranslation } from "react-i18next";
import { CompanyData } from "../Company";
import { Link } from "react-router-dom";
import { RouteNames } from "../../../routes";

const CompanyListCard: React.FC<CompanyData> = ({
  company_id,
  company_name,
  company_title,
  company_avatar,
}) => {
  const { t } = useTranslation();
  return (
    <li
      key={company_id}
      className={css.item}
    >
      <Link
        className={css.link_text}
        to={`${RouteNames.CompanyPage}/${company_id}`}
      >
        <img
          className={css.company_avatar}
          src={company_avatar || noImg}
          alt={`${company_name} logo`}
        />
        <div className={css.item_container_info}>
          <h3 className={css.title}>
            {t("CompanyPage.name")} : {company_name}
          </h3>
          {company_title && (
            <p className={css.sub_title}>
              {t("CompanyPage.titel")}:{company_title}
            </p>
          )}
        </div>
      </Link>
    </li>
  );
};

export default CompanyListCard;
