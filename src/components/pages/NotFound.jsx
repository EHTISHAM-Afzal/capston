import { Link, useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className=" grids-section-width flex justify-center items-center h-[100vh]">
      <div className="flex flex-col justify-center items-center gap-4 text-center ">
        <h1 className="font-markazi-text text-4xl">Oops!</h1>
        <h2 className="font-markazi-text text-4xl">404 Page Not Found</h2>
        <div className="space-x-2">
          <Link
            to="/"
            className=" text-black p-2 h-8 rounded-md border border-[#F4CE14] shadow-md hover:border-blue-700"
          >
            Go to home
          </Link>
          <Link
            to="/"
            className="bg-[#F4CE14] text-black p-2 h-8 rounded-md border hover:border-blue-700 shadow-md"
          >
            <button onClick={() => navigate(-1)}>Go Back</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
