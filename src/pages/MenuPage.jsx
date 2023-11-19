import MenuCardForDesktop from "../components/cards/MenuCardForDesltop";
import MenuCardSkeletonForDektop from "../components/cards/MenuCardSkeletonForDektop";
import { useGetDishesQuery } from "../features/Dishes/dishesSlice";

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

const MenuPage = () => {
  const {
    data: Dishes,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetDishesQuery();

  let content;

  if (isSuccess) {
    // const DishData = shuffleArray(Dishes);
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
    <section className="grids">
      <div className="grids-section-width flex flex-col justify-center items-center min-h-[63vh]">
        <div className="flex justify-around items-center flex-wrap  py-8">
          {content}
        </div>
      </div>
    </section>
  );
};

export default MenuPage;
