
const Nav = () => {
  return (
    <nav className=" h-10 sm:h-12 md:h-16 ring-2 flex flex-row justify-center items-center gap-2">
  <div className="w-10   rounded-full flex justify-center items-center overflow-hidden"><img src="../../profile.jpg" alt="logo" /></div>
  <ul className=" justify-start items-center gap-2 md:gap-6 inline-flex text-center">
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
