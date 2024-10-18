import ImagePreviewCard from "@/components/cards/ImagePreviewCard";
import React from "react";
import BrandBalls from "@/components/cards/BrandBalls";
import LinkButton from "@/components/button/OrangeLinkButton";

const Services = () => {
  return (
    <div className="bg-black text-white">
      <div className="flex items-center justify-center h-screen bg-orangePrimary">
        <div className="text-center">
          <p className="text-white font-bold text-[40px]">
            Products And Services
          </p>
        </div>
      </div>
      <div className="relative h-full py-32 px-52 w-full">
        <div className="w-[82%] rounded-xl h-[60%] right-24 bottom-16  bg-grey bg-opacity-50 absolute z-10"></div>
        <div className="border border-orangePrimary rounded-lg w-full h-full p-6 relative z-20">
          <p className="text-[24px] indent-20 p-10">
            Everything we sell, we can also install, We are your local auto
            electronics upgrades with certified and experienced technicians who
            work with all car brands and models. As a well known, certified auto
            electronic upgrades installer, we always strive for the highest
            quality and we treat every car as if it were our own. Our staff are
            experienced automotive technicians who can install any electronic
            upgrade in your car, whether it{"'"}s a dash cam, remote starter,
            backup camera or anything else.
          </p>
        </div>
      </div>

      <div className="h-full flex flex-col items-center gap-6 p-20">
        <div className="text-orangePrimary font-semibold text-[22px]">
          AVAILABLE PRODUCTS
        </div>
        <div className="mx-[20rem] grid grid-cols-3 gap-8 border-none ">
          <ImagePreviewCard image={"/images/service-images/image1.jpg"} />
          <ImagePreviewCard image={"/images/service-images/image1.jpg"} />
          <ImagePreviewCard image={"/images/service-images/image1.jpg"} />
          <ImagePreviewCard image={"/images/service-images/image1.jpg"} />
          <ImagePreviewCard image={"/images/service-images/image1.jpg"} />
          <ImagePreviewCard image={"/images/service-images/image1.jpg"} />
        </div>

        {/* <LinkButton name="See More" href={"offers/products"} /> */}
      </div>
      <div className=" px-16">
        <div className="items-center relative w-full flex flex-col">
          <hr className="w-full top-[50%] absolute border-orangePrimary border-t-[3px]" />
          <p className=" text-[30px] z-10 w-fit bg-black p-2 px-8">
            <span className="text-orangePrimary">TRUSTED</span> BRANDS
          </p>
        </div>
        <div className="h-[50vh] flex justify-center items-center gap-10 ">
          <BrandBalls />
          <BrandBalls />
          <BrandBalls />
          <BrandBalls />
          <BrandBalls />
        </div>
      </div>
      <div className="h-full flex flex-col items-center gap-6 p-20">
        <div className="text-orangePrimary text-[22px] font-semibold">
          AVAILABLE SERVICES
        </div>
        <div className="mx-[20rem] grid grid-cols-3 gap-8 border-none ">
          <ImagePreviewCard image={"/images/service-images/image1.jpg"} />
          <ImagePreviewCard image={"/images/service-images/image2.jpg"} />
          <ImagePreviewCard image={"/images/service-images/image3.jpg"} />
          <ImagePreviewCard image={"/images/service-images/image4.jpg"} />
          <ImagePreviewCard image={"/images/service-images/image5.jpg"} />
          <ImagePreviewCard image={"/images/service-images/image6.jpg"} />
        </div>

        <LinkButton name="Book Service" href={"/client/offers/services"} />
      </div>
    </div>
  );
};

export default Services;
