const AboutSection = () => {
  return (
    <div className="grids-section-width flex flex-col lg:flex-row  items-center justify-between px-4">
      <h1 className=" lg:hidden text-primary text-6xl font-markazi-text ">
        Little Lemon
      </h1>
      <>
        <div className="w-1/2  lg:h-72 flex flex-col items-center lg:items-start justify-center space-y-2">
          <h1 className=" hidden lg:block text-primary text-6xl font-markazi-text ">
            Little Lemon
          </h1>
          <h2 className="dark:text-secondary text-4xl font-markazi-text ">
            Chicago
          </h2>
          <div className=" h-32 hidden lg:flex flex-row items-center w-full py-1 lg:max-w-xs">
            <p className="w-full  h-full:flex items-start  overflow-hidden font-bold text-[20] font-karla">
              Chicago best restaurant offers delicious food with flair. Our menu
              has dishes from America and abroad, made with fresh ingredients.
            </p>
          </div>
        </div>
        <div className=" w-full lg:w-2/5 h-52  lg:h-96 flex justify-center  relative ">
          <img
            className=" absolute  lg:top-0 lg:right-0 h-full md:h-2/3 object-cover rounded-md  lg:w-2/3"
            src="../../Mario-and-Adrian-A 2.jpg"
            alt="Mario-and-Adrian"
          />

          <img
            className=" absolute bottom-0 left-0 hidden lg:block  md:h-2/3 object-cover lg:w-2/3 rounded-md"
            src="../../restaurant chef B 2.jpg"
            alt="chef"
          />
        </div>
      </>
    </div>
  );
};

export default AboutSection;
