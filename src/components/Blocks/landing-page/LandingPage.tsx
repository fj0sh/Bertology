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
          <div className="absolute inset-0 flex items-center justify-start space-x-4 gap-5 p-5">
            <Button
              title="Login"
              className="bg-orange-600 border-inherit rounded p-2 text-[20px] w-[10rem] text-white"
              onClick={() => setIsLoginModalOpen(true)}
            />
            <Button
              title="Sign Up"
              className="bg-orange-600 border-inherit rounded p-2 text-[20px] w-[10rem] text-white"
              onClick={() => setIsRegisterModalOpen(true)}
            />
          </div>
        </div>
        <div className="h-[80vh] bg-zinc-950 flex">
          <div className="w-[50%]"></div>
          <div className="w-[50%] flex flex-col justify-center items-center gap-10 ">
            <p className="font-bold text-[50px] text-center w-[50rem] text-orange-500">
              Innovating for Effortless Planning and Resource Optimization"
            </p>
            <Button
              className="border border-none rounded-[5px] w-[10rem] bg-orange-500 p-3 text-white  "
              title="BOOK NOW"
            />
          </div>
        </div>
        <div className="bg-zinc-950 flex justify-center h-[50px] text-[25px]">
          <p className="text-white font-bold items-center">
            We give the right service and good quality products!
          </p>
        </div>
        <div className="h-[100vh] bg-black-100 ">
          <div className="flex justify-center h-[50%] bg-zinc-950">
            <p className="text-white">Products Carousel</p>
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
