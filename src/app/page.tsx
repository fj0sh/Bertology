import React from "react";
import Image from "next/image";
import ImageCarousel from "@/components/carousel/ImageCarousel";
import Button from "@/components/button";

const Home = () => {
  return (
    <div className="">
      <div className="relative w-full h-[50vh]">
        <Image
          src="/images/LandingImage.png"
          layout="fill"
          objectFit="cover"
          alt="Landing Image"
          className=""
        />
        <div className="absolute inset-0 flex items-center justify-start space-x-4">
          <Button
            title="Login"
            className=" bg-orange-600 border-inherit rounded p-3"
          />
          <Button
            title="Sign Up"
            className=" bg-orange-600 border-inherit rounded p-3"
          />
        </div>
      </div>
      <div className="h-[100vh]">baw</div>
      <div className="h-[100vh] bg-black-100">
        <div className="flex justify-center">
          <ImageCarousel />
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Home;
