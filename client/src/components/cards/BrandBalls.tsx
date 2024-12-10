import Image from "next/image";
import React from "react";

interface brandProps {
  image: string;
}
const BrandBalls = (props: brandProps) => {
  const { image } = props;

  return (
    <div className=" border-none rounded-full w-[10rem] h-[10rem] bg-grey flex justify-center items-center">
      <Image
        src={`${image ? image : "/images/Bertology_Logo.png"}`}
        width={140}
        height={140}
        alt="brand_images.png"
      />
    </div>
  );
};

export default BrandBalls;
