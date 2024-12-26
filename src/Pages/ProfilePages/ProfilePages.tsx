import UserItem from "../../Components/UserItem/UserItem";
import css from "./profile.module.css";
import { useTranslation } from "react-i18next";
const ProfilePages = () => {
  const { t } = useTranslation();
  return (
    <div className={css.container}>
      <h1>{t("PageName.Profile")}</h1>
      <UserItem />
    </div>
  );
};

export default ProfilePages;
