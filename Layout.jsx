import { Suspense } from "react";
import Footer from "./src/components/Footer";
import Header from "./src/components/Header/Header";
import { Outlet } from "react-router-dom";
import Spinner from "./src/components/smallComp/Spinner";

const Layout = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<Spinner />}>
        <Outlet />
      </Suspense>
      <Footer />
    </>
  );
};

export default Layout;
