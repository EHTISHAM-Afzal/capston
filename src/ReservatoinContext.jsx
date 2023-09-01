import { createContext, useState } from "react";

export const ReservationContext = createContext();

export const RCProvider = ({ children }) => {
  const [initalState, setInitialState] = useState( [{Date: '2023-08-30', Time: '19:00', Guests: '05', Occasion: 'Birthday'}]);
  return (
    <ReservationContext.Provider value={[initalState, setInitialState]}>
      {children}
    </ReservationContext.Provider>
  );
};
