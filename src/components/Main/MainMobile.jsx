// import AboutSection from "./AboutSection";
import AboutSectionForMobile from "./AboutSectionMobile";
import DealsSectionForMobile from "./DealsSectionForMobile";
import MainSectionForMobile from "./MainSectionForMobile";
import SpecialsSectionForMobile from "./SpecialsSectionForMobile";
import TestimonialsSectionForMobile from "./TestimonialsSectionForMobile";
import { Separator } from "@/components/ui/separator";

const MainMobile = () => {
  return (
    <main className=" min-w-[302px] max-w-full min-h-screen">
      <MainSectionForMobile />
      <SpecialsSectionForMobile />
      <Separator className=" w-full px-6 " />
      <DealsSectionForMobile />

      <Separator className=" w-full  px-6 " />

      <TestimonialsSectionForMobile />

      <Separator className=" w-full px-2 " />

      <AboutSectionForMobile />

      <Separator className=" w-full px-2 " />
    </main>
  );
};

export default MainMobile;
