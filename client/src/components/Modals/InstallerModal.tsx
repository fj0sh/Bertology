import React, { useState } from "react";
import ModalContainer from "./modalContainer/ModalContainer";
import { IoMdClose } from "react-icons/io";
import Image from "next/image";
import InputOrange from "../input/inputOrange";
import ImageUpload from "../input/ImageUpload";
import useInstallers from "@/hooks/requests/useInstallers";

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

  const handleEdit = () => {};

  if (!isOpen) return null;

  return (
    <ModalContainer height="45rem" width="65rem">
      <div className="absolute top-5 right-5 border-none rounded-full hover:bg-grey p-2">
        <IoMdClose
          className="text-white text-[30px] cursor-pointer"
          onClick={onClose}
        />
      </div>
      <div className="flex w-full h-full">
        <button onClick={() => setIsEditting((prev) => !prev)}>Edit</button>
        <div className="w-[50%] h-full">
          {/* {isEditting ? (
            <ImageUpload
              value={updatedImage}
              onChange={(value) => setUpdatedImage(value)}
            />
          ) : (
            <Image
              src={updatedImage ? updatedImage : "/images/empty-image.png"}
              alt="Bertology Logo"
              width={0}
              height={0}
              sizes="100%"
              style={{ width: "100%", height: "100%" }}
            />
          )} */}
        </div>
        <div className="w-[50%] h-full">
          <div className="flex gap-3">
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
          {isEditting ? (
            <InputOrange
              value={updatedAddress ?? address}
              onChange={(e) => setUpdatedAddress(e.target.value)}
            />
          ) : (
            <p>{address}</p>
          )}
          {isEditting ? (
            <InputOrange
              value={updatedPhoneNumber ?? phoneNumber}
              onChange={(e) => setUpdatedPhoneNumber(e.target.value)}
            />
          ) : (
            <p>{phoneNumber}</p>
          )}
          {isEditting ? (
            <InputOrange
              value={updatedEmail ?? email}
              onChange={(e) => setUpdatedEmail(e.target.value)}
            />
          ) : (
            <p>{email}</p>
          )}
          {isEditting ? (
            <InputOrange
              value={updatedExperience ?? experience}
              onChange={(e) => setUpdatedExperience(e.target.value)}
            />
          ) : (
            <p>{experience}</p>
          )}

          {isEditting && (
            <button
              onClick={() => {
                setIsEditting(false);
              }}
              className="bg-orange-500 text-white px-4 py-2 rounded"
            >
              Save Edit
            </button>
          )}
        </div>
      </div>
    </ModalContainer>
  );
};

export default InstallerModal;
