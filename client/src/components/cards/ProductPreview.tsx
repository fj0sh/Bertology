import { formatter } from "@/lib/function/currencyFormatter";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  image: string;
  name: string;
  price: number;
  href: string;
}

const ProductPreview = (props: Props) => {
  const { image, name, price, href } = props;

  return (
    <Link
      href={href}
      className="w-[18rem] h-[20rem] flex flex-col border border-orange"
    >
      <div className="p-3 flex justify-center items-center">
        <Image
          src={image}
          alt="img"
          height={0}
          width={0}
          sizes="100%"
          style={{ width: "200px", height: "200px" }}
        />
      </div>
      <div className="p-4 text-white text-center flex flex-col items-center justify-center">
        <p>{name}</p>
        <p className="flex items-center gap-[3px]">
          <span className="text-[22px]">₱ </span>
          {formatter(price)}
        </p>
      </div>
    </Link>
  );
};

export default ProductPreview;
