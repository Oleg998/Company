import { useTranslation } from "react-i18next";
import {
  CheckCircle,
  Cancel,
  Block,
  HourglassEmpty,
} from "@mui/icons-material";
import css from "./status.module.css";

type UserStatusType = string | null | undefined;

interface UserStatusProps {
  user_status: UserStatusType;
}

const UserStatus: React.FC<UserStatusProps> = ({ user_status }) => {
  const { t } = useTranslation();

  let statusIcon;
  let statusText: string;

  switch (user_status) {
    case "active":
      statusIcon = <CheckCircle className={css.active} />;
      statusText = t("UserStatus.Active");
      break;
    case "inactive":
      statusIcon = <Cancel className={css.inactive} />;
      statusText = t("UserStatus.Inactive");
      break;
    case "banned":
      statusIcon = <Block className={css.banned} />;
      statusText = t("UserStatus.Banned");
      break;
    case "pending":
      statusIcon = <HourglassEmpty className={css.pending} />;
      statusText = t("UserStatus.Pending");
      break;
    default:
      statusIcon = <HourglassEmpty className={css.unknown} />;
      statusText = t("UserStatus.Unknown");
  }

  return (
    <div className={css.userStatus}>
      {statusIcon}
      <span className={css.statusText}>{statusText}</span>
    </div>
  );
};

export default UserStatus;
