"use client";
import React, { useState } from "react";
import ModalContainer from "./modalContainer/ModalContainer";
import { IoMdClose } from "react-icons/io";
import ImageUpload from "../input/ImageUpload";
import useInstallers from "@/hooks/requests/useInstallers";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { InstallerSchema, InstallerType } from "@/lib/util/schema";
import InputOrange from "../input/inputOrange";
import Button from "../button/OrangeButton";

interface ModalProps {
  isOpen: boolean;
  onClose?: () => void;
}
const AddInstallerModal = (props: ModalProps) => {
  const { isOpen, onClose } = props;
  const [installerImage, setInstallerImage] = useState("");

  const { addInstaller } = useInstallers();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<InstallerType>({ resolver: zodResolver(InstallerSchema) });

  const onSubmit = async (data: InstallerType) => {
    console.log(installerImage);
    addInstaller(
      data.firstName,
      data.lastName,
      data.address,
      data.phoneNumber,
      data.email,
      installerImage
    );
  };

  if (!isOpen) return null;

  return (
    <ModalContainer width="65rem" height="45rem">
      <div className="absolute top-5 right-5 border-none rounded-full hover:bg-grey p-2">
        <IoMdClose
          className="text-white text-[30px] cursor-pointer"
          onClick={onClose}
        />
      </div>
      <div className="flex gap-10 w-full justify-center">
        <div className="flex flex-col gap-5 font-semibold text-[18px] text-orangePrimary items-center">
          <p>Upload Your Picture Here</p>
          <div className="border border-orangeRed rounded-lg h-[50%] ">
            <ImageUpload
              value={installerImage}
              onChange={(value) => setInstallerImage(value)}
            />
          </div>
        </div>
        <div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full flex flex-col gap-5"
          >
            <div className="flex gap-8">
              <div className="w-full">
                <InputOrange label="First Name:" {...register("firstName")} />
                {errors.firstName && (
                  <p className="text-red-500 text-[13px]">
                    {`${errors.firstName.message}`}
                  </p>
                )}
              </div>

              <div className="w-full">
                <InputOrange label="Last Name:" {...register("lastName")} />
                {errors.lastName && (
                  <p className="text-red-500 text-[13px]">
                    {`${errors.lastName.message}`}
                  </p>
                )}
              </div>
            </div>

            <div>
              <InputOrange label="Address:" {...register("address")} />
              {errors.address && (
                <p className="text-red-500 text-[13px]">
                  {`${errors.address.message}`}
                </p>
              )}
            </div>

            <div>
              <InputOrange label="Email(Optional):" {...register("email")} />
              {errors.email && (
                <p className="text-red-500 text-[13px]">
                  {`${errors.email.message}`}
                </p>
              )}
            </div>

            <div>
              <InputOrange label="Phone Number:" {...register("phoneNumber")} />
              {errors.phoneNumber && (
                <p className="text-red-500 text-[13px]">
                  {`${errors.phoneNumber.message}`}
                </p>
              )}
            </div>
            <Button type="submit" title="Add Installer" />
          </form>
        </div>
      </div>
    </ModalContainer>
  );
};

export default AddInstallerModal;
