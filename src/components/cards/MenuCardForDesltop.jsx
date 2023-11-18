/* eslint-disable react/prop-types */
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ShoppingCart } from "lucide-react";
import DeleveryVanSVG from "../smallComp/DeleveryVan";
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage, lazyload } from "@cloudinary/react";
import { Skeleton } from "@/components/ui/skeleton";
import { scale } from "@cloudinary/url-gen/actions/resize";
import { addToCart } from "@/src/features/Cart/CartSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const MenuCardForDesktop = ({ dish }) => {
  const dispatch = useDispatch();
  return (
    <Card className="w-[16rem] h-[24rem] border hover:shadow-lg mx-1 my-2 dark:hover:shadow-secondary overflow-hidden hover:border-primary">
      {dish.image ? (
        <Link to={`/menu/${dish._id}`}>
          <AdvancedImage
            className=" w-full h-40 object-cover rounded-t-lg"
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
        <Skeleton className="w-full h-40 border-b" />
      )}
      <CardHeader className="px-6 py-4">
        <Link to={`/menu/${dish._id}`}>
          <CardTitle className=" font-markazi-text  flex flex-row justify-between items-center tracking-wider ">
            <p className=" text-[20pt]">{dish.name}</p>
            {
              <span className=" font-karla text-[16pt]  text-red-500 font-bold">
                $ {dish.price <= 9 ? 0 : null}
                {dish.price}.00
              </span>
            }
          </CardTitle>
        </Link>
      </CardHeader>
      <CardContent>
        <div className="text-sm text-muted-foreground">
          <ScrollArea className="h-[6rem]">{dish.description}</ScrollArea>
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="ghost">
          Order Now
          <DeleveryVanSVG />
        </Button>
        <Button
          variant="ghost"
          className="relative space-x-2 p-2"
          onClick={() => dispatch(addToCart(dish))}
        >
          Add
          <span className="absolute top-0 right-3 -mt-1 ">+</span>
          <ShoppingCart className="h-5 w-5" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default MenuCardForDesktop;
