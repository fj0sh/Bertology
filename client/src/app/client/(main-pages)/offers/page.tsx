"use client";
import Button from "@/components/button";
import ServicePogs from "@/components/cards/ServicePogs";
import ImagePreviewCard from "@/components/cards/ImagePreviewCard";
import React from "react";
import OffersCard from "@/components/cards/OffersCard";
import AboutUsInfoCard from "@/components/cards/AboutUsInfoCard";
import { useRouter } from "next/navigation";

const Services = () => {
  const router = useRouter();

  return (
    <div className="bg-black text-white">
      <div className="flex items-center justify-center h-screen bg-orange">
        <div className="text-center">
          <p className="text-white font-bold text-[40px]">
            Products And Services
          </p>
        </div>
      </div>
      <div className="relative h-[60vh] py-32 px-52 w-full">
        <div className="w-[82%] rounded-xl h-[60%] right-24 bottom-16  bg-grey bg-opacity-50 absolute z-10"></div>
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

      <div className="h-[40vh] p-10 flex gap-14 justify-center items-center">
        <ServicePogs />
        <ServicePogs />
        <ServicePogs />
        <ServicePogs />
        <ServicePogs />
      </div>
      <div className="h-full flex flex-col items-center gap-6 p-20">
        <div className="text-orange font-semibold text-[22px]">
          AVAILABLE PRODUCTS
        </div>
        <div className="mx-[20rem] grid grid-cols-3 gap-8 border-none ">
          <ImagePreviewCard image={"/images/test_images/roadblock.png"} />
          <ImagePreviewCard image={"/images/test_images/roadblock.png"} />
          <ImagePreviewCard image={"/images/test_images/roadblock.png"} />
          <ImagePreviewCard image={"/images/test_images/roadblock.png"} />
          <ImagePreviewCard image={"/images/test_images/roadblock.png"} />
          <ImagePreviewCard image={"/images/test_images/roadblock.png"} />
        </div>

        <Button title="See More" />
      </div>
      <div className="h-[50vh]"></div>
      <div className="h-full flex flex-col items-center gap-6 p-20">
        <div className="text-orange text-[22px] font-semibold">
          AVAILABLE SERVICES
        </div>
        <div className="mx-[20rem] grid grid-cols-3 gap-8 border-none ">
          <ImagePreviewCard image={"/images/test_images/roadblock.png"} />
          <ImagePreviewCard image={"/images/test_images/roadblock.png"} />
          <ImagePreviewCard image={"/images/test_images/roadblock.png"} />
          <ImagePreviewCard image={"/images/test_images/roadblock.png"} />
          <ImagePreviewCard image={"/images/test_images/roadblock.png"} />
          <ImagePreviewCard image={"/images/test_images/roadblock.png"} />
        </div>

        <Button
          title="See More"
          onClick={() => router.push("/client/offers/services")}
        />
      </div>
    </div>
  );
};

export default Services;
