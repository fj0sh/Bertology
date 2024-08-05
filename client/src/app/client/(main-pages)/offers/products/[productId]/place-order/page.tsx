"use client";
import Button from "@/components/button";
import InputOrange from "@/components/input/inputOrange";
import Image from "next/image";
import React from "react";

const PlaceOrder = ({ params }: { params: { productId: number } }) => {
  return (
    <div className="flex justify-center gap-14 h-screen p-20">
      <div className="border-orange border w-[30%] rounded-lg gap-6 p-10 flex flex-col items-center h-full">
        <Image
          src={"/images/test_images/roadblock.png"}
          alt="image.1"
          height={300}
          width={350}
        />
        <div className="text-orange flex flex-col items-center gap-3">
          <p className="font-semibold text-[25px]">Sleeping Reyver</p>
          <p>₱ 1,000,000</p>
        </div>
        <p className=" text-white">00/00/00</p>
      </div>

      <div className="border-orange border w-[40%] rounded-lg  p-10">
        <form action="" className="flex flex-col gap-3 h-full text-white">
          <div className="flex gap-3">
            <InputOrange label="First Name:" />
            <InputOrange label="Last Name:" />
          </div>
          <InputOrange label="Phone Number:" />
          <InputOrange label="Address:  " />
          <div className="h-full">
            <p className="text-white text-[18px] mb-2">
              Additional Description:
            </p>
            <textarea className="border border-orange bg-background resize-none rounded-lg w-full h-[90%] p-3"></textarea>
          </div>

          <div className="self-center">
            <Button title="Add"></Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PlaceOrder;
