/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const ReservationContext = createContext();

///[{Date: '2023-09-25', Time: '19:00', Guests: '05', Occasion: 'Birthday'}]

export const RCProvider = ({ children }) => {
  const [initalState, setInitialState] = useState([]);
  return (
    <ReservationContext.Provider value={[initalState, setInitialState]}>
      {children}
    </ReservationContext.Provider>
  );
};
