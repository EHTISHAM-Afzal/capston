const MenuCard = ({dish}) => {
  return (
    <div className="w-60 h-[430] flex flex-col justify-center items-center pb-4 border rounded-xl hover:shadow-lg mx-1 my-2">
      <img
        className=" w-60 h-40 object-cover rounded-t-xl "
        src="../../profile.jpg"
        alt="photo"
      />
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
