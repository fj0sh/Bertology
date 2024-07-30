import Button from "@/components/button";
import Dropdown from "@/components/input/DropDown";
import InputOrange from "@/components/input/inputOrange";
import Image from "next/image";
import React from "react";

const AddProducts = () => {
  return (
    <div className="h-full border border-orange rounded-lg p-10 flex gap-10 ">
      <div className=" w-1/2 h-full flex flex-col gap-4">
        <InputOrange label="Product Name:" />
        {/* <Dropdown/> */}
        <InputOrange label="Product Type" />
        <InputOrange label="Price:" />
        <InputOrange label="Stock:" />
        <p className="text-white text-[18px]">Description:</p>
        <textarea className="bg-background resize-none rounded-lg border border-orange w-full h-full"></textarea>
      </div>
      <div className=" w-1/2 h-full flex flex-col gap-14 items-center justify-center">
        <div className="border border-orange rounded-lg w-[35rem] h-[35rem]">
          <Image
            src={"/images/test_images/roadblock.png"}
            alt="image.1"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "100%" }}
            className="relative border-none rounded-lg opacity-0 hover:opacity-100 transition duration-[5s]"
          />
        </div>
        <div className="flex justify-center gap-20 w-full">
          <Button title="Cancel" />
          <Button title="Save" />
        </div>
      </div>
    </div>
  );
};

export default AddProducts;
