"use client";
import ForgotPasswordModal from "@/components/Modals/ForgotPasswordModal";
import LoginModal from "@/components/Modals/LoginModal";
import RegisterModal from "@/components/Modals/RegisterModal";
import Button from "@/components/button/OrangeButton";
import BrandBalls from "@/components/cards/BrandBalls";
import PrimeCalendar from "@/components/cards/calendar/Calendar";
import ImageCarousel from "@/components/cards/carousel/ImageCarousel";
import Navbar from "@/components/navigation/navbar";
import { ProductType } from "@/constants/Products";
import useProducts from "@/hooks/requests/useProducts";
import useServices from "@/hooks/requests/useServices";
import Link from "next/link";
import { Calendar } from "primereact/calendar";

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
          <div className="w-1/2 h-full flex flex-col items-center justify-center gap-10 p-[10rem]">
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
          <p className="text-[20px]">TEST DESCRIPTION</p>
        </div>
        {/* ============================================IMAGE CAROUSEL SECTION =======================================================================*/}
        <div className="bg-opacity-70 flex flex-col items-center gap-12 px-[10rem] my-[5rem]">
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
          <div className="flex flex-col items-center text-white text-[30px] h-[50%] w-[80%] gap-8  my-[5rem]">
            <p className="self-start font-bold">Products</p>
            <div className="h-full w-full gap-3 flex flex-col justify-center items-center p-10">
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
        s
        {/* ============================================BOOKING SECTION =======================================================================*/}
        <div className="relative h-full px-48 gap-8 flex">
          <div className="w-full flex justify-center">
            <PrimeCalendar />
          </div>
          <div className="text-white flex justify-center items-center w-full">
            YEahhhhhh
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-3 text-white p-10">
          <p className="text-[30px]">Yeeeeeeeeeeeeaaaaaaaaaaaaaahhhhh</p>
          <Link
            href={"/client/offers/services"}
            className="text-background bg-orangeRed p-3 rounded-lg text-[20px]"
          >
            Book Now
          </Link>
        </div>
      </div>

      <div className="w-full text-white flex flex-col gap-10 p-3 justify-center items-center">
        <p className="uppercase text-[30px] font-semibold">
          our <span className="text-orangeRed"> trusted </span>brands
        </p>
        <div className="flex justify-center gap-5 py-3 border-orangePrimary border-[2px] w-full rounded-sm">
          <BrandBalls />
          <BrandBalls />
          <BrandBalls />
          <BrandBalls />
          <BrandBalls />
          <BrandBalls />
        </div>
      </div>
    </>
  );
};

export default LandingPage;
