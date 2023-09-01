import { NavLink } from "react-router-dom";
const Nav = () => {
  return (
    <nav className="h-16 w-full flex flex-row justify-between px-4 items-center gap-2">
  <div className="w-10   rounded-full flex justify-center items-center overflow-hidden"><img src="../../profile.jpg" alt="logo" /></div>
  <ul className=" flex justify-between items-center font-karla text-[16px] md:text-[16.5px] lg:text-[20px]  gap-2  md:gap-6 inNavLinkne-flex text-center">
    <NavLink className={({ isActive, isPending }) => isPending ? " text-red-400" : isActive ? " border-b-4 border-yellow-300" : ""} to='/'>Home</NavLink>
    <NavLink className={({ isActive, isPending }) => isPending ? " text-red-400" : isActive ? " border-b-4 border-yellow-300" : ""} to='aboute'>About</NavLink>
    <NavLink className={({ isActive, isPending }) => isPending ? " text-red-400" : isActive ? " border-b-4 border-yellow-300" : ""} to='menu'>menu</NavLink>
    <NavLink className={({ isActive, isPending }) => isPending ? " text-red-400" : isActive ? " border-b-4 border-yellow-300" : ""} to='booking-page'>Booking Page</NavLink>
    <NavLink className={({ isActive, isPending }) => isPending ? " text-red-400" : isActive ? " border-b-4 border-yellow-300" : ""} to='reservations'>reservations</NavLink>
    <NavLink className={({ isActive, isPending }) => isPending ? " text-red-400" : isActive ? " border-b-4 border-yellow-300" : ""} to='order-online'>order online</NavLink>
    <NavLink className={({ isActive, isPending }) => isPending ? " text-red-400" : isActive ? " border-b-4 border-yellow-300" : ""} to='login' >login</NavLink>
  </ul>
</nav>
  );
};

export default Nav;
