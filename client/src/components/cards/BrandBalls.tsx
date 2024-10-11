import Image from "next/image";
import React from "react";

const BrandBalls = () => {
  return (
    <div className=" border-none rounded-full w-[10rem] h-[10rem] bg-grey flex justify-center items-center">
      <Image
        src={"/images/Bertology_Logo.png"}
        width={100}
        height={80}
        alt="choese"
      />
    </div>
  );
};

export default BrandBalls;
