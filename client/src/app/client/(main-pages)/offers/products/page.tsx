"use client";
import ProductPreview from "@/components/cards/ProductPreview";
import { ProductType } from "@/constants/Products";
import useFetchData from "@/hooks/fetcher/useFetchData";
import Image from "next/image";
import React from "react";

const Products = () => {
  const { data, error, loading } = useFetchData<ProductType[]>("/products");

  console.log(data);

  return (
    <div className="grid grid-cols-4 gap-6 place-items-center p-20 px-40">
      {data?.map((product) => (
        <ProductPreview
          image={product.productImage}
          name={product.productName}
          price={product.price}
          key={product.productId}
          href={`products/${product.productId}`}
        />
      ))}
    </div>
  );
};

export default Products;
