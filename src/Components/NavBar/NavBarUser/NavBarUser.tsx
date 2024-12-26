import {
  Tooltip,
  IconButton,
  Avatar,
  Menu,
  MenuItem,
  Button,
} from "@mui/material/";
import { RouteNames } from "routes";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useAppSelector, useAppDispatch } from "hooks/useTypedRedux";
import { logout } from "Store/auth/auth-slice";
import { selectAuth } from "Store/auth/auth-selectors";
import LoginPage from "../../Auth/Login";
import Signup from "Components/Auth/Signup";
import css from "./navBar.module.css";
import { fetchMe } from "Store/auth/auth-operations";
import { Link } from "react-router-dom";

const NavBarUser = () => {
  const { t } = useTranslation();
  const { isLogin, user } = useAppSelector(selectAuth);
  const dispatch = useAppDispatch();
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const [showLogin, setShowLogin] = useState<boolean>(false);
  const [showSignup, setShowSignup] = useState<boolean>(false);

  useEffect(() => {
    if (isLogin) {
      dispatch(fetchMe());
    }
  }, [isLogin]);
  console.log(user);
  
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const selectPage: { name: string; action?: () => void; path?: string }[] =
    isLogin
      ? [
          { name: t("Form.logout"), action: () => dispatch(logout()) },
          { name: t("UserMenu.UserList"), path: RouteNames.UserListPage },
          {
            name: t("UserMenu.Portfolio"),
            path: user
              ? `${RouteNames.UserListPage}/${user.user_id}`
              : RouteNames.UserListPage,
          },
        ]
      : [
          {
            name: t("Form.formHeader"),
            action: () => setShowSignup(true),
          },
          {
            name: t("Form.formHeaderLogin"),
            action: () => setShowLogin(true),
          },
        ];

  return (
    <div>
      <Tooltip title={t("UserMenu.Tooltip")}>
        <IconButton onClick={handleOpenUserMenu}>
          <Avatar
            alt={user?.user_firstname ? user.user_firstname : t("UserMenu.A")}
            src={
              user?.user_avatar
                ? user.user_avatar
                : "/static/images/avatar/2.jpg"
            }
          />
        </IconButton>
      </Tooltip>
      <Menu
        className={css.menu}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        keepMounted
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        {selectPage.map((page) => (
          <MenuItem
            key={page.name}
            onClick={handleCloseUserMenu}
          >
            {page.path ? (
              <Link
                to={page.path}
                className={css.textSet}
              >
                <Button>{page.name}</Button>
              </Link>
            ) : (
              <Button
                onClick={page.action}
                className={css.textSet}
              >
                {page.name}
              </Button>
            )}
          </MenuItem>
        ))}
      </Menu>
      {showLogin && <LoginPage onClose={() => setShowLogin(false)} />}
      {showSignup && <Signup onClose={() => setShowSignup(false)} />}
    </div>
  );
};

export default NavBarUser;
