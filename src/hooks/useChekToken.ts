import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "./useTypedRedux";
import { selectAuth } from "Store/auth/auth-selectors";
import { jwtDecode } from "jwt-decode";
import { logout } from "../Store/auth/auth-slice";

interface DecodedToken {
  exp?: number;
}

export const useCheckToken = () => {
  const { token } = useAppSelector(selectAuth);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!token) return;
    const decoded: Partial<DecodedToken> = jwtDecode(token);
    const currentTime = Date.now();
    if (decoded.exp && decoded.exp * 1000 < currentTime) {
      dispatch(logout());
    }
  }, [token, dispatch]);
};
