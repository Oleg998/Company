import css from "./companyItemOwner.module.css";
import notImg from "../../../img/no_img.jpg";
import { useTranslation } from "react-i18next";
import { UserOwner } from "../CompanyItem";
import RenderEmail from "../../../Utils/RenderEmail/RenderEmail";

const CompanyItemOwner: React.FC<UserOwner> = ({
  user_email,
  user_firstname,
  user_lastname,
  user_avatar,
}) => {
  const { t } = useTranslation();

  return (
    <div className={css.ownerDetails}>
      <h3>{t("CompanyPage.owner")}:</h3>
      <div className={css.owner}>
        <img
          src={user_avatar || notImg}
          alt={`${user_firstname} ${user_lastname}`}
          className={css.ownerAvatar}
        />
        <div className={css.companyDetailsInfo}>
          <p>
            {t("UserListPage.FirstName")}: {user_firstname}
          </p>
          <p>
            {t("UserListPage.LastName")}: {user_lastname}
          </p>
          <RenderEmail email={user_email} />
        </div>
      </div>
    </div>
  );
};

export default CompanyItemOwner;
