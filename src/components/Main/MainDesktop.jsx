import AboutSection from "./AboutSectionForDesktop";
import MainSection from "./MainSection";
import SpecialsSection from "./SpecialsSection";
import TestimonialsSection from "./TestimonialsSectionForDesktop";
import { Separator } from "@/components/ui/separator"


const Main = () => {
  return (
    <main className="col-span-full grids">
      <section className=" col-span-full h-[20rem] grids sm:h-[23rem]  bg-[#495E57] dark:bg-secondary">
        <MainSection />
      </section>


      <section className="col-span-full grids">
        <SpecialsSection />
      </section>

     <Separator className=" grids-separator-width px-2 "/>

      <section className="col-span-full grids min-h-[400px] ">
        <TestimonialsSection />
      </section>

      <Separator className=" grids-separator-width px-2 "/>
      
      <section className="col-span-full grids py-8 ">
        <AboutSection />
      </section>

      <Separator className=" grids-separator-width px-2 "/>

    </main>
  );
};

export default Main;
