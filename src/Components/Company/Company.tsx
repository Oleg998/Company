import css from "./company.module.css";
import company from "../../Utils/data/companiesPage.json";
import CompanyListCard from "./CompanyListCard/CompanyListCard";

export interface CompanyData {
  company_id: number;
  company_name: string;
  company_title?: string | null;
  company_avatar?: string | null;
  is_visible?: boolean;
}

const Company = () => {
  const visibleCompany = company.filter(
    ({ is_visible }: CompanyData) => is_visible
  );

  const companyList = visibleCompany.map(
    ({
      company_id,
      company_name,
      company_title,
      company_avatar,
    }: CompanyData) => (
      <CompanyListCard
        key={company_id}
        company_id={company_id}
        company_name={company_name}
        company_title={company_title}
        company_avatar={company_avatar}
      />
    )
  );

  return <ul className={css.listItem}>{companyList}</ul>;
};

export default Company;
