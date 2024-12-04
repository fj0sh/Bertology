import React, { useState, useEffect } from "react";
import ModalContainer from "./modalContainer/ModalContainer";
import { IoMdClose } from "react-icons/io";
import Image from "next/image";
import InputOrange from "../input/inputOrange"; // Assuming InputOrange is a custom component for styled input
import useServices from "@/hooks/requests/useServices"; // Custom hook for service operations
import ImageUpload from "../input/ImageUpload";

interface ModalProps {
  isOpen: boolean;
  onClose?: () => void;

  id: number;
  image: string;
  name: string;
  price: number;
  description: string;
}

const ServicesModal = (props: ModalProps) => {
  const { isOpen, onClose, id, image, name, price, description } = props;
  const [isEditing, setIsEditing] = useState(false);

  // States to manage editable fields
  const [editedName, setEditedName] = useState(name);
  const [editedPrice, setEditedPrice] = useState(price);
  const [editedDescription, setEditedDescription] = useState(description);
  const [imageValue, setImageValue] = useState("");
  const { editService } = useServices();

  // Update editable state when modal props change
  useEffect(() => {
    setEditedName(name);
    setEditedPrice(price);
    setEditedDescription(description);
    setImageValue(image);
  }, [name, price, description, image]);

  const handleEdit = async () => {
    try {
      // Call the service hook to update the service data
      await editService(
        id,
        editedName,
        editedPrice,
        imageValue,
        editedDescription
      );
      setIsEditing(false); // Close editing mode after saving
      onClose?.(); // Close the modal after saving changes
    } catch (error) {
      console.error("Error updating service:", error);
      alert("There was an error saving the service. Please try again.");
    }
  };

  if (!isOpen) return null;

  return (
    <ModalContainer height="30rem" width="40rem">
      <div className="absolute top-4 right-4 border-none rounded-full hover:bg-gray-200 p-2">
        <IoMdClose
          className="text-gray-800 text-[24px] cursor-pointer"
          onClick={onClose}
        />
      </div>

      <div className="flex flex-col p-6 w-full h-full gap-6">
        <div className="flex gap-6">
          <div className="flex-shrink-0 w-[40%] h-[12rem] overflow-hidden rounded-md">
            {isEditing ? (
              <ImageUpload
                value={imageValue}
                onChange={(value) => setImageValue(value)}
              />
            ) : (
              <Image
                src={image ? image : "/images/empty-image.png"}
                alt={editedName}
                width={300}
                height={200}
                className="object-cover w-full h-full"
              />
            )}
          </div>

          <div className="flex flex-col justify-center w-[60%] gap-4">
            {isEditing ? (
              <InputOrange
                value={editedName}
                onChange={(e) => setEditedName(e.target.value)}
              />
            ) : (
              <h2 className="text-2xl font-bold text-orangeRed">
                {editedName}
              </h2>
            )}
            {isEditing ? (
              <InputOrange
                value={editedPrice}
                onChange={(e) => setEditedPrice(Number(e.target.value))}
              />
            ) : (
              <p className="text-xl font-semibold text-white mt-2">
                ${editedPrice}
              </p>
            )}
          </div>
        </div>

        {isEditing ? (
          <textarea
            value={editedDescription}
            onChange={(e) => setEditedDescription(e.target.value)}
            className="bg-background border border-orangeRed rounded-md p-2 w-full"
          />
        ) : (
          <p className="text-base text-white leading-6">{editedDescription}</p>
        )}

        <div className="mt-auto flex justify-end gap-4">
          {isEditing ? (
            <button
              className="px-6 py-2 bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-md"
              onClick={handleEdit}
            >
              Save Changes
            </button>
          ) : (
            <button
              className="px-6 py-2 bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-md"
              onClick={() => setIsEditing(true)}
            >
              Edit
            </button>
          )}
          <button
            className="px-6 py-2 bg-gray-500 hover:bg-gray-600 text-white font-bold rounded-md"
            onClick={() => (isEditing ? setIsEditing(false) : onClose?.())}
          >
            Cancel
          </button>
        </div>
      </div>
    </ModalContainer>
  );
};

export default ServicesModal;
