import { useRouteError } from "react-router-dom";
const Error = () => {
  const error = useRouteError();
  return (
    <div className="w-full flex justify-center flex-wrap items-center min-h-[7rem] h-full p-6 ">
      <h1> 🤦‍♀️ Error: {error?.message}</h1>
      <pre>
        {error.status} - {error.statusText}
      </pre>
    </div>
  );
};

export default Error;
