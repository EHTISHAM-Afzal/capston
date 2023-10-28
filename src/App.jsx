import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import { Suspense, lazy } from "react";
import { ThemeProvider } from "./components/Theme/ThemeProvider";
import { Toaster } from "@/components/ui/toaster"
import Spinner from "./components/smallComp/Spinner";
import Layout from "@/Layout";

// Use React.lazy to load the components
const NotFound = lazy(() => import("./pages/NotFound"));
const About = lazy(() => import("./pages/About"));
const MenuPage = lazy(() => import("./pages/MenuPage"));
const BookingPage = lazy(() => import("./pages/BookingPage"));
const Main = lazy(() => import('./components/Main/Main'));

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index fallbackElement={<Spinner/>} element={<Main />} />
      <Route path="about" fallbackElement={<Spinner/>} element={<About />} />
      <Route path="menu" fallbackElement={<Spinner/>} element={<MenuPage />} />
      <Route path="booking-page" fallbackElement={<Spinner/>} element={<BookingPage />} />
      <Route path="*" fallbackElement={<Spinner/>} element={<NotFound />} />
    </Route>
  )
);

function App() {
  return (
    <Suspense fallback={<Spinner />}>
        <ThemeProvider defaultTheme="system" storageKey="littlelemon-theme">
          <RouterProvider  router={router}  />
          <Toaster />
        </ThemeProvider>
    </Suspense>
  );
}

export default App;