import { Button } from "@/components/ui/button"
import MenuCard from "../cards/MenuCardForDesltop"
import { DishData } from "./DishesData"

const SpecialsSection = () => {
  return (
    <div className=" grids-section-width py-4 lg:mt-28">
          <div className="w-full flex items-center justify-between px-4 xl:px-8">
            <h2 className=" text-center text-4xl font-karla font-semibold">Specials</h2>
            <Button className=" text-xl lg:text-3xl tracking-wide my-3 h-10 w-28 font-markazi-text  md:h-12 md:w-36 lg:h-16 lg:w-48">
            Online Menu
          </Button>
          </div>

          <div className="flex justify-around items-center flex-wrap  py-8">
            {/* Menu cards */}
            {DishData.map((dish) => (
              <MenuCard dish={dish} key={dish.id} />
            ))}
            
          </div>
        </div>
  )
}

export default SpecialsSection