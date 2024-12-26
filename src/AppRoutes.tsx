import SharedLayout from "Components/Shared Layout/SharedLayout";
import { Route, Routes } from "react-router-dom";
import { lazy } from "react";
import { RouteNames } from "./routes";
import PrivateRoute from "PrivateRout";

interface IRoute {
  path: string;
  element: React.ComponentType;
}
const HomePage = lazy(() => import("./Pages/HomePages/HomePages"));
const NotFoundPage = lazy(() => import("./Pages/NotFoundPage/NotFoundPage"));
const AboutPages = lazy(() => import("./Pages/AboutPages/AboutPages"));
const CompanyPages = lazy(() => import("./Pages/CompanyPages/CompanyPages"));
const CompanyInfoPages = lazy(
  () => import("./Pages/CompanyInfoPages/CompanyInfoPages")
);
const UserListPage = lazy(() => import("./Pages/UserListPages/UserListPage"));
const ProfilePages = lazy(() => import("./Pages/ProfilePages/ProfilePages"));
const AppRoutes = () => {
  const publicRoutes: IRoute[] = [
    {
      path: RouteNames.HomePage,
      element: HomePage,
    },
    {
      path: RouteNames.AboutPage,
      element: AboutPages,
    },
  ];

  const privateRoutes: IRoute[] = [
    {
      path: RouteNames.CompanyPage,
      element: CompanyPages,
    },
    {
      path: RouteNames.UserListPage,
      element: UserListPage,
    },
    {
      path: RouteNames.ProfilePages,
      element: ProfilePages,
    },
    {
      path: RouteNames.CompanyInfoPages,
      element: CompanyInfoPages,
    },
  ];

  const publicRoute = publicRoutes.map(({ path, element: Element }) => (
    <Route
      key={path}
      path={path}
      element={<Element />}
    />
  ));

   const privateRoute = privateRoutes.map(({ path, element: Element }) => (
     <Route
       key={path}
       path={path}
       element={<Element />}
     />
   ));

  return (
    <Routes>
      <Route
        path={RouteNames.HomePage}
        element={<SharedLayout />}
      >
        <Route
          index
          element={<HomePage />}
        />
        {publicRoute}
        <Route element={<PrivateRoute />}>{privateRoute}</Route>
        <Route
          path="*"
          element={<NotFoundPage />}
        />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
