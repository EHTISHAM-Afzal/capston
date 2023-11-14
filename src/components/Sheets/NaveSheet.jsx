import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import {
  Home,
  Info,
  LayoutList,
  MapPin,
  Menu,
  ShoppingBasket,
  ShoppingCart,
} from "lucide-react";
import { Link } from "react-router-dom";

const NaveSheet = () => {
  const navItems = [
    { to: "/", name: "Home", icon: <Home /> },
    { to: "about", name: "About", icon: <Info /> },
    { to: "menu", name: "Menu", icon: <LayoutList /> },
    { to: "booking-page", name: "Booking", icon: <ShoppingCart /> },
    { to: "reservations", name: "Reservations", icon: <ShoppingBasket /> },
    { to: "order-online", name: "Order", icon: <MapPin /> },
  ];
  return (
    <div className="sm:hidden">
      <Sheet>
        <SheetTrigger className="h-9 w-9 shadow-sm flex justify-center items-center hover:bg-accent rounded-md ">
          <Menu />
          <span className="sr-only">Menu</span>
        </SheetTrigger>
        <SheetContent side="top">
          <SheetHeader>
            <SheetTitle>Menu</SheetTitle>
          </SheetHeader>
          {navItems.map((item, indx) => (
            <div key={indx}>
              <SheetClose asChild>
                <Link
                  className="w-full flex justify-between items-center h-12  rounded-md px-3 my-2 text-lg border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground"
                  to={item.to}
                >
                  {item.name} {item.icon}
                </Link>
              </SheetClose>
            </div>
          ))}
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default NaveSheet;
