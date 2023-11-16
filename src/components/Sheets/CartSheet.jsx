import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { CartItemCard } from "../cards/CartItemCard";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import OpenCartButton from "../smallComp/OpenCartButton";

function openFullscreen(elem) {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.mozRequestFullScreen) {
    /* Firefox */
    elem.mozRequestFullScreen();
  } else if (elem.webkitRequestFullscreen) {
    /* Chrome, Safari and Opera */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) {
    /* IE/Edge */
    elem.msRequestFullscreen();
  }
}

const CartSheet = () => {
  return (
    <div>
      <Sheet>
        <SheetTrigger
          onClick={() => {
            if (window.innerWidth < 600) {
              openFullscreen(document.documentElement);
            }
          }}
        >
          <OpenCartButton quantity={7} />
          <span className="sr-only">Open Cart</span>
        </SheetTrigger>
        <SheetContent className="w-full sm:w-96">
          <SheetHeader className="mb-4">
            <SheetTitle>My Cart</SheetTitle>
          </SheetHeader>
          <ScrollArea className="h-[65vh] overflow-hidden">
            <CartItemCard />
            <CartItemCard />
          </ScrollArea>
          <div className="w-full h-full space-y-2 flex flex-col ">
            <div className="flex justify-between">
              <h2>Taxes</h2>
              <h2>
                <span>$ </span>100
              </h2>
            </div>
            <Separator />
            <div className="flex justify-between">
              <h2>Shipping</h2>
              <h2>
                <span>$ </span>Free
              </h2>
            </div>
            <Separator />
            <div className="flex justify-between">
              <h2>Total</h2>
              <h2>
                <span>$ </span>300
              </h2>
            </div>
            <Separator />
            <Button size="lg" className="min-h-[2rem]">
              Proceed to Checkout
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default CartSheet;
