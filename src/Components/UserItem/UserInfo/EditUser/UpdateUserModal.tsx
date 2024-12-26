import UpdateUser, { RegProps } from "../EditUser/Form/Form";
import Modal, { ModalProps } from "../../../Modal/Modal";
import Loader from "Components/Loader/Loader";
import { UserUpdate } from "../EditUser/Form/Form";

export interface UpdateUserModalProps extends ModalProps {
  onSubmit: RegProps["onSubmit"];
  submitButtonText: string;
  isLoading: boolean;
  fields: (keyof UserUpdate)[];
}

const UpdateUserModal: React.FC<UpdateUserModalProps> = ({
  onSubmit,
  isLoading,
  submitButtonText,
  isOpen,
  onClose,
  title,
  fields,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={title}
    >
      {isLoading ? (
        <Loader />
      ) : (
        <UpdateUser
          fields={fields}
          onSubmit={onSubmit}
          submitButtonText={submitButtonText}
        />
      )}
    </Modal>
  );
};

export default UpdateUserModal;
