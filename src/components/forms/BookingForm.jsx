/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const BookingForm = ({ AvailibleTimes, dispatch, formSubmitHandler }) => {
  const {
    register,
    watch,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      Date: "",
      Time: "",
      Guests: 0,
      Occasion: "",
    },
  });

  const onSubmit = (data) => {
    formSubmitHandler(data);
    reset();
  };

  const watchDate = watch("Date");
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      fetch(`http://localhost:3500/Reservations?q=${watchDate}`)
        .then((res) => res.json())
        .then((data) => {
          const Time = data.length > 0 ? data.map((ele) => ele.Time) : data;
          return dispatch({
            type: "INITIAL_TIMES",
            Date: watchDate,
            Times: Time,
          });
        })
        .catch((err) => {
          toast.error(
            "Something went wrong it looks like server is not responeding"
          );
          console.log(err);
        });
    }, 200);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [watchDate]);

  return (
    <>
      <h2 className=" text-center text-4xl font-markazi-text font-semibold">
        Reserve your table
      </h2>
      <form
        className="flex flex-col items-center justify-center w-4/5 md:w-3/5 lg:w-1/2 p-6 my-4 space-y-4 bg-white rounded-lg shadow-md border border-black border-dashed"
        onSubmit={handleSubmit(onSubmit)}
      >
        <label className="w-full" htmlFor="res-date">
          <span className="text-gray-700">Choose date</span>
          <input
            {...register("Date", {
              required: "Date is required",
              validate: {
                todayFutureDate: (value) =>
                  new Date(value) >= new Date().setHours(0, 0, 0, 0) ||
                  "The date must be today or in the future",
              },
            })}
            className="w-full mt-1 p-2 border border-gray-300 rounded-md"
            type="date"
            value={watch("Date")}
            id="res-date"
          />
          {errors.Date && (
            <p className="mt-1 text-sm text-red-500">{errors.Date.message}</p>
          )}
        </label>

        <label className="w-full" htmlFor="res-time">
          <span className="text-gray-700">Choose time</span>
          <select
            {...register("Time", { required: "Time is required" })}
            className="w-full mt-1 p-2 border border-gray-300 rounded-md"
            value={watch("Time")}
            id="res-time"
          >
            {AvailibleTimes ? (
              <optgroup label="Choose Time">
                {AvailibleTimes.map((time, idx) => (
                  <option
                    key={time}
                    value={idx === 0 ? "" : time}
                    disabled={AvailibleTimes.length === 1}
                  >
                    {AvailibleTimes.length === 1
                      ? "All Tables Are Reserved"
                      : time}
                  </option>
                ))}
              </optgroup>
            ) : (
              <option value=" ">Please Select Date</option>
            )}
          </select>
          {errors.Time && (
            <p className="mt-1 text-sm text-red-500">{errors.Time.message}</p>
          )}
        </label>

        <label className="w-full" htmlFor="guests">
          <span className="text-gray-700">Number of guests</span>
          <input
            {...register("Guests", {
              required: "Number of guests is required",
              min: { value: 1, message: "Minimum number of guests is 1" },
              max: { value: 10, message: "Maximum number of guests is 10" },
            })}
            className="w-full mt-1 p-2 border border-gray-300 rounded-md"
            type="number"
            value={watch("Guests")}
            id="guests"
          />
          {errors.Guests && (
            <p className="mt-1 text-sm text-red-500">{errors.Guests.message}</p>
          )}
        </label>

        <label className="w-full" htmlFor="occasion">
          <span className="text-gray-700">Occasion</span>
          <select
            {...register("Occasion", { required: "Occasion is required" })}
            className="w-full mt-1 p-2 border border-gray-300 rounded-md"
            value={watch("Occasion")}
            id="occasion"
          >
            <option value="">Select Occasion</option>
            <option>Birthday</option>
            <option>Anniversary</option>
          </select>
          {errors.Occasion && (
            <p className="mt-1 text-sm text-red-500">
              {errors.Occasion.message}
            </p>
          )}
        </label>

        <div className="w-full mt-4">
          <button
            className="w-full px-4 py-2 text-black bg-[#F4CE14] rounded-md border hover:border-black"
            type="submit"
          >
            Make Your reservation
          </button>
        </div>
      </form>
    </>
  );
};

export default BookingForm;
