import React from "react";
import { ClipLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="w-full h-[80vh] flex justify-center items-center">
      <ClipLoader color="#FF661F" size={80} />
    </div>
  );
};

export default Loading;
