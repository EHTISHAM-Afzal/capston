import { useSearchParams } from "react-router-dom";
const UnderConstruction = () => {
  let [searchParams] = useSearchParams();
  return (
    <section className="flex-col justify-center items-center my-6 w-full ">
      <h1 className="text-3xl font-bold text-center mb-8">
        {searchParams.get("page")} page is under-construction
      </h1>
      <div className="grids-section-width h-[80vh]">
        <img
          className="w-full h-full"
          src="../../page-under-construction.svg"
          alt="Under-construction"
        />
      </div>
    </section>
  );
};

export default UnderConstruction;
