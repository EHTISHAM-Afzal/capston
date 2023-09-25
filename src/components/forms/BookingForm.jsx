/* eslint-disable react/prop-types */
import  { useEffect } from "react";
import { useForm } from "react-hook-form";

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
      dispatch({
        type: "INITIAL_TIMES",
        Date: watchDate ,
      });
    }, 200);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [watchDate]);

  return (
    <form
      className=" w-4/5 md:w-3/5 lg:w-1/2 p-6 text-start rounded-lg space-y-4 flex flex-col justify-start items-center my-4 shadow-md border border-black"
      onSubmit={handleSubmit(onSubmit)}
    >
      <label className="w-full" htmlFor="res-date">
        Choose date
        <input
          {...register("Date", {
            required: "Date is required",
            validate: {
              todayFutureDate: (value) =>
                new Date(value) >= new Date().setHours(0, 0, 0, 0) ||
                "The date must be today or in the future",
            },
          })}
          className="w-full border border-gray-300 rounded-md p-1"
          type="date"
          value={watch("Date")}
          id="res-date"
        />
        {errors.Date && (
          <p className="text-red-500 italic font-medium text-sm">
            {errors.Date.message}
          </p>
        )}
      </label>
      <label className="w-full" htmlFor="res-time">
        Choose time
        <select
          {...register("Time", { required: "Time is required" })}
          placeholder="Select Time"
          className="w-full border border-gray-300 rounded-md p-1"
          value={watch("Time")}
          id="res-time"
        >
          {AvailibleTimes ? (
            <optgroup label="Choose Time">
              {AvailibleTimes.map((time, idx) => (
                <option
                  selected={idx === 0}
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
          <p className="text-red-500 italic font-medium text-sm">
            {errors.Time.message}
          </p>
        )}
      </label>
      <label className="w-full" type="number" htmlFor="guests">
        Number of guests
        <input
          {...register("Guests", {
            required: "Number of guests is required",
            min: { value: 1, message: "Minimum number of guests is 1" },
            max: { value: 10, message: "Maximum number of guests is 10" },
          })}
          className="w-full border border-gray-300 rounded-md p-1"
          type="number"
          value={watch("Guests")}
          id="guests"
        />
        {errors.Guests && (
          <p className="text-red-500 italic font-medium text-sm">
            {errors.Guests.message}
          </p>
        )}
      </label>
      <label className="w-full" htmlFor="occasion">
        Occasion
        <select
          {...register("Occasion", { required: "Occasion is required" })}
          className="w-full border border-gray-300 rounded-md p-1"
          value={watch("Occasion")}
          id="occasion"
        >
          <option value="">Select Occasion</option>
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>
        {errors.Occasion && (
          <p className="text-red-500 italic font-medium text-sm">
            {errors.Occasion.message}
          </p>
        )}
      </label>
      <div className="w-full p-1 cursor-pointer">
        <button
          className=" p-1 rounded-md border float-right hover:border-gray-600 "
          type="submit"
        >
          Make Your reservation
        </button>
      </div>
    </form>
  );
};

export default BookingForm;

// import React from "react";
// import { useForm } from "react-hook-form";

// const BookingForm = ({
//   AvailibleTimes,
//   formData,
//   setFormData,
//   dispatch,
//   formSubmitHandler,
// }) => {
//   const handleDateChange = (e) => {
//     const { register, handleSubmit, formState: { errors } } = useForm();
//     const date = e.target.value;
//     dispatch({type: "INITIAL_TIMES", Date: date}); ;
//     setFormData({ ...formData, Date: date });
//   };

//   const handleTimeChange = (e) => {
//     setFormData({ ...formData, Time: e.target.value });
//   };

//   const handleGuestsChange = (e) => {
//     setFormData({ ...formData, Guests: e.target.value });
//   };

//   const handleOccasionChange = (e) => {
//     setFormData({ ...formData, Occasion: e.target.value });
//   };

//   return (
//     <form
//       className=" w-4/5 md:w-3/5 p-6 text-start rounded-lg space-y-4 flex flex-col justify-start items-center my-4 shadow-md border border-black"
//       onSubmit={formSubmitHandler}
//     >
//       <label className="w-full" htmlFor="res-date">
//         Choose date
//         <input
//           required
//           className="w-full border border-gray-300 rounded-md p-1"
//           type="date"
//           id="res-date"
//           value={formData.Date}
//           onChange={handleDateChange}
//         />
//       </label>
//       <label className="w-full" htmlFor="res-time">
//         Choose time
//         <select
//           required
//           min = '4'
//           placeholder="Select Time"
//           className="w-full border border-gray-300 rounded-md p-1"
//           id="res-time "
//           value={formData.Time}
//           onChange={handleTimeChange}
//         >
//           {AvailibleTimes ? (
//             <optgroup label="Choose Time">
//               {AvailibleTimes.map((time, idx) =>
//                 AvailibleTimes.length === 1 ? (
//                   <option key={idx} disabled>
//                     All Tables Are Reserved
//                   </option>
//                 ) : (
//                   <option selected={idx === 0} key={time} value={idx === 0 ? "" :time}>
//                     {time}
//                   </option>
//                 )
//               )}
//             </optgroup>
//           ) : (
//             <option value={""}>Please Select Date</option>
//           )}
//         </select>
//       </label>
//       <label className="w-full" type="number" htmlFor="guests">
//         Number of guests
//         <input
//           value={formData.Guests}
//           className="w-full border border-gray-300 rounded-md p-1"
//           type="number"
//           placeholder="1"
//           min="1"
//           max="10"
//           id="guests"
//           onChange={handleGuestsChange}
//         />
//       </label>
//       <label className="w-full" htmlFor="occasion">
//         Occasion
//         <select
//           required
//           min="5"
//           className="w-full border border-gray-300 rounded-md p-1"
//           id="occasion"
//           value={formData.Occasion}
//           onChange={handleOccasionChange}
//         >
//           <option value="">Select Occasion</option>
//           <option>Birthday</option>
//           <option>Anniversary</option>
//         </select>
//       </label>
//       <input
//         className="w-full p-1 text-right cursor-pointer"
//         type="submit"
//         value="Make Your reservation"
//       />
//     </form>
//   );
// };

// export default BookingForm;
