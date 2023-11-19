const About = () => {
  return (
    <div className="grids">
      <div className="grids-section-width flex flex-col min-h-[63vh] space-y-3 px-6 mt-6 ">
        <h1 className=" text-primary text-6xl font-markazi-text tracking-wide ">
          About Little Lemon
        </h1>
        {/* <h2 className=" text-4xl font-markazi-text tracking-wider">
            Chicago
          </h2> */}
        <p className="font-karla text-lg ">
          Little Lemon is a cozy and modern restaurant in downtown Chicago. We
          offer a variety of artisanal dishes, from bruschettas and burgers to
          Greek salads, made with fresh and local ingredients. Our food is not
          only delicious but also artistic, reflecting our passion for culinary
          excellence. Whether you want a romantic, family, or casual dining
          experience, Little Lemon can cater to your needs. Come and visit us in
          the heart of Chicago for a memorable meal.
        </p>
      </div>
    </div>
  );
};

export default About;
