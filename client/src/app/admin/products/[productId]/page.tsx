"use client";
import { ProductType } from "@/constants/Products";
import instance from "@/lib/util/axios-instance";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const ProductId = ({ params }: { params: { productId: number } }) => {
  const [product, setProduct] = useState<ProductType | null>(null);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await instance.get(`/products/${params.productId}`);
        console.log(res.data);
        setProduct(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getProduct();
  }, [params.productId]);

  return (
    <div>
      {product && (
        <Image
          src={product.productImage || "/images/test_images/roadblock.png"}
          alt={product.productImage || "iamge.pngs"}
          height={300}
          width={300}
        ></Image>
      )}
    </div>
  );
};

export default ProductId;
