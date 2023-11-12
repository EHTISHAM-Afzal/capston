import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  removeFromCart,
  removeAllFromCart,
} from "../features/Cart/CartSlice";
import { Button } from "@/components/ui/button";
import { useGetDishByIdQuery } from "../features/Dishes/dishesSlice";
import { AdvancedImage, lazyload } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";
import { scale } from "@cloudinary/url-gen/actions/resize";
import { ArrowDownIcon, ArrowUpIcon, } from "lucide-react";

const Reservations =  () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const item =  useGetDishByIdQuery("6544f5c164aca44518cb9966");
  const returnData = async()=> await item.data.entities["6544f5c164aca44518cb9966"]
  const dish = returnData()
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

      <div className="w-full h-96 flex justify-center items-center flex-col">
        <h2 className="text-xl">In cart items</h2>
        <div className="w-full h-20 flex items-center overflow-hidden border-2">
          <AdvancedImage
            className=" w-20 h-full object-cover rounded-t-lg"
            alt={dish.image}
            cldImg={new Cloudinary({
              cloud: {
                cloudName: "sham007",
              },
            })
              .image(dish.image)
              .resize(scale().width("260"))
              .quality("auto")}
            responsive={true}
            plugins={[lazyload({ threshold: 0.1 })]}
          />
          <div className="h-full w-96 ">
            <h2 className="text-xl ml-4">{dish.name}</h2>
            <p className=" text-sm ml-4">{dish.description}</p>
          </div>
          <div className="h-full flex flex-col items-center">
            <Button
            variant="ghost"
            className="h-6 w-6 p-0"
              onClick={() =>
                dispatch(addToCart({ id: "6544f5c164aca44518cb9966" }))
              }
            >
              <ArrowUpIcon/>
            </Button>
            <p className="text-2xl">{cart[0]?.quantity}</p>
            <Button
            variant="ghost"
            className="h-6 w-6 p-0"
              onClick={() =>
                dispatch(removeFromCart({ id: "6544f5c164aca44518cb9966" }))
              }
            >
              <ArrowDownIcon />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reservations;
