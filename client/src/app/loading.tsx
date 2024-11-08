import React from "react";
import { ClipLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="animate-spin h-[10rem] w-[10rem] text-orangePrimary"></div>
    </div>
  );
};

export default Loading;
