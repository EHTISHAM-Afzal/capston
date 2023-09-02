import React, { useContext } from "react";
import BookingForm from "../forms/BookingForm";
import { ReservationContext } from "../../ReservatoinContext";




const BookingPage = () => {
  // const [ReservationData, setReservationData] = useContext(ReservationContext);



  const AvailbleTimes =[ "", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
  return (
    <section className="grids-section-width flex flex-col justify-center items-center h-[34rem] ">
      <BookingForm  Times={AvailbleTimes}  />
    </section>
  );
};

export default BookingPage;
