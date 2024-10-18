"use client";
import React, { useState } from "react";
import Button from "../button/OrangeButton";
import { useRouter } from "next/navigation";
import { formatDateNormal } from "@/lib/function/dateFormatter";
import Image from "next/image";

interface Props {
  description?: string;
  location?: string;
  date?: string;
  vehicleType?: string;
  bookingId?: number;
  landmark?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  proofOfPayment?: string;
}

const BookingRequestCard = (props: Props) => {
  const {
    landmark,
    location,
    date,
    vehicleType,
    firstName,
    lastName,
    email,
    proofOfPayment,
  } = props;
  const [imageLarge, setImageLarge] = useState(false);

  const router = useRouter();

  const handleImageClick = () => {
    setImageLarge(!imageLarge);
  };

  return (
    <>
      <div className="p-3 text-white border border-orangePrimary rounded-lg gap-6">
        <div className="text-[25px] w-full text-orangePrimary">
          {vehicleType}
        </div>
        <div className="relative flex h-[10rem] px-10">
          <div className="w-full border-white flex flex-col gap-4 ">
            <p>First Name: {firstName}</p>
            <p>Last Name: {lastName}</p>
            <p>Email: {email}</p>
            <div className="flex gap-4 w-full">
              <button className="bg-orangeRed w-fit self-end p-2 rounded-md">
                Set As Done
              </button>
            </div>
          </div>
          <div className=" w-full border-white flex flex-col">
            <div className="flex flex-col gap-4">
              <p>Date: {date?.toString().split("T")[0]}</p>
              <p>Location: {location}</p>
              <p>Landmark: {landmark}</p>
            </div>
          </div>

          <div className="w-[20%] flex justify-center border border-orangePrimary rounded-md">
            <Image
              src={proofOfPayment ? proofOfPayment : "/images/empty-image.png"}
              className="rounded-md"
              width={0}
              height={0}
              sizes="100%"
              style={{ width: "100%", height: "100%" }}
              quality={100}
              alt={"PaymentProof.jpg"}
              onClick={handleImageClick}
            />
          </div>
        </div>
      </div>
      {imageLarge && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-[99999]"
          onClick={handleImageClick} // Close the modal when clicked
        >
          <div className="relative">
            <Image
              src={proofOfPayment ? proofOfPayment : "/images/empty-image.png"}
              height={400}
              width={400}
              alt="Large QR Code"
              className="rounded-md"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default BookingRequestCard;
