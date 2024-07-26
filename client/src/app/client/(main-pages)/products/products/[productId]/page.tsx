"use client";
import Button from "@/components/button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

const ProductId = () => {
  const [quantity, setQuantity] = useState<number>(0);

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
      <div className="h-full">
        <Image
          src={"/images/test_images/roadblock.png"}
          height={500}
          width={700}
          alt="Image.1"
        ></Image>
      </div>
      <div className="h-[90%] w-full border-orange bg-black rounded-lg flex flex-col gap-12 p-16 text-white">
        <div className="flex flex-col items-center gap-6">
          <p className="font-semibold text-[30px]">Sleeping Reyver</p>
          <p className=" indent-10 text-justify text-[18px]">
            My boi Reyver Sleeping, tis gonna sell for a lot this is sum rare
            *?!& a once in a lifetime holy grail of today{"'"}s generation. It
            {"'"}s a sleek, stylish, and affordable sleeping reyver that
            perfectly fits your needs. This reyver is a one-of-a-kind, and it
            {"'"}s guaranteed to be the best sleeping reyver you{"'"}ve ever
            had. This reyver is perfect for people looking for a sleek, stylish,
            and affordable sleeping reyver. This reyver is perfect for people
            looking for a sleek, stylish, and affordable sleeping reyver.
          </p>
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
          <p>₱ 1,000,000</p>
        </div>
        <div className="flex gap-6 self-end justify-self-end">
          <Button title="Add to Cart" />
          <Button
            title="Checkout"
            onClick={() => router.push(`12/place-order`)}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductId;
