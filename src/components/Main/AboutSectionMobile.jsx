import { AdvancedImage, responsive } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";

const AboutSectionForMobile = () => {
  return (
    <div className="flex flex-col items-center justify-between p-3 h-fit ">
      <h1 className=" text-primary text-6xl font-markazi-text ">
        Little Lemon
      </h1>
      <h2 className=" text-4xl font-markazi-text ">Chicago</h2>
      <AdvancedImage
        className=" h-full w-full object-cover rounded-md "
        alt="Mario And Andrian"
        cldImg={new Cloudinary({
          cloud: {
            cloudName: "sham007",
          },
        })
          .image("FromMobile/Mario-and-Adrian-A_2_m97yaa")
          .quality("auto")}
        
        plugins={[responsive({ steps: 100 })]}
      />
    </div>
  );
};

export default AboutSectionForMobile;
