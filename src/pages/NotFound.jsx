import React from "react";

const NotFound = () => {
  return (
    <div className="h-[100vh] flex items-center justify-center flex-col gap-4 px-5">
      <h4 className="text-pryClr text-sm lg:text-xl text-center flex items-center font-medium">
        404 | The page you’re trying to visit doesn’t exist or has been moved.
      </h4>
      <button className="bg-pryClr hover:bg-pryClr/80 text-white font-semibold py-2 px-12 rounded-3xl transition-all duration-300 text-xs lg:text-sm cursor-pointer text-center shadow-lg hover:shadow-xl hover:scale-105">
        Go Home
      </button>
    </div>
  );
};

export default NotFound;
