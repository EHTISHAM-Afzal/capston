import MenuCardForDesktop from "../components/cards/MenuCardForDesltop";
import Spinner from "../components/smallComp/Spinner";
import { useGetDishesQuery } from "../features/Dishes/dishesSlice";
const OrderOnline = () => {
  const {
    data: Dishes,
    isLoading,
    // isSuccess,
    isError,
    error,
  } = useGetDishesQuery();

  let content;

  if (Dishes) {
    const { ids, entities } = Dishes;
    content = ids.map((id) => (
      <MenuCardForDesktop key={id} dish={entities[id]} />
    ));
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
