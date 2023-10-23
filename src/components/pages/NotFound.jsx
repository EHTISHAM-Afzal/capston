import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className=" grids-section-width flex justify-center items-center max-h-[100vh]">
      <div className="flex flex-col justify-center items-center gap-4 text-center ">
        <img className="w-96" src="../../crashed-error.svg" alt="crashed" />
        <h1 className="font-markazi-text text-4xl">Oops!</h1>
        <h2 className="font-markazi-text text-4xl">404 Page Not Found</h2>
        <div className="space-x-2">
          <Link
            to="/"
            
          >
            <Button variant="outline" className =" ">Go to home</Button>
          </Link>
          <Link
            to="/"
             
          >
            <Button className=" bg-primary border border-secondary"onClick={() => navigate(-1)}>Go Back</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
