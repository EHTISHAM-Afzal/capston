import MenuCardForDesktop from "../components/cards/MenuCardForDesltop";
import MenuCardSkeletonForDektop from "../components/cards/MenuCardSkeletonForDektop";
import { useGetDishesQuery } from "../features/Dishes/dishesSlice";

const AllProductsSection = () => {
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

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
    const shuffledIds = shuffleArray([...ids]);
    content = shuffledIds.map((id) => (
      <MenuCardForDesktop key={id} dish={entities[id]} />
    ));
  } else if (isLoading) {
    content = new Array(10)
      .fill(0)
      .map((_, index) => <MenuCardSkeletonForDektop key={index} />);
  } else if (isError) {
    content = <p>{error.message}</p>;
  }

  return (
    <div className="grids-section-width flex flex-col justify-center items-center min-h-[63vh]">
        <h2 className="w-full pl-8 text-4xl font-markazi-text">All Producsts</h2>
      <div className="flex justify-around items-center flex-wrap  py-8">
        {content}
      </div>
    </div>
  );
};

export default AllProductsSection;
