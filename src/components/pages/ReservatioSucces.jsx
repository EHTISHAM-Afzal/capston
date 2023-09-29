import {  Link } from "react-router-dom";

const ReservationSuccess = () => {
  return (
    <section className="grids-section-width flex flex-col justify-center items-center min-h-[63vh]">
    <div className="flex flex-col items-center justify-center text-2xl rounded-xl " >
      <div className="p-4 bg-white rounded-xl shadow-md">
        <h1 className="mb-4 text-4xl font-semibold font-markazi-text ">Reservation Successful!</h1>
        <p className="mb-4 text-2xl font-karla" >Your reservation has been made successfully. We look forward to serving you!</p>
        <Link to="/reservations" className="px-4 py-2 text-black bg-[#F4CE14] rounded text-lg font-karla">View Reservation Details</Link>
      </div>
    </div>
    </section>
  );
};

export default ReservationSuccess;
