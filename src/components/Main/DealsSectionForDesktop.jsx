import MenuCardForDesktop from "../cards/MenuCardForDesltop";
import { useGetDishesBycategoryIdQuery } from "@/src/features/Dishes/dishesSlice";
import MenuCardSkeletonForDektop from "../cards/MenuCardSkeletonForDektop";
const DealsSectionForDesktop = () => {
  const {
    data: Dishes,
    isLoading,
    isSuccess,
    isError,
    error,
    /// category id for deals is 6559fbaac6fae5d2e4d7deb1
  } = useGetDishesBycategoryIdQuery("6559fbaac6fae5d2e4d7deb1");

  let content;

  if (isSuccess) {
    const { ids, entities } = Dishes;
    content = ids.map((id) => (
      <MenuCardForDesktop key={id} dish={entities[id]} />
    ));
  } else if (isLoading) {
    content = new Array(3)
      .fill(0)
      .map((_, index) => <MenuCardSkeletonForDektop key={index} />);
  } else if (isError) {
    content = <p>{error.message}</p>;
  }

  return (
    <div className=" grids-section-width py-4">
      <h2 className="pl-6 text-4xl font-karla font-semibold">
        Deals
      </h2>

      <div className="flex justify-around items-center flex-wrap  py-8">
        {/* Menu cards */}
        {content}
      </div>
    </div>
  );
};

export default DealsSectionForDesktop;
