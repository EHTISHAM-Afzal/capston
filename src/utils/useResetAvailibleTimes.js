import { useEffect } from 'react';
import { toast } from 'react-toastify';

const useResetAvailibleTimes = (Date, dispatch) => {
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      fetch(`http://localhost:3500/Reservations?q=${Date}`)
        .then((res) => res.json())
        .then((data) => {
          const Time = data.length > 0 ? data.map((ele) => ele.Time) : data;
          return dispatch({
            type: "INITIAL_TIMES",
            Date: Date,
            Times: Time,
          });
        })
        .catch((err) => {
          toast.error(
            "Something went wrong it looks like server is not responeding",
            {
              position: "top-right",
              autoClose: false,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              theme: "light",
            }
          );
          console.log(err);
        });
    }, 200);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [Date]);
}

export default useResetAvailibleTimes;