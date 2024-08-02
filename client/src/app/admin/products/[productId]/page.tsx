"use client";
import Button from "@/components/button";
import ImageUpload from "@/components/input/ImageUpload";
import { ProductType } from "@/constants/Products";
import useFetchData from "@/hooks/fetcher/useFetchData";
import instance from "@/lib/util/axios-instance";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const ProductId = ({ params }: { params: { productId: number } }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newImage, setNewImage] = useState("");

  const { data: product } = useFetchData<ProductType>(
    `/products/${params.productId}`
  );

  const editProductHandler = () => {
    setIsEditing((prev) => !prev);
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
        <div className="border border-orange">
          <div>
            {isEditing ? (
              <ImageUpload
                value={newImage == "" ? product.productImage : newImage}
                onChange={(value) => setNewImage(value)}
              />
            ) : (
              <Image
                src={product.productImage}
                height={0}
                width={0}
                sizes="100vw"
                alt={product.productName}
                style={{ width: "100%", height: "100%" }}
              />
            )}
            <div>
              {isEditing ? (
                <input type="text" value={product.productName} />
              ) : (
                <p>{product.productName}</p>
              )}
              <p>{product.type}</p>
            </div>
          </div>
          <div></div>
        </div>
      )}
    </div>
  );
};

export default ProductId;
