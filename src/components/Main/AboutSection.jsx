
const AboutSection = () => {
  return (
    <div className="grids-section-width flex  items-center justify-between px-4">
    <div className="w-1/2  h-72 flex flex-col items-start justify-center space-y-2">
      <h1 className=" text-black text-6xl font-markazi-text ">
        Little Lemon
      </h1>
      <h2 className="text-[#333333] text-4xl font-markazi-text">
        Chicago
      </h2>
      <div className=" h-32 flex flex-row items-center w-full py-1 lg:max-w-xs">
        <p className="w-full  h-full text-black flex items-start  overflow-hidden font-bold text-[20] font-karla">
        Chicago best restaurant offers delicious food with flair. Our menu
            has dishes from America and abroad, made with fresh ingredients.
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
  )
}

export default AboutSection