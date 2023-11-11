const MenuCardSkeletonForMobile = () => {
  return (
    <div className=" min-w-fit w-fit h-fit min-h-fit snap-start">
      <div className="relative rounded-xl border-2 w-80 h-56 bg-primary/10 overflow-hidden ">
        <div className="absolute bottom-2 left-[2%]  w-[96%] rounded-lg border  h-12 bg-gradient-to-b from-transparent to-black/30 opacity-50 animate-pulse" />
      </div>
    </div>
  );
};

export default MenuCardSkeletonForMobile;
