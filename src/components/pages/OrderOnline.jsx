import React, { useContext } from "react";
import {ReservationContext} from "../../ReservatoinContext";

const OrderOnline = () => {
  const [data , setData] = useContext(ReservationContext);
  console.log(data)
  return (
    <section className="grids-section-width flex flex-col justify-center items-center h-96 ">
    Order Online
    <p>orders are ready ther order Details is {data?.Date} {data?.Occasion} {data?.Time} {data?.Guests}  </p>
    </section>
  );
};

export default OrderOnline;
