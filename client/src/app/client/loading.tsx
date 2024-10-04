import React from "react";
import { ClipLoader } from "react-spinners";

const loading = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <ClipLoader color="#FF661F" size={70} />
    </div>
  );
};

export default loading;
