const DishCard = ({dish}) => {
  return (
    <div className="w-60  flex flex-col justify-center items-center pb-4 border rounded-xl hover:shadow-lg">
      <img
        className=" w-60 h-40 object-cover rounded-t-xl "
        src="../../profile.jpg"
        alt="photo"
      />
      <div className="w-full flex flex-row items-center justify-between px-3 my-1">
        <p className="text-[20px] ">{dish.name}</p>
        <p className="text-[20px]  text-red-500">$ {dish.price}</p>
      </div>
      <p className=" text-start px-3 py-3  text-gray-600 ">
        {dish.description}
      </p>
      <a href="#" className="text-[16px] text-start w-full px-3">
        Order a delivery 🚲
      </a>
    </div>
  );
};

export default DishCard;
