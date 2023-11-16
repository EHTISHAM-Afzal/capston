import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  removeFromCart,
  removeAllFromCart,
} from "../features/Cart/CartSlice";
import { Button } from "@/components/ui/button";
import { useGetDishByIdQuery } from "../features/Dishes/dishesSlice";
import { Separator } from "@/components/ui/separator";
import { CartItemCard } from "../components/cards/CartItemCard";



const Reservations = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const item = useGetDishByIdQuery("6544f5c164aca44518cb9966");
  const returnData = async () =>
    await item.data.entities["6544f5c164aca44518cb9966"];
  const dish = returnData();
  return (
    <section className="flex-col justify-center items-center my-6 w-full ">
      <h1 className="text-4xl font-bold text-center mb-8">Reservations</h1>
      <Button
        onClick={() => dispatch(addToCart({ id: "6544f5c164aca44518cb9966" }))}
      >
        AddToCart
      </Button>
      <Button
        onClick={() =>
          dispatch(removeFromCart({ id: "6544f5c164aca44518cb9966" }))
        }
      >
        RemoveFromCart
      </Button>
      <Button onClick={() => dispatch(removeAllFromCart())}>
        RemoveAllFromCart
      </Button>
      <span className="w-16 h-auto">{JSON.stringify(cart, undefined, 2)}</span>
      <Separator className="my-10" />

      <CartItemCard />
    </section>
  );
};

export default Reservations;
