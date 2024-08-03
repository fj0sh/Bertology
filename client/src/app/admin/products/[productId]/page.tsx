"use client";
import Button from "@/components/button";
import Dropdown from "@/components/input/DropDown";
import ImageUpload from "@/components/input/ImageUpload";
import InputOrange from "@/components/input/inputOrange";
import { TypeType } from "@/constants/Product-types";
import { ProductType } from "@/constants/Products";
import useFetchData from "@/hooks/fetcher/useFetchData";
import instance from "@/lib/util/axios-instance";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const ProductId = ({ params }: { params: { productId: number } }) => {
  const [isEditing, setIsEditing] = useState(false);

  const { data: product } = useFetchData<ProductType>(
    `/products/${params.productId}`
  );

  const { data: types } = useFetchData<TypeType[]>("/products/get-types");

  const [newName, setNewName] = useState("");
  const [newType, setNewType] = useState(0);
  const [newDescription, setNewDescription] = useState("");
  const [newPrice, setNewPrice] = useState(0);
  const [newStocks, setNewStocks] = useState(0);
  const [newImage, setNewImage] = useState("");

  useEffect(() => {
    if (product) {
      setNewName(product.productName);
      setNewType(0);
      setNewDescription(product.description);
      setNewPrice(product.price);
      setNewStocks(product.stocks);
    }
  }, [product]);

  const editProductHandler = () => {
    setIsEditing((prev) => !prev);
  };

  const saveEdit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const body = {
      productName: newName,
      description: newDescription,
      price: newPrice,
      stocks: newStocks,
      productType: newType,
      productImage: newImage,
    };

    try {
      await instance.patch(
        `/products/update-product/${params.productId}`,
        body
      );

      console.log(body);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col gap-8">
      <div className="self-end">
        <Button
          title="Edit Product Details"
          width="13rem"
          height="2rem"
          fontSize="18px"
          onClick={() => editProductHandler()}
        />
      </div>
      {product && (
        <div className="border border-orange p-10">
          <form className="flex flex-col gap-6" onSubmit={saveEdit}>
            {isEditing ? (
              <div className="h-[20rem] w-[20rem]">
                <ImageUpload
                  value={newImage == "" ? product.productImage : newImage}
                  onChange={(value) => setNewImage(value)}
                />
              </div>
            ) : (
              <Image
                src={product.productImage}
                height={0}
                width={0}
                sizes="100vw"
                alt={product.productName}
                style={{ width: "20rem", height: "20rem" }}
              />
            )}
            <div className="text-white flex flex-col gap-4">
              {isEditing ? (
                <InputOrange
                  type="text"
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                />
              ) : (
                <p className="p-2">{product.productName}</p>
              )}
              {isEditing ? (
                <InputOrange
                  type="text"
                  value={newDescription}
                  onChange={(e) => setNewDescription(e.target.value)}
                />
              ) : (
                <p className="p-2">{product.description}</p>
              )}
              {isEditing && types ? (
                <Dropdown<TypeType>
                  options={types}
                  title="Product Types"
                  onSelect={(selected) => setNewType(selected.id)}
                  getOptionLabel={(types) => types.type}
                  getOptionKey={(types) => types.type}
                />
              ) : (
                <p className="p-2">{product.type}</p>
              )}
              {isEditing ? (
                <InputOrange
                  type="text"
                  value={newPrice}
                  onChange={(e) => setNewPrice(e.target.value)}
                />
              ) : (
                <p className="p-2">{product.price}</p>
              )}
              {isEditing ? (
                <InputOrange
                  type="text"
                  value={newStocks}
                  onChange={(e) => setNewStocks(e.target.value)}
                />
              ) : (
                <p className="p-2">{product.stocks}</p>
              )}
            </div>
            {isEditing && <Button title="Save Edit" />}
          </form>
          <div></div>
        </div>
      )}
    </div>
  );
};

export default ProductId;
