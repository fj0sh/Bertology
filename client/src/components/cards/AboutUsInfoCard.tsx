"use client";
import Image from "next/image";
import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { MdPhoneAndroid } from "react-icons/md";
import InputOrange from "../input/inputOrange";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { BookingType } from "@/constants/Booking";
import { BookingSchema, InquirySchema, InquiryType } from "@/lib/util/schema";
import useInquiry from "@/hooks/requests/useInquiry";
import Swal from "sweetalert2";

const AboutUsInfoCard = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<InquiryType>({ resolver: zodResolver(InquirySchema) });
  const { addInquiry } = useInquiry();

  const inquirySubmitted = () => {
    Swal.fire({
      title: "Inquiry Submitted",
      text: "Thank you for your inquiry. We will contact you shortly.",
      icon: "success",
      timer: 2500,
    });
  };

  const submitInquiry = (data: InquiryType) => {
    reset();
    inquirySubmitted();
    addInquiry(data.firstName, data.lastName, data.email, data.message);
  };

  return (
    <div className="p-10 w-[80%] text-white">
      <div className="flex flex-col gap-6 relative w-full h-full items-center">
        <div className="absolute top-5 font-semibold bg-orangePrimary w-[15rem] border-none rounded-lg text-center p-2 text-black">
          CONTACT US
        </div>
        <div className="flex border border-orangeRed  mt-10 rounded-lg p-10 w-full h-full ">
          <div className=" w-[70%]  flex flex-col items-center justify-center gap-8 ">
            <div className="font-semibold text-[18px]">PAYMENT METHODS:</div>
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
            </div>
            <hr className="w-[80%] border " />
            <div className=" gap-10 w-full flex flex-col items-center p-4">
              <p className="font-semibold text-[18px]">CONTACT INFO:</p>
              <div className="flex flex-col items-center gap-8 w-full">
                <div className="flex gap-4 w-full justify-center">
                  <div className="flex gap-3">
                    <FaFacebook size={30} />
                    <p>Test.facebook.com</p>
                  </div>
                  <div className="flex gap-3">
                    <MdPhoneAndroid size={30} />
                    <p>0909090909</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <FiPhone size={30} />
                  <p>912334</p>
                </div>
              </div>
            </div>
          </div>

          <form
            className=" w-full h-full py-4 px-8  flex flex-col gap-3"
            onSubmit={handleSubmit(submitInquiry)}
          >
            <div className="flex flex-col gap-3">
              <h2 className="text-[18px] font-semibold text-orangeRed">
                We’d Love to Hear From You!
              </h2>
              <p className="text-justify">
                Have questions, feedback, or just want to say hello? Drop us a
                message below, and we{"'"}ll get back to you as soon as
                possible.
              </p>
            </div>
            <div className="flex gap-4">
              <InputOrange label="First Name:" {...register("firstName")} />
              <InputOrange label="Last Name:" {...register("lastName")} />
            </div>
            <InputOrange label="Email:" {...register("email")} />
            <div className="w-full text-white flex flex-col gap-1">
              <p className="text-[18px]">Message:</p>
              <textarea
                className="border border-orangeRed rounded-lg bg-background w-full h-full max-h-[115px] min-h-[80px] p-1"
                {...register("message")}
              />
            </div>
            <button
              className="bg-orangeRed self-end text-[18px] px-4 py-1 rounded-md"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* Empty Section */}
      <div className="w-full md:w-1/3"></div>
    </div>
  );
};

export default AboutUsInfoCard;
