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
import Swal from "sweetalert2";

interface ModalProps {
  isOpen: boolean;
  onClose?: () => void;
}

const AddInstallerModal = ({ isOpen, onClose }: ModalProps) => {
  const [installerImage, setInstallerImage] = useState<string>("");

  const { addInstaller, refetch } = useInstallers();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<InstallerType>({ resolver: zodResolver(InstallerSchema) });

  const addSuccess = () => {
    Swal.fire({
      title: "Installer Added",
      text: "Installer Added Successfully.",
      icon: "success",
    });
  };

  const onSubmit = async (data: InstallerType) => {
    try {
      await addInstaller(
        data.installerFirstName,
        data.installerLastName,
        data.installerAddress,
        data.installerPhoneNumber,
        data.installerEmail,
        installerImage,
        data.installerExperience
      );

      if (onClose) onClose();
      addSuccess();
      refetch();
      reset();
    } catch (error) {
      console.error("Error adding installer: ", error);
    }
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
          <div className="border border-orangeRed rounded-lg h-[50%]">
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
                <InputOrange
                  label="First Name:"
                  {...register("installerFirstName")}
                />
                {errors.installerFirstName && (
                  <p className="text-red-500 text-[13px]">
                    {`${errors.installerFirstName.message}`}
                  </p>
                )}
              </div>

              <div className="w-full">
                <InputOrange
                  label="Last Name:"
                  {...register("installerLastName")}
                />
                {errors.installerLastName && (
                  <p className="text-red-500 text-[13px]">
                    {`${errors.installerLastName.message}`}
                  </p>
                )}
              </div>
            </div>

            <div>
              <InputOrange label="Address:" {...register("installerAddress")} />
              {errors.installerAddress && (
                <p className="text-red-500 text-[13px]">
                  {`${errors.installerAddress.message}`}
                </p>
              )}
            </div>

            <div>
              <InputOrange
                label="Email (Optional):"
                {...register("installerEmail")}
              />
              {errors.installerEmail && (
                <p className="text-red-500 text-[13px]">
                  {`${errors.installerEmail.message}`}
                </p>
              )}
            </div>

            <div>
              <InputOrange
                label="Phone Number:"
                {...register("installerPhoneNumber")}
              />
              {errors.installerPhoneNumber && (
                <p className="text-red-500 text-[13px]">
                  {`${errors.installerPhoneNumber.message}`}
                </p>
              )}
            </div>
            <div>
              <InputOrange
                label="Experience:"
                {...register("installerExperience")}
              />
              {errors.installerExperience && (
                <p className="text-red-500 text-[13px]">
                  {`${errors.installerExperience.message}`}
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
