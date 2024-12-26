import { Button } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useAppDispatch, useAppSelector } from "hooks/useTypedRedux";
import { selectaUser } from "Store/User/user-selectors";
import UpdateUserModal from "./UpdateUserModal";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { upPasswordById } from "Store/User/user-operations";
import { UserUpdate } from "./Form/Form";

interface UpdateProps {
  id: number;
}

const EditPassword: React.FC<UpdateProps> = ({ id }) => {
  const [activeModal, setActiveModal] = useState<boolean>(false);
  const { t } = useTranslation();
  const { isLoading, requestStatus, error } = useAppSelector(selectaUser);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (requestStatus == "fetchFulfilled" && activeModal) {
      toast.success(t("UserListPage.success"));
      onClose();
    }
    if (error) {
      toast.error(t(error));
    }
  }, [requestStatus, error]);

  const handleClick = (data: UserUpdate): void => {
    dispatch(upPasswordById({ id: id, body: data }));
  };

  const openModal = (): void => setActiveModal(true);
  const onClose = (): void => setActiveModal(false);

  return (
    <>
      <Button
        onClick={openModal}
        variant="contained"
        color="primary"
      >
        {t("UserListPage.Update-password")}
      </Button>
      <UpdateUserModal
        onSubmit={handleClick}
        isLoading={isLoading}
        submitButtonText={t("UserListPage.Update-password")}
        isOpen={activeModal}
        onClose={onClose}
        fields={["user_password", "user_password_repeat"]}
      />
    </>
  );
};

export default EditPassword;
