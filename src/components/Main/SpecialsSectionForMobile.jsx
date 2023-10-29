import { Button } from "@/components/ui/button";
import { DishData } from "./DishesData";
import MenuCardForMobile from "../cards/MenuCardForMobile";
// import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

const SpecialsSectionForMobile = () => {
  return (
    <div className="w-full px-3">
      <div className="w-full flex items-center justify-between px-4">
        <h2 className=" text-center text-3xl font-karla font-semibold">
          Specials
        </h2>
        <Button className=" text-xl tracking-wide my-3 h-10 w-28 font-markazi-text ">
          Online Menu
        </Button>
      </div>

      {/* <ScrollArea className=" h-fit w-full overflow-hidden "> */}
        <div className=" overflow-x-scroll scroll-smooth flex p-4 space-x-1 snap-x   ">
          {DishData.map((dish) => (
            <MenuCardForMobile data={dish} key={dish.id} />
          ))}
        </div>
        {/* <ScrollBar orientation="horizontal" />
      </ScrollArea> */}
    </div>
  );
};

export default SpecialsSectionForMobile;
