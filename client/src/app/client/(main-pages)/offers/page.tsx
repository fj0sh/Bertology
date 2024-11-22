"use client";
import ImagePreviewCard from "@/components/cards/ImagePreviewCard";
import React from "react";
import BrandBalls from "@/components/cards/BrandBalls";
import Image from "next/image";
import useServices from "@/hooks/requests/useServices";
import { ServiceType } from "@/constants/Service";

const Services = () => {
  const { tanstackData } = useServices();

  return (
    <div className="bg-black text-white">
      <div className="flex justify-center items-center h-screen ">
        <div>
          <Image
            src={"/images/ClientCarIMG.png"}
            height={600}
            width={600}
            alt="CarImage.png"
          />
        </div>
        <p className="text-[50px] text-center w-[45rem] font-semibold mb-[10rem]">
          We assure to serve high
          <span className="text-orangeRed"> Quality</span> and{" "}
          <span className="text-orangeRed"> Valuable</span> Service
        </p>
      </div>

      <div className=" px-16">
        <div className="items-center relative w-full flex flex-col">
          <hr className="w-full top-[50%] absolute border-orangePrimary border-t-[3px]" />
          <p className=" text-[30px] z-10 w-fit bg-black p-2 px-8">
            <span className="text-orangePrimary">TRUSTED</span> BRANDS
          </p>
        </div>
        <div className="h-[20rem] flex justify-center items-center gap-[2rem] ">
          <BrandBalls />
          <BrandBalls />
          <BrandBalls />
          <BrandBalls />
          <BrandBalls />
        </div>
      </div>
      <div className="h-full flex flex-col items-center gap-6 p-20">
        <div className="grid grid-cols-4 gap-[5rem] border-none justify-items-center">
          {tanstackData?.map((serviceData: ServiceType) => (
            <div key={serviceData.id}>
              <ImagePreviewCard
                image={serviceData.image}
                serviceName={serviceData.serviceName}
                price={serviceData.servicePrice}
                descrption={serviceData.serviceDescription}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
