import companyInfo from "../../Utils/data/compamiprofile.json";
import { useParams } from "react-router-dom";
import css from "./companyItem.module.css";
import { useTranslation } from "react-i18next";
import CompanyItemInfo from "./CompanyItemInfo/CompanyItemInfo";
import CompanyItemOwner from "./CompanyItemOwner/CompanyItemOwner";

export interface UserOwner {
  user_id?: number;
  user_email: string;
  user_firstname: string;
  user_lastname: string;
  user_avatar: string | null;
}

export interface Company {
  company_id?: number;
  company_name: string;
  company_title: string | null;
  company_avatar: string | null;
  is_visible: boolean;
  company_description: string | null;
  company_city: string | null;
  company_phone: string | null;
  company_links: string[] | null;
  company_owner?: UserOwner;
}

const CompanyItems = () => {
  const { t } = useTranslation();
  const { id } = useParams<{ id: string }>();
  const foundCompany = companyInfo.find((c) => c.company_id === Number(id));

  if (!foundCompany) {
    return <h1>{t("CompanyPage.error")}</h1>;
  }

  const {
    company_avatar,
    company_name,
    company_title,
    company_description,
    company_city,
    company_phone,
    company_links,
    is_visible,
    company_owner,
  } = foundCompany;

  return (
    <div className={css.container}>
      <CompanyItemInfo
        company_avatar={company_avatar}
        company_name={company_name}
        company_title={company_title}
        company_description={company_description}
        company_city={company_city}
        company_phone={company_phone}
        company_links={company_links}
        is_visible={is_visible}
      />
      {company_owner && (
        <CompanyItemOwner
          user_email={company_owner.user_email}
          user_firstname={company_owner.user_firstname}
          user_lastname={company_owner.user_lastname}
          user_avatar={company_owner.user_avatar}
        />
      )}
    </div>
  );
};
export default CompanyItems;
