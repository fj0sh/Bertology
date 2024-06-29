"use client";
import ForgotPasswordModal from "@/components/Modals/ForgotPasswordModal";
import LoginModal from "@/components/Modals/LoginModal";
import RegisterModal from "@/components/Modals/RegisterModal";
import Button from "@/components/button";
import ImageCarousel from "@/components/carousel/ImageCarousel";
import Navbar from "@/components/navbar/navbar";
import React, { useState } from "react";
import { BiSolidCarMechanic } from "react-icons/bi";
import { MdShoppingCart } from "react-icons/md";

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
        <Navbar />
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

        {/* ============================================HERO SECTION =======================================================================*/}

        <div className="relative w-full h-[70vh] bg-black bg-opacity-85">
          {/* <Image
            src="/images/LandingImage.png"
            layout="fill"
            objectFit="cover"
            alt="Landing Image"
            className=""
          /> */}
          <div className="absolute inset-0 flex items-center justify-start space-x-4 gap-5 p-5 ml-16">
            <Button title="Login" onClick={() => setIsLoginModalOpen(true)} />
            <Button
              title="Sign Up"
              onClick={() => setIsRegisterModalOpen(true)}
            />
          </div>
        </div>

        {/* ============================================BOOK NOW SECTION =======================================================================*/}

        <div className="h-[80vh] bg-black bg-opacity-70 flex">
          <div className="w-[50%]"></div>
          <div className="w-[50%] flex flex-col justify-center items-center gap-10 ">
            <p className="font-bold text-[50px] text-center w-[50rem] text-orange-500">
              Innovating for Effortless Planning and Resource Optimization
            </p>
            <Button title="BOOK NOW" width="200px" />
          </div>
        </div>
        <div className="bg-black bg-opacity-90 flex justify-center items-start h-[100px] text-[25px]">
          <p className="text-white font-bold items-center">
            We give the right service and good quality products!
          </p>
        </div>

        {/* ============================================IMAGE CAROUSEL SECTION =======================================================================*/}

        <div className="h-[100vh] bg-black bg-opacity-70 ">
          <div className="flex flex-col items-center h-[50%] bg-zinc-950">
            <div className="flex justify-center gap-3 border-none bg-orange-500 p-2 rounded-[5px]">
              <BiSolidCarMechanic className=" self-center text-[25px]" />
              <p className="font-bold">Installation</p>
            </div>
            <div className="h-full">
              <ImageCarousel></ImageCarousel>
            </div>
          </div>
          <div className="flex flex-col items-center h-[50%] bg-zinc-950">
            <div className="flex justify-center gap-3 border-none bg-orange-500 p-2 rounded-[5px]">
              <MdShoppingCart className=" self-center text-[25px]" />
              <p className="font-bold">Products</p>
            </div>
            <div className="h-full">
              <ImageCarousel></ImageCarousel>
            </div>
          </div>
        </div>

        {/* ============================================BRAND SECTION =======================================================================*/}

        <div className="h-[30vh] bg-slate-400">Brand Section</div>
      </div>
    </>
  );
};

export default LandingPage;
