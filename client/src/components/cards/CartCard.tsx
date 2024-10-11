import Image from "next/image";
import React from "react";

interface Props {
  productName: string;
  price: number;
  productImage: string;
  productType: string;
  stocks: number;
}

const CartCard = (props: Props) => {
  const { productName, price, productImage, productType, stocks } = props;

  return (
    <div className="border border-orangePrimary rounded-lg w-full h-[10rem] flex text-white">
      <div className=" w-full flex p-2 gap-6">
        <div className="relative p-2 w-[25%]">
          <Image
            src={productImage}
            alt="Product Image"
            width={100}
            height={100}
            className="rounded-lg"
          />
        </div>
        <div className="flex w-full flex-col text-[18px] gap-6 justify-between py-[1rem]">
          <div>
            <p>{productName}</p>
            <p>{stocks}</p>
          </div>
          <div>
            <p>{productType}</p>
            <p>Price: {price}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
