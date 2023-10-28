import { Button } from "@/components/ui/button";

const MainSectionForMobile = () => {
  return (
    <div className="w-full px-3 bg-[#495E57] ">
        <h1 className=" text-primary w-full text-6xl font-markazi-text tracking-wide h-12">
          Little Lemon
        </h1>
        <div className=" flex flex-col">
          <h2 className=" text-white text-[40px] font-markazi-text tracking-wider">
            Chicago
          </h2>

          <p className=" text-secondary-foreground max-h-[9rem] max-w-full overflow-hidden font-medium text-base sm:text-lg mr-3">
            Chicago best restaurant offers delicious food with flair. Our menu
            has dishes from America and abroad, made with fresh ingredients.
          </p>

          <Button className=" text-xl tracking-wide my-3 h-10 w-28 font-markazi-text   lg:h-16 ">
            Reserve Table
          </Button>
      </div>
    </div>
  );
};

export default MainSectionForMobile;
