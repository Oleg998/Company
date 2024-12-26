import { Outlet, Navigate } from "react-router-dom";
import { useAppSelector } from "hooks/useTypedRedux";
import { selectAuth } from "Store/auth/auth-selectors";
import { RouteNames } from "routes";

const PrivateRoute = () => {
  const { isLogin } = useAppSelector(selectAuth);
  if (!isLogin) {
    return <Navigate to={RouteNames.HomePage} />;
  }
  return <Outlet />;
};

export default PrivateRoute;
