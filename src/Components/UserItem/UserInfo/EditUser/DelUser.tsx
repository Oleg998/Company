import { Button } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useAppDispatch } from "hooks/useTypedRedux";
import { delUsersById } from "Store/User/user-operations";
import { Confirm } from "notiflix";
import { useNavigate } from "react-router-dom";
import { RouteNames } from "routes";
import { logout } from "Store/auth/auth-slice";
interface UpdateProps {
  id: number;
}
const DeleteUser: React.FC<UpdateProps> = ({ id }) => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleDelete = (): void => {
    Confirm.show(
      t("Confirm.title"),
      t("Confirm.message"),
      t("Confirm.buttonYes"),
      t("Confirm.buttonNo"),
      () => {
        dispatch(delUsersById({ id }));
        dispatch(logout());
      },
      () => {
        navigate(`${RouteNames.UserListPage}/${id}`);
      }
    );
  };

  return (
    <Button
      onClick={handleDelete}
      variant="contained"
      color="primary"
    >
      {t("UserListPage.delete")}
    </Button>
  );
};

export default DeleteUser;
