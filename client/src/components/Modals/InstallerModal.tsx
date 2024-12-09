import React, { ReactHTMLElement, useEffect, useState } from "react";
import ModalContainer from "./modalContainer/ModalContainer";
import { IoMdClose } from "react-icons/io";
import Image from "next/image";
import InputOrange from "../input/inputOrange";
import ImageUpload from "../input/ImageUpload";
import useInstallers from "@/hooks/requests/useInstallers";
import { FaHouseChimney } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useForm } from "react-hook-form";
import { InstallerSchema, InstallerType } from "@/lib/util/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { set } from "zod";
import { succesToast } from "../toast";
import InstallerSchedule from "./InstallerSchedule";

interface ModalProps {
  isOpen: boolean;
  onClose?: () => void;

  id: number;
  image: string;
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
    id,
    image,
    firstname,
    lastname,
    address,
    phoneNumber,
    email,
    experience,
    status,
  } = props;

  const [formData, setFormData] = useState<InstallerType>();
  const [isEditting, setIsEditting] = useState(false);
  const [showSchedule, setShowSchedule] = useState(false);

  const [newFirstname, setNewFirstname] = useState(firstname);
  const [newLastname, setNewLastname] = useState(lastname);
  const [newAddress, setNewAddress] = useState(address);
  const [newEmail, setNewEmail] = useState(email);
  const [newNumber, setNewNumber] = useState(phoneNumber);
  const [newExperience, setNewExperience] = useState(experience);
  const [newStatus, setNewStatus] = useState(status);
  const [newImage, setNewImage] = useState("");

  const { editInstaller } = useInstallers();

  useEffect(() => {
    setNewFirstname(firstname);
    setNewLastname(lastname);
    setNewAddress(address);
    setNewEmail(email);
    setNewNumber(phoneNumber);
    setNewExperience(experience);
    setNewImage(image);
  }, [address, email, experience, firstname, image, lastname, phoneNumber]);

  const saveEdit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    try {
      editInstaller(
        id,
        newFirstname || "",
        newLastname || "",
        newAddress || "",
        newNumber || "",
        newEmail || "",
        newImage || "",
        newExperience || "",
        newStatus || ""
      );
      setIsEditting(false);
      succesToast("Technician Edited successfully");
      onClose?.();
    } catch (error) {
      console.log("Error:", error);
    }
  };

  if (!isOpen) return null;

  return (
    <>
      <ModalContainer height="45rem" width="45rem">
        <InstallerSchedule
          id={id}
          isOpen={showSchedule}
          onClose={() => setShowSchedule(false)}
        />
        <div className="absolute top-5 right-5 border-none rounded-full hover:bg-grey p-2">
          <IoMdClose
            className="text-white text-[30px] cursor-pointer"
            onClick={onClose}
          />{" "}
        </div>
        <div className="flex flex-col w-full h-full p-10">
          <div className="w-full flex gap-4">
            <div className="flex flex-col gap-4">
              <div>
                <div className="w-[200px] h-[200px] rounded-full m-auto flex items-center justify-center overflow-hidden">
                  {isEditting ? (
                    <div className="w-full h-full border border-orangePrimary rounded-md flex items-center justify-center">
                      <ImageUpload
                        value={newImage}
                        onChange={(value) => setNewImage(value)}
                      />
                    </div>
                  ) : (
                    <Image
                      src={image ? image : "/images/empty-profile.jpg"}
                      alt="Profile Picture"
                      width={200}
                      height={200}
                      className="object-cover"
                    />
                  )}
                </div>
              </div>

              {isEditting ? (
                <div className="flex w-fit gap-4">
                  <button
                    type="button" // This will trigger form submission only when "Save" is clicked
                    className=" bg-orange-500 text-white px-4 py-2 rounded"
                    onClick={(e) => saveEdit(e)}
                  >
                    Save
                  </button>
                  <button
                    className="bg-gray-500 text-white px-4 py-2 rounded"
                    type="button" // Change to type="button" to prevent form submission
                    onClick={() => setIsEditting((prev) => !prev)}
                  >
                    Cancel
                  </button>
                </div>
              ) : (
                <div className="flex flex-col gap-2 items-center justify-center">
                  <button
                    type="button" // This will not submit the form
                    onClick={() => setIsEditting((prev) => !prev)}
                    className="bg-orange-500 text-white  px-4 py-2 rounded"
                  >
                    Edit
                  </button>

                  <button
                    type="button" // This will not submit the form
                    className="text-orangePrimary underline px-4 py-2 rounded "
                    onClick={() => setShowSchedule(true)}
                  >
                    View Schedule
                  </button>
                </div>
              )}
            </div>
            <div className="mx-auto">
              <div className="flex gap-3 font-semibold text-[25px] items-center">
                {isEditting ? (
                  <InputOrange
                    onChange={(e) => setNewFirstname(e.target.value)}
                    value={newFirstname}
                  />
                ) : (
                  <p>{firstname}</p>
                )}
                {isEditting ? (
                  <InputOrange
                    onChange={(e) => setNewLastname(e.target.value)}
                    value={newLastname}
                  />
                ) : (
                  <p>{lastname}</p>
                )}
              </div>
              <p className="text-orangeRed text-center mt-3">
                Bertology Technician
              </p>
              <div className="text-center mt-3 flex gap-3 justify-center items-center">
                Status:
                {isEditting ? (
                  <select
                    className="border border-gray-300 rounded-md mt-1 text-center text-white bg-background"
                    value={newStatus}
                    onChange={(e) => setNewStatus(e.target.value)}
                  >
                    <option value="ACTIVE" className="text-green-500">
                      Active
                    </option>
                    <option value="INACTIVE" className="text-red-500">
                      Inactive
                    </option>
                  </select>
                ) : (
                  <span className="font-semibold">{status}</span>
                )}
              </div>
            </div>
          </div>

          <div className="w-full h-full flex gap-4">
            <div className="w-[50%] flex flex-col gap-4 border-r mt-16 text-[18px] pr-8">
              <div className="flex items-center gap-3">
                <FaHouseChimney size={30} />
                {isEditting ? (
                  <InputOrange
                    onChange={(e) => setNewAddress(e.target.value)}
                    value={newAddress}
                  />
                ) : (
                  <p>{address}</p>
                )}
              </div>

              <div className="flex items-center gap-3">
                <FaPhoneAlt size={30} />
                {isEditting ? (
                  <InputOrange
                    onChange={(e) => setNewNumber(e.target.value)}
                    value={newNumber}
                  />
                ) : (
                  <p>{phoneNumber}</p>
                )}
              </div>

              <div className="flex items-center gap-3">
                <MdEmail size={30} />
                {isEditting ? (
                  <InputOrange
                    onChange={(e) => setNewEmail(e.target.value)}
                    value={newEmail}
                  />
                ) : (
                  <p>{email}</p>
                )}
              </div>
            </div>

            <div className="w-[50%] h-full">
              <div className="flex flex-col gap-4 items-center p-6 h-full w-full">
                <p className="font-semibold text-[25px] text-orangeRed">
                  Experience
                </p>
                <div className="w-full h-full">
                  {isEditting ? (
                    <textarea
                      className="w-full h-full p-2 rounded md border border-orangePrimary bg-background text-[18px] text-justify indent-5"
                      onChange={(e) => setNewExperience(e.target.value)}
                      value={newExperience}
                    />
                  ) : (
                    <p className="indent-5 text-[18px] text-justify">
                      {experience}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </ModalContainer>
    </>
  );
};

export default InstallerModal;
