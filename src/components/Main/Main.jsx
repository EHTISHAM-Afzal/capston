import AboutSection from "./AboutSection";
import MainSection from "./MainSection";
import SpecialsSection from "./SpecialsSection";
import TestimonialsSection from "./TestimonialsSection";

const Main = () => {
  return (
    <main className="col-span-full grids">
      <section className=" col-span-full grids h-[360px]  bg-[#495E57]">
        <MainSection />
      </section>

      <section className="col-span-full grids ">
        <SpecialsSection />
      </section>

      <section className="col-span-full grids bg-gray-200 min-h-[400px]">
        <TestimonialsSection />
      </section>

      <section className="col-span-full grids py-8 ">
        <AboutSection />
      </section>
    </main>
  );
};

export default Main;
