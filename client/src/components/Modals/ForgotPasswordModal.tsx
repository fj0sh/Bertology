import React from "react";
import Button from "../button/OrangeButton";
import { IoMdClose } from "react-icons/io";
import ModalContainer from "./modalContainer/ModalContainer";

interface Props {
  isOpen: boolean;
  onClose?: () => void;
}

const ForgotPasswordModal = (props: Props) => {
  const { isOpen, onClose } = props;

  if (!isOpen) return null;

  return (
    <ModalContainer width="20%" height="55%">
      <div className="absolute top-5 right-5">
        <IoMdClose
          className="text-white text-[30px] cursor-pointer"
          onClick={onClose}
        />
      </div>
      <div>Logo</div>
      <p>FORGOT PASSWORD?</p>
      <div className="flex flex-col gap-4 w-full items-center">
        <p className="text-sm self-start">Enter your email:</p>
        <input
          type="text"
          className="h-10 border border-none rounded-[10px] bg-zinc-600 w-full"
        />
        <Button title="Enter Email" onHover={true}></Button>
      </div>
    </ModalContainer>
  );
};

export default ForgotPasswordModal;
