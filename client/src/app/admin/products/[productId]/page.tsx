"use client";
import Button from "@/components/button";
import Dropdown from "@/components/input/DropDown";
import ImageUpload from "@/components/input/ImageUpload";
import InputOrange from "@/components/input/inputOrange";
import { TypeType } from "@/constants/Product-types";
import { ProductType } from "@/constants/Products";
import useProducts from "@/hooks/requests/useProducts";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const ProductId = ({ params }: { params: { productId: number } }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState("");
  const [newType, setNewType] = useState(0);
  const [newDescription, setNewDescription] = useState("");
  const [newPrice, setNewPrice] = useState(0);
  const [newStocks, setNewStocks] = useState(0);
  const [newImage, setNewImage] = useState("");

  const { editProduct, types, products } = useProducts<ProductType>(
    `/products/${params.productId}`
  );

  useEffect(() => {
    if (products) {
      setNewName(products.productName);
      setNewType(0);
      setNewDescription(products.description);
      setNewPrice(products.price);
      setNewStocks(products.stocks);
      setNewImage(products.productImage);
    }
  }, [products]);

  const editProductHandler = () => {
    setIsEditing((prev) => !prev);
  };

  const saveEdit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (newImage === "") {
      setNewImage("/images/empty-image.png");
    }
    editProduct(
      params.productId,
      newName,
      newDescription,
      newPrice,
      newStocks,
      newType,
      newImage
    );
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
      {products && (
        <div className="border border-orange p-10">
          <form className="flex flex-col gap-6" onSubmit={saveEdit}>
            {isEditing ? (
              <div className="h-[20rem] w-[20rem]">
                <ImageUpload
                  value={newImage == "" ? products.productImage : newImage}
                  onChange={(value) => setNewImage(value)}
                />
              </div>
            ) : (
              <Image
                src={products.productImage}
                height={0}
                width={0}
                sizes="100vw"
                alt={products.productName}
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
                <p className="p-2">{products.productName}</p>
              )}
              {isEditing ? (
                <InputOrange
                  type="text"
                  value={newDescription}
                  onChange={(e) => setNewDescription(e.target.value)}
                />
              ) : (
                <p className="p-2">{products.description}</p>
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
                <p className="p-2">{products.type}</p>
              )}
              {isEditing ? (
                <InputOrange
                  type="text"
                  value={newPrice}
                  onChange={(e) => setNewPrice(e.target.value)}
                />
              ) : (
                <p className="p-2">{products.price}</p>
              )}
              {isEditing ? (
                <InputOrange
                  type="text"
                  value={newStocks}
                  onChange={(e) => setNewStocks(e.target.value)}
                />
              ) : (
                <p className="p-2">{products.stocks}</p>
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
