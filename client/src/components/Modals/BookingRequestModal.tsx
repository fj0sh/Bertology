"use client";
import React, { useState } from "react";
import ModalContainer from "./modalContainer/ModalContainer";
import { IoMdClose } from "react-icons/io";
import Image from "next/image";
import useBooking from "@/hooks/requests/useBooking";
import { decl } from "postcss";
import useMailer from "@/hooks/mailer/useMailer";
import Swal from "sweetalert2";
import AssignInstallerModal from "./AssignInstallerModal";

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
  status?: string;
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
    status,
    onClose,
  } = props;

  const [imageLarger, setIsImageLarger] = useState(false);
  const [showInstallerModal, setInstallerModal] = useState(false);

  const { declineBooking } = useBooking();
  const { sendMail } = useMailer();

  const handleAcceptBooking = () => {
    setInstallerModal(true);
  };

  const handleDeclineBooking = (id: number, email: string) => {
    Swal.fire({
      title: "Decline Booking?",
      text: "You are about to Decline this booking.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
      cancelButtonText: "No",
    }).then((res) => {
      if (res.isConfirmed) {
        Swal.fire({
          title: "Booking Declined",
          icon: "success",
        });

        sendMail(
          email,
          "Im sorry but your booking has been declined",
          `${fName} ${lName}`
        );
        declineBooking(id);
      }
    });
  };

  const handleImageClick = () => {
    setIsImageLarger(!imageLarger);
  };

  if (!isOpen) return null;

  return (
    <>
      <AssignInstallerModal
        isOpen={showInstallerModal}
        onClose={() => {
          setInstallerModal(false);
        }}
        bookingId={id}
        email={email}
      />
      <ModalContainer width="70rem" height="50rem">
        <div className="absolute top-5 right-5 border-none rounded-full hover:bg-grey p-2">
          <IoMdClose
            className="text-white text-[30px] cursor-pointer"
            onClick={onClose}
          />
        </div>
        <div className=" flex flex-col h-full w-full p-10">
          <div className="grid grid-cols-7 grid-rows-1 h-full w-full gap-4">
            <div className="col-span-3 flex flex-col gap-4 px-4 py-6  h-full w-full">
              <p className="font-semibold text-[25px]">{`${fName} ${lName}`}</p>
              <p>Email: {email}</p>
              <p>Mode: {mode}</p>
              {mode === "HOMESERVICE" && <p>Location: {location}</p>}
              <p>Contact Number: {phoneNumber}</p>
              <div className="flex flex-col gap-2 mt-6">
                <p>Proof of Payment:</p>

                <div className="flex p-2 borderounded-md max-w-full max-h-full overflow-hidden">
                  <Image
                    src={proof}
                    alt="payment_proof.jpeg"
                    width={150}
                    height={150}
                    className="rounded-md object-contain ml-[5rem]"
                    onClick={handleImageClick}
                  />
                </div>
              </div>
            </div>
            <div className="col-span-4 h-full w-full flex flex-col px-4 py-6 gap-4 ml-[5rem]">
              <p className="text-[25px] text-orangePrimary font-semibold">
                {model}
              </p>
              <p>{status}</p>
              <p>Booked Date: {date}</p>

              <div>
                <p className="text-[18px] font-semibold">Selected Services:</p>
                <div className="flex flex-col ml-[7rem]">
                  {serviceTypes.map((res: any) => (
                    <div key={res.id}>{res.serviceName}</div>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <p>Additional Details:</p>
                <p className="px-10 indent-10 text-justify">{description}</p>
              </div>
            </div>
          </div>
          <div className="flex gap-4 self-end">
            <button
              className="bg-green-500 text-[18px] rounded-sm py-1 px-2"
              onClick={() => handleAcceptBooking()}
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
