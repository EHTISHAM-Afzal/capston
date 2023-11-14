const MenuCardSkeletonForDektop = () => {
  return (
    <div className="w-[16rem] h-[24rem] bg-primary/10 mx-1 my-2 border overflow-hidden rounded-xl">
      <div className="w-full h-[40%] bg-black/20 dark:bg-white/10 border " />
      {/* content section */}
      <div className="w-full h-[60%] flex flex-col py-4 px-5 space-y-3 animate-pulse">
        {/* Header */}
        <div className=" w-full h-6 flex justify-between ">
          <div className=" w-24 h-full bg-black/20 dark:bg-white/10" />
          <div className=" w-10 h-full bg-black/20 dark:bg-white/10" />
        </div>
        {/* Main */}
        <div className=" w-full h-44 bg-black/20 dark:bg-white/10" />
      </div>
    </div>
  );
};

export default MenuCardSkeletonForDektop;
