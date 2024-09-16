import React from "react";
import CircleLoader from "react-spinners/CircleLoader";

const Loading = () => {
  return (
    <div className="w-full h-full flex justify-center items-center text-white">
      <CircleLoader color="orangePrimary" />
    </div>
  );
};

export default Loading;
