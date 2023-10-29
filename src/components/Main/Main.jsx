import { lazy } from "react";

const MainForDesktop = lazy(() => import("./MainDesktop"));
const MainMobile = lazy(() => import("./MainMobile"));

const Main = () => {
    const isMobile = window.innerWidth < 768;
  if (isMobile) {
    return <MainMobile />
  }
  return <MainForDesktop />
}

export default Main