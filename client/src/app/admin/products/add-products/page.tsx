"use client";
import Button from "@/components/button";
import Dropdown from "@/components/input/DropDown";
import ImageUpload from "@/components/input/ImageUpload";
import InputOrange from "@/components/input/inputOrange";
import { TypeType } from "@/constants/Product-types";
import useProducts from "@/hooks/requests/useProducts";
import React, { useState } from "react";

const AddProducts = () => {
  const [productImage, setImage] = useState("");
  const [productName, setProductName] = useState("");
  const [productType, setProductType] = useState<number>(1);
  const [price, setPrice] = useState<number>(0);
  const [stocks, setStock] = useState<number>(0);
  const [description, setDescription] = useState("");

  const { addProduct, types } = useProducts("/products");

  const AddProduct = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    addProduct(
      productName,
      description,
      price,
      stocks,
      productType,
      productImage
    );

    setImage("");
    setProductName("");
    setProductType(1);
    setPrice(0);
    setStock(0);
    setDescription("");
  };

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
          {types && (
            <Dropdown<TypeType>
              options={types}
              title="Product Types"
              onSelect={(selected) => setProductType(selected.id)}
              getOptionLabel={(types) => types.type}
              getOptionKey={(types) => types.type}
            />
          )}
        </div>

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
        <div className="border-[2px] border-orange rounded-lg w-[35rem] h-[35rem]">
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
