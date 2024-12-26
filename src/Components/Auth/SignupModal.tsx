import RegistrationForm, {
  RegProps,
} from "./RegistrationForm/RegistrationForm";
import Modal, { ModalProps } from "../Modal/Modal";
import Loader from "Components/Loader/Loader";

export interface SignupModalProps extends ModalProps {
  onSubmit: RegProps["onSubmit"];
  submitButtonText: string;
  isLoading: boolean;
}

const CompanyFormModal: React.FC<SignupModalProps> = ({
  onSubmit,
  isLoading,
  submitButtonText,
  ...rest
}) => {
  return (
    <Modal {...rest}>
      {isLoading && <Loader />}
      <RegistrationForm
        fields={[
          "user_firstname",
          "user_lastname",
          "user_email",
          "user_password",
          "user_password_repeat",
        ]}
        onSubmit={onSubmit}
        submitButtonText={submitButtonText}
      />
    </Modal>
  );
};

export default CompanyFormModal;
