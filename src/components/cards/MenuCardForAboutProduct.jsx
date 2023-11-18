/* eslint-disable react/prop-types */
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { addToCart } from "@/src/features/Cart/CartSlice";
import { AdvancedImage, lazyload } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";
import { scale } from "@cloudinary/url-gen/actions/resize";
import { ShoppingCart } from "lucide-react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const MenuCardForAboutPRoduct = ({ dish }) => {
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
        <div className=" absolute w-34 bottom-2 right-5 rounded-full h-12 inline-flex justify-between items-center px-2 py-2 border text-black  dark:bg-black/70 dark:text-white  supports-[backdrop-filter]:bg-background/75">
          <p className="font-semibold px-2 text-lg tracking-tight">
            {dish.name}
          </p>
          <Button
            variant="outline"
            onClick={() => dispatch(addToCart(dish))}
            className="w-32 p-1 pl-1 rounded-full inline-flex justify-between items-center gap-2 border text-black dark:text-white"
          >
            <span className="flex justify-between w-14 items-center text-base">
              Add <ShoppingCart />
            </span>
            <span className="rounded-full text-2xl font-karla bg-primary w-12 text-black ">
              $ {dish.price}
            </span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MenuCardForAboutPRoduct;
