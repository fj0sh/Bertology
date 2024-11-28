import React, { useState } from "react";
import ModalContainer from "./modalContainer/ModalContainer";
import { IoMdClose } from "react-icons/io";
import Button from "../button/OrangeButton";
import useMailer from "@/hooks/mailer/useMailer";
import useInquiry from "@/hooks/requests/useInquiry";

interface ModalProps {
  isOpen: boolean;
  onClose?: () => void;
  id: number;
  name: string;
  email: string;
  message: string;
}

const InquiryModal = (props: ModalProps) => {
  const { onClose, isOpen, name, email, message, id } = props;

  const { sendMail } = useMailer();
  const { resolveInquiry } = useInquiry();
  const [reply, setReply] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    sendMail("Response to your Inquiry", email, reply, name);
    resolveInquiry(id);
  };

  if (!isOpen) return null;

  return (
    <ModalContainer width="60rem" height="45rem">
      <div className="absolute top-5 right-5 border-none rounded-full hover:bg-grey p-2">
        <IoMdClose
          className="text-white text-[30px] cursor-pointer"
          onClick={onClose}
        />
      </div>
      <div className="flex w-full h-full p-10 text-white bg-background ">
        <div className="w-1/2 border-r pr-5 flex flex-col gap-4">
          <h2 className="text-lg font-semibold text-orangeRed">
            Inquiry Details
          </h2>
          <div>
            <p className="font-medium text-gray-400">Name:</p>
            <p className="text-md">{name}</p>
          </div>
          <div>
            <p className="font-medium text-gray-400">Email:</p>
            <p className="text-md">{email}</p>
          </div>
          <div>
            <p className="font-medium text-gray-400">Message:</p>
            <p className="text-md indent-5 text-justify">{message}</p>
          </div>
        </div>
        <form
          className="w-1/2 flex flex-col pl-5 gap-5"
          onSubmit={handleSubmit}
        >
          <h2 className="text-lg font-semibold text-orangeRed">
            Reply to Inquiry
          </h2>
          <textarea
            className="text-white rounded border border-orangeRed bg-background w-full h-[200px] p-3 resize-none focus:outline-none focus:ring-2 focus:ring-orangeRed"
            placeholder="Write your reply here..."
            onChange={(e) => setReply(e.target.value)}
          ></textarea>
          <div className="self-end">
            <Button title="Submit" type="submit" />
          </div>
        </form>
      </div>
    </ModalContainer>
  );
};

export default InquiryModal;
