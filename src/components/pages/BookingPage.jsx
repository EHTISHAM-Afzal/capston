import { useReducer  } from "react";
import BookingForm from "../forms/BookingForm";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const BookingPage = () => {
  const navigate = useNavigate();
  
  const updateTimes = (state, action) => {
    /// initiallize times for selected date
    state.initialTimes = initializeTime();

    const { Times } = action;

    // const bookedTimes = state.reservations.map((element) =>
    //   element.Date === Date ? element.Time : null
    // );
    // const bookedTimes = state.reservations
    //   .filter((element) => element.Date === Date)
    //   .map((element) => element.Time);

    /// make a array that do not contains reserved times
    const reservedTimes =
      Times.length === 0
        ? state.initialTimes
        : state.initialTimes.filter((element) => !Times.includes(element));
    return {
      ...state,
      initialTimes: reservedTimes,
    };
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "INITIAL_TIMES":
        return updateTimes(state, action);
      // case "RESERVATIONS_CHANGED":
      //   return { ...state, reservations: action.payload };
      default:
        return state;
    }
  };

  const initializeTime = () => [
    "Select times",
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
  ];

  const [state, dispatch] = useReducer(reducer, {
    initialTimes: initializeTime(),
    reservations: [],
  });

  const formSubmitHandler = (formData) => {
    // Submit data to the server
    fetch("http://localhost:3500/Reservations", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then(()=>navigate('/reservation-success'))
      .catch((error) => {
        console.error("Error submitting form:", error);
        toast.error("An error occurred while making the reservation");
    });
  };

  return (
    <section className="grids-section-width flex flex-col justify-center items-center min-h-[34rem]">
      <BookingForm
        AvailibleTimes={state.initialTimes}
        dispatch={dispatch}
        formSubmitHandler={formSubmitHandler}
      />
    </section>
  );
};

export default BookingPage;
