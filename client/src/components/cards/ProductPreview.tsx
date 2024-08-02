import { formatter } from "@/lib/function/currencyFormatter";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  image: string;
  name: string;
  price: number;
  href: string;
  type: string;
}

const ProductPreview = (props: Props) => {
  const { image, name, price, href, type } = props;

  return (
    <Link href={href} className="flex flex-col w-[18rem] h-[20rem] shadow-lg">
      <div className=" flex justify-center items-center">
        <Image
          src={image}
          alt="img"
          height={0}
          width={0}
          sizes="100%"
          style={{ width: "100%", height: "250px" }}
        />
      </div>
      <div className="p-4 text-white text-center flex flex-col items-center justify-center bg-grey h-full">
        <p className="text-[20px] font-semibold line-clamp-1 text-wrap">
          {name}
        </p>
        <p className="text-[12px] opacity-60">{type}</p>
        <p className="flex items-center gap-[3px]">
          <span className="text-[22px]">₱ </span>
          {formatter(price)}
        </p>
      </div>
    </Link>
  );
};

export default ProductPreview;
