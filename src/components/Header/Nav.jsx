/* eslint-disable react/prop-types */
import { NavLink, Link } from "react-router-dom";
import { ModeToggle } from "../Theme/ThemeToggle";
import NaveSheet from "../Sheets/NaveSheet";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const NavItem = ({ to, children }) => {
  return (
    <li>
      <NavLink
        className={({ isActive, isPending }) =>
          isPending
            ? "text-red-400"
            : isActive
            ? "border-b-4 border-primary"
            : ""
        }
        to={to}
      >
        {children}
      </NavLink>
    </li>
  );
};

const ProfileItem = () => {
  return (
    <NavLink
      className={({ isActive, isPending }) =>
        isPending
          ? "text-red-400"
          : isActive
          ? " rounded-full border-primary flex items-center border-4"
          : " flex items-center border-2 rounded-full"
      }
      to="/profile"
    >
      <Avatar>
        <AvatarImage
          alt="avatar Image"
          src="https://avatars.githubusercontent.com/u/106005092?s=96&v=4"
        />
        <AvatarFallback>IA</AvatarFallback>
      </Avatar>
    </NavLink>
  );
};

const Nav = () => {
  const navItems = [
    { to: "/", name: "Home" },
    { to: "about", name: "About" },
    { to: "menu", name: "Menu" },
    { to: "booking-page", name: "Booking" },
    { to: "reservations", name: "Reservations" },
    { to: "order-online", name: "Order" },
  ];

  return (
    <nav className="h-16 w-full flex flex-row justify-between px-4 items-center gap-2">
      <Link
        to="/"
        className="h-full flex justify-center items-center overflow-hidden"
      >
        <div className="h-12 w-36 sm:h-full sm:w-48   py-1 flex items-center justify-between">
          <img
          className=" h-full w-6 sm:w-8   object-cover"
          src="../../Lemon.svg"
          alt="Little Lemon logo"
        />
        <p className="tracking-wider font-markazi-text text-xl sm:text-2xl text-[#495E57] font-bold dark:text-white">LITTLE LEMON</p>
        </div>
        
      </Link>
      <ul className=" hidden sm:inline-flex justify-between items-center font-karla text-[16px] md:text-[16.5px] lg:text-[18px] gap-2 md:gap-6  text-center">
        {navItems.map((item) => (
          <NavItem to={item.to} key={item.to}>
            {item.name}
          </NavItem>
        ))}
      </ul>
      <ul className="flex items-center space-x-2 h-full">
        <li>
          <ModeToggle />
        </li>
        <li>
          <NaveSheet />
        </li>
        <li>
          <ProfileItem />
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
