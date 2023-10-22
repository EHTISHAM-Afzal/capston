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

const MenuCard = ({ dish }) => {
  return (
    <Card className="w-[16rem] h-[25rem] border hover:shadow-md mx-1 my-2 dark:hover:shadow-slate-50 overflow-hidden">
      <img
        className=" w-full h-40 object-cover rounded-t-lg"
        src={dish.img}
        alt="photo"
      />
      <CardHeader>
        <CardTitle className=" font-markazi-text  flex flex-row justify-between items-center tracking-wider ">
          <p className=" text-[16pt]">{dish.name}</p>
          {<p className=" font-karla text-red-500 font-bold">$ {dish.price}</p>}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>{dish.description}</CardDescription>
      </CardContent>
      <CardFooter>
        <Button className="w-full" variant="ghost">
          Order a delivery 🚲
        </Button>
      </CardFooter>
    </Card>
  );
};

export default MenuCard;
