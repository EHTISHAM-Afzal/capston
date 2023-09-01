import React, { useContext,  useState } from "react";
import BookingForm from "../forms/BookingForm";
import { ReservationContext } from "../../ReservatoinContext";

// const updateTimes = ({ AvailbleTimes }) => {
//   const BookedTimes = arr.filter((t) => t.isBooked ==="true");
//   const AvailableTimes = arr.filter((t) => t.isBooked ==="false");
//   return AvailbleTimes;
// };




const BookingPage = () => {
  const [ReservationData, setReservationData] = useContext(ReservationContext);
  console.log(ReservationData)

  

  const [AvailbleTimes, setAvailibleTimes] = useState([
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
  ]);
  return (
    <section className="grids-section-width flex flex-col justify-center items-center h-[34rem] ">
      <div className="flex flex-row justify-between items-center space-x-2">
        <p>Reserved Tables <span className="text-red-500">{ReservationData?.Date} {ReservationData?.Time}</span></p>
        {AvailbleTimes.map((t, idx) => (
          <p key={idx}>{t}</p>
        ))}
      </div>
      <BookingForm times={AvailbleTimes} />
    </section>
  );
};

export default BookingPage;
