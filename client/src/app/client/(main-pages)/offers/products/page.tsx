"use client";
import ProductPreview from "@/components/cards/ProductPreview";
import { ProductType } from "@/constants/Products";
import useProducts from "@/hooks/requests/useProducts";
import React from "react";

const Products = () => {
  const { products } = useProducts<ProductType[]>("/products");
  console.log(products);

  return (
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
  );
};

export default Products;
