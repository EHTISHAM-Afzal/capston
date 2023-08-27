const Footer = () => {
  return (
    <div className="grids col-span-full  py-4 h-60">
    <footer className=" grids-section-width row-satart-3   py-4 px-4  flex items-start justify-between flex-row ">
      <img
        className=" h-36 w-28 md:h-40 md:w-32 lg:h-44 lg:w-32  object-cover  border-2 border-white  rounded-md"
        src="../../profile.jpg"
        alt="logo"
      />
      <div className=" text-black h-full flex flex-row justify-center gap-[12vw] lg:pr-12 items-start font-karla ">
        <ul>
          <li> <a href="">Home </a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">menu</a></li>
          <li><a href="#">reservations</a></li>
          <li><a href="#">order online</a></li>
          <li><a href="#">login</a></li>
          </ul>
        <ul>
          <li>link 2</li>
          <li>link 2</li>
          <li>link 2</li>
        </ul>
        <ul>
          <li>link 3</li>
          <li>link 3</li>
          <li>link 3</li>
        </ul>
      </div>
    </footer>
    </div>
  );
};

export default Footer;
