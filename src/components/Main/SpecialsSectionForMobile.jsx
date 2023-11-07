import MenuCardForMobile from "../cards/MenuCardForMobile";
import { Link } from "react-router-dom";
import { useGetDishesQuery } from "@/src/features/Dishes/dishesSlice";
import { Skeleton } from "@/components/ui/skeleton";

const SpecialsSectionForMobile = () => {
  const {
    data: Dishes,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetDishesQuery();

  let content;

  if (isSuccess) {
    const { ids, entities } = Dishes;
    content = ids.map((id) => (
      <MenuCardForMobile key={id} dish={entities[id]} />
    ));
  } else if (isLoading) {
    content = <Skeleton className="w-full border h-56" />;
  } else if (isError) {
    content = <p>{error.message}</p>;
  }

  return (
    <div className="w-full px-3">
      <div className="w-full flex items-center justify-between px-4">
        <h2 className=" text-center text-3xl font-karla font-semibold">
          Specials
        </h2>
        <Link
          to="menu"
          className=" text-xl tracking-wide my-3 h-10 w-28 font-markazi-text lg:h-16 bg-primary text-primary-foreground shadow hover:bg-primary/90 inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
        >
          Online Menu
        </Link>
      </div>

      <div className=" overflow-x-scroll scroll-smooth flex p-4 space-x-1 snap-x ">
        {content}
      </div>
    </div>
  );
};

export default SpecialsSectionForMobile;
