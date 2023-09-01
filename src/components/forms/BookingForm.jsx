import React, { useContext, useEffect, useReducer } from "react";
import { useState } from "react";
import { ReservationContext } from "../../ReservatoinContext.jsx";

const BookingForm = (props) => {
  const [ReservationData, setReservationData] = useContext(ReservationContext);

  const reducer = (state, action) => {
    const initialArray = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
    if (state.includes(action.Date)) {
      const a = state.indexOf(action.Date);
      console.log(a);
      const state = initialArray.filter((t) => t !== state[a].Time);
      console.log(state);
    } else {
      return (state = initialArray);
    }
  };

  const [state, dispatch] = useReducer(reducer, props.times);

  const [Data, setData] = useState({
    Date: "",
    Time: "",
    Guests: 0,
    Occasion: "",
  });

  // const initializeTimes =  ({ReservationData , Date})=>{
  //   const initialArray = ["17:00","18:00","19:00","20:00","21:00","22:00",]
  //   if(ReservationData?.Date === Date) {
  //     return  initialArray.filter((t) => t !== ReservationData.Time)
  //   }else{
  //     return  initialArray
  //   }
  // }

  return (
    <form
      className=" w-4/5 md:w-3/5 p-6 text-start rounded-lg space-y-4 flex flex-col justify-start items-center my-4 shadow-md border border-black"
      onSubmit={(e) => {
        e.preventDefault();
        setReservationData((prevReservationData) => [
          ...prevReservationData,
          Data,
        ]);
      }}
    >
      <label className="w-full" htmlFor="res-date">
        Choose date
        <input
          className="w-full border border-gray-300 rounded-md p-1"
          type="date"
          id="res-date"
          value={Data.Date}
          onChange={(e) =>
            setData({ ...Data, Date: e.target.value }) &&
            dispatch({ Date: e.target.value })
          }
        />
      </label>
      <label className="w-full" htmlFor="res-time">
        Choose time
        <select
          className="w-full border border-gray-300 rounded-md p-1"
          id="res-time "
          value={state}
          onChange={(e) => setData({ ...Data, Time: e.target.value })}
        >
          {state.map((time, idx) => (
            <option key={idx}>{time}</option>
          ))}
        </select>
      </label>
      <label
        className="w-full"
        type="number"
        htmlFor="guests"
        value={Data.Guests}
      >
        Number of guests
        <input
          className="w-full border border-gray-300 rounded-md p-1"
          type="number"
          placeholder="1"
          min="1"
          max="10"
          id="guests"
          value={Data.Guests}
          onChange={(e) => setData({ ...Data, Guests: e.target.value })}
        />
      </label>
      <label className="w-full" htmlFor="occasion">
        Occasion
        <select
          className="w-full border border-gray-300 rounded-md p-1"
          id="occasion"
          value={Data.Occasion}
          onChange={(e) => setData({ ...Data, Occasion: e.target.value })}
        >
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>
      </label>
      <input
        className="w-full p-1 text-right cursor-pointer"
        type="submit"
        value="Make Your reservation"
      />
    </form>
  );
};

export default BookingForm;
