/* eslint-disable react/prop-types */
import { Button } from "@/components/ui/button";
import clsx from "clsx";
import { ShoppingCartIcon } from "lucide-react";

const OpenCartButton = ({ className, quantity }) => {
  return (
    <Button
      variant="ghost"
      className={clsx("relative h-9 w-9 p-0 shadow-sm rounded-lg flex items-center justify-center",className)}
    >
      <ShoppingCartIcon />
      <Button
        variant="secondary"
        className=" text-xs p-0 absolute right-0 -mr-2 -mt-2 top-0 w-4 h-4 rounded border"
      >
        1{quantity}
      </Button>
    </Button>
  );
};

export default OpenCartButton;
