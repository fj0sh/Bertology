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
  const [attachment, setAttachment] = useState<string | null>(null);

  const { declineBookingReason, declineBooking } = useBooking();
  const { sendMail } = useMailer();

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAttachment(reader.result as string); // Base64 string
      };
      reader.readAsDataURL(file);
    }
  };

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
        `Your Booking for the date of ${date} has been declined <br/><br/> Reason: <br/> ${reason}`,
        name,
        attachment || undefined
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
    <ModalContainer z="9999" width="35rem" height="40rem">
      <div className="absolute top-5 right-5 border-none rounded-full hover:bg-grey p-2">
        <IoMdClose
          className="text-white text-[30px] cursor-pointer"
          onClick={onClose}
        />
      </div>
      <form className="flex flex-col gap-6 p-10" onSubmit={handleDecline}>
        <p className="text-white text-[20px]">
          Provide your message to the Customer
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
        <div className="text-white">
          <label htmlFor="fileInput">Attach an Image (optional):</label>
          <input
            id="fileInput"
            type="file"
            accept="image/*"
            className="text-white"
            onChange={handleFileUpload}
          />
        </div>
        {error && <p className="text-red-500 text-[18px]">{error}</p>}
        <div className="self-end">
          <Button title="Submit" type="submit" />
        </div>
      </form>
    </ModalContainer>
  );
};

export default DeclineModal;
