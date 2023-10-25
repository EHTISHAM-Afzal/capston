import { Link } from "react-router-dom";

const Footer = () => {
  const Links = [
    { to: "/", name: "Home" },
    { to: "about", name: "About" },
    { to: "menu", name: "Menu" },
    { to: "booking-page", name: "Booking" },
    { to: "reservations", name: "Reservations" },
    { to: "order-online", name: "Order" },
  ];
  return (
    <div className="grids col-span-full  py-4 h-60 ">
      <footer className=" grids-section-width row-satart-3   py-4 px-4  flex items-start justify-between flex-row ">
        <img
          className=" h-36 w-28 md:h-40 md:w-32 lg:h-44 lg:w-32  hidden md:block object-cover  border-2 border-white  rounded-md mx-2"
          src="../../Mario and Adrian b 2.jpg"
          alt="Mario and Adrian"
        />
        <div className="  h-full flex flex-row justify-center gap-[12vw] lg:pr-12 items-start font-karla ">
          <ul>
            <li className=" flex flex-col text-[16px] md:text-[16.5px]">
              {Links.map((item) => (
                <Link to={item.to} key={item.to}>
                  {item.name}
                </Link>
              ))}
            </li>
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
