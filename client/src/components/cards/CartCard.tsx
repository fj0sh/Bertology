import Image from "next/image";
import React from "react";

interface Props {
  productName: string;
  price: string;
  productImage: string;
  productType: string;
  stocks: number;
}

const CartCard = (props: Props) => {
  const { productName, price, productImage, productType, stocks } = props;

  return (
    <div className="border border-orangePrimary rounded-lg w-full h-[10rem] flex">
      <div className=" w-[50%] flex p-2 gap-6">
        <div className="relative p-10 w-[50%]">
          <Image
            src="/images/empty-image.png"
            alt="Product Image"
            layout="fill"
            className="rounded-lg"
          />
        </div>
        <div className="flex flex-col text-[18px] gap-6 justify-between py-[1rem]">
          <p>{productName}</p>
          <div>
            <p>{stocks}</p>
            <p>{productType}</p>
          </div>
          <p>Price: {price}</p>
        </div>
      </div>
      <div className="flex flex-col justify-center p-2 w-[50%]"></div>
    </div>
  );
};

export default CartCard;
