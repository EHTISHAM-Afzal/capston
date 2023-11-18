const MenuCardSkeletonForMobile = () => {
  return (
    <div className=" w-full h-full snap-start">
      <div className="relative rounded-xl border-2 w-full h-full bg-black/20 dark:bg-white/10 overflow-hidden ">
        <div className="absolute bottom-2 left-[2%]  w-[96%] rounded-lg border  h-12 bg-black/20 dark:bg-white/10 animate-pulse" />
      </div>
    </div>
  );
};

export default MenuCardSkeletonForMobile;
