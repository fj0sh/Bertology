"use client";
import ProductPreview from "@/components/cards/ProductPreview";
import { ProductType } from "@/constants/Products";
import useProducts from "@/hooks/requests/useProducts";
import React from "react";

const Products = () => {
  const { products } = useProducts<ProductType[]>("/products");
  console.log(products);

  return (
    <>
      <div className="flex ">
        <div className="w-full h-full"></div>
        <div className="flex text-white w-full h-full items-center justify-center">
          <p className="text-[30px] font-bold">
            We assure to serve high
            <span className="text-orangePrimary"> Quality</span> and
            <span className="text-orangePrimary"> Valuable </span>Products .
          </p>
        </div>
      </div>
      <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-1  gap-20 place-items-center p-20 px-40">
        {products?.map((product) => (
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
    </>
  );
};

export default Products;
