import React from "react";
import ModalContainer from "./modalContainer/ModalContainer";

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
  const { isOpen, name, date, location, model, description } = props;

  if (!isOpen) return null;

  return (
    <>
      <ModalContainer width="50rem" height="       ">
        <div className="relative text-white w-full h-full flex flex-col gap-6">
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
          <div className="flex flex-col gap-3 relative">
            <p className="font-bold ">Service Description: </p>
            <p className="whitespace-pre-line break-words text-justify">
              {description}
            </p>
          </div>
        </div>
      </ModalContainer>
    </>
  );
};

export default BookingRequestModal;
