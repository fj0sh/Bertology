"use client";
import ForgotPasswordModal from "@/components/Modals/ForgotPasswordModal";
import LoginModal from "@/components/Modals/LoginModal";
import RegisterModal from "@/components/Modals/RegisterModal";
import Button from "@/components/button";
import BrandBalls from "@/components/cards/BrandBalls";
import ImageCarousel from "@/components/cards/carousel/ImageCarousel";
import Navbar from "@/components/navigation/navbar";
import { ProductType } from "@/constants/Products";
import useProducts from "@/hooks/requests/useProducts";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { BiSolidCarMechanic } from "react-icons/bi";
import { MdShoppingCart } from "react-icons/md";

const LandingPage = () => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState<boolean>(false);
  const [isForgotPassOpen, setIsForgotPassOpen] = useState<boolean>(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] =
    useState<boolean>(false);

  const { products } = useProducts<ProductType[]>("/products");

  const images = products?.map((images) => {
    return images.productImage;
  });

  console.log(images);

  const router = useRouter();

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
      <div className="bg-[#111111]">
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

        <div className="relative w-full h-[70vh] bg-opacity-85">
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

        <div className="relative h-[80vh] flex">
          <div className="w-[37rem] h-[37rem] border-none rounded-full bg-grey absolute top-[5rem] left-[46rem] z-10"></div>
          <div className="w-[50%]"></div>
          <div className="w-[50%] flex flex-col justify-center items-center gap-10 ">
            <p className="font-bold text-[60px] text-center w-[50rem] text-orange z-20">
              Innovating for Effortless Planning and Resource Optimization
            </p>
            <Button
              title="BOOK NOW"
              width="200px"
              onClick={() => router.push("/client/offers/services")}
            />
          </div>
        </div>
        <div className=" bg-opacity-70 flex justify-center items-start h-[100px] text-[25px]">
          <p className="text-white font-bold items-center">
            We give the right service and good quality products!
          </p>
        </div>

        {/* ============================================IMAGE CAROUSEL SECTION =======================================================================*/}

        <div className="h-[100vh] bg-opacity-70 ">
          <div className="flex flex-col items-center h-[50%] bg-zinc-950">
            <div className="flex justify-center gap-3 border-none bg-orange p-3 px-10 rounded-[5px]">
              <BiSolidCarMechanic
                className=" self-center text-[25px]"
                size={30}
              />
              <p className="font-bold text-[18px]">Installation</p>
            </div>
            <div className="h-full w-full flex justify-center items-center">
              <ImageCarousel />
            </div>
          </div>
          <div className="flex flex-col items-center h-[50%] bg-zinc-950">
            <div className="flex justify-center gap-3 border-none bg-orange p-3 px-10 rounded-[5px]">
              <MdShoppingCart className=" self-center text-[25px]" size={30} />
              <p className="font-bold text-[18px]">Products</p>
            </div>
            <div className="h-full w-full flex justify-center items-center">
              <ImageCarousel images={images} />
            </div>
          </div>
        </div>

        {/* ============================================BRAND SECTION =======================================================================*/}

        <div className="relative h-full p-20 ">
          <div className=" rounded-[15px] border border-orange flex justify-center gap-12 p-6 mx-[12rem]">
            <BrandBalls />
            <BrandBalls />
            <BrandBalls />
            <BrandBalls />
            <BrandBalls />
            <BrandBalls />
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
