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
import Image from "next/image";
import Link from "next/link";
import { TfiCheckBox } from "react-icons/tfi";

import React, { useState } from "react";

const LandingPage = () => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState<boolean>(false);
  const [isForgotPassOpen, setIsForgotPassOpen] = useState<boolean>(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] =
    useState<boolean>(false);

  const { products } = useProducts<ProductType[]>("/products");
  const { services } = useServices();

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
        {/* HERO SECTION */}
        <div className="flex flex-col lg:flex-row h-full w-full bg-opacity-85">
          <div className="w-full lg:w-1/2 h-full flex justify-center items-center p-6 lg:p-10">
            <Image
              src={"/images/landing-image.png"}
              height={1000}
              width={2000}
              quality={100}
              className="w-full h-full object-cover"
              alt="landing-image.png"
            />
          </div>
          <div className="w-full lg:w-1/2 h-full flex flex-col items-center justify-center gap-6 lg:gap-10 p-6 lg:p-[5rem]">
            <h1 className="text-[40px] lg:text-[65px] font-bold text-white text-center w-full lg:w-[40rem]">
              Innovating for <br /> Effortless
              <span className="text-orangePrimary"> Planning</span>
              <br /> and Resource <br />
              <span className="text-orangePrimary"> Optimization</span>
            </h1>
            <p className="text-white w-full lg:w-[35rem] text-center text-[18px] lg:text-[25px]">
              Book now to experience our convenient and hustle-free services.
            </p>
            <Link
              href={"/client/offers/services"}
              className="text-background bg-orangeRed py-2 px-4 lg:px-6 text-[20px] lg:text-[30px] rounded-sm font-semibold"
            >
              Book Now
            </Link>
          </div>
        </div>

        {/* BOOK NOW SECTION */}
        <div className="relative w-full h-full p-6 lg:p-[3rem] flex flex-col lg:flex-row gap-6 lg:gap-10 text-white px-4 lg:px-[10rem]">
          <div className="w-full lg:w-[80%] h-full">
            <div className="flex flex-col justify-center items-center gap-6 lg:gap-10 h-full">
              <p className="text-[28px] lg:text-[45px] text-center font-semibold">
                We give the right service and good quality products!
              </p>
              <div className="bg-zinc-900 flex flex-col lg:flex-row items-center w-full h-full justify-center gap-4 lg:gap-10 text-[20px] lg:text-[30px] px-6 lg:px-20 py-6 lg:py-8 rounded-lg">
                <ul className="flex flex-col gap-2">
                  <li>
                    <TfiCheckBox className="mr-2 lg:mr-4 text-orangePrimary" />{" "}
                    Free Installation
                  </li>
                  <li>
                    <TfiCheckBox className="mr-2 lg:mr-4 text-orangePrimary" />{" "}
                    Home Service
                  </li>
                  <li>
                    <TfiCheckBox className="mr-2 lg:mr-4 text-orangePrimary" />{" "}
                    Expert Technician
                  </li>
                </ul>
                <ul className="flex flex-col gap-2">
                  <li>
                    <TfiCheckBox className="mr-2 lg:mr-4 text-orangePrimary" />{" "}
                    Safe and Guaranteed
                  </li>
                  <li>
                    <TfiCheckBox className="mr-2 lg:mr-4 text-orangePrimary" />{" "}
                    Years of Experience
                  </li>
                  <li>
                    <TfiCheckBox className="mr-2 lg:mr-4 text-orangePrimary" />{" "}
                    Fast Transactions
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="relative w-full lg:w-[30%] h-[20rem] lg:h-[30rem] border-none rounded-lg">
            <Image
              src="/images/wcu.jpg"
              layout="fill"
              objectFit="cover"
              quality={80}
              alt="why-choose-us-image"
              className="rounded-lg"
            />
            <div className="bg-black bg-opacity-50 w-full h-full absolute top-0 left-0 flex items-center justify-center">
              <p className="text-[40px] lg:text-[80px] text-orangeRed font-semibold text-center">
                Why Choose Us?
              </p>
            </div>
          </div>
        </div>

        {/* IMAGE CAROUSEL SECTION */}
        <div className="bg-opacity-70 flex flex-col gap-8 lg:gap-12 my-[2rem] lg:my-[5rem] px-4">
          <div className="flex flex-col lg:flex-row items-center text-white text-[20px] lg:text-[30px] h-full w-full gap-6 lg:gap-8 pr-4 lg:pr-8">
            <div className="relative w-full lg:w-[40%] h-[15rem] lg:h-[30rem]">
              <Image
                className="border-none rounded-lg"
                src="/images/wcu.jpg"
                layout="fill"
                objectFit="cover"
                quality={80}
                alt="installation-image"
              />
              <div className="bg-black bg-opacity-50 w-full h-full absolute top-0 left-0 flex items-center justify-center">
                <p className="text-[40px] lg:text-[70px] text-white font-semibold text-center">
                  Installation
                </p>
              </div>
            </div>
            <div className="h-full w-full gap-3 flex flex-col justify-center items-center">
              <ImageCarousel images={servicesImage} />
              <Link
                href={"/client/offers"}
                className="text-orangePrimary self-end text-[16px] lg:text-[20px] underline"
              >
                See More
              </Link>
            </div>
          </div>
        </div>

        {/* BOOKING SECTION */}
        <div className="relative h-full px-4 lg:px-48 gap-8 flex flex-col lg:flex-row">
          <div className="w-full flex justify-center">
            <PrimeCalendar />
          </div>
          <div className="text-white flex flex-col justify-center items-center w-full gap-6 lg:gap-10 text-center">
            <p className="text-[24px] lg:text-[30px] font-semibold">
              Check Our Calendar to Plan your Future Installation
            </p>
            <Link
              href={"/client/offers/services"}
              className="text-background bg-orangeRed py-2 px-4 lg:px-6 text-[20px] lg:text-[25px] rounded-sm font-semibold"
            >
              Book A Service
            </Link>
          </div>
        </div>

        {/* BRANDS SECTION */}
        <div className="w-full text-white flex flex-col gap-6 lg:gap-10 py-[4rem] lg:py-[10rem] px-6 lg:px-[18rem] justify-center items-center">
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
        </div>
      </div>
    </>
  );
};

export default LandingPage;
