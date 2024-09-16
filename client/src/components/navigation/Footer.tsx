import Link from "next/link";
import React from "react";
import { FaFacebookMessenger, FaFacebookSquare } from "react-icons/fa";

type Props = {
  className?: string;
};

const Footer = (props: Props) => {
  return (
    <div className="flex w-full bg-black *:p-5 text-[#FAF9F6] justify-center items-center">
      <div className="flex flex-col items-center w-[34%] gap-6 text-center">
        <div className="bg-orangePrimary h-[100px] w-[300px]"></div>
        <p className="font-bold">
          Get your car accessories installed now for free
        </p>
      </div>
      <div className="w-[34%] text-center flex flex-col text-[18px] gap-3">
        <span className="flex flex-col font-bold">Useful Links</span>
        <Link href="#" className="">
          Product
        </Link>
        <Link href="#">Contacts Us Now!</Link>
        <Link href="#">Gallery</Link>
        <Link href="#">Home</Link>
      </div>
      <div className="w-[34%] text-center">
        <div className="flex flex-col gap-4">
          <p>Connnect with us now</p>
          <div className="flex justify-center gap-6">
            <FaFacebookSquare fontSize={"40px"} />
            <FaFacebookMessenger fontSize={"40px"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
