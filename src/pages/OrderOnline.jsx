import { useNavigate } from "react-router-dom";
import Spinner from "../components/smallComp/Spinner";
import { useEffect } from "react";

const OrderOnline = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("underconstruction?page=OrderOnline");
  }, []);
  return (
    <section className=" flex flex-col justify-center items-center ">
      <Spinner />
    </section>
  );
};

export default OrderOnline;
