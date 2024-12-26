import { useTranslation } from "react-i18next";
import css from "./renderEmail.module.css";
interface RenderEmailProps {
  email: string | null;
}

const RenderEmail: React.FC<RenderEmailProps> = ({ email }) => {
  const { t } = useTranslation();

  if (!email || email.length === 0) return <p>{t("CompanyPage.noEmail")}</p>;

  return (
    <a
      href={`mailto:${email}`}
      className={css.link}
    >
      {email}
    </a>
  );
};

export default RenderEmail;
