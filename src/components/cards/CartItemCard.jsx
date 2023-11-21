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
import { useNavigate } from "react-router-dom";
import { SheetClose } from "@/components/ui/sheet";

export const CartItemCard = ({ dish }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <Card className=" h-28 items-center gap-2 px-1 py-2 grid grid-cols-[5rem_1fr_5rem] dark:shadow-secondary shadow-none border-none hover:border-primary">
      <span className=" relative h-20">
        {dish.image ? (
          <SheetClose
            className="w-full h-full"
            onClick={() => {
              navigate(`menu/${dish._id}`);
            }}
          >
            <AdvancedImage
              className="  object-cover w-full h-full rounded-lg border hover:opacity-90"
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
          </SheetClose>
        ) : dish.img ? (
          <SheetClose
            className="w-full h-full"
            onClick={() => {
              navigate(`menu/${dish._id}`);
            }}
          >
            <img
              className="w-full h-full rounded-lg object-cover hover:opacity-90"
              src={dish.img}
              loading="lazy"
              alt={dish.name}
            />
          </SheetClose>
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
      </span>
      <SheetClose
        type="link"
        className=" h-full pl-2 text-left grid grid-rows-[1rem,_1fr] gap-2 overflow-hidden"
        onClick={() => navigate(`menu/${dish._id}`)}
      >
        <h2 className=" w-full h-full text-base">{dish.name}</h2>
        <p className="w-full h-full overflow-hidden text-sm">
          {dish.description.substring(0, 45)}
        </p>
      </SheetClose>
      {/* Button and price */}
      <div className=" w-full h-full flex flex-col items-center justify-center">
        <h2 className=" text-base h-8 font-karla tracking-tight whitespace-nowrap">
          $ {dish.price * dish.quantity <= 9 ? 0 : null}
          {dish.price * dish.quantity}.00 USD
        </h2>
        <div className="border w-full py-1 rounded-full flex items-center justify-between m-1">
          <Button
            variant="ghost"
            onClick={() => dispatch(removeFromCart(dish))}
            className="h-4  p-1"
          >
            <Minus />
          </Button>
          <span className="text-center text-lg w-fit">{dish.quantity}</span>
          <Button
            variant="ghost"
            onClick={() => dispatch(addToCart(dish))}
            className="h-4 p-1"
          >
            <Plus />
          </Button>
        </div>
      </div>
    </Card>
  );
};
