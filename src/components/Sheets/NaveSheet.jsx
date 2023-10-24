import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { Home, Info, LayoutList, MapPin, Menu, ShoppingBasket, ShoppingCart, } from "lucide-react";
import { NavLink } from "react-router-dom";



const NaveSheet = () => {
  const navItems = [
    { to: '/', name: 'Home', icon : <Home/> },
    { to: 'about', name: 'About', icon : <Info/>  },
    { to: 'menu', name: 'Menu', icon : <LayoutList/>  },
    { to: 'booking-page', name: 'Booking', icon : <ShoppingCart/>  },
    { to: 'reservations', name: 'Reservations', icon : <ShoppingBasket/>  },
    { to: 'order-online', name: 'Order', icon : <MapPin/>  },
  ]; 
  return (
    <div className="sm:hidden">
      <Sheet>
        <SheetTrigger  className="border-2 h-9 w-9 flex justify-center items-center rounded-md">
          <Menu />
        </SheetTrigger>
        <SheetContent side="top">
          <SheetHeader>
            <SheetTitle>Menu</SheetTitle>
          </SheetHeader>
          {navItems.map((item , indx) => (
            <div key={indx}>
            <SheetClose asChild>
            <NavLink className="w-full my-1" to={item.to}>
              <Button 
                variant="outline"
                className="w-full justify-between h-12 hover:bg-primary text-lg"
              >
                {item.name} {item.icon} 
              </Button>
            </NavLink>
          </SheetClose>
          </div>
          ))}
          
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default NaveSheet;
