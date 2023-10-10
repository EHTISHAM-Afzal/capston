import MenuCard from "./cards/Menu";
import ReviewCard from "./cards/ReviewCard";

const DishData = [
  {
    id : 1,
    img: "https://images.unsplash.com/photo-1623428187969-5da2dcea5ebf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80",
    name: "Salad",
    price: 12,
    description:
      "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style  feta cheese,  garnished with crunchy garlic and rosemary croutons.",
  },
  {
    id : 2,
    img:"https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1910&q=80",
    name: "Eggs",
    price: 9,
    description:
      "The famous pasta of crispy lettuce, peppers, olives and our Chicago style  feta cheese,  garnished with crunchy garlic and rosemary croutons.",
  },
  {
    id : 3,
    name: "Pasta",
    img: "https://images.unsplash.com/photo-1542528180-a1208c5169a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1777&q=80",
    price: 14,
    description:
      "The famous Mac'n chees crispy lettuce, peppers, olives and our Chicago style  feta cheese,  garnished with crunchy garlic and rosemary croutons.",
  }
]
const Main = () => {
  return (
    <main className=" col-span-full grids">
      <section className=" col-span-full grids h-[360px]  bg-[#607b72]">
        <div className=" grids-section-width row-satart-2 row-end-4  pt-4 px-4 items-start flex flex-row justify-start">
          <div className=" col-span-full w-full lg:w-1/2 ">
            <h1 className=" text-primary text-6xl font-markazi-text tracking-wide h-12">Little Lemon</h1>
            <h2 className="text-white text-[40px]  font-markazi-text tracking-wider">Chicago</h2>
            <div className=" h-32 flex flex-row items-center w-full py-1 lg:max-w-xs">
              <p className="w-[70%] lg:w-full  h-full text-black flex items-start  overflow-hidden font-medium text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div className="w-[50%] lg:hidden flex justify-center items-center">
                <img
                  className=" w-32 rounded-lg "
                  src="../../profile.jpg"
                  alt="photo"
                />
              </div>
            </div>

            <div>
              <button className=" bg-[#F4CE14] text-lg lg:text-xl font-medium rounded-xl p-1 h-12 w-36 lg:h-16 lg:w-48 font-roboto">
                Order Now
              </button>
            </div>
          </div>
          <div className=" hidden  w-1/2 lg:flex justify-end items-end">
            <img
              className=" w-96 h-[28rem] object-cover rounded-3xl"
              src="../../profile.jpg"
              alt="photo"
            />
          </div>
        </div>
      </section>

      <section className="col-span-full grids ">
        <div className=" grids-section-width py-4 lg:mt-28">
          <div className="w-full flex items-center justify-between px-4 xl:px-8">
            <h2 className=" text-center text-4xl font-karla font-semibold">Specials</h2>
            <button className=" bg-[#F4CE14] text-lg lg:text-xl font-medium rounded-xl p-1 h-12 w-36 lg:h-16 lg:w-48 font-roboto">
                Online Menu
              </button>
          </div>

          <div className="flex justify-around items-center flex-wrap  py-8">
            {/* Menu cards */}
            {DishData.map((dish) => (
              <MenuCard dish={dish} key={dish.id} />
            ))}
            
          </div>
        </div>
      </section>

      <section className="col-span-full grids bg-gray-200 min-h-[400px]">
        <div className="grids-section-width flex flex-col items-center justify-center py-4 space-y-4">
          <p className=" text-3xl font-bold font-markazi-text text-[36] tracking-wider">Testimonials</p>
          {/* Review Cards */}
          <div className="flex flex-wrap justify-center items-center ">
            <ReviewCard />
            <ReviewCard />
            <ReviewCard />
            <ReviewCard />
          </div>
        </div>
      </section>

      <section className="col-span-full grids py-8 ">
        <div className="grids-section-width flex  items-center justify-between px-4">
          <div className="w-1/2  h-72 flex flex-col items-start justify-center space-y-2">
            <h1 className=" text-black text-6xl font-markazi-text ">Little Lemon</h1>
            <h2 className="text-[#333333] text-4xl font-markazi-text">Chicago</h2>
            <div className=" h-32 flex flex-row items-center w-full py-1 lg:max-w-xs">
              <p className="w-full  h-full text-black flex items-start  overflow-hidden font-bold text-[20] font-karla">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
          <div className=" w-52 lg:w-2/5 h-52  lg:h-96  relative">
            <img
              className=" absolute top-0 right-0 x h-full md:h-2/3 object-cover z-10  lg:w-2/3"
              src="../../profile.jpg"
              alt="photo"
            />

            <img
              className=" absolute bottom-0 left-0 hidden md:block  md:h-2/3 object-cover lg:w-2/3"
              src="../../profile.jpg"
              alt="photo"
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Main;
