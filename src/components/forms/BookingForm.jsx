import React, { useContext, useEffect, useReducer } from "react";
import { useState } from "react";
import { ReservationContext } from "../../ReservatoinContext";

const BookingForm = (props) => {
  const [ReservationData, setReservationData] = useContext(ReservationContext);
  /// Search for date they have booked table
  /// make new array with only date times that they have booked
  /// then remove the times that they have booked from the available times array

  const setBookedTables = (state, Data) => {
    state[0] = Data;
  };
  const initializeTimes = (state, Times) => {
    state[1] = Times;
  };

  const reducer = (state, action) => {
    setBookedTables(state, ReservationData);
    initializeTimes(state, props.Times);
    // Step 1: Create a Map to store the Date and Time
    // const initialArray = props.times;
    const dateToTimeMap = new Map();
    state[0].forEach((item) => {
      dateToTimeMap.set(item.Date, item.Time);
    });
    // Step 2: Iterate over the action array and remove the Time
    // from the initialArray if the Date exists in the map
    for (const indx of action) {
      if (dateToTimeMap.has(indx.Date)) {
        const index = state[1].indexOf(dateToTimeMap.get(indx.Date));
        if (index !== -1) {
          state[1].splice(index, 1);
        }
      }
    }
    return state;
  };

  const [state, dispatch] = useReducer(reducer, [ReservationData, props.Times]);
  const [Data, setData] = useState({
    Date: "",
    Time: "",
    Guests: 0,
    Occasion: "",
  });

  return (
    <form
      className=" w-4/5 md:w-3/5 p-6 text-start rounded-lg space-y-4 flex flex-col justify-start items-center my-4 shadow-md border border-black"
      onSubmit={(e) => {
        e.preventDefault();
        setReservationData((prevReservationData) => [
          ...prevReservationData,
          Data,
        ]);
        setData({ Date: "", Time: "", Guests: 0, Occasion: "" });
      }}
    >
      <label className="w-full" htmlFor="res-date">
        Choose date
        <input
          required
          className="w-full border border-gray-300 rounded-md p-1"
          type="date"
          id="res-date"
          value={Data.Date}
          onChange={(e) =>
            dispatch([{ Date: e.target.value }]) ||
            setData({ ...Data, Date: e.target.value })
          }
        />
      </label>
      <label className="w-full" htmlFor="res-time">
        Choose time
        <select
          required
          min="1"
          placeholder="Select Time"
          className="w-full border border-gray-300 rounded-md p-1"
          id="res-time "
          value={Data.Time}
          onChange={(e) => setData({ ...Data, Time: e.target.value })}
        >
          {state[1].length === 1 ? (
            <option value={""} disabled>
              All Tables Are Reserved
            </option>
          ) : (
            state[1].map((time, idx) => (
              <option disabled={idx === 0} key={idx} value={time}>
                {time}
              </option>
            ))
          )}
        </select>
      </label>
      <label className="w-full" type="number" htmlFor="guests">
        Number of guests
        <input
          value={Data.Guests}
          className="w-full border border-gray-300 rounded-md p-1"
          type="number"
          placeholder="1"
          min="1"
          max="10"
          id="guests"
          onChange={(e) => setData({ ...Data, Guests: e.target.value })}
        />
      </label>
      <label className="w-full" htmlFor="occasion">
        Occasion
        <select
          required
          min="5"
          className="w-full border border-gray-300 rounded-md p-1"
          id="occasion"
          value={Data.Occasion}
          onChange={(e) => setData({ ...Data, Occasion: e.target.value })}
        >
          <option value="">Select Occasion</option>
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
