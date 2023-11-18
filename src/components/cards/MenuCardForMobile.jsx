/* eslint-disable react/prop-types */
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { addToCart } from "@/src/features/Cart/CartSlice";
import { AdvancedImage, lazyload } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";
import { scale } from "@cloudinary/url-gen/actions/resize";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
const MenuCardForMobile = ({ dish }) => {
  const dispatch = useDispatch();
  return (
    <div className="w-full max-w-full h-56 snap-start ">
      {/* // main component */}
      <div className="relative rounded-xl border bg-card text-card-foreground shadow w-full h-full  overflow-hidden items-center ">
        {dish.image ? (
          <Link to={`/menu/${dish._id}`}>
            <AdvancedImage
              className="w-full h-full object-cover"
              alt={dish.image}
              cldImg={new Cloudinary({
                cloud: {
                  cloudName: "sham007",
                },
              })
                .image(dish.image)
                .resize(scale().width("260"))
                .quality("auto")}
              plugins={[lazyload({ threshold: 0.1 })]}
            />
          </Link>
        ) : (
          <Skeleton className="min-w-full h-full" />
        )}
        {/* Footer */}
        <div className=" absolute pl-4 w-[95%] mx-2 bottom-2 rounded-xl h-12 flex flex-row justify-between items-center px-3 py-2 border text-black  dark:border-neutral-800 dark:bg-black/70 dark:text-white  supports-[backdrop-filter]:bg-background/75">
          <Link to={`/menu/${dish._id}`} className=" space-y-1">
            <p className="font-semibold leading-none tracking-tight">
              {dish.name}
            </p>
            <p className="text-sm whitespace-nowrap">
              {dish.description.substring(0, 25)}...
            </p>
          </Link>
          <Button
            onClick={() => dispatch(addToCart(dish))}
            variant="outline"
            className="rounded-xl text-2xl font-karla backdrop:blur-lg border-black dark:border-white"
          >
            $ {dish.price <= 9 ? 0 : null}
            {dish.price}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MenuCardForMobile;
