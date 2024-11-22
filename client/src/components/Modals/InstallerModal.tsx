import React, { useState } from "react";
import ModalContainer from "./modalContainer/ModalContainer";
import { IoMdClose } from "react-icons/io";
import Image from "next/image";
import InputOrange from "../input/inputOrange";
import ImageUpload from "../input/ImageUpload";
import useInstallers from "@/hooks/requests/useInstallers";
import { FaHouseChimney } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

interface ModalProps {
  isOpen: boolean;
  onClose?: () => void;

  image?: string;
  firstname?: string;
  lastname?: string;
  address?: string;
  phoneNumber?: string;
  email?: string;
  experience?: string;
  status?: string;
}

const InstallerModal = (props: ModalProps) => {
  const {
    isOpen,
    onClose,
    image,
    firstname,
    lastname,
    address,
    phoneNumber,
    email,
    experience,
    status,
  } = props;

  const [isEditting, setIsEditting] = useState(false);
  const [updatedImage, setUpdatedImage] = useState(image);
  const [updatedFirstName, setUpdatedFirstName] = useState(firstname);
  const [updatedLastName, setUpdatedLastName] = useState(lastname);
  const [updatedAddress, setUpdatedAddress] = useState(address);
  const [updatedPhoneNumber, setUpdatedPhoneNumber] = useState(phoneNumber);
  const [updatedEmail, setUpdatedEmail] = useState(email);
  const [updatedExperience, setUpdatedExperience] = useState(experience);

  const { editInstaller } = useInstallers();

  const handleEdit = () => {
    setIsEditting(false);
  };

  if (!isOpen) return null;

  return (
    <ModalContainer height="45rem" width="45rem">
      <div className="absolute top-5 right-5 border-none rounded-full hover:bg-grey p-2">
        <IoMdClose
          className="text-white text-[30px] cursor-pointer"
          onClick={onClose}
        />
      </div>
      <div className="flex flex-col w-full h-full p-10">
        <div className="w-full flex">
          <div>
            <div className="w-[200px] h-[200px] rounded-full m-auto">
              <Image
                src={image ? image : "/images/empty-profile.jpg"}
                alt="Profile Picture"
                width={150}
                height={150}
                className="rounded-full"
              />
            </div>
            {isEditting ? (
              <button
                onClick={() => {
                  handleEdit();
                }}
                className="bg-orange-500 text-white px-4 py-2 rounded"
              >
                Save Edit
              </button>
            ) : (
              <button
                onClick={() => setIsEditting((prev) => !prev)}
                className="bg-orange-500 text-white px-4 py-2 rounded"
              >
                Edit
              </button>
            )}
          </div>
          <div className="mx-auto">
            <div className="flex gap-3 font-semibold text-[25px] items-center">
              {isEditting ? (
                <InputOrange
                  value={updatedFirstName ?? firstname}
                  onChange={(e) => setUpdatedFirstName(e.target.value)}
                />
              ) : (
                <p>{firstname}</p>
              )}
              {isEditting ? (
                <InputOrange
                  value={updatedLastName ?? lastname}
                  onChange={(e) => setUpdatedLastName(e.target.value)}
                />
              ) : (
                <p>{lastname}</p>
              )}
            </div>
            <p className="text-orangeRed text-center mt-3">
              Bertology Technician
            </p>
            <p className="text-center mt-3">Status: {status}</p>
          </div>
        </div>

        <div className="w-full h-full flex gap-4">
          <div className="w-full flex flex-col gap-4 border-r mt-16 text-[18px]">
            {isEditting ? (
              <InputOrange
                value={updatedAddress ?? address}
                onChange={(e) => setUpdatedAddress(e.target.value)}
              />
            ) : (
              <div className="flex items-center gap-3">
                <FaHouseChimney size={30} />
                {address}
              </div>
            )}
            {isEditting ? (
              <InputOrange
                value={updatedPhoneNumber ?? phoneNumber}
                onChange={(e) => setUpdatedPhoneNumber(e.target.value)}
              />
            ) : (
              <div className="flex items-center gap-3">
                <FaPhoneAlt size={30} />
                {phoneNumber}
              </div>
            )}
            {isEditting ? (
              <InputOrange
                value={updatedEmail ?? email}
                onChange={(e) => setUpdatedEmail(e.target.value)}
              />
            ) : (
              <div className="flex items-center gap-3">
                <MdEmail size={30} />
                {email}
              </div>
            )}
          </div>

          <div className="w-full">
            {isEditting ? (
              <InputOrange
                value={updatedExperience ?? experience}
                onChange={(e) => setUpdatedExperience(e.target.value)}
              />
            ) : (
              <div className="flex flex-col gap-4 items-center p-6">
                <p className="font-semibold text-[25px] text-orangeRed">
                  Experience
                </p>
                <p className="indent-5 text-[18px] text-justify">
                  {experience}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </ModalContainer>
  );
};

export default InstallerModal;
