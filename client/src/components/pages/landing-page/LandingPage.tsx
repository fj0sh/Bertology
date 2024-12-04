"use client";
import ForgotPasswordModal from "@/components/Modals/ForgotPasswordModal";
import LoginModal from "@/components/Modals/LoginModal";
import RegisterModal from "@/components/Modals/RegisterModal";
import BrandBalls from "@/components/cards/BrandBalls";
import PrimeCalendar from "@/components/cards/calendar/Calendar";
import ImageCarousel from "@/components/cards/carousel/ImageCarousel";
import Navbar from "@/components/navigation/navbar";
import { ProductType } from "@/constants/Products";
import useProducts from "@/hooks/requests/useProducts";
import Image from "next/image";
import Link from "next/link";
import { TfiCheckBox } from "react-icons/tfi";

import React, { useState } from "react";
import ServicesSummary from "@/components/cards/ServicesSummary";

const LandingPage = () => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState<boolean>(false);
  const [isForgotPassOpen, setIsForgotPassOpen] = useState<boolean>(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] =
    useState<boolean>(false);

  const { products } = useProducts<ProductType[]>("/products");

  const serviceImagesSet = [
    { image: "/images/service-images/image1.jpg" },
    { image: "/images/service-images/image2.jpg" },
    { image: "/images/service-images/image3.jpg" },
    { image: "/images/service-images/image4.jpg" },
    { image: "/images/service-images/image5.jpg" },
    { image: "/images/service-images/image6.jpg" },
  ];

  const servicesImage = serviceImagesSet?.map((services) => {
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
      <div className="bg-background">
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
        <div className="relative flex flex-col lg:flex-row h-[100vh] w-full bg-opacity-85">
          {/* Background Image */}
          <Image
            src="/images/homeBG.jpg"
            layout="fill"
            objectFit="cover"
            quality={100}
            alt="background"
            className="z-10"
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>

          {/* Foreground Content */}
          <div className="w-full lg:w-1/2 h-[90%] flex justify-center items-center p-10  z-20">
            <Image
              src="/images/landing-image2.png"
              height={1000}
              width={2000}
              quality={100}
              className="w-full h-full"
              alt="landing-image.png"
            ></Image>
          </div>
<<<<<<< HEAD
          <div className="w-full h-full flex flex-col items-center justify-center gap-10 p-[5rem]">
            <div className="text-[65px] font-bold text-white text-center w-[40rem]">
              Innovating for <br /> Effortless
              <span className="text-orangePrimary"> Planning</span>
              <br /> and Resource <br />
              <span className="text-orangePrimary"> Optimization</span>
            </div>
            <div className="flex flex-col gap-10 items-center justify-center">
              <p className="text-white w-[35rem] text-center h-full text-[25px]">
                Book now to experience our convenient and hustle free services.
              </p>
              <Link
                href={"/client/offers/services"}
                className="text-background bg-orangeRed self-center py-2 px-6 text-[30px] rounded-sm font-semibold"
              >
                Book Now
              </Link>

              {/* <Button
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
              /> */}
            </div>
=======
          <div className="w-full lg:w-1/2 h-full flex flex-col items-start justify-center gap-6 lg:gap-10 p-6 lg:p-[5rem] z-20">
            <h1 className="text-[35px] lg:text-[50px] font-bold text-white text-left w-full lg:w-[40rem]">
              <span className="text-orangePrimary">Innovating</span> for
              Effortless
              <br />
              <span className="text-orangePrimary"> Planning</span> and Resource{" "}
              <br />
              <span className="text-orangePrimary"> Optimization</span>
            </h1>
            <p className="text-white w-full lg:w-[35rem] text-left text-[18px] lg:text-[25px]">
              Book now to experience our convenient and hustle free services.
            </p>
            <Link
              href="/client/offers/services"
              className="text-background bg-orangeRed py-2 px-[4rem] text-[20px] lg:text-[30px] rounded-sm font-semibold transition-all 
             hover:bg-orange-600 hover:scale-105 hover:shadow-lg"
            >
              Book Now
            </Link>
>>>>>>> 342f09527df98eed55bf6cf9ed1e0aa2f47d7691
          </div>
        </div>
<<<<<<< HEAD
        {/* ============================================BOOK NOW SECTION =======================================================================*/}
        <div className="relative w-full h-full p-[3rem] flex gap-10 text-white px-[10rem]">
          <div className="w-[80%] h-full">
            <div className="flex flex-col justify-center items-center gap-10 h-full">
              <div className="w-[45rem]">
                <p className="text-[45px] text-center font-semibold">
                  We give the right service and good quality products!
                </p>
              </div>
              <div className="bg-zinc-900 flex items-center w-full h-full justify-center gap-10 text-[30px] px-20 py-8 rounded-lg">
                <ul className="*:flex *:mb-7 *:items-center ">
                  <li>
                    <TfiCheckBox className="mr-4 text-orangePrimary " />
                    Free Installation
                  </li>
                  <li>
                    <TfiCheckBox className="mr-4 text-orangePrimary" />
                    Home Service
                  </li>
                  <li>
                    <TfiCheckBox className="mr-4 text-orangePrimary" />
                    Expert Technician
                  </li>
                </ul>

                <ul className="*:flex *:mb-7 *:items-center">
                  <li>
                    <TfiCheckBox className="mr-4 text-orangePrimary" />
                    Safe and Guaranteed
                  </li>
                  <li>
                    <TfiCheckBox className="mr-4 text-orangePrimary" />
                    Several Years of Experience
                  </li>
                  <li>
                    <TfiCheckBox className="mr-4 text-orangePrimary" />
=======

        {/* BOOK NOW SECTION */}
        <div className="relative w-full h-full p-6 lg:p-[3rem] flex flex-col lg:flex-row gap-6 lg:gap-10 text-white px-4 lg:px-[10rem]">
          <div className="w-full lg:w-[80%] h-full">
            <div className="flex flex-col justify-center items-start gap-4 h-full">
              {/* <p className="text-orangeRed font-bold text-[25px] ">
                Why choose us.
              </p> */}
              <p className="text-[28px] lg:text-[45px] text-left font-semibold">
                Why People Choose Our <br /> Services?
              </p>

              <div className="border border-orangeRed flex flex-col lg:flex-row items-center w-full h-full justify-center gap-4 lg:gap-10 text-[20px] lg:text-[30px] px-6 lg:px-20 py-6 lg:py-8 rounded-lg">
                <ul className="flex flex-col gap-4 *:flex">
                  <li>
                    <TfiCheckBox className="mr-2 lg:mr-4 text-orangePrimary" />
                    Home Service
                  </li>
                  <li>
                    <TfiCheckBox className="mr-2 lg:mr-4 text-orangePrimary" />
                    Expert Technician
                  </li>
                </ul>
                <ul className="flex flex-col gap-4 *:flex">
                  <li>
                    <TfiCheckBox className="mr-2 lg:mr-4 text-orangePrimary" />
                    Safe and Guaranteed
                  </li>
                  <li>
                    <TfiCheckBox className="mr-2 lg:mr-4 text-orangePrimary" />
                    Years of Experience
                  </li>
                </ul>
                {/* <ul>
                  <li>
                    <TfiCheckBox className="mr-2 lg:mr-4 text-orangePrimary" />
>>>>>>> 03cb6bf7d0273e40f43f889c4343247253cbcf18
                    Fast Transactions
                  </li>
                </ul> */}
              </div>
            </div>
            <div></div>
          </div>
          <div className="relative w-[30%] h-[30rem] border-none rounded-lg">
            {/* Make sure to use relative positioning */}
            <Image
              src="/images/wcu.jpg" // Correct path to the image
              layout="fill" // Make the image fill the parent container
              objectFit="cover" // Cover the container while maintaining aspect ratio
              quality={80} // Set image quality
              alt="image.jpg"
            />
            <div className="bg-black bg-opacity-50 w-full h-full absolute top-0 left-0 flex items-center justify-center">
              <p className="text-[80px] text-orangeRed font-semibold text-center">
                Why Choose Us?
              </p>
            </div>
          </div>
        </div>
        {/* ============================================IMAGE CAROUSEL SECTION =======================================================================*/}
        <div className="bg-opacity-70 flex flex-col gap-12 my-[5rem]">
          <div className="flex items-center text-white text-[30px] h-full w-full gap-8 pr-8">
            <div className="relative w-[40%] h-[30rem] ">
              <Image
                className="border-none rounded-tr-lg rounded-br-lg"
                src="/images/wcu.jpg" // Correct path to the image
                layout="fill" // Make the image fill the parent container
                objectFit="cover" // Cover the container while maintaining aspect ratio
                quality={80} // Set image quality
                alt="image.jpg"
              />
              <div className="bg-black bg-opacity-50 w-full h-full absolute top-0 left-0 flex items-center justify-center">
<<<<<<< HEAD
                <p className="text-[70px] text-white font-semibold text-center">
=======
                <p className="text-[40px] lg:text-[70px]  font-semibold text-center text-orangeRed">
>>>>>>> 342f09527df98eed55bf6cf9ed1e0aa2f47d7691
                  Installation
                </p>
              </div>
            </div>
            <div className="h-full w-full gap-3 flex flex-col justify-center items-center">
              <div className="self-end">
                {/* <p className="text-right font-bold text-orangeRed text-[25px]">
                  Installations
                </p> */}
                <p className=" text-right text-[45px] font-semibold">
                  What are Our Available <br /> Installations and Services?
                </p>
              </div>
              <ImageCarousel images={servicesImage} />
              <Link
                href={"/client/offers"}
<<<<<<< HEAD
                className="text-orangePrimary self-end text-[20px] underline"
=======
                className="text-orangePrimary self-end text-[16px] lg:text-[20px] underline "
>>>>>>> 342f09527df98eed55bf6cf9ed1e0aa2f47d7691
              >
                See More
              </Link>
            </div>
          </div>
          {/* <div className="flex flex-col items-center text-white text-[30px] h-[50%] w-[80%] gap-8  my-[5rem]">
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
          </div> */}
        </div>
<<<<<<< HEAD
        s
        {/* ============================================BOOKING SECTION =======================================================================*/}
        <div className="relative h-full px-48 gap-8 flex">
=======

        {/* BOOKING SECTION */}
        <div className="w-full px-[20rem] py-10 my-[5rem]">
          <ServicesSummary />
        </div>

        <div className="relative h-full px-4 lg:px-48 gap-8 flex flex-col lg:flex-row my-[10rem]">
>>>>>>> 342f09527df98eed55bf6cf9ed1e0aa2f47d7691
          <div className="w-full flex justify-center">
            <PrimeCalendar />
          </div>
          <div className="text-white flex flex-col justify-center items-center w-full gap-10 text-center">
            <p className="text-[30px] font-semibold">
              Check Our Calendar to Plan your future Installation
            </p>
            <Link
              href={"/client/offers/services"}
<<<<<<< HEAD
              className="text-background bg-orangeRed self-center py-2 px-6 text-[25px] rounded-sm font-semibold"
=======
              className="text-background bg-orangeRed py-2 px-4 lg:px-6 text-[20px] lg:text-[25px] rounded-sm font-semibold 
             transition-all duration-300 ease-in-out hover:bg-orange-600 hover:scale-105 hover:shadow-lg"
>>>>>>> 342f09527df98eed55bf6cf9ed1e0aa2f47d7691
            >
              Book A Service
            </Link>
          </div>
        </div>
      </div>

<<<<<<< HEAD
      <div className="w-full text-white flex flex-col gap-10 py-[10rem] px-[18rem] justify-center items-center">
        <p className="uppercase text-[30px] font-semibold">
          our <span className="text-orangeRed"> trusted </span>brands
        </p>
        <div className="flex justify-center gap-8 py-6 border-orangePrimary border-[2px] w-full rounded-md">
          <BrandBalls />
          <BrandBalls />
          <BrandBalls />
          <BrandBalls />
          <BrandBalls />
          <BrandBalls />
        </div>
=======
        {/* BRANDS SECTION */}
        {/* <div className="w-full text-white flex flex-col gap-6 lg:gap-10 py-[4rem] lg:py-[10rem] px-6 lg:px-[18rem] justify-center items-center">
          <p className="uppercase text-[24px] lg:text-[30px] font-semibold">
            our <span className="text-orangeRed"> trusted </span>brands
          </p>
          <div className="flex justify-center gap-6 lg:gap-8 py-4 lg:py-6 border-orangePrimary border-[2px] w-full rounded-md">
            <BrandBalls />
            <BrandBalls />
            <BrandBalls />
            <BrandBalls />
            <BrandBalls />
            <BrandBalls />
          </div>
        </div> */}
>>>>>>> 342f09527df98eed55bf6cf9ed1e0aa2f47d7691
      </div>
    </>
  );
};

export default LandingPage;
