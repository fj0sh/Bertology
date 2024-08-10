import React from "react";
import ModalContainer from "./modalContainer/ModalContainer";
import { IoMdClose } from "react-icons/io";

interface Props {
  test?: string;
  isOpen?: boolean;
  onClose?: () => void;
}

const BookingConfirmation = (props: Props) => {
  const { test, isOpen, onClose } = props;

  if (!isOpen) return null;

  return (
    <ModalContainer>
      <div className="absolute top-5 right-5 border-none rounded-full hover:bg-grey">
        <IoMdClose
          className="text-white text-[30px] cursor-pointer"
          onClick={onClose}
        />
      </div>
      <div>{test}</div>
    </ModalContainer>
  );
};

export default BookingConfirmation;
