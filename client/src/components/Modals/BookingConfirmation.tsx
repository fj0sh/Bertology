import React from "react";
import ModalContainer from "./modalContainer/ModalContainer";
import { IoMdClose } from "react-icons/io";
import InputOrange from "../input/inputOrange";
import Button from "../button/OrangeButton";

interface Props {
  isOpen?: boolean;
  onClose?: () => void;
  verifyOTP?: () => void;
}

const BookingConfirmation = (props: Props) => {
  const { isOpen, onClose, verifyOTP } = props;

  if (!isOpen) return null;

  return (
    <ModalContainer>
      <div className="absolute top-5 right-5 border-none rounded-full hover:bg-grey">
        <IoMdClose
          className="text-white text-[30px] cursor-pointer"
          onClick={onClose}
        />
      </div>
      <div className="flex flex-col gap-3 items-center">
        <p className="text-[22px] font-semibold">Enter Your OTP</p>
        <p className="text-[18px]">
          Please check the OTP has been sent to your Email
        </p>
        <div>
          <InputOrange placeholder="XXXXXX" />
        </div>
        <Button title="Verify" onClick={verifyOTP}></Button>
      </div>
    </ModalContainer>
  );
};

export default BookingConfirmation;
