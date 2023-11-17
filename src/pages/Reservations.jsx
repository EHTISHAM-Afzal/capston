/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  removeFromCart,
  removeAllFromCart,
} from "../features/Cart/CartSlice";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const Reservations = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
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
    </section>
  );
};

export default Reservations;
