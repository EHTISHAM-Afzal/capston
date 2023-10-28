import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import { Suspense, lazy } from "react";
import { ThemeProvider } from "./components/Theme/ThemeProvider";
import { Toaster } from "@/components/ui/toaster";
import Spinner from "./components/smallComp/Spinner";
import Layout from "@/Layout";

// Use React.lazy to load the components
const NotFound = lazy(() => import("./pages/NotFound"));
const About = lazy(() => import("./pages/About"));
const MenuPage = lazy(() => import("./pages/MenuPage"));
const BookingPage = lazy(() => import("./pages/BookingPage"));
const Main = lazy(() => import("./components/Main/Main"));
const Error = lazy(() => import("./pages/Error"));

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" errorElement={<Error />} element={<Layout />}>
      <Route
        index
        fallbackElement={<Spinner />}
        errorElement={<Error />}
        element={<Main />}
      />
      <Route
        path="about"
        fallbackElement={<Spinner />}
        errorElement={<Error />}
        element={<About />}
      />
      <Route
        path="menu"
        fallbackElement={<Spinner />}
        errorElement={<Error />}
        element={<MenuPage />}
      />
      <Route
        path="booking-page"
        fallbackElement={<Spinner />}
        errorElement={<Error />}
        element={<BookingPage />}
      />
      <Route
        path="*"
        fallbackElement={<Spinner />}
        errorElement={<Error />}
        element={<NotFound />}
      />
    </Route>
  )
);

function App() {
  return (
    <Suspense fallback={<Spinner />}>
      <ThemeProvider defaultTheme="system" storageKey="littlelemon-theme">
        <RouterProvider router={router} />
        <Toaster />
      </ThemeProvider>
    </Suspense>
  );
}

export default App;
