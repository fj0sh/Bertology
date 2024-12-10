import Image from "next/image";
import React from "react";

interface cardProps {}
const PaymentCard = () => {
  return (
    <div className="w-full h-full flex gap-4 p-2">
      <div className="w-[20%] p-2">{/* <Image></Image> */}</div>
      <div className="w-[80%]"></div>
    </div>
  );
};

export default PaymentCard;
