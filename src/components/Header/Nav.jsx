/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";

const NavItem = ({ to, children }) => {
  return (
    <NavLink 
      className={({ isActive, isPending }) => 
        isPending 
          ? "text-red-400" 
          : isActive 
            ? "border-b-4 border-yellow-300" 
            : ""
      } 
      to={to}
    >
      {children}
    </NavLink>
  );
};

const Nav = () => {
  const navItems = [
    { to: '/', name: 'Home' },
    { to: 'about', name: 'About' },
    { to: 'menu', name: 'Menu' },
    { to: 'booking-page', name: 'Booking' },
    { to: 'reservations', name: 'Reservations' },
    { to: 'order-online', name: 'Order' },
    { to: 'login', name: 'Login' },
  ];

  return (
    <nav className="h-16 w-full flex flex-row justify-between px-4 items-center gap-2">
      <div className="h-full rounded-full flex justify-center items-center overflow-hidden">
        <img className="w-full scale-150 h-full object-cover" src="../../LittleLemon.png" alt="logo" />
      </div>
      <ul className=" justify-between items-center font-karla text-[16px] md:text-[16.5px] lg:text-[18px] gap-2 md:gap-6 inline-flex text-center">
        {navItems.map((item) => (
          <NavItem to={item.to} key={item.to}>
            {item.name}
          </NavItem>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;