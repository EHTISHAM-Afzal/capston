import Spinner from "../components/smallComp/Spinner";
import { useGetTableByIdQuery } from "../features/BookingTables/BookingTableSlice";

const OrderOnline = () => {
  const {
    data: table,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetTableByIdQuery("654afde601fc148e0a47b050");
  
  let content;

  if (isSuccess) {
    content = JSON.stringify(table, null , 2);
  } else if (isLoading) {
    content = <Spinner />;
  } else if (isError) {
    content = <p>{error.message}</p>;
  } else {
    content = <p>No data</p>;
  }

  return (
    <section className=" flex flex-col justify-center items-center ">
      {content}
    </section>
  );
};

export default OrderOnline;