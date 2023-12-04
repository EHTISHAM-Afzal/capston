import { useState } from "react";

const MenuCardSkeletonForMobile = () => {
  const [content, setContent] = useState(undefined);

  setTimeout(() => {
    setTimeout(() => {
      setContent(
        <h2 className="absolute bottom-2 left-[2%]  w-[96%] text-base p-1 rounded-lg border animate-pulse">
          Its look like the server is gone to sleep please wait untill server
          responce
        </h2>
      );
    }, 10000);
  });
  return (
    <div className=" w-80 h-44 snap-start">
      <div className="relative rounded-xl border-2 w-full h-full bg-black/20 dark:bg-white/10 overflow-hidden ">
        {content ? (
          content
        ) : (
          <div className="absolute bottom-2 left-[2%]  w-[96%] rounded-lg border  h-12 bg-black/20 dark:bg-white/10 animate-pulse" />
        )}
      </div>
    </div>
  );
};

export default MenuCardSkeletonForMobile;
