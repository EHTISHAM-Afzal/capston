/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";
import { Input } from "../smallComp/Input";
import useResetAvailibleTimes from "../../utils/useResetAvailibleTimes";

const BookingForm = ({ AvailibleTimes, dispatch, formSubmitHandler }) => {
  const {
    register,
    watch,
    reset,
    handleSubmit,
    formState: { errors, touchedFields },
  } = useForm({
    defaultValues: {
      Date: "",
      Time: "",
      Guests: 0,
      Occasion: "",
    },
    mode: "onChange"
  });

  const onSubmit = (data) => {
    formSubmitHandler(data);
    reset();
  };

  const watchDate = watch("Date");
  // the useResetAvailibleTimes hook is used to reset the availible times and they take in props "Date" and dispatch 
  useResetAvailibleTimes(watchDate, dispatch);

  return (
    <>
      <h2 className=" text-center text-4xl font-markazi-text font-semibold">
        Reserve your table
      </h2>
      <form
        className="flex flex-col items-center justify-center sm:w-96 p-6 my-4 space-y-2 bg-white rounded-lg shadow-md border"
        onSubmit={handleSubmit(onSubmit)}
      >
        <label className="w-full" htmlFor="Date">
          <span className="text-gray-700">Choose date</span>
          <Input
            register={register}
            touchedFields={touchedFields}
            errors={errors}
            name="Date"
            validation={{
              required: "Date is required",
              validate: {
                todayFutureDate: (value) =>
                  new Date(value) >= new Date().setHours(0, 0, 0, 0) ||
                  "The date must be today or in the future",
              },
            }}
            type="date"
          />
        </label>

        <label className="w-full" htmlFor="time">
          <span className="text-gray-700">Select time</span>
          <select
            {...register("Time", { required: "Time is required" })}
            className={`w-full mt-1 p-2 border border-gray-300 rounded-md ${
              errors.Time ? "border-red-500 outline-red-500 " : "border-gray-300"
            } `}
            id="time"
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
          <div className="mt-1 h-4">
          {touchedFields.Time && errors.Time && (
            <p className="text-sm text-red-500">{errors.Time.message}</p>
          )}</div>
        </label>

        <label className="w-full" htmlFor="Guests">
          <span className="text-gray-700">Number of guests</span>
          <Input
            register={register}
            errors={errors}
            touchedFields={touchedFields}
            name="Guests"
            validation={{
              required: "Number of guests is required",
              min: { value: 1, message: "Minimum number of guests is 1" },
              max: { value: 10, message: "Maximum number of guests is 10" },
            }}
            type="number"
          />
        </label>

        <label className="w-full" htmlFor="occasion">
          <span className="text-gray-700">Occasion</span>
          <select
            {...register("Occasion", { required: "Occasion is required" })}
            className={`w-full mt-1 p-2 border border-gray-300 rounded-md  ${
              errors.Occasion ? "border-red-500 outline-red-500 " : "border-gray-300"
            } `}
            id="occasion"
          >
            <option value="">Select Occasion</option>
            <option>Birthday</option>
            <option>Anniversary</option>
          </select>
          <div className="mt-1 h-4">
          {touchedFields.Occasion && errors.Occasion && (
            <p className=" text-sm text-red-500">
              {errors.Occasion.message}
            </p>
          )}</div>
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
