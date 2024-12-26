import Header from "Pages/Header/Header";
import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import Loader from "Components/Loader/Loader";
const SharedLayout = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<Loader/>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayout;
