import css from "./userGalleryItem.module.css";
import noImg from "../../../img/no_img.jpg";
import { useTranslation } from "react-i18next";
import { UserData } from "../UserList";
import RenderEmail from "Utils/RenderEmail/RenderEmail";
import { Link } from "react-router-dom";
import { RouteNames } from "../../../routes";
const UserGalleryItem: React.FC<UserData> = ({
  user_id,
  user_email,
  user_firstname,
  user_lastname,
  user_avatar,
}) => {
  const { t } = useTranslation();
 
  return (
    <li
      key={user_id}
      className={css.item}
    >
      <Link
        className={css.link_text}
        to={`${RouteNames.UserListPage}/${user_id}`}

      >
        <img
          className={css.user_avatar}
          src={user_avatar || noImg}
          alt={user_firstname}
        />
        <div className={css.item_container_info}>
          <p className={css.title}>
            {t("UserListPage.FirstName")}: {user_firstname}
          </p>
          <p className={css.title}>
            {t("UserListPage.LastName")}: {user_lastname}
          </p>
        </div>
      </Link>
      <RenderEmail email={user_email} />
    </li>
  );
};

export default UserGalleryItem;
