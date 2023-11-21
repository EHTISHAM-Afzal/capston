/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import Spinner from "../components/smallComp/Spinner";
import { useEffect } from "react";

const Reservations = () => {
  const navigate = useNavigate();
  useEffect(() => {
     navigate("underconstruction?page=Reservations");
  }, [])
  
  return (
    <section className="flex-col justify-center items-center my-6 w-full ">
      <h1 className="text-4xl font-bold text-center mb-8">
        Reservations is under-construction
      </h1>
      <Spinner />
    </section>
  );
};

export default Reservations;
