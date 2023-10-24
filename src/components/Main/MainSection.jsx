import { Button } from "@/components/ui/button";

const MainSection = () => {
  return (
    <div className="grids-section-width pt-4 px-6 items-start lg:flex flex-row justify-start ">
      <div className=" col-span-full row-span-full w-full grid grid-flow-dense grid-cols-6 grid-rows-6">
        <h1 className=" text-primary col-span-full lg:col-span-4 col-start-1 lg:col-end-4 row-start-1 row-end-2 text-6xl font-markazi-text tracking-wide h-12">
          Little Lemon
        </h1>
        <div className="col-start-1 row-start-2 col-span-4 lg:col-end-4 max-h-full min-h-fit  row-span-5 flex flex-col">
          <h2 className=" text-secondary dark:text text-[40px] font-markazi-text tracking-wider">
            Chicago
          </h2>

          <p className=" text-secondary-foreground max-h-40 max-w-full overflow-hidden font-medium text-base sm:text-lg mr-3">
            Chicago best restaurant offers delicious food with flair. Our menu
            has dishes from America and abroad, made with fresh ingredients.
          </p>

          <Button className=" text-lg lg:text-2xl lg:font-bold tracking-wider my-3 h-10 w-28  md:h-12 md:w-36 lg:h-16 lg:w-48 font-roboto">
            Order Now
          </Button>
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

export default MainSection;
