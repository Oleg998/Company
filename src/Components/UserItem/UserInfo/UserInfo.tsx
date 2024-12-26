import css from "./userInfo.module.css";
import notImg from "../../../img/no_img.jpg";
import { useTranslation } from "react-i18next";
import { User } from "../../../Store/User/user-slice";
import RenderEmail from "../../../Utils/RenderEmail/RenderEmail";
import RenderLinks from "Utils/RenderLink";
import UserStatus from "../../../Utils/Status/Status";
import { selectAuthUserId } from "Store/auth/auth-selectors";
import { useAppSelector } from "hooks/useTypedRedux";
import EditInfo from "./EditUser/EditInfo";
import EditPassword from "./EditUser/EditPassword";
import DeleteUser from "./EditUser/DelUser";
import UpdataPhoto from "./EditUser/UpdataPhoto";
const UserInfo: React.FC<User> = ({
  user_id,
  user_email,
  user_firstname,
  user_lastname,
  user_avatar,
  user_status,
  user_city,
  user_phone,
  user_links = [],
  is_superuser,
}) => {
  const { t } = useTranslation();
  const myId = useAppSelector(selectAuthUserId);

  return (
    <div className={css.container}>
      <img
        src={user_avatar || notImg}
        alt={
          user_firstname && user_lastname
            ? `${user_firstname} ${user_lastname}`
            : t("UserListPage.noName")
        }
        className={css.user_avatar}
      />

      {myId === user_id && (
        <div>
          <EditInfo id={myId} />
          <EditPassword id={myId} />
          <DeleteUser id={myId} />
          <UpdataPhoto id={myId} />
        </div>
      )}

      <div className={css.info}>
        <table className={css.userDetailsTable}>
          <tbody>
            <tr>
              <th>{t("UserListPage.user_firstname")}</th>
              <td>{user_firstname}</td>
            </tr>
            <tr>
              <th>{t("UserListPage.user_lastname")}</th>
              <td>{user_lastname}</td>
            </tr>
            <tr>
              <th>{t("CompanyPage.city")}</th>
              <td>{user_city || t("CompanyPage.noCity")}</td>
            </tr>
            <tr>
              <th>{t("CompanyPage.phone")}</th>
              <td>
                <a href={`tel:${user_phone}`}>
                  {user_phone || t("CompanyPage.noPhone")}
                </a>
              </td>
            </tr>
            <tr>
              <th>{t("UserListPage.Superuser")}</th>
              <td>{is_superuser ? t("Yes") : t("No")}</td>
            </tr>
            <tr>
              <th>{t("UserListPage.Status")}</th>
              <td>
                <UserStatus user_status={user_status} />
              </td>
            </tr>
            <tr>
              <th>{t("UserListPage.Email")}</th>
              <td>
                <RenderEmail email={user_email} />
              </td>
            </tr>
            <tr>
              <th>{t("UserListPage.Links")}</th>
              <td>
                <RenderLinks links={user_links} />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserInfo;
