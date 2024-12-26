import { Link } from "react-router-dom";
import css from "./notfound.module.css";
import { useTranslation } from "react-i18next";
import { RouteNames } from "../../routes";

const NotFoundPage = () => {
  const { t } = useTranslation();
  return (
    <div className={css.container}>
      <h1>{t("NoFindPage.titel")}</h1>
      <Link to={RouteNames.HomePage}>
        {t("NoFindPage.subtitel")}
      </Link>
    </div>
  );
};

export default NotFoundPage;
