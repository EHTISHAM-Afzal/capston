import DishCard from "./cards/DishCard"

const DishData ={
  name : 'Salad',
  price : 12,
  description : "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style  feta cheese,  garnished with crunchy garlic and rosemary croutons."
}
const Main = () => {
  return (
    <main className=" col-span-full grids">
      <section className=" col-span-full grids h-80  bg-gradient-to-r from-stone-700 to-stone-500">
        <div className=" grids-section-width row-satart-2 row-end-3  py-12 px-4 items-start flex flex-row justify-start">
          <div className=" col-span-full w-full lg:w-1/2 ">
            <h1 className=" text-white text-5xl ">Little Lemon</h1>
            <h2 className="text-white text-3xl font-bold">Chicago</h2>
            <div className=" h-32 flex flex-row items-center w-full py-1 lg:max-w-xs">
              <p className="w-[70%] lg:w-full  h-full text-white flex items-start  overflow-hidden font-medium">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div className="w-[50%] lg:hidden flex justify-center items-center">
                <img
                  className=" w-32 rounded-lg"
                  src="../../profile.jpg"
                  alt="photo"
                />
              </div>
            </div>

            <div>
              <button className=" bg-black text-white text-2xl font-medium rounded-md p-1">
                Order Now
              </button>
            </div>
          </div>
          <div className=" hidden  w-1/2 lg:flex justify-end items-end">
            <img
              className=" w-80 h-96 object-cover rounded-3xl"
              src="../../profile.jpg"
              alt="photo"
            />
          </div>
        </div>
      </section>


      <section className="col-span-full grids ">
        <div className=" grids-section-width py-4 lg:mt-28">
          <div className="w-full flex items-center justify-between px-4 xl:px-8">
            <h2 className=" text-center text-xl font-semibold">Specials</h2>
            <button className="bg-yellow-400 h-10 rounded-md px-2 font-semibold">Online Menu</button>
          </div>

            {/* Card Box */}

          <div className="flex justify-around items-center flex-wrap space-y-8 py-8">

            {/* cards */}

            <DishCard dish={DishData}/>
            <DishCard dish={DishData}/>
            <DishCard dish={DishData}/>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Main;
