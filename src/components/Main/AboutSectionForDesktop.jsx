import { AdvancedImage, responsive } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";

const AboutSection = () => {
  const cld = new Cloudinary({
    cloud: {
      cloudName: "sham007",
    },
  });
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
          <h2 className=" text-4xl font-markazi-text ">Chicago</h2>
          <div className=" h-32 hidden lg:flex flex-row items-center w-full py-1 lg:max-w-xs">
            <p className="w-full  h-full:flex items-start  overflow-hidden font-bold text-[20] font-karla">
              Chicago best restaurant offers delicious food with flair. Our menu
              has dishes from America and abroad, made with fresh ingredients.
            </p>
          </div>
        </div>
        <div className=" w-full lg:w-2/5 h-52  lg:h-96 flex justify-center  relative ">
          <AdvancedImage
            className=" absolute  lg:top-0 lg:right-0 h-full md:h-2/3 object-cover rounded-md  lg:w-2/3"
            alt="Mario And Andrian"
            cldImg={cld
              .image("FromMobile/Mario-and-Adrian-A_2_m97yaa")
              .quality("auto")}
            responsive={true}
            plugins={[responsive({ steps: 100 })]}
          />
{/* if screenWidth is larger than 1024px then render this image component */}
          { window.screen.width > 1024 &&
           <AdvancedImage
            className=" absolute bottom-0 left-0 hidden lg:block  md:h-2/3 object-cover lg:w-2/3 rounded-md"
            alt="chep"
            cldImg={cld
              .image("FromMobile/restaurant_chef_B_2_opt2fk")
              .quality("auto")}
            responsive={true}
            plugins={[responsive({ steps: 200 })]}
          />}
        </div>
      </>
    </div>
  );
};

export default AboutSection;
