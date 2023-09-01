import React from "react";
import { useRouteError } from "react-router-dom";

const NotFound = () => {
  const error = useRouteError();
  return (
    <div className=" grids-section-width flex justify-center items-center h-96">
      <h1>Error: {error?.message}</h1>
      <pre>
        {error.status} - {error.statusText}
      </pre>
    </div>
  );
};

export default NotFound;
