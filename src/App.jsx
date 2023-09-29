import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./components/pages/Main";
import Layout from "../Layout";
import NotFound from "./components/pages/NotFound";
import About from "./components/pages/About";
import OrderOnline from "./components/pages/OrderOnline";
import Resevations from "./components/pages/Resevations";
import {RCProvider} from "./ReservatoinContext.jsx";
import { Suspense } from "react";
import BookingPage from "./components/pages/BookingPage";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import ReservationSuccess from "./components/pages/ReservatioSucces";

function App() {
  return (
    <Suspense fallback={<h1>Loading</h1>}>
      <RCProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Main />} />
              <Route path="about" element={<About />} />
              <Route path="booking-page" element={<BookingPage />} />
              <Route path="reservations" element={<Resevations />} />
              <Route path="order-online" element={<OrderOnline />} />
              <Route path="reservation-success" element={<ReservationSuccess />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
          <ToastContainer/>
        </Router>
      </RCProvider>
    </Suspense>
  );
}

export default App;