/* eslint-disable react/prop-types */
import { AdvancedImage, lazyload } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";
import { scale } from "@cloudinary/url-gen/actions/resize";
import { Minus, Plus, X } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const CartItemCard = ({ dish }) => {
  return (
    <Card className=" h-28 items-center p-2 my-2 grid grid-cols-[5rem_1fr_5rem] dark:shadow-secondary shadow-md hover:border-primary">
      <div className="relative h-20">
        <AdvancedImage
          className="  object-cover w-full h-full rounded-lg border"
          alt={dish}
          cldImg={new Cloudinary({
            cloud: {
              cloudName: "sham007",
            },
          })
            .image("Hero")
            .resize(scale().width("260"))
            .quality("auto")}
          responsive={true}
          plugins={[lazyload({ threshold: 0.1 })]}
        />
        <Button
          variant="secondary"
          className=" p-0 absolute right-0 -mr-2 -mt-2 top-0 w-6 h-6 rounded-full border"
        >
          <X />
        </Button>
      </div>
      <div className="px-2">
        <h2 className="text-lg">Name</h2>
        <p className="">Description</p>
      </div>
      {/* Button and price */}
      <div className=" w-full h-full flex flex-col items-center justify-center">
        <p className=" text-lg h-8 font-karla tracking-tight whitespace-nowrap">
          $ 04:00
        </p>
        <div className="border w-full py-1 rounded-full flex items-center justify-between m-1">
          <Button variant="ghost" className="h-6 py-0 p-1">
            <Minus />
          </Button>
          <span className="text-center text-xl w-8">{"5"}</span>
          <Button variant="ghost" className="h-6 p-1">
            <Plus />
          </Button>
        </div>
      </div>
    </Card>
  );
};
