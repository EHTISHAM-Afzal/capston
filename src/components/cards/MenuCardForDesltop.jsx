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
import { CarIcon } from "lucide-react";

const MenuCard = ({ dish }) => {
  return (
    <Card className="w-[16rem] h-[24rem] border hover:shadow-lg mx-1 my-2 dark:hover:shadow-secondary overflow-hidden hover:border-primary">
      <img
        className=" w-full h-40 object-cover rounded-t-lg"
        src={dish.img}
        alt={dish.name}
      />
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
        <div className="text-sm text-muted-foreground" >
          <ScrollArea className="h-[6rem]" >{dish.description}</ScrollArea>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full self-center" variant="ghost">
          Order a delivery <CarIcon className="ml-2" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default MenuCard;
