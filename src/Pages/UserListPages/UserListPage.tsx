import { useTranslation } from "react-i18next";
import UserList from "../../Components/UserList/UserList";
import css from "./userlist.module.css";

const UserListPage = () => {
  const { t } = useTranslation();
  return (
    <div className={css.container}>
      <h1>{t("PageName.UserList")}</h1>
      <UserList />
    </div>
  );
};

export default UserListPage;
