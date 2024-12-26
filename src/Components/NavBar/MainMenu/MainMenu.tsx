import css from "./mainMenu.module.css";
import { NavLink } from "react-router-dom";
import { RouteNames } from "../../../routes";
import { useTranslation } from "react-i18next";
import { useAppSelector } from "hooks/useTypedRedux";
import { selectAuth } from "Store/auth/auth-selectors";
type Page = {
  name: string;
  path: RouteNames;
  private: boolean;
};

const MainMenu = () => {
  const { isLogin } = useAppSelector(selectAuth);
  const { t } = useTranslation();

  const pages: Page[] = [
    { name: t("MainMenu.Home"), path: RouteNames.HomePage, private: false },
    { name: t("MainMenu.About"), path: RouteNames.AboutPage, private: false },
    {
      name: t("MainMenu.Company"),
      path: RouteNames.CompanyPage,
      private: true,
    },
  ];

  const filterMenuItems = isLogin
    ? pages
    : pages.filter(({ private: isPrivate }) => !isPrivate);

  return (
    <ul className={css.mainMenuList}>
      {filterMenuItems.map((page) => (
        <li
          key={page.name}
          className={css.mainMenuItem}
        >
          <NavLink
            to={page.path}
            className={css.mainMenuLink}
          >
            {page.name}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default MainMenu;
