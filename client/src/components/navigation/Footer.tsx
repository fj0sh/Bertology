import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebookMessenger, FaFacebookSquare } from "react-icons/fa";

type Props = {
  className?: string;
};

const Footer = (props: Props) => {
  return (
<<<<<<< HEAD
    <div className="flex flex-col md:flex-row w-full bg-black p-6 md:p-5 text-[#FAF9F6] justify-center items-center z-[50]">
    {/* Section 1 */}
    <div className="flex flex-col items-center w-full md:w-[34%] gap-6 text-center mb-6 md:mb-0">
      <div className="bg-orangePrimary h-[100px] w-[300px]"></div>
      <p className="font-bold text-lg md:text-xl">
        Get your car accessories installed now for free
      </p>
    </div>
    
    {/* Section 2 */}
    <div className="w-full md:w-[34%] text-center flex flex-col text-base md:text-[18px] gap-3 mb-6 md:mb-0">
      <span className="flex flex-col font-bold">Useful Links</span>
      <Link href="#" className="">Product</Link>
      <Link href="#">Contacts Us Now!</Link>
      <Link href="#">Gallery</Link>
      <Link href="#">Home</Link>
    </div>
    
    {/* Section 3 */}
    <div className="w-full md:w-[34%] text-center">
      <div className="flex flex-col gap-4">
        <p>Connect with us now</p>
        <div className="flex justify-center gap-6">
          <Link href="https://www.facebook.com/BossbertologyInstaller032402">
            <FaFacebookSquare className="text-3xl md:text-4xl" />
          </Link>
          <Link href="https://www.messenger.com/t/107835038134226">
            <FaFacebookMessenger className="text-3xl md:text-4xl" />
          </Link>
=======
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
>>>>>>> 342f09527df98eed55bf6cf9ed1e0aa2f47d7691
        </div>
      </div>
    </div>
  </div>
  
  );
};

export default Footer;
