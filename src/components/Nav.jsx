
const Nav = () => {
  return (
    <nav className="h-16 w-full flex flex-row justify-between px-4 items-center gap-2">
  <div className="w-10   rounded-full flex justify-center items-center overflow-hidden"><img src="../../profile.jpg" alt="logo" /></div>
  <ul className=" justify-between items-center font-karla text-[16px] md:text-[16.5px] lg:text-[20px]  gap-2  md:gap-6 inline-flex text-center">
    <li>Home</li>
    <li>About</li>
    <li>menu</li>
    <li>reservations</li>
    <li>order online</li>
    <li >login</li>
  </ul>
</nav>
  );
};

export default Nav;
