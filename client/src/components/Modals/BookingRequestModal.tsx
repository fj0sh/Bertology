import React from "react";
import ModalContainer from "./modalContainer/ModalContainer";
import { IoMdClose } from "react-icons/io";

interface Props {
  isOpen: boolean;
  onClose?: () => void;
  name: string;
  date: string;
  location: string;
  model: string;
  description: string;
}

const BookingRequestModal = (props: Props) => {
  const { isOpen, name, date, location, model, description, onClose } = props;

  if (!isOpen) return null;

  return (
    <>
      <ModalContainer width="50rem" height="55rem">
        <div className="absolute top-5 right-5 border-none rounded-full hover:bg-grey p-2">
          <IoMdClose
            className="text-white text-[30px] cursor-pointer"
            onClick={onClose}
          />
        </div>

        <div className="relative text-white w-full h-full flex flex-col gap-6 p-6">
          <div className="text-[20px]">Service Request</div>
          <div>
            <p>
              <span className="font-bold">Customer Name: </span> {name}
            </p>
            <p>
              <span className="font-bold">Service Date: </span>
              {date}
            </p>
            <p>
              <span className="font-bold">Location: </span>
              {location}
            </p>
            <p>
              <span className="font-bold">Car Year and Model: </span>
              {model}
            </p>
          </div>
          <div className="flex flex-col gap-3 relative flex-grow overflow-hidden">
            <p className="font-bold">Service Description: </p>
            <div className="overflow-y-auto">
              <p className="whitespace-pre-line break-words text-justify">
                {description}
              </p>
            </div>
          </div>
        </div>
      </ModalContainer>
    </>
  );
};

export default BookingRequestModal;
