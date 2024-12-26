import { useTranslation } from "react-i18next";
import css from "./userAvatarUpload.module.css"

interface UserAvatarUploadProps {
  value: string;
  onChange: (file: File) => void;
}

const UserAvatarUpload: React.FC<UserAvatarUploadProps> = ({
  value,
  onChange,
}) => {
  const { t } = useTranslation();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      onChange(file);
    }
  };

  return (
    <div>
      <label
        htmlFor="file-upload"
        className={css.uploadButton}
      >
        {t("UserListPage.SelectPhoto")}
      </label>
      <input
        id="file-upload"
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className={css.hiddenInput} 
      />

      {value && (
        <img
          src={value}
          alt={t("UserListPage.user_firstname")}
          className={css.previewImage} 
        />
      )}
    </div>
  );
};

export default UserAvatarUpload;
