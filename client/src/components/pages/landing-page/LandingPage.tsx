"use client";
import ForgotPasswordModal from "@/components/Modals/ForgotPasswordModal";
import LoginModal from "@/components/Modals/LoginModal";
import RegisterModal from "@/components/Modals/RegisterModal";
import Button from "@/components/button/OrangeButton";
import ImageCarousel from "@/components/cards/carousel/ImageCarousel";
import Navbar from "@/components/navigation/navbar";
import { ProductType } from "@/constants/Products";
import useProducts from "@/hooks/requests/useProducts";
import useServices from "@/hooks/requests/useServices";
import Link from "next/link";

import React, { useState } from "react";

const LandingPage = () => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState<boolean>(false);
  const [isForgotPassOpen, setIsForgotPassOpen] = useState<boolean>(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] =
    useState<boolean>(false);

  const { products } = useProducts<ProductType[]>("/products");
  const { services } = useServices();

  const servicesImage = services?.map((services) => {
    return services.image;
  });

  const ProductImages = products?.map((images) => {
    return images.productImage;
  });

  const changeModal = () => {
    setIsLoginModalOpen((prev) => !prev);
    setIsRegisterModalOpen((prev) => !prev);
  };

  const openForgotPassModal = () => {
    setIsForgotPassOpen(true);
    setIsLoginModalOpen(false);
  };

  return (
    <>
      <div className="bg-background mt-16">
        <Navbar />
        <LoginModal
          isOpen={isLoginModalOpen}
          onClose={() => setIsLoginModalOpen(false)}
          openRegister={() => changeModal()}
          openForgotPassword={openForgotPassModal}
        />
        <RegisterModal
          isOpen={isRegisterModalOpen}
          onClose={() => setIsRegisterModalOpen(false)}
          openLogin={() => changeModal()}
        />

        <ForgotPasswordModal
          isOpen={isForgotPassOpen}
          onClose={() => setIsForgotPassOpen(false)}
        />

        {/* ============================================HERO SECTION =======================================================================*/}

        <div className=" flex w-full bg-opacity-85">
          <div className="w-1/2 h-full"></div>
          <div className="w-1/2 h-full flex flex-col items-center justify-center gap-10">
            <div className="text-[60px] font-bold text-white text-center w-[40rem]">
              Innovating for <br /> Effortless
              <span className="text-orangePrimary"> Planning</span>
              <br /> and Resource <br />
              <span className="text-orangePrimary"> Optimization</span>
            </div>
            <div className="flex gap-[15rem]">
              <Button
                title="Login"
                fontSize="26px"
                width="12rem"
                onClick={() => setIsLoginModalOpen(true)}
              />
              <Button
                title="Sign Up"
                fontSize="26px"
                width="12rem"
                onClick={() => setIsRegisterModalOpen(true)}
              />
            </div>
          </div>
        </div>

        {/* ============================================BOOK NOW SECTION =======================================================================*/}

        <div className="relative p-[3rem] flex flex-col items-center gap-4 text-white">
          <p className="font-bold text-[30px]">
            We give the right service and good quality products
          </p>
          <p className="text-[20px]">Palit na mo ayaw mo pa jorge2</p>
        </div>

        {/* ============================================IMAGE CAROUSEL SECTION =======================================================================*/}

        <div className="bg-opacity-70 flex flex-col items-center gap-12">
          <div className="flex flex-col items-center text-white text-[30px] h-[50%] w-[80%] gap-8">
            <p className="self-start font-bold">Installation</p>
            <div className="h-full w-full gap-3 flex flex-col justify-center items-center">
              <ImageCarousel images={servicesImage} />
              <Link
                href={"/client/offers"}
                className="text-orangePrimary self-end text-[20px] underline"
              >
                See More
              </Link>
            </div>
          </div>
          <div className="flex flex-col items-center text-white text-[30px] h-[50%] w-[80%] gap-8">
            <p className="self-start font-bold">Products</p>
            <div className="h-full w-full gap-3 flex flex-col justify-center items-center">
              <ImageCarousel images={ProductImages} />
            </div>{" "}
            <Link
              href={"/client/offers"}
              className="text-orangePrimary self-end text-[20px] underline"
            >
              See More
            </Link>
          </div>
        </div>

        {/* ============================================BRAND SECTION =======================================================================*/}

        <div className="relative h-full p-20"></div>
      </div>
    </>
  );
};

export default LandingPage;
