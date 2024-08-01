"use client";
import Button from "@/components/button";
import Dropdown from "@/components/input/DropDown";
import ImageUpload from "@/components/input/ImageUpload";
import InputOrange from "@/components/input/inputOrange";
import instance from "@/lib/util/axios-instance";
import Image from "next/image";
import React, { useEffect, useState } from "react";

interface TypeType {
  id: number;
  type: string;
}

const AddProducts = () => {
  const [productImage, setImage] = useState("");
  const [productName, setProductName] = useState("");
  const [productType, setProductType] = useState<number | null>(null);
  const [price, setPrice] = useState<number>();
  const [stocks, setStock] = useState<number>();
  const [description, setDescription] = useState("");
  const [types, setTypes] = useState<TypeType[]>([]);

  const AddProduct = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const body = {
      productName,
      description,
      price,
      stocks,
      productType,
      productImage,
    };

    console.log(body);

    try {
      const res = await instance.post("/products/add-product", body);
      console.log(res.data);
      setImage("");
      setProductName("");
      setDescription("");
      setProductType(0);
      setPrice(0);
      setStock(0);
    } catch (error) {
      console.log(error);
    }
  };

  const getType = async () => {
    try {
      const res = await instance.get("/products/get-types");
      setTypes(res.data);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getType();
  }, []);

  return (
    <form
      className="h-full border border-orange rounded-lg p-10 flex gap-10 "
      onSubmit={AddProduct}
    >
      <div className=" w-1/2 h-full flex flex-col gap-4 text-white">
        <InputOrange
          label="Product Name:"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        />
        <div className="text-black flex flex-col gap-3 w-[18rem]">
          <p className="text-white text-[18px]">Product Type:</p>
          <Dropdown<TypeType>
            options={types}
            title="Product Types"
            onSelect={(selected) => setProductType(selected.id)}
            getOptionLabel={(types) => types.type}
            getOptionKey={(types) => types.type}
          />
        </div>

        {/* <InputOrange
            label="Product Type"
            value={productType}
            onChange={(e) => setProductType(e.target.value)}
          /> */}
        <InputOrange
          label="Price:"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <InputOrange
          label="Stock:"
          value={stocks}
          onChange={(e) => setStock(e.target.value)}
        />
        <p className="text-white text-[18px]">Description:</p>
        <textarea
          className="bg-background resize-none rounded-lg border border-orange w-full h-full p-2"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        ></textarea>
      </div>
      <div className=" w-1/2 h-full flex flex-col gap-14 items-center justify-center">
        <div className="border border-orange rounded-lg w-[35rem] h-[35rem]">
          <ImageUpload
            value={productImage}
            onChange={(value) => setImage(value)}
          />
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
