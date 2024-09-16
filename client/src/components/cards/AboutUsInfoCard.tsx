import Image from "next/image";
import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { MdPhoneAndroid } from "react-icons/md";

const AboutUsInfoCard = () => {
  return (
    <div className="p-10 w-[80%] h-[25rem] text-white">
      <div className="flex flex-col gap-6 relative w-full h-full items-center">
        <div className="absolute top-5 font-semibold bg-orangePrimary w-[15rem] border-none rounded-lg text-center p-2 text-black">
          INFORMATIONS
        </div>
        <div className="flex border mt-10 rounded-lg p-10 w-full h-full ">
          <div className=" w-full flex flex-col items-center gap-6">
            <div>PAYMENT METHODS:</div>
            <div className="text-center">
              <div className="flex justify-center gap-6">
                <Image
                  src={"/images/gcash-logo.png"}
                  width={100}
                  height={50}
                  alt="gcash-logo"
                />
                <Image
                  src={"/images/paymaya-logo.png"}
                  width={120}
                  height={40}
                  alt="paymaya-logo"
                />
              </div>
              <p>Anon</p>
              <p>0909090909</p>
            </div>
            <div>Real Time Payment</div>
          </div>
          <div className="border-l border-r gap-10 w-full flex flex-col items-center">
            <p>CONTACT INFO:</p>
            <div className="flex flex-col gap-8">
              <div className="flex gap-6">
                <FaFacebook size={30} />
                <p>Test.facebook.com</p>
              </div>
              <div className="flex gap-6">
                <MdPhoneAndroid size={30} />
                <p>0909090909</p>
              </div>
              <div className="flex gap-6">
                <FiPhone size={30} />
                <p>912334</p>
              </div>
            </div>
          </div>
          <div className=" w-full"></div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsInfoCard;
