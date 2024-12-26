import { Button } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useAppDispatch, useAppSelector } from "hooks/useTypedRedux";
import { selectaUser } from "Store/User/user-selectors";
import UpdateUserModal from "./UpdateUserModal";
import { useState, useEffect } from "react";
import { UserUpdate } from "./Form/Form";
import { updateUsersById } from "Store/User/user-operations";
import { toast } from "react-toastify";
interface UpdateProps {
  id: number;
}

const EditInfo: React.FC<UpdateProps> = ({ id }) => {
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
  }, [requestStatus, error, t]);

  const handleClick = (data: UserUpdate): void => {
    dispatch(updateUsersById({ id: id, body: data }));
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
        {t("UserListPage.UpdateInfo")}
      </Button>
      <UpdateUserModal
        onSubmit={handleClick}
        isLoading={isLoading}
        submitButtonText={t("UserListPage.UpdateInfo")}
        isOpen={activeModal}
        onClose={onClose}
        fields={[
          "user_firstname",
          "user_lastname",
          "user_city",
          "user_phone",
          "user_status",
          "user_links",
        ]}
      />
    </>
  );
};

export default EditInfo;
