/* eslint-disable react/prop-types */
import { AdvancedImage, lazyload } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";
import { scale } from "@cloudinary/url-gen/actions/resize";
import { Minus, Plus, X } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useDispatch } from "react-redux";
import {
  addToCart,
  removeFromCart,
  removeOneFromCart,
} from "@/src/features/Cart/CartSlice";
import { Skeleton } from "@/components/ui/skeleton";

export const CartItemCard = ({ dish }) => {
  const dispatch = useDispatch();
  return (
    <Card className=" h-28 items-center p-2 my-2 grid grid-cols-[5rem_1fr_5rem] dark:shadow-secondary shadow-md hover:border-primary">
      <div className="relative h-20">
      {dish.image ? (
        // <Link to={`/menu/${dish._id}`}>
        <AdvancedImage
          className="  object-cover w-full h-full rounded-lg border"
          alt={dish.name}
          cldImg={new Cloudinary({
            cloud: {
              cloudName: "sham007",
            },
          })
            .image(dish.image)
            .resize(scale().width("80"))
            .quality("auto")}
          
          plugins={[lazyload({ threshold: 0.1 })]}
        />
      ) : dish.img ? (
        <img
          className="w-full h-full rounded-lg object-cover"
          src={dish.img}
          loading="lazy"
          alt={dish.name}
        />
      ) : (
        <Skeleton className="w-full h-full rounded-lg" />
      )}
        
        <Button
          variant="secondary"
          onClick={() => dispatch(removeOneFromCart(dish))}
          className=" p-0 absolute right-0 -mr-2 -mt-2 top-0 w-6 h-6 rounded-full border"
        >
          <span className="sr-only">Remove Item From Cart</span>
          <X />
        </Button>
      </div>
      <div className="h-full pl-3">
        <h2 className="text-lg w-full h-8">{dish.name}</h2>
        <p className="w-full h-12 overflow-hidden">
          {dish.description.substring(0, 70)}
        </p>
      </div>
      {/* Button and price */}
      <div className=" w-full h-full flex flex-col items-center justify-center">
        <p className=" text-lg h-8 font-karla tracking-tight whitespace-nowrap">
          $ {dish.price * dish.quantity <= 9 ? 0 : null}
          {dish.price * dish.quantity}.00 US
        </p>
        <div className="border w-full py-1 rounded-full flex items-center justify-between m-1">
          <Button
            variant="ghost"
            onClick={() => dispatch(removeFromCart(dish))}
            className="h-6 py-0 p-1"
          >
            <Minus />
          </Button>
          <span className="text-center text-xl w-8">{dish.quantity}</span>
          <Button
            variant="ghost"
            onClick={() => dispatch(addToCart(dish))}
            className="h-6 p-1"
          >
            <Plus />
          </Button>
        </div>
      </div>
    </Card>
  );
};
