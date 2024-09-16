import React, { ReactHTMLElement, useState } from "react";
import Button from "../button/OrangeButton";
import { IoMdClose } from "react-icons/io";
import ModalContainer from "./modalContainer/ModalContainer";
import { useForm } from "react-hook-form";
import { UserType, userSchema } from "@/constants/Users";
import instance from "@/lib/util/axios-instance";
import { zodResolver } from "@hookform/resolvers/zod";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  openLogin: () => void;
}

const RegisterModal = (props: Props) => {
  const { isOpen, onClose, openLogin } = props;

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<UserType>({ resolver: zodResolver(userSchema) });

  const onSubmit = async (data: UserType) => {
    try {
      const body = {
        firstname: data.firstname,
        lastname: data.lastname,
        phoneNumber: data.phoneNumber,
        emailAddress: data.emailAddress,
        password: data.password,
        username: data.username,
      };
      const res = await instance.post("/auth/register", body);
      reset();
      console.log(res);
    } catch (error) {
      console.log("error", error);
    }
  };

  if (!isOpen) return null;

  return (
    <ModalContainer>
      <div className="absolute top-5 right-5">
        <IoMdClose
          className="text-white text-[30px] cursor-pointer"
          onClick={onClose}
        />
      </div>
      <div className="text-center *:text-white">
        <h1 className="">Create an Account</h1>
        <p>Sign in and enjoy our service</p>
      </div>
      <form
        className="flex flex-col gap-4 w-full my-10 "
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex gap-2">
          <div className="flex flex-col gap-1">
            <input
              type="text"
              placeholder="Firstname"
              className={` bg-zinc-800 p-5 text-white h-10 w-full rounded-[10px] border-red-600`}
              {...register("firstname")}
            />
            {errors.firstname && (
              <p className="text-red-600 text-[13px]">
                {errors.firstname.message}
              </p>
            )}
          </div>
          <div className="flex flex-col gap-1">
            <input
              type="text"
              placeholder="Lastname"
              className=" bg-zinc-800 p-5 text-white h-10 w-full rounded-[10px]"
              {...register("lastname")}
            />
            {errors.lastname && (
              <p className="text-red-600 text-[13px]">
                {errors.lastname.message}
              </p>
            )}
          </div>
        </div>
        <div className="flex flex-col gap-3 ">
          <div className="flex flex-col gap-1">
            <input
              type="text"
              placeholder="Username"
              className=" bg-zinc-800 p-5 text-white h-10 w-full rounded-[10px]"
              {...register("username")}
            />
            {errors.username && (
              <p className="text-red-600 text-[13px]">
                {errors.username.message}
              </p>
            )}
          </div>

          <div className="flex flex-col gap-1">
            <input
              type="text"
              placeholder="Phone Number"
              maxLength={11}
              className=" bg-zinc-800 p-5 text-white h-10 w-full rounded-[10px]"
              {...register("phoneNumber")}
            />
            {errors.phoneNumber && (
              <p className="text-red-600 text-[13px]">
                {errors.phoneNumber.message}
              </p>
            )}
          </div>

          <div className="flex flex-col gap-1">
            <input
              type="text"
              placeholder="Email Address"
              className=" bg-zinc-800 p-5 text-white h-10 w-full rounded-[10px]"
              {...register("emailAddress")}
            />
            {errors.emailAddress && (
              <p className="text-red-600 text-[13px]">
                {errors.emailAddress.message}
              </p>
            )}
          </div>

          <div className="flex flex-col gap-1">
            <input
              type="text"
              placeholder="Password"
              className=" bg-zinc-800 p-5 text-white h-10 w-full rounded-[10px]"
              {...register("password")}
            />
            {errors.password && (
              <p className="text-red-600 text-[13px]">
                {errors.password.message}
              </p>
            )}
          </div>

          <div className="flex flex-col gap-1">
            <input
              type="text"
              placeholder="Confirm Password"
              className=" bg-zinc-800 p-5 text-white h-10 w-full rounded-[10px]"
              {...register("confirmPassword")}
            />
            {errors.confirmPassword && (
              <p className="text-red-600 text-[13px]">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>
        </div>
        <div className="flex justify-center">
          <Button title="SIGN UP" type="submit" hover={true} />
        </div>
      </form>
      <div className="*:text-white">
        <p>
          Already have an account?{" "}
          <Button
            className=" text-orangePrimaryPrimary underline"
            title="SIGN UP"
            onClick={openLogin}
          />
        </p>
      </div>
    </ModalContainer>
  );
};

export default RegisterModal;
