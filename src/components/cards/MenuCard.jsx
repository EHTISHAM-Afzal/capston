/* eslint-disable react/prop-types */
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CarIcon } from "lucide-react";


const MenuCard = ({ dish }) => {
  return (
    <Card className="w-[16rem] h-[24rem] border hover:shadow-lg mx-1 my-2 dark:hover:shadow-secondary overflow-hidden">
      <img
        className=" w-full h-40 object-cover rounded-t-lg"
        src={dish.img}
        alt={dish.name}
      />
      <CardHeader className="px-6 py-4">
        <CardTitle className=" font-markazi-text  flex flex-row justify-between items-center tracking-wider ">
          <p className=" text-[20pt]">{dish.name}</p>
          {<p className=" font-karla text-[16pt]  text-red-500 font-bold">$ {dish.price}</p>}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>{dish.description}</CardDescription>
      </CardContent>
      <CardFooter>
        <Button className="w-full self-center" variant="ghost">
          Order a delivery  <CarIcon className="ml-2"/>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default MenuCard;
