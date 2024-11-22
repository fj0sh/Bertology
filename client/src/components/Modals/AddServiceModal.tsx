import React from "react";
import ModalContainer from "./modalContainer/ModalContainer";
import { IoMdClose } from "react-icons/io";

interface ModalProps {
  isOpen: boolean;
  onClose?: () => void;
}
const AddServiceModal = (props: ModalProps) => {
  const { isOpen, onClose } = props;

  if (!isOpen) return null;

  return (
    <ModalContainer height="45rem" width="40rem">
      <div className="absolute top-5 right-5 border-none rounded-full hover:bg-grey p-2">
        <IoMdClose
          className="text-white text-[30px] cursor-pointer"
          onClick={onClose}
        />
      </div>
      <div></div>
    </ModalContainer>
  );
};

export default AddServiceModal;
