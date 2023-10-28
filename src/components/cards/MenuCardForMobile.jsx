/* eslint-disable react/prop-types */
import { Button } from "@/components/ui/button";

const MenuCardForMobile = ({data}) => {
  return (
    //   main component
    <div className=" relative rounded-xl border bg-card text-card-foreground shadow w-56 h-56  overflow-hidden items-center ">
      <img
        className="min-w-full h-full object-cover"
        src={data.img}
        alt={data.name}
      />
      {/* Footer */}
      <div className=" absolute w-[13rem] mx-2 bottom-2  rounded-2xl overflow-hidden  h-12 flex flex-row justify-between items-center px-3 py-2 bg-background/95  supports-[backdrop-filter]:bg-background/60">
        <p className="font-semibold leading-none tracking-tight">{data.name}</p>
        <Button
          variant="outline"
          className="rounded-2xl font-karla text-red-500 text-lg backdrop-blur"
        >
          $ {data.price}
        </Button>
      </div>
    </div>
  );
};

export default MenuCardForMobile;
