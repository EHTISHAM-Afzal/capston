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
          className=" h-36 md:h-40  lg:h-44  hidden md:block object-cover mx-2"
          src="../../LittleLemon.png"
          alt="Mario and Adrian"
        />
        <div className="  h-full flex flex-row space-x-6 justify-center px-4 lg:pr-12 items-start font-karla max-w-full ">
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
            <li>123 PTCL</li>
            <li>123-456-789</li>
            <li>littlemon@gmail.com</li>
            <ul className="sm:hidden pt-2">
            <li>X.com</li>
            <li>Facbook</li>
            <li>Instagram</li>
            </ul>
          </ul>
          <ul className="hidden sm:block">
            <li>X.com</li>
            <li>Facbook</li>
            <li>Instagram</li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
