/* eslint-disable react/prop-types */
import { badgeVariants } from "@/components/ui/badge";
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
    <div className="w-full max-w-full h-56 snap-start relative ">
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
        ) : dish.img ? (
          <Link to={`/menu/${dish._id}`}>
            <img
              className="w-full h-40 object-cover"
              src={dish.img}
              loading="lazy"
              alt={dish.name}
            />
          </Link>
        ) : (
          <Skeleton className="min-w-full h-full" />
        )}
        {/* Badg */}
        {dish.category && (
          <Link
            to={`/menu/${dish._id}`}
            className={`${badgeVariants({
              variant: "secondary",
            })} absolute top-2 right-2`}
          >
            {dish.category.name}
          </Link>
        )}

        {/* Footer */}
        <div className=" absolute w-fit bottom-2 right-5 rounded-full h-12 inline-flex justify-between items-center px-2 py-2 border text-black  dark:bg-black/70 dark:text-white  supports-[backdrop-filter]:bg-background/75">
          <p className="font-semibold px-2 text-lg tracking-tight">
            {dish.name}
          </p>
          <Button
            variant="outline"
            onClick={() => dispatch(addToCart(dish))}
            className="w-fit h-fit p-1 pl-1 rounded-full inline-flex justify-between items-center gap-2 border text-black dark:text-white"
          >
            <span className="flex justify-between w-14 items-center text-base">
              Add <ShoppingCart />
            </span>
            <span className="rounded-full px-1 text-2xl font-karla bg-primary w-fit  text-black ">
              $ {dish.price <= 9 ? 0 : null}
              {dish.price}.00
            </span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MenuCardForAboutPRoduct;
