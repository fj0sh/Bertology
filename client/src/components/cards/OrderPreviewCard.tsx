import Image from "next/image";
import React from "react";

interface Props {
  customer: string;
  productName: string;
  price: number;
  date: string;
  address: string;
  image: string;
}

const OrderPreviewCard = (props: Props) => {
  const { customer, productName, price, date, address, image } = props;

  return (
    <div className="flex p-3 h-[10rem] text-white gap-4 w-full border border-orange">
      <div className="w-[10%]">
        <Image
          src={image}
          alt="image.1"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
          className="border-none rounded-lg"
        />
      </div>
      <div className="w-[40%] flex flex-col gap-3">
        <div>{customer}</div>
        <div>{productName}</div>
        <div>{price}</div>
      </div>
      <div className="w-[30%]">
        <div>{date}</div>
        <div>{address}</div>
      </div>
    </div>
  );
};

export default OrderPreviewCard;
