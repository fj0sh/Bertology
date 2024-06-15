"use client";
import ForgotPasswordModal from "@/components/Modals/ForgotPasswordModal";
import LoginModal from "@/components/Modals/LoginModal";
import RegisterModal from "@/components/Modals/RegisterModal";
import Button from "@/components/button";
import React, { useState } from "react";

const LandingPage = () => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState<boolean>(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] =
    useState<boolean>(false);

  // const openRegister = () => {
  //   setIsLoginModalOpen(false);
  //   setIsRegisterModalOpen(true);
  // };

  // const openLogin = () => {
  //   setIsLoginModalOpen(true);
  //   setIsRegisterModalOpen(false);
  // };

  const changeModal = () => {
    setIsLoginModalOpen((prev) => !prev);
    setIsRegisterModalOpen((prev) => !prev);
  };
  return (
    <>
      <div className="">
        <LoginModal
          isOpen={isLoginModalOpen}
          onClose={() => setIsLoginModalOpen(false)}
          openRegister={() => changeModal()}
        />
        <RegisterModal
          isOpen={isRegisterModalOpen}
          onClose={() => setIsRegisterModalOpen(false)}
          openLogin={() => changeModal()}
        />
        {/* <ForgotPasswordModal /> */}
        <div className="relative w-full h-[50vh] bg-zinc-800">
          {/* <Image
      src="/images/LandingImage.png"
      layout="fill"
      objectFit="cover"
      alt="Landing Image"
      className=""
      /> */}
          <div className="absolute inset-0 flex items-center justify-start space-x-4">
            <Button
              title="Login"
              className=" bg-orange-600 border-inherit rounded p-3"
              onClick={() => setIsLoginModalOpen(true)}
            />
            <Button
              title="Sign Up"
              className=" bg-orange-600 border-inherit rounded p-3"
              onClick={() => setIsRegisterModalOpen(true)}
            />
          </div>
        </div>
        <div className="h-[100vh] bg-slate-400">Book Now Section</div>
        <div className="h-[100vh] bg-black-100">
          <div className="flex justify-center h-[50%] bg-slate-900">
            Products Carousel
          </div>
          <div className="flex justify-center h-[50%] bg-slate-800">
            Service Carousel
          </div>
        </div>
        <div className="h-[30vh] bg-slate-400">Brand Section</div>
      </div>
    </>
  );
};

export default LandingPage;
