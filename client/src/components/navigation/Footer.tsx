import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebookMessenger, FaFacebookSquare } from "react-icons/fa";

type Props = {
  className?: string;
};

const Footer = (props: Props) => {
  return (
    <div className="flex w-full bg-black *:p-5 text-[#FAF9F6] justify-center items-center z-[9999999999999999999999999]">
      <div className="flex flex-col items-center w-[34%] gap-6 text-center">
        <Image
          src={"/images/transp_logov2.png"}
          alt={"Logo"}
          width={200}
          height={200}
        ></Image>
        <p className="font-bold">
          Get your car accessories installed with Bertology
        </p>
      </div>
      <div className="w-[34%] text-center flex flex-col text-[18px] gap-3">
        <span className="flex flex-col font-bold">Useful Links</span>
        <Link href="/" className="hover:text-orangeRed transition-all">
          Home
        </Link>
        <Link
          href="/client/about-us"
          className="hover:text-orangeRed transition-all"
        >
          About Us
        </Link>
        <Link
          href="/client/about-us#contactUs"
          className="hover:text-orangeRed transition-all"
        >
          Contacts Us{" "}
        </Link>
        <Link
          href="/client/offers"
          className="hover:text-orangeRed transition-all"
        >
          Services
        </Link>
      </div>
      <div className="w-[34%] text-center">
        <div className="flex flex-col gap-4">
          <p>Connnect with us now</p>
          <div className="flex justify-center gap-6">
            <Link
              href={"https://www.facebook.com/BossbertologyInstaller032402"}
            >
              <FaFacebookSquare
                fontSize={"40px"}
                className="hover:text-orangeRed transition-all"
              />
            </Link>

            <Link href={"https://www.messenger.com/t/107835038134226"}>
              <FaFacebookMessenger
                fontSize={"40px"}
                className="hover:text-orangeRed transition-all"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
