import React, { useContext } from "react";
import BookingForm from "../forms/BookingForm";
import { ReservationContext } from "../../ReservatoinContext";

const BookingPage = () => {
  // const [ReservationData, setReservationData] = useContext(ReservationContext);
  return (
    <section className="grids-section-width flex flex-col justify-center items-center h-[34rem] ">
      <BookingForm  />
    </section>
  );
};

export default BookingPage;
