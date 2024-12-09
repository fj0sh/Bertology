"use client";
import ImagePreviewCard from "@/components/cards/ImagePreviewCard";
import React from "react";
import BrandBalls from "@/components/cards/BrandBalls";
import Image from "next/image";
import useServices from "@/hooks/requests/useServices";
import { ServiceType } from "@/constants/Service";

const Services = () => {
  const { tanstackData } = useServices();

  console.log(tanstackData);

  return (
    <div className="bg-background text-white mt-[10rem]">
      <div className="h-full flex flex-col items-center gap-6 p-20">
        <div className="grid grid-cols-3 gap-[5rem] border-none">
          {tanstackData?.map((serviceData: ServiceType) => {
            return (
              <>
                <div className="flex gap-3 w-full h-full border border-orangeRed p-2 rounded-md">
                  <div className="w-[40%] p-2">
                    <Image
                      src={serviceData.serviceImage}
                      alt="Service_Image.jpg"
                      width={0}
                      height={0}
                      sizes="50%"
                      style={{ width: "100%", height: "100%" }}
                    />
                  </div>
                  <div className="w-[70%] flex flex-col gap-3">
                    <div className="flex flex-col ">
                      <p className="text-orangePrimary font-semibold text-[20px]">
                        {serviceData.serviceName}
                      </p>
                      <p>Price: ₱ {serviceData.servicePrice}</p>
                    </div>
                    <div>
                      <p>{serviceData.serviceDescription}</p>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
      <div className=" px-16">
        <div className="items-center relative w-full flex flex-col">
          <hr className="w-full top-[50%] absolute border-orangePrimary border-t-[3px]" />
          <p className=" text-[30px] z-10 w-fit bg-background p-2 px-8">
            <span className="text-orangePrimary">TRUSTED</span> BRANDS
          </p>
        </div>
        <div className="h-[20rem] flex justify-center items-center gap-[2rem] ">
          <BrandBalls image="/brand_images/brand1.svg" />
          <BrandBalls image="/brand_images/brand2.svg" />
          <BrandBalls image="/brand_images/brand3.svg" />
          <BrandBalls image="/brand_images/brand4.svg" />
          <BrandBalls image="/brand_images/brand5.svg" />
          <BrandBalls image="/brand_images/brand6.svg" />
        </div>
      </div>
    </div>
  );
};

export default Services;
