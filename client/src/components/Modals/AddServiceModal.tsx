import React, { useState } from "react";
import ModalContainer from "./modalContainer/ModalContainer";
import { IoMdClose } from "react-icons/io";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ServiceSchema } from "@/lib/util/schema";
import { ServiceType } from "@/constants/Service";
import InputOrange from "../input/inputOrange";
import ImageUpload from "../input/ImageUpload";
import useServices from "@/hooks/requests/useServices";

interface ModalProps {
  isOpen: boolean;
  onClose?: () => void;
}
const AddServiceModal = (props: ModalProps) => {
  const { isOpen, onClose } = props;
  const [newImage, setNewImage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ServiceType>({ resolver: zodResolver(ServiceSchema) });

  const { addServices } = useServices();

  const submitService = (data: ServiceType) => {
    addServices(
      data.serviceName,
      data.servicePrice,
      newImage ? newImage : "",
      data.serviceDescription
    );
    setNewImage("");
    reset();
    onClose?.();
  };

  const resetOnClose = () => {
    reset();
    setNewImage("");
    onClose?.();
  };

  if (!isOpen) return null;

  return (
    <ModalContainer height="38rem" width="50rem">
      <div className="absolute top-5 right-5 border-none rounded-full hover:bg-grey p-2">
        <IoMdClose
          className="text-white text-[30px] cursor-pointer"
          onClick={() => resetOnClose()}
        />
      </div>
      <div className="flex w-full h-full p-10 gap-10">
        <div className="w-[40%]">
          <div className="h-fit w-full border border-orangeRed rounded-md">
            <ImageUpload
              value={newImage}
              onChange={(value) => setNewImage(value)}
            />
          </div>
        </div>
        <form
          className="flex flex-col gap-2 w-[60%] text-white"
          onSubmit={handleSubmit(submitService)}
        >
          <InputOrange label="Service Name: " {...register("serviceName")} />
          <InputOrange label="Service Price: " {...register("servicePrice")} />
          <div className="flex flex-col gap-2 h-full">
            <p>Service Description:</p>
            <textarea
              className="border h-full border-orangeRed rounded-md bg-background p-2"
              {...register("serviceDescription")}
            />
          </div>
          <button className="bg-orangeRed text-[18px] rounded-md py-2 px-1 self-end">
            Add Service
          </button>
        </form>
      </div>
    </ModalContainer>
  );
};

export default AddServiceModal;
