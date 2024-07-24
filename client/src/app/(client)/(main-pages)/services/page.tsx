import Button from "@/components/button";
import ServicePogs from "@/components/cards/ServicePogs";
import ImagePreviewCard from "@/components/cards/ImagePreviewCard";
import React from "react";

const Services = () => {
  return (
    <div className="bg-black text-white">
      <div className="flex items-center justify-center h-screen bg-orange">
        <div className="text-center">
          <p className="text-white font-bold text-[40px]">Services</p>
        </div>
      </div>
      <div className="relative h-[60vh] p-32 w-full">
        <div className="w-[87%] rounded-xl h-[60%] right-20 bottom-16  bg-grey bg-opacity-50 absolute z-10"></div>
        <div className="border border-orange rounded-lg w-full h-full p-6 relative z-20">
          <p className="text-[24px] indent-20 p-10">
            Everything we sell, we can also install, We are your local auto
            electronics upgrades with certified and experienced technicians who
            work with all car brands and models. As a well known, certified auto
            electronic upgrades installer, we always strive for the highest
            quality and we treat every car as if it were our own. Our staff are
            experienced automotive technicians who can install any electronic
            upgrade in your car, whether it{"`"}s a dash cam, remote starter,
            backup camera or anything else.
          </p>
        </div>
      </div>

      <div className="h-[40vh] p-10 flex gap-14 justify-center"></div>
      <div className="h-full flex flex-col items-center gap-6 p-20">
        <div>AVAILABLE SERVICES</div>
        <div className="mx-[20rem] grid grid-cols-3 gap-10 border-none ">
          <ImagePreviewCard />
          <ImagePreviewCard />
          <ImagePreviewCard />
          <ImagePreviewCard />
          <ImagePreviewCard />
          <ImagePreviewCard />
        </div>

        <Button title="See More" />
      </div>
    </div>
  );
};

export default Services;
