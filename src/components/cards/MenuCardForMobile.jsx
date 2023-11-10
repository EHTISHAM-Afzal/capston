/* eslint-disable react/prop-types */
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { AdvancedImage, responsive } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";

const MenuCardForMobile = ({ dish }) => {
  return (
    <div className=" min-w-fit w-fit h-fit min-h-fit snap-start">
      {/* // main component */}
      <div className="relative rounded-xl border bg-card text-card-foreground shadow w-80 h-56  overflow-hidden items-center ">
        {dish.image ? (
          <AdvancedImage
            className="min-w-full w-full h-full object-cover"
            alt={dish.image}
            cldImg={new Cloudinary({
              cloud: {
                cloudName: "sham007",
              },
            })
              .image(dish.image)
              .quality("auto")}
            responsive={true}
            plugins={[responsive({ steps: 10 })]}
          />
        ) : (
          <Skeleton className="min-w-full h-full" />
        )}
        {/* Footer */}
        <div className=" absolute pl-4 w-[95%] mx-2 bottom-2 rounded-2xl h-12 flex flex-row justify-between items-center px-3 py-2 bg-background/95  supports-[backdrop-filter]:bg-background/75">
          <span className=" space-y-1">
            <p className="font-semibold leading-none tracking-tight">
              {dish.name}
            </p>
            <p className="text-sm ">{dish.description.substring(0, 30)}</p>
          </span>
          <Button
            variant="outline"
            className="rounded-2xl font-karla text-lg bg-transparent backdrop-blur"
          >
            $ {dish.price}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MenuCardForMobile;
