"use client";
import Button from "@/components/button";
import Dropdown from "@/components/input/DropDown";
import ImageUpload from "@/components/input/ImageUpload";
import InputOrange from "@/components/input/inputOrange";
import Image from "next/image";
import React, { useState } from "react";

const AddProducts = () => {
  const [image, setImage] = useState("");
  const [productName, setProductName] = useState("");
  const [productType, setProductType] = useState("");
  const [price, setPrice] = useState(0);
  const [stock, setStock] = useState(0);
  const [description, setDescription] = useState("");

  return (
    <form className="h-full border border-orange rounded-lg p-10 flex gap-10 ">
      <div className=" w-1/2 h-full flex flex-col gap-4 text-white">
        <InputOrange
          label="Product Name:"
          onChange={(e) => setProductName(e.target.value)}
        />
        {/* <Dropdown/> */}
        <InputOrange
          label="Product Type"
          onChange={(e) => setProductType(e.target.value)}
        />
        <InputOrange
          label="Price:"
          onChange={(e) => setPrice(e.target.value)}
        />
        <InputOrange
          label="Stock:"
          onChange={(e) => setStock(e.target.value)}
        />
        <p className="text-white text-[18px]">Description:</p>
        <textarea
          className="bg-background resize-none rounded-lg border border-orange w-full h-full p-2"
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
      </div>
      <div className=" w-1/2 h-full flex flex-col gap-14 items-center justify-center">
        <div className="border border-orange rounded-lg w-[35rem] h-[35rem]">
          <ImageUpload value={image} onChange={(value) => setImage(value)} />
        </div>
        <div className="flex justify-center gap-20 w-full">
          <Button title="Cancel" />
          <Button title="Save" />
        </div>
      </div>
    </form>
  );
};

export default AddProducts;
