import React from "react";
import ModalContainer from "./modalContainer/ModalContainer";
import { IoMdClose } from "react-icons/io";

interface Props {
  isOpen?: boolean;
  onClose?: () => void;
  fName?: string;
  lName?: string;
  date?: string;
  email?: string;
  phoneNumber: string;
  proof: string;
  mode: string;
  location?: string;

  model?: string;
  description?: string;
}

const BookingRequestModal = (props: Props) => {
  const {
    isOpen,
    fName,
    lName,
    date,
    email,
    phoneNumber,
    proof,
    mode,
    location,
    model,
    description,
    onClose,
  } = props;

  if (!isOpen) return null;

  return (
    <>
      <ModalContainer width="70rem" height="50rem">
        <div className="absolute top-5 right-5 border-none rounded-full hover:bg-grey p-2">
          <IoMdClose
            className="text-white text-[30px] cursor-pointer"
            onClick={onClose}
          />
        </div>
        <div className=" flex flex-col gap-4 h-full w-full p-10">
          <div className="grid grid-cols-7 h-full w-full gap-4 ]">
            <div className="col-span-3 flex flex-col gap-4 border px-4 py-6 border-orangePrimary h-full w-full">
              <p>Booked Date: {date}</p>

              <p>First Name: {fName}</p>
              <p>Last Name: {lName}</p>

              <p>Email: {email}</p>
              <p>Contact No.: {phoneNumber}</p>
              {mode === "HOMESERVICE" && <p>Location: {location}</p>}

              <p>Proof of Payment:{proof}</p>
            </div>
            <div className="col-span-4 border border-orangePrimary h-full w-full"></div>
          </div>
          <div className="flex gap-4 self-end">
            <button className="bg-green-500 text-[18px] rounded-sm py-1 px-2">
              Accept
            </button>
            <button className="bg-red-500 text-[18px] rounded-sm py-1 px-2">
              Decline
            </button>
          </div>
        </div>
      </ModalContainer>
    </>
  );
};

export default BookingRequestModal;
