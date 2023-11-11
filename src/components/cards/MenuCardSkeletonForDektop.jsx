const MenuCardSkeletonForDektop = () => {
  return (
    <div className="w-[16rem] h-[24rem] bg-primary/10 mx-1 my-2 border overflow-hidden rounded-xl">
      <div className="w-full h-[40%] bg-gradient-to-b from-transparent to-black/30 opacity-50 border " />
      {/* content section */}
      <div className="w-full h-[60%] flex flex-col py-4 px-5 space-y-3">
        {/* Header */}
        <div className=" w-full h-8 flex justify-between animate-pulse">
          <div className=" w-24 rounded-xl h-full bg-gradient-to-b from-transparent to-black opacity-50" />
          <div className=" w-10 rounded-xl h-full bg-gradient-to-b from-transparent to-black opacity-50" />
        </div>
        {/* Main */}
        <div className=" w-full h-32 rounded-xl bg-gradient-to-b from-transparent to-black/40 opacity-50" />
        {/* Footer */}
        <div className=" w-full h-8 flex justify-between animate-pulse">
          <div className=" w-40 rounded-xl h-full bg-gradient-to-b from-transparent to-black/30 " />
          <div className=" w-10 rounded-xl h-full bg-gradient-to-b from-transparent to-black opacity-50" />
        </div>
      </div>
    </div>
  );
};

export default MenuCardSkeletonForDektop;
