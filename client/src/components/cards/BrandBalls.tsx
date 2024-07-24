import Image from "next/image";
import React from "react";

const BrandBalls = () => {
  return (
    <div className=" border-none rounded-full w-[10rem] h-[10rem] bg-orange flex justify-center items-center">
      <Image
        src={"/images/test_images/choese.jpg"}
        width={50}
        height={10}
        alt="choese"
      />
    </div>
  );
};

export default BrandBalls;
