import { Link } from "react-router-dom";

const MainSectionForDesktop = () => {
  return (
    <div className="grids-section-width pt-4 px-6 items-start lg:flex flex-row justify-start ">
      <div className=" col-span-full row-span-full w-full grid grid-flow-dense grid-cols-6 grid-rows-6">
        <h1 className=" text-primary col-span-full lg:col-span-4 col-start-1 lg:col-end-4 row-start-1 row-end-2 text-6xl font-markazi-text tracking-wide h-12">
          Little Lemon
        </h1>
        <div className="col-start-1 row-start-2 col-span-4 lg:col-end-4 max-h-full min-h-fit  row-span-5 flex flex-col">
          <h2 className=" text-white text-[40px] font-markazi-text tracking-wider">
            Chicago
          </h2>

          <p className=" text-secondary-foreground max-h-[9rem] max-w-full overflow-hidden font-medium text-base sm:text-lg mr-3">
            Chicago best restaurant offers delicious food with flair. Our menu
            has dishes from America and abroad, made with fresh ingredients.
          </p>

          <Link
            to="booking-page"
            className=" text-xl lg:text-3xl tracking-wide my-3 h-10 w-28 font-markazi-text  md:h-12 md:w-36 lg:h-16 lg:w-48 bg-primary text-primary-foreground shadow hover:bg-primary/90 inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
          >
            Reserve Table
          </Link>
        </div>
        <div className="w-full  col-start-5 lg:col-start-4 col-end-7 col-span-1 lg:col-span-3 row-start-2 lg:row-start-1 lg:row-span-full row-span-5 flex justify-end items-center">
          <img
            className="w-full xl:w-96 rounded-lg max-h-[27rem] lg:rounded-2xl "
            src="../../Hero.jpg"
            alt="hero"
          />
        </div>
      </div>
    </div>
  );
};

export default MainSectionForDesktop;
