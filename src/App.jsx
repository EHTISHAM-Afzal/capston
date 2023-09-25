import Main from "./components/pages/Main";
import Layout from "../Layout";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import NotFound from "./components/pages/NotFound";
import About from "./components/pages/About";
import OrderOnline from "./components/pages/OrderOnline";
import Resevations from "./components/pages/Resevations";
import {RCProvider} from "./ReservatoinContext.jsx";
import { Suspense } from "react";
import BookingPage from "./components/pages/BookingPage";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Main />} />
      <Route path="aboute" element={<About />} />
      <Route path="booking-page" element={<BookingPage />} />
      <Route path="reservations" element={<Resevations />} errorElement={<h2>Ther is an error</h2>} />
      <Route path="order-online" element={<OrderOnline />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return (
    <Suspense fallback={<h1>Loading</h1>}>
      <RCProvider>
        <RouterProvider router={router} />
        <ToastContainer/>
      </RCProvider>
    </Suspense>
  );
}

export default App;
