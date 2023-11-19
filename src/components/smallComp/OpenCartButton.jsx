/* eslint-disable react/prop-types */
import { Button } from "@/components/ui/button";
import clsx from "clsx";
import { ShoppingCartIcon } from "lucide-react";

const OpenCartButton = ({ className, quantity }) => {
  return (
    <div
      // variant="ghost"
      className={clsx("relative h-9 w-9 p-0 shadow-sm rounded-md flex items-center justify-center hover:bg-accent hover:text-accent-foreground",className)}
    >
      <ShoppingCartIcon className="hover:scale-90" />
      {quantity > 0 && (
        <span
          className=" p-0 absolute right-0 -mr-2 -mt-2 top-0 w-4 h-4 border flex items-center justify-center bg-secondary text-secondary-foreground shadow-sm rounded text-sm font-medium transition-colors hover:bg-transparent "
        >
          {quantity}
        </span>
      )}
    </div>
  );
};

export default OpenCartButton;
