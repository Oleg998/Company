import { Button } from "@mui/material";
import { useState, useEffect, useCallback } from "react";
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

const UpdatePhoto: React.FC<UpdateProps> = ({ id }) => {
  const [activeModal, setActiveModal] = useState<boolean>(false);
  const { t } = useTranslation();
  const { isLoading, requestStatus, error } = useAppSelector(selectaUser);
  const dispatch = useAppDispatch();

  const onClose = useCallback(() => setActiveModal(false), []);

  useEffect(() => {
    if (requestStatus === "fetchFulfilled" && activeModal) {
      toast.success(t("UserListPage.success"));
      setActiveModal(false);
      // Instead of reloading, trigger a refetch or update the state here
      // Example: dispatch(fetchUserById(id));
    }
    if (error) {
      toast.error(t(error || "An error occurred")); // Safeguard for undefined errors
    }
  }, [requestStatus, error, t, activeModal, onClose]);

  const handleFileUpload = async (fileUrl: string): Promise<FormData | null> => {
    try {
      const response = await fetch(fileUrl);
      const avatarBlob = await response.blob();
      const formData = new FormData();
      formData.append("file", avatarBlob, "file.jpg");
      return formData;
    } catch (e) {
      toast.error(t("UserListPage.ErrorFetchingPhoto"));
      return null;
    }
  };

  const handleClick = async (data: UserUpdate): Promise<void> => {
    if (!data.user_avatar) {
      toast.error(t("UserListPage.ErrorNoPhoto"));
      return;
    }

    const formData = await handleFileUpload(data.user_avatar);
    if (formData) {
      dispatch(updatePhoto({ id, body: formData }));
    }
  };

  const openModal = (): void => setActiveModal(true);

  return (
    <>
      <Button onClick={openModal} variant="contained" color="primary">
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

export default UpdatePhoto;
