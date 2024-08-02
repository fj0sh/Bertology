"use client";
import ProductPreview from "@/components/cards/ProductPreview";
import Dropdown from "@/components/input/DropDown";
import { ProductType } from "@/constants/Products";
import useFetchData from "@/hooks/fetcher/useFetchData";
import React from "react";

const Products = () => {
  const { data, error, loading } = useFetchData<ProductType[]>("/products");

  console.log(data);

  return (
    <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-1  gap-20 place-items-center p-20 px-40">
      {/* <Dropdown/> */}
      {data?.map((product) => (
        <ProductPreview
          image={product.productImage}
          name={product.productName}
          price={product.price}
          key={product.productId}
          type={product.type}
          href={`products/${product.productId}`}
        />
      ))}
    </div>
  );
};

export default Products;
