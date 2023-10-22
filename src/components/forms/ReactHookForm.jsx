// import React from "react";
// import { useForm } from "react-hook-form";

// const ReactHookForm = ({
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

// export default ReactHookForm;
