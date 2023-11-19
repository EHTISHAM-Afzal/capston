import MenuCardForMobile from "../cards/MenuCardForMobile";
import { Link } from "react-router-dom";
import { useGetDishesBycategoryIdQuery } from "@/src/features/Dishes/dishesSlice";
import MenuCardSkeletonForMobile from "../cards/MenuCardSkeletonForMobile";
useGetDishesBycategoryIdQuery;

const SpecialsSectionForMobile = () => {
  const {
    data: Dishes,
    isLoading,
    isSuccess,
    isError,
    error,
    /// category id for specials is 6559fb8dc6fae5d2e4d7deaf
  } = useGetDishesBycategoryIdQuery("6559fb8dc6fae5d2e4d7deaf");

  let content;

  if (isSuccess) {
    const { ids, entities } = Dishes;
    content = ids.map((id) => (
      <MenuCardForMobile key={id} dish={entities[id]} />
    ));
  } else if (isLoading) {
    content = new Array(3)
      .fill(0)
      .map((_, index) => <MenuCardSkeletonForMobile key={index} />);
  } else if (isError) {
    content = <p>{error.message}</p>;
  }

  return (
    <div className="w-full">
      <div className="w-full flex items-center justify-between px-6">
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

      <div className="my-custom-scrollbar overflow-x-scroll overflow-hidden grid grid-flow-col auto-cols-[minmax(90vw,_100vw)] sm:auto-cols-[minmax(20rem,_21rem)]  scroll-smooth p-4 space-x-1 snap-x h-64  ">
        {content}
      </div>
    </div>
  );
};

export default SpecialsSectionForMobile;
