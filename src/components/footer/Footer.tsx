import Link from "next/link";
import React from "react";
import { FaFacebookMessenger, FaFacebookSquare } from "react-icons/fa";

type Props = {
  className?: string;
};

const Footer = (props: Props) => {
  return (
    <div className="flex w-full h-[20vh] bg-black *:p-5 text-[#FAF9F6] justify-center">
      <div className="flex flex-col items-center w-[34%] text-center">
        <div className="bg-orange h-[100px] w-[300px]"></div>
        <p className="font-bold">
          Get your car accessories installed now for free
        </p>
      </div>
      <div className="w-[34%] text-center flex flex-col">
        <span className=" font-bold">Useful Links</span>
        <Link href="#" className="">
          Products
        </Link>
        <Link href="#">Contacts Us Now!</Link>
        <Link href="#">Gallery</Link>
        <Link href="#">Home</Link>
      </div>
      <div className="w-[34%] text-center">
        <div>
          <p>Connnect with us now</p>
          <div className="flex justify-center gap-4">
            <FaFacebookSquare fontSize={"30px"} />
            <FaFacebookMessenger fontSize={"30px"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
