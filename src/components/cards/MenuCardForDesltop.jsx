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
import { Link } from "react-router-dom";
import DeleveryVanSVG from "../smallComp/DeleveryVan";
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage, responsive } from "@cloudinary/react";
import { Skeleton } from "@/components/ui/skeleton";

const MenuCardForDesktop = ({ dish }) => {
  return (
    <Card className="w-[16rem] h-[24rem] border hover:shadow-lg mx-1 my-2 dark:hover:shadow-secondary overflow-hidden hover:border-primary">
      {dish.image ? (
        <AdvancedImage
          className=" w-full h-40 object-cover rounded-t-lg"
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
        <Skeleton className="w-full h-40 border-b" />
      )}
      <CardHeader className="px-6 py-4">
        <CardTitle className=" font-markazi-text  flex flex-row justify-between items-center tracking-wider ">
          <p className=" text-[20pt]">{dish.name}</p>
          {
            <span className=" font-karla text-[16pt]  text-red-500 font-bold">
              $ {dish.price}
            </span>
          }
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-sm text-muted-foreground">
          <ScrollArea className="h-[6rem]">{dish.description}</ScrollArea>
        </div>
      </CardContent>
      <CardFooter className="items-center">
        <Button variant="ghost">
          Order a delivery
          <DeleveryVanSVG />
        </Button>
        <Link className=" bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground h-9 w-10  inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring ">
          <ShoppingCart />
        </Link>
      </CardFooter>
    </Card>
  );
};

export default MenuCardForDesktop;
