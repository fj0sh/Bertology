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
import { errorToast, succesToast } from "../toast";
import DeclineModal from "./DeclineModal";

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
  landmark: string;
  street: string;

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
    landmark,
    street,

    serviceTypes,
    model,
    description,
    status,
    onClose,
  } = props;

  const [imageLarger, setIsImageLarger] = useState(false);
  const [showInstallerModal, setInstallerModal] = useState(false);
  const [showDeclineModal, setDeclineModal] = useState(false);
  const [isReassigning, setIsReassigning] = useState(false);

  const { declineBooking, setBookingAsDone, refetch } = useBooking();
  const { sendMail } = useMailer();

  const handleAcceptBooking = () => {
    setInstallerModal(true);
  };

  const handleBookingDone = (id: number) => {
    Swal.fire({
      title: "Set This Booking as Done?",
      text: "This Booking will be marked as done.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
      cancelButtonText: "No",
    }).then((res) => {
      if (res.isConfirmed) {
        setBookingAsDone(id);
        setIsReassigning(false);
        succesToast("Booking has been Completed");
        if (onClose) {
          onClose();
        }
      }
    });
  };

  const handleReassign = () => {
    setIsReassigning(true);
    setInstallerModal(true);
  };

  const handleServiceTotal = () => {
    let total = 0;

    serviceTypes.map((res: any) => (total += res.servicePrice));
    return total;
  };

  // const handleDeclineBooking = (id: number, email: string) => {
  //   Swal.fire({
  //     title: "Decline Booking?",
  //     text: "You are about to Decline this booking.",
  //     icon: "warning",
  //     showCancelButton: true,
  //     confirmButtonColor: "#3085d6",
  //     cancelButtonColor: "#d33",
  //     confirmButtonText: "Yes",
  //     cancelButtonText: "No",
  //   }).then((res) => {
  //     if (res.isConfirmed) {
  //       errorToast("Booking Declined");

  //       sendMail(
  //         email,
  //         "Im sorry but your booking has been declined",
  //         `${fName} ${lName}`
  //       );
  //       declineBooking(id);
  //       if (onClose) {
  //         onClose();
  //       }
  //       refetch();
  //     }
  //   });
  // };

  const handleDeclineBooking = () => {
    setDeclineModal(true);
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
          onClose?.();
        }}
        bookingId={id}
        email={email}
        fName={fName}
        lName={lName}
        date={date}
        isReassigning={isReassigning}
      />

      <ModalContainer width="70rem" height="50rem" z="999">
        <DeclineModal
          date={date || ""}
          bookingId={id}
          email={email || ""}
          name={`${fName} ${lName}`}
          isOpen={showDeclineModal}
          onClose={() => {
            setDeclineModal(false);
            onClose?.();
          }}
        />
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
              {mode === "HOMESERVICE" && <p>Landmark: {landmark}</p>}
              {mode === "HOMESERVICE" && <p>Street: {street}</p>}
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
              <p>
                Status:{" "}
                <span
                  className={`${
                    status === "APPROVED"
                      ? "text-blue-500"
                      : status === "DECLINED"
                      ? "text-red-600"
                      : status === "PENDING"
                      ? "text-yellow-300"
                      : status === "DONE"
                      ? "text-green-500"
                      : ""
                  } text-[18px] font-semibold`}
                >
                  {status}
                </span>
              </p>
              <p>Booked Date: {date}</p>

              <div>
                <p className="text-[18px] font-semibold">Selected Services:</p>
                <div className="flex flex-col ml-[7rem]">
                  {serviceTypes.map((res: any) => (
                    <div key={res.id}>
                      {res.serviceName} - {res.servicePrice}
                    </div>
                  ))}
                </div>
                <div className="flex gap-2">
                  <span>Total:</span>
                  {`₱ ${handleServiceTotal()}`}
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <p>Additional Details:</p>
                <p className="px-10 indent-10 text-justify">{description}</p>
              </div>
            </div>
          </div>
          {status === "MISSED" ? (
            <div className="flex gap-4 self-end  text-black font-semibold ">
              <button
                className=" bg-blue-500 text-[18px] rounded-sm py-1 px-2"
                // onClick={(e) => email && handleReassign()}
              >
                Send message/ Refund
              </button>
            </div>
          ) : (
            status !== "DONE" &&
            status !== "DECLINED" && (
              <div className="flex gap-4 self-end  text-black font-semibold ">
                {status === "APPROVED" ? (
                  <button
                    className="bg-green-500 text-[18px] rounded-sm py-1 px-2"
                    onClick={() => handleBookingDone(id)}
                  >
                    Set As Done
                  </button>
                ) : (
                  <button
                    className="bg-green-500 text-[18px] rounded-sm py-1 px-2"
                    onClick={() => handleAcceptBooking()}
                  >
                    Accept
                  </button>
                )}
                {status === "APPROVED" || status === "DONE" ? null : (
                  <button
                    className="bg-red-500 text-[18px] rounded-sm py-1 px-2"
                    onClick={() => email && handleDeclineBooking()}
                  >
                    Decline
                  </button>
                )}
                {status === "APPROVED" && (
                  <button
                    className=" bg-blue-500 text-[18px] rounded-sm py-1 px-2"
                    onClick={() => email && handleReassign()}
                  >
                    Reassign Technician
                  </button>
                )}
              </div>
            )
          )}
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
