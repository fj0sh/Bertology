"use client";
import React, { useState } from "react";
import ModalContainer from "./modalContainer/ModalContainer";
import { IoMdClose } from "react-icons/io";
import Image from "next/image";
import useBooking from "@/hooks/requests/useBooking";
import { decl } from "postcss";
import useMailer from "@/hooks/mailer/useMailer";

interface Props {
  isOpen?: boolean;
  onClose?: () => void;

  id: number;
  fName?: string;
  lName?: string;
  date?: string;
  email?: string;
  phoneNumber?: string;
  proof: string;
  mode?: string;
  location?: string;

  serviceTypes: any;
  model?: string;
  description?: string;
}

const BookingRequestModal = (props: Props) => {
  const {
    id,
    isOpen,
    fName,
    lName,
    date,
    email,
    phoneNumber,
    proof,
    mode,
    location,

    serviceTypes,
    model,
    description,
    onClose,
  } = props;

  const [imageLarger, setIsImageLarger] = useState(false);
  const { acceptBooking, declineBooking } = useBooking();

  const { sendMail } = useMailer();

  const handleAcceptBooking = (id: number, email: string) => {
    acceptBooking(id);
    sendMail(email, "Your Booking has been accepted", `${fName} ${lName}`);
  };
  const handleDeclineBooking = (id: number, email: string) => {
    sendMail(
      email,
      "Im sorry but your booking has been declined",
      `${fName} ${lName}`
    );
    declineBooking(id);
  };

  const handleImageClick = () => {
    setIsImageLarger(!imageLarger);
  };

  if (!isOpen) return null;

  return (
    <>
      <ModalContainer width="70rem" height="50rem">
        <div className="absolute top-5 right-5 border-none rounded-full hover:bg-grey p-2">
          <IoMdClose
            className="text-white text-[30px] cursor-pointer"
            onClick={onClose}
          />
        </div>
        <div className=" flex flex-col gap-4 h-full w-full p-10">
          <div className="grid grid-cols-7 grid-rows-1 h-full w-full gap-4">
            <div className="col-span-3 flex flex-col gap-4 border px-4 py-6 border-orangePrimary h-full w-full">
              <p>Booked Date: {date}</p>

              <p>First Name: {fName}</p>
              <p>Last Name: {lName}</p>

              <p>Email: {email}</p>
              <p>Contact No.: {phoneNumber}</p>

              <div className="flex flex-col gap-2 mt-6">
                <p>Proof of Payment:</p>

                <div className="flex p-2 borderounded-md max-w-full max-h-full overflow-hidden">
                  <Image
                    src={proof}
                    alt="payment_proof.jpeg"
                    width={150}
                    height={150}
                    className="rounded-md object-contain"
                    onClick={handleImageClick}
                  />
                </div>
              </div>
            </div>
            <div className="col-span-4 border border-orangePrimary h-full w-full flex flex-col px-4 py-6 gap-4">
              <p>{model}</p>
              <p>{mode}</p>
              {mode === "HOMESERVICE" && <p>Location: {location}</p>}
              <div>
                {serviceTypes.map((res: any) => (
                  <div>{res.serviceName}</div>
                ))}
              </div>
              <p>{description}</p>
            </div>
          </div>
          <div className="flex gap-4 self-end">
            <button
              className="bg-green-500 text-[18px] rounded-sm py-1 px-2"
              onClick={(e) => email && handleAcceptBooking(id, email)}
            >
              Accept
            </button>
            <button
              className="bg-red-500 text-[18px] rounded-sm py-1 px-2"
              onClick={(e) => email && handleDeclineBooking(id, email)}
            >
              Decline
            </button>
          </div>
        </div>
      </ModalContainer>

      {imageLarger && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-[9999999999]"
          onClick={handleImageClick}
        >
          <div className="relative">
            <Image
              src={proof}
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

export default BookingRequestModal;
