import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import { Suspense, lazy } from "react";
import { ThemeProvider } from "./components/Theme/ThemeProvider";
import { Toaster } from "@/components/ui/toaster";
import FullScreenSpinner from "./components/smallComp/FullScreenSpinner";
import Layout from "@/Layout";

// Use React.lazy to load the components
const NotFound = lazy(() => import("./pages/NotFound"));
const About = lazy(() => import("./pages/About"));
const MenuPage = lazy(() => import("./pages/MenuPage"));
const BookingPage = lazy(() => import("./pages/BookingPage"));
const Main = lazy(() => import("./components/Main/Main"));
const Error = lazy(() => import("./pages/Error"));
const OrderOnline = lazy(() => import("./pages/OrderOnline"));
const AboutProduct = lazy(() => import("./pages/AboutProduct"));
const Profile = lazy(() => import("./pages/Profile"));
const LoginPage = lazy(() => import("./pages/LoginPage"));
const Reservations = lazy(() => import("./pages/Reservations"));
const UnderConstruction = lazy(() => import("./pages/UnderConstruction"));

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" errorElement={<Error />} element={<Layout />}>
      <Route
        index
        fallbackElement={<FullScreenSpinner />}
        errorElement={<Error />}
        element={<Main />}
      />
      <Route
        path="about"
        fallbackElement={<FullScreenSpinner />}
        errorElement={<Error />}
        element={<About />}
      />
      <Route path="menu" errorElement={<Error />}>
        <Route
          index
          fallbackElement={<FullScreenSpinner />}
          errorElement={<Error />}
          element={<MenuPage />}
        />
        <Route
          path=":productId"
          errorElement={<Error />}
          element={<AboutProduct />}
        />
      </Route>
      <Route
        path="booking-page"
        fallbackElement={<FullScreenSpinner />}
        errorElement={<Error />}
        element={<BookingPage />}
      />
      <Route
        path="reservations"
        fallbackElement={<FullScreenSpinner />}
        errorElement={<Error />}
        element={<Reservations />}
      />
      <Route
        path="order-online"
        fallbackElement={<FullScreenSpinner />}
        errorElement={<Error />}
        element={<OrderOnline />}
      />
      <Route
        path="login"
        fallbackElement={<FullScreenSpinner />}
        errorElement={<Error />}
        element={<LoginPage />}
      />
      <Route
        path="profile"
        fallbackElement={<FullScreenSpinner />}
        errorElement={<Error />}
        element={<Profile />}
      />
      <Route
        path="underconstruction"
        fallbackElement={<FullScreenSpinner />}
        errorElement={<Error />}
        element={<UnderConstruction />}
      />
      <Route
        path="*"
        fallbackElement={<FullScreenSpinner />}
        errorElement={<Error />}
        element={<NotFound />}
      />
    </Route>
  )
);

function App() {
  return (
    <Suspense fallback={<FullScreenSpinner />}>
      <ThemeProvider defaultTheme="system" storageKey="littlelemon-theme">
        <RouterProvider router={router} />
        <Toaster />
      </ThemeProvider>
    </Suspense>
  );
}

export default App;
