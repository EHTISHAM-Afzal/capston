
const ReviewCard = () => {
  return (
    <div className="w-44 h-44 bg-white rounded-2xl justify-center border py-1 px-3 space-y-4 items-center hover:shadow-lg m-2">
      <p className="w-full py-1 ">⭐⭐⭐⭐⭐</p>
      <div className="w-full flex flex-row justify-start space-x-2 items-center">
        <img
          className="w-10 h-10 rounded-full"
          src="../../profile.jpg"
          alt="reviewer photo"
        />
        <div className="flex flex-col justify-center text-start">
          <p className="text-sm font-bold font-karla">John Doe</p>
          <p className="text-xs font-bold font-karla text-[#6E6F6E]">Little Lemon</p>
        </div>
      </div>
      <p className="text-xs font-karla text-[#6E6F6E]">
        “Seriously cannot stop thinking about the Turkish Mac n’ Cheese!!”
      </p>
    </div>
  );
};

export default ReviewCard;
