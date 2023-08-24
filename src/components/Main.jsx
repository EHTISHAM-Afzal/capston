

const Main = () => {
  return (
    <section className="w-full h-auto px-6 py-12 bg-zinc-600 flex justify-center items-center gap-6 ">
      <div className="flex flex-col gap-y-4  w-10/12 sm:w-2/6 overflow-hidden">
        <p className=" w-full text-white text-5xl font-medium">Little Lemon</p>
        <p className="text-white text-3xl font-medium">Chicago</p>
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
    </section>
  );
};

export default Main;
