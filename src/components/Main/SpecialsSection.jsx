import MenuCard from "../cards/Menu"
import { DishData } from "./DishesData"

const SpecialsSection = () => {
  return (
    <div className=" grids-section-width py-4 lg:mt-28">
          <div className="w-full flex items-center justify-between px-4 xl:px-8">
            <h2 className=" text-center text-4xl font-karla font-semibold">Specials</h2>
            <button className=" bg-primary text-lg lg:text-2xl font-medium border rounded-lg p-1 h-10 w-28  md:h-12 md:w-36 lg:h-16 lg:w-48 font-roboto">
            Order Now
          </button>
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