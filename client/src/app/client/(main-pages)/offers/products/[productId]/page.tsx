"use client";
import Button from "@/components/button";
import { ProductType } from "@/constants/Products";
import useFetchData from "@/hooks/fetcher/useFetchData";
import instance from "@/lib/util/axios-instance";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

const ProductId = ({ params }: { params: { productId: number } }) => {
  const [quantity, setQuantity] = useState<number>(0);

  const { data } = useFetchData(`/products/${params.productId}`);

  const router = useRouter();

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    if (value >= 0) {
      setQuantity(value);
    }
  };

  const handleQuantityDecrease = () => {
    if (quantity <= 0) {
      setQuantity((prevQuantity) => prevQuantity + 1);
    }
    setQuantity((prevQuantity) => prevQuantity - 1);
  };
  const handleQuantityIncrease = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  return (
    <div className="flex h-screen w-full p-20 gap-32">
      <div className="h-full w-[40%] flex justify-center items-start">
        {data && (
          <Image
            src={data?.productImage}
            height={300}
            width={500}
            alt="Image.1"
          ></Image>
        )}
      </div>
      <div className="h-[90%] w-[60%] border-orange bg-black rounded-lg flex flex-col gap-12 p-16 text-white">
        <div className="flex flex-col items-center gap-6">
          <p className="font-semibold text-[30px]">{data?.productName}</p>
          <p className="text-center text-[18px]">{data?.description}</p>
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-[22px]">Quantity:</p>
          <div className="h-full flex">
            <button
              className="bg-white p-2 text-black rounded-tl-lg rounded-bl-lg hover:text-orange"
              onClick={handleQuantityDecrease}
            >
              <FaMinus size={20} />
            </button>
            <input
              type="number"
              className="border-none h-10 text-black text-center font-bold w-[10rem] focus:outline-none"
              value={quantity}
              onChange={handleQuantityChange}
            />
            <button
              className="bg-white p-2 text-black rounded-tr-lg rounded-br-lg hover:text-orange"
              onClick={handleQuantityIncrease}
            >
              <FaPlus size={20} />
            </button>
          </div>
        </div>
        <div className="border border-orange rounded-lg text-orange p-3 w-[15%] font-semibold">
          <p>{data?.price}</p>
        </div>
        <div className="flex gap-6 self-end justify-self-end">
          <Button title="Add to Cart" />
          <Button
            title="Checkout"
            onClick={() => router.push(`${params.productId}/place-order`)}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductId;
