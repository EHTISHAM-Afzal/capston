import { useDispatch } from "react-redux";
/* eslint-disable react/prop-types */
import { Button } from "@/components/ui/button";
import { AdvancedImage, responsive } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";
import { ShoppingCart } from "lucide-react";
import DeleveryVanSVG from "../smallComp/DeleveryVan";
import { addToCart } from "@/src/features/Cart/CartSlice";

const AbouteProductCard = ({ dish }) => {
  const dispatch = useDispatch();
  return (
    <div className=" w-full h-fit md:h-64 grid grid-flow-row md:grid-flow-col grid-rows-[15rem,_1fr] grid-cols-1 md:grid-rows-1 md:grid-cols-2  space-y-6 mt-6 overflow-hidden border rounded-lg">
      {/* Product card */}
      <div className="border-none w-full h-full overflow-hidden">
        <AdvancedImage
          className="w-full h-full object-cover bg-primary/10"
          alt={dish.name}
          cldImg={new Cloudinary({
            cloud: {
              cloudName: "sham007",
            },
          })
            .image(dish.image)
            .quality("auto")}
          plugins={[responsive({ steps: 100 })]}
        />
      </div>
      <div className="h-full w-full space-y-4 px-6">
        {/* Header */}
        <div className="text-2xl font-semibold flex justify-between ">
          <span className="font-markazi-text text-3xl tracking-wider">{dish.name}</span>
          <span className="font-karla text-primary tracking-wide">
            $ {dish.price <= 9 ? 0 : null}
            {dish.price}.00
          </span>
        </div>
        {/* description */}
        <p className="text-sm">{dish.description}</p>
        {/* Footer */}
        <div className=" flex justify-between space-x-2 w-full pb-2">
          <Button variant="outline" className="w-3/6">
            Order Now
            <DeleveryVanSVG />
          </Button>
          <Button
            onClick={() => dispatch(addToCart(dish))}
            className="w-3/6 space-x-2"
          >
            Add to cart
            <ShoppingCart className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AbouteProductCard;
