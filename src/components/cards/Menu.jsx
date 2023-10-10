/* eslint-disable react/prop-types */
const MenuCard = ({dish}) => {
  return (
    <div className="w-[16rem] h-[430] overflow-hidden flex flex-col justify-center items-center pb-4 border rounded-xl hover:shadow-lg mx-1 my-2">
      <div className="w-full h-40 overflow-hidden">
        <img
        className=" w-full h-full transition-transform object-cover hover:scale-105 rounded-t-xl  "
        src={dish.img}
        alt="photo"
      />
      </div>
      
      <div className="w-full flex flex-row items-center justify-between px-3 my-1">
        <p className=" font-markazi-text text-[24pt] ">{dish.name}</p>
        <p className=" font-bold font-karla text-[16pt] text-red-500">$ {dish.price}</p>
      </div>
      <p className=" text-start px-3 py-3 font-karla  text-[#495E57] font-[16px] ">
        {dish.description}
      </p>
      <a href="#" className="text-[16px] text-start font-karla font-bold w-full px-3">
        Order a delivery 🚲
      </a>
    </div>
  );
};

export default MenuCard;
