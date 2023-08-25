

const Main = () => {
  return (
    <div className="bg-zinc-600 col-span-full grids ">
    <main className=" grids-section-width row-satart-2 row-end-3   px-6 py-12  flex justify-center items-center gap-6 ">
      <div className="flex flex-col gap-y-4  w-10/12 sm:w-2/6 overflow-hidden">
        <h1 className=" w-full text-white text-5xl font-medium">Little Lemon</h1>
        <h2 className="text-white text-3xl font-medium">Chicago</h2>
        <p className="w- h-32 text-white  overflow-hidden flex-wrap font-medium">
          lonvnkjbvjhbvajvbjbdhjhbvfhbhjvf
          jhbhjbacjhbjaccajkbvjkbajkb
          jkhbkjbajkbjkbjbjkbjkbkjbvjkbjkdbnvkjnkjbvkjbjh
          jkvbjbkdbvkjbv
        </p>
        <div>
          <button className=" bg-black text-white text-2xl font-medium rounded-md p-2">
            Order Now
          </button>
        </div>
      </div>
      <div className="sm:w-2/6 w-10/12 flex">
        <img className="border-2 border-black" src="../../profile.jpg" alt="photo" />
      </div>
    </main></div>
  );
};

export default Main;
