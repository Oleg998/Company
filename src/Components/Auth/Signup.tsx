
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import SignupModal from "./SignupModal";
import { useAppDispatch, useAppSelector } from "hooks/useTypedRedux";
import { selectAuth } from "Store/auth/auth-selectors";
import { signup } from "Store/auth/auth-operations";
import { UserValues } from "./RegistrationForm/RegistrationForm";
import { toast } from "react-toastify";

interface SignupProps {
  onClose: () => void; 
}

const Signup: React.FC<SignupProps> = ({ onClose }) => {
  const dispatch = useAppDispatch();
  const { isLoading, isLogin, isError } = useAppSelector(selectAuth);
  const { t } = useTranslation();

  useEffect(() => {
    if (isLogin) {
      toast.success(t("Auth.success"));
      onClose();
    }
    if (isError) {
      toast.error(t(isError));
    }
  }, [isLogin, isError]);

  const handleSignup = (body: UserValues): void => {
    dispatch(signup(body));
  };

  return (
    <SignupModal
      isLoading={isLoading}
      submitButtonText={t("Form.formHeader")}
      onSubmit={handleSignup}
      isOpen={true}
      onClose={onClose}
    />
  );
};

export default Signup;
