import { AdvancedImage } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";
import { scale } from "@cloudinary/url-gen/actions/resize";
const Reservations = () => {
  const cld = new Cloudinary({
    cloud: {
      cloudName: 'sham007'
    }
  });


  // Cloudinary.v2.uploader
  // .upload('https://res.cloudinary.com/sham007/image/upload/c_scale,w_250/cld-sample-2?_a=BAJFJtWI0', {
  //   resource_type: 'image'})
  // .then(console.log);

  return (
    <section className="flex-col justify-center items-center my-6 w-full ">
      <h1 className="text-4xl font-bold text-center mb-8">Reservations</h1>
      <AdvancedImage
        alt="Hero"
        cldImg={cld.image('Hero').resize(scale().width("1000")).quality("auto")}
        responsive={true}
      />
    </section>
  );
};

export default Reservations;
