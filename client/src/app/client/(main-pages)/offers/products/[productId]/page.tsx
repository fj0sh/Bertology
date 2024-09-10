"use client";
import Button from "@/components/button/OrangeButton";
import { ProductType } from "@/constants/Products";
import useProducts from "@/hooks/requests/useProducts";
import { formatter } from "@/lib/function/currencyFormatter";
import instance from "@/lib/util/axios-instance";
import { useUser } from "@/providers/UserProvider";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

const ProductId = ({ params }: { params: { productId: number } }) => {
  const [quantity, setQuantity] = useState<number>(0);
  const { products } = useProducts<ProductType>(
    `/products/${params.productId}`
  );
  const router = useRouter();
  const { user } = useUser();

  console.log(user?.id);
  console.log(products);

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
    if (products) {
      if (quantity >= products?.stocks) {
        setQuantity((prevQuantity) => prevQuantity - 1);
      }
      setQuantity((prevQuantity) => prevQuantity + 1);
    }
  };

  const addToCart = async () => {
    try {
      const res = await instance.post(`/cart/${params.productId}`, {
        userId: user?.id,
      });
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex h-screen w-full p-20 gap-32">
      <div className="h-full w-[40%] flex justify-center items-start">
        {products && (
          <Image
            src={products?.productImage}
            height={500}
            width={500}
            alt="Image.1"
          ></Image>
        )}
      </div>
      <div className="h-[90%] w-[60%] border-orange bg-black rounded-lg flex flex-col gap-12 p-16 text-white">
        <div className="flex flex-col items-center gap-6">
          <p className="font-semibold text-[30px]">{products?.productName}</p>
          <p className="text-center text-[18px]">{products?.description}</p>
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
          <p className="text-[15px] opacity-70">Stock/s: {products?.stocks}</p>
        </div>
        <div className="border border-orange rounded-lg text-orange p-3 w-[10rem] font-semibold">
          <p>₱ {products && formatter(products?.price)}</p>
        </div>
        <div className="flex gap-6 self-end justify-self-end">
          <Button title="Add to Cart" onClick={() => addToCart()} />
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
