import { Skeleton } from "@/components/ui/skeleton";
import MenuCardForDesktop from "../cards/MenuCardForDesltop";
import { Link } from "react-router-dom";
import { useGetDishesQuery } from "@/src/features/Dishes/dishesSlice";
const SpecialsSectionForDesktop = () => {
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
    content = ids.map((id) => <MenuCardForDesktop key={id} dish={entities[id]} />);
  } else if (isLoading) {
    content = new Array(3)
      .fill(0)
      .map((_, index) => (
        <Skeleton key={index} className="w-[16rem] h-[24rem] mx-1 my-2" />
      ));
  } else if (isError) {
    content = <p>{error.message}</p>;
  }

  return (
    <div className=" grids-section-width py-4 lg:mt-28">
      <div className="w-full flex items-center justify-between px-4 xl:px-8">
        <h2 className=" text-center text-4xl font-karla font-semibold">
          Specials
        </h2>
        <Link
          to="menu"
          className=" text-xl lg:text-3xl tracking-wide my-3 h-10 w-28 font-markazi-text  md:h-12 md:w-36 lg:h-16 lg:w-48 bg-primary text-primary-foreground shadow hover:bg-primary/90 inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
        >
          Online Menu
        </Link>
      </div>

      <div className="flex justify-around items-center flex-wrap  py-8">
        {/* Menu cards */}
        {content}
      </div>
    </div>
  );
};

export default SpecialsSectionForDesktop;
