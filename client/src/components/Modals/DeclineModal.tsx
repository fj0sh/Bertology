import React, { useState } from "react";
import ModalContainer from "./modalContainer/ModalContainer";
import { IoMdClose } from "react-icons/io";
import useBooking from "@/hooks/requests/useBooking";
import Button from "../button/OrangeButton";
import useMailer from "@/hooks/mailer/useMailer";
import { succesToast } from "../toast";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  bookingId: number;
  email: string;
  name: string;
  date: string;
}

const DeclineModal = (props: Props) => {
  const { isOpen, onClose, bookingId, email, name, date } = props;

  const [reason, setReason] = useState("");
  const [error, setError] = useState("");

  const { declineBookingReason, declineBooking } = useBooking();
  const { sendMail } = useMailer();

  const handleDecline = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (reason.trim() === "") {
      setError("Please provide a reason for this declination");
      return;
    }

    try {
      declineBookingReason(bookingId, reason.trim());
      declineBooking(bookingId);
      sendMail(
        "Your Booking has Been Declined",
        email,
        `Your Booking has for the date of ${date}  been declined <br/><br/> Reason: <br/> ${reason}`,
        name
      );
      onClose();
      succesToast("Booking declined");
    } catch (error) {
      setError("An error occurred while processing the request.");
      console.error(error);
    }
  };

  if (!isOpen) return null;

  return (
    <ModalContainer z="9999" width="35rem" height="35rem">
      <div className="absolute top-5 right-5 border-none rounded-full hover:bg-grey p-2">
        <IoMdClose
          className="text-white text-[30px] cursor-pointer"
          onClick={onClose}
        />
      </div>
      <form className="flex flex-col gap-6 p-10" onSubmit={handleDecline}>
        <p className="text-white text-[25px]">
          Provide your reason for declining
        </p>
        <textarea
          className="bg-background resize-none border border-orangeRed rounded-lg w-full h-32 p-2 text-white"
          placeholder="Enter your reason here..."
          value={reason}
          onChange={(e) => {
            setReason(e.target.value);
            if (error) setError(""); // Clear error on user input
          }}
        />
        {error && <p className="text-red-500 text-[18px]">{error}</p>}
        <div className="self-end">
          <Button title="Submit" type="submit" />
        </div>
      </form>
    </ModalContainer>
  );
};

export default DeclineModal;
