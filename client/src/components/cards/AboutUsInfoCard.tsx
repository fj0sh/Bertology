import Image from "next/image";
import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { MdPhoneAndroid } from "react-icons/md";

const AboutUsInfoCard = () => {
  return (
    <div className="p-6 md:p-10 w-full md:w-[80%] h-auto md:h-[25rem] text-white">
  <div className="flex flex-col gap-6 relative w-full h-full items-center">
    <div className="absolute top-5 font-semibold bg-orangePrimary w-[10rem] md:w-[15rem] border-none rounded-lg text-center p-2 text-black">
      INFORMATIONS
    </div>
    <div className="flex flex-col md:flex-row border mt-10 rounded-lg p-6 md:p-10 w-full h-full">
      
      {/* Payment Methods Section */}
      <div className="w-full md:w-1/3 flex flex-col items-center gap-4 md:gap-6">
        <div>PAYMENT METHODS:</div>
        <div className="text-center">
          <div className="flex justify-center gap-4 md:gap-6">
            <Image
              src={"/images/gcash-logo.png"}
              width={80}
              height={40}
              alt="gcash-logo"
            />
            <Image
              src={"/images/paymaya-logo.png"}
              width={90}
              height={30}
              alt="paymaya-logo"
            />
          </div>
          <p>Anon</p>
          <p>0909090909</p>
        </div>
        <div>Real Time Payment</div>
      </div>
      
      {/* Contact Info Section */}
      <div className="border-t md:border-t-0 md:border-l md:border-r mt-6 md:mt-0 gap-6 w-full md:w-1/3 flex flex-col items-center">
        <p>CONTACT INFO:</p>
        <div className="flex flex-col gap-4 md:gap-8">
          <div className="flex items-center gap-4 md:gap-6">
            <FaFacebook className="text-xl md:text-2xl" />
            <p>Test.facebook.com</p>
          </div>
          <div className="flex items-center gap-4 md:gap-6">
            <MdPhoneAndroid className="text-xl md:text-2xl" />
            <p>0909090909</p>
          </div>
          <div className="flex items-center gap-4 md:gap-6">
            <FiPhone className="text-xl md:text-2xl" />
            <p>912334</p>
          </div>
        </div>
      </div>
      
      {/* Empty Section */}
      <div className="w-full md:w-1/3"></div>
    </div>
  </div>
</div>

  );
};

export default AboutUsInfoCard;
