import { Button } from "@mui/material";
import { useTranslation } from "react-i18next";
import css from "../../Pages/HomePages/homepage.module.css";
import { useAppDispatch } from "hooks/useTypedRedux";
import { logout } from "Store/auth/auth-slice";

const Logout = () => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  const handleonLogout = (): void => {
    dispatch(logout());
  };

  return (
    <Button
      className={css.button}
      onClick={handleonLogout}
      variant="contained"
      color="primary"
    >
      {t("Form.logout")}
    </Button>
  );
};

export default Logout;
