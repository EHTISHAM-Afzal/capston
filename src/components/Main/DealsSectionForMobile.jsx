import { DishData } from "./DishesData"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import MenuCard from "../cards/MenuCardForDesltop"

const DealsSectionForMobile = () => {
  return (
    <div className="w-full p-3">
            <h2 className="pl-5 text-3xl font-karla font-semibold">Deals</h2>

          <ScrollArea className=" h-fit w-full overflow-hidden flex items-center">
          <div className="flex w-max p-4 space-x-1">
            {DishData.map((dish) => (
              <MenuCard dish={dish} key={dish.id} />
            ))}
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </div>
  )
}

export default DealsSectionForMobile