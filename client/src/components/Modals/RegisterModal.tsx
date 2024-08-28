import React, { ReactHTMLElement, useState } from "react";
import Button from "../button";
import { IoMdClose } from "react-icons/io";
import { useMutation } from "@tanstack/react-query";
import ModalContainer from "./modalContainer/ModalContainer";
// import useAuth from "@/hooks/requests/useAuth";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  openLogin: () => void;
}

const RegisterModal = (props: Props) => {
  const { isOpen, onClose, openLogin } = props;
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const registerHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
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
        onSubmit={registerHandler}
      >
        <div className="flex *:border-none *:rounded-[10px] *:bg-zinc-800 *:p-5  gap-2 h-10 *:text-black">
          <input
            type="text"
            placeholder="Firstname"
            className="w-[50%] "
            onChange={(e) => setFirstname(e.target.value)}
          />
          <input
            type="text"
            placeholder="Lastname"
            className="w-[50%]"
            onChange={(e) => setLastname(e.target.value)}  
          />
        </div>
        <div className="flex flex-col *:border-none *:rounded-[10px] *:bg-zinc-800 gap-4 *:h-10 *:text-black">
          <input
            type="text"
            placeholder="Username"
            className="p-5"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="text"
            placeholder="Phone Number"
            maxLength={11}
            className="p-5"
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <input
            type="text"
            placeholder="Email Address"
            className="p-5"
            onChange={(e) => setEmailAddress(e.target.value)}
          />
          <input
            type="text"
            placeholder="Password"
            className="p-5"
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="text"
            placeholder="Confirm Password"
            className="p-5"
            onChange={(e) => setConfirmPassword(e.target.value)}
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
