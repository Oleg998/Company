import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import LoginModal from "./LoginModal";
import { useAppDispatch, useAppSelector } from "hooks/useTypedRedux";
import { selectAuth } from "Store/auth/auth-selectors";
import { login } from "../../Store/auth/auth-operations";
import { UserValues } from "./RegistrationForm/RegistrationForm";
import { toast } from "react-toastify";
interface LoginPageProps {
  onClose: () => void; 
}

const LoginPage: React.FC<LoginPageProps> = ({ onClose }) => {
  const dispatch = useAppDispatch();
  const { isLoading, isLogin, isError } = useAppSelector(selectAuth);
  const { t } = useTranslation();

  useEffect(() => {
    if (isLogin ) {
      toast.success(t("Auth.success_login"));
      onClose();
    }
    if (isError) {
      toast.error(t(isError));
    }
  }, [isLogin, isError,]);

  const handleLogin = (body: UserValues): void => {
    dispatch(login(body));
  };
  
  return (
    <LoginModal
      isLoading={isLoading}
      submitButtonText={t("Form.formHeaderLogin")}
      onSubmit={handleLogin}
      isOpen={true}
      onClose={onClose}
    />
  );
};

export default LoginPage;
