import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useTranslation } from "react-i18next";

interface UserStatusSelectProps {
  value: string | null;
  onChange: (value: string) => void;
}

const UserStatusSelect: React.FC<UserStatusSelectProps> = ({
  value,
  onChange,
}) => {
  const { t } = useTranslation();

  return (
    <FormControl
      fullWidth
      variant="outlined"
    >
      <InputLabel>{t("UserListPage.user_status")}</InputLabel>
      <Select
        value={value || ""}
        onChange={(event) => onChange(event.target.value)}
        label={t("UserListPage.user_status")}
      >
        <MenuItem value="active">{t("UserStatus.Active")}</MenuItem>
        <MenuItem value="inactive">{t("UserStatus.Inactive")}</MenuItem>
        <MenuItem value="banned">{t("UserStatus.Banned")}</MenuItem>
        <MenuItem value="pending">{t("UserStatus.Pending")}</MenuItem>
      </Select>
    </FormControl>
  );
};

export default UserStatusSelect;
