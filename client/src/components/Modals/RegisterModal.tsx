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

  const { register, handleSubmit, formState: { errors }, reset } = useForm<UserType>({ resolver: zodResolver(userSchema) })

  const onSubmit = async (data: UserType) => {
    try {
      const body = {
        firstname: data.firstname,
        lastname: data.lastname,
        phoneNumber: data.phoneNumber,
        emailAddress: data.emailAddress,
        password: data.password,
        username: data.username
      }
      const res = await instance.post("/auth/register", body)
      reset();
      console.log(res)

    } catch (error) {
      console.log('error', error)
    }
  };

  if (!isOpen) return null;

  return (
    <ModalContainer width="30%" height="80%">
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
        <div className="flex *:border-none *:rounded-[10px] *:bg-zinc-800 *:p-5  gap-2 h-10 *:text-black">
          <input
            type="text"
            placeholder="Firstname"
            className="w-[50%] "
            {...register("firstname")}
          />
          {/* <p>{ }</p> */}
          <input
            type="text"
            placeholder="Lastname"
            className="w-[50%]"
            {...register("lastname")}
          />
        </div>
        <div className="flex flex-col *:border-none *:rounded-[10px] *:bg-zinc-800 gap-4 *:h-10 *:text-black">
          <input
            type="text"
            placeholder="Username"
            className="p-5"
            {...register("username")}
          />
          <input
            type="text"
            placeholder="Phone Number"
            maxLength={11}
            className="p-5"
            {...register("phoneNumber")}
          />
          <input
            type="text"
            placeholder="Email Address"
            className="p-5"
            {...register("emailAddress")}
          />
          <input
            type="text"
            placeholder="Password"
            className="p-5"
            {...register("password")}
          />
          <input
            type="text"
            placeholder="Confirm Password"
            className="p-5"
            {...register("confirmPassword")}

          />
        </div>
        <div className="flex justify-center">
          <Button title="SIGN UP" type="submit" onHover={true} />
        </div>
      </form>
      <div className="*:text-white">
        <p>
          Already have an account?{" "}
          <Button
            className=" text-orange underline"
            title="SIGN UP"
            onClick={openLogin}
          />
        </p>
      </div>
    </ModalContainer>
  );
};

export default RegisterModal;
