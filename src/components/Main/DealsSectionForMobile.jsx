import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { useGetDishesBycategoryIdQuery } from "@/src/features/Dishes/dishesSlice";
import MenuCardForDesktop from "../cards/MenuCardForDesltop";
import MenuCardSkeletonForDektop from "../cards/MenuCardSkeletonForDektop";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const DealsSectionForMobile = () => {
  const {
    data: Dishes,
    isLoading,
    isSuccess,
    isError,
    error,
    /// category id for deals is 6559fbaac6fae5d2e4d7deb1
  } = useGetDishesBycategoryIdQuery("6559fbaac6fae5d2e4d7deb1");

  let content;

  if (isSuccess) {
    const { ids, entities } = Dishes;
    content = ids.map((id) => (
      <MenuCardForDesktop key={id} dish={entities[id]} />
    ));
  } else if (isLoading) {
    content = new Array(3)
      .fill(0)
      .map((_, index) => <MenuCardSkeletonForDektop key={index} />);
  } else if (isError) {
    content = <p>{error.message}</p>;
  }
  return (
    <div className="w-full p-3">
      <div className="w-full flex justify-between items-center">
        <h2 className="pl-5 text-3xl font-karla font-semibold">Deals</h2>
        <ArrowRight className=" w-6 h-6 text-gray-500 hover:text-gray-800 cursor-pointer duration-300 my-4 mr-2 hover:mr-0 " />
      </div>

      <ScrollArea className=" h-fit w-full overflow-hidden flex items-center">
        <div className="flex w-max p-4 space-x-1">{content}</div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
      <div className="w-full flex justify-center items-center md:text-xl hover:underline hover:text-primary">
        <Link to="menu">See all menu{"'"}s &rarr;</Link>
      </div>
    </div>
  );
};

export default DealsSectionForMobile;
