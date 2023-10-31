/* eslint-disable react/prop-types */
import { Button } from "@/components/ui/button";

const MenuCardForMobile = ({ data }) => {
  return (
    <div className=" min-w-fit w-fit h-fit min-h-fit snap-center">
      {/* // main component */}
      <div className="relative rounded-xl border bg-card text-card-foreground shadow w-80 h-56  overflow-hidden items-center ">
        <img
          className="min-w-full h-full object-cover"
          src={data.img}
          alt={data.name}
        />
        {/* Footer */}
        <div className=" absolute pl-4 w-[95%] mx-2 bottom-2 rounded-2xl h-12 flex flex-row justify-between items-center px-3 py-2 bg-background/95  supports-[backdrop-filter]:bg-background/75">
          <span className=" space-y-1">
            <p className="font-semibold leading-none tracking-tight">
              {data.name}
            </p>
            <p className="text-sm ">{data.description.substring(0,30)}</p>
          </span>
          <Button
            variant="outline"
            className="rounded-2xl font-karla text-lg bg-transparent backdrop-blur"
          >
            $ {data.price}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MenuCardForMobile;
