import { Button } from "@mui/material";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useAppDispatch, useAppSelector } from "hooks/useTypedRedux";
import { selectaUser } from "Store/User/user-selectors";
import UpdateUserModal from "./UpdateUserModal";
import { UserUpdate } from "./Form/Form";
import { updatePhoto } from "Store/User/user-operations";
import { toast } from "react-toastify";

interface UpdateProps {
  id: number;
}

const UpdataPhoto: React.FC<UpdateProps> = ({ id }) => {
  const [activeModal, setActiveModal] = useState<boolean>(false);
  const { t } = useTranslation();
  const { isLoading, requestStatus, error } = useAppSelector(selectaUser);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (requestStatus === "fetchFulfilled" && activeModal) {
      toast.success(t("UserListPage.success"));
      setActiveModal(false);
      window.location.reload();
    }
    if (error) {
      toast.error(t(error));
    }
  }, [requestStatus]);

  const handleClick = async (data: UserUpdate): Promise<void> => {
    if (!data.user_avatar) {
      toast.error(t("UserListPage.ErrorNoPhoto"));
      return;
    }
    const response = await fetch(data.user_avatar);
    const avatarBlob = await response.blob();
    const formData = new FormData();
    formData.append("file", avatarBlob, "file.jpg");
    dispatch(updatePhoto({ id: id, body: formData }));
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
        {t("UserListPage.UpdatePhoto")}
      </Button>
      <UpdateUserModal
        onSubmit={handleClick}
        isLoading={isLoading}
        submitButtonText={t("UserListPage.UpdatePhoto")}
        isOpen={activeModal}
        onClose={onClose}
        fields={["user_avatar"]}
      />
    </>
  );
};

export default UpdataPhoto;
