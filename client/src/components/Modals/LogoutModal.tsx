"use client";
import Link from "next/link";
import React from "react";
import Button from "../button/OrangeButton";
import { IoMdClose } from "react-icons/io";
import { useLogoutContext } from "@/providers/logoutProvider";
import ModalContainer from "./modalContainer/ModalContainer";
import { useRouter } from "next/navigation";
import Cookie from "universal-cookie";

const LogoutModal = () => {
  const { isOpen, setIsOpen } = useLogoutContext();
  const router = useRouter();
  const cookies = new Cookie();

  const handleLogout = () => {
    cookies.remove("jwt_auth");
    router.push("/login");
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <ModalContainer width="40%">
      <div className="absolute top-5 right-5">
        <IoMdClose
          className="text-white text-[30px] cursor-pointer"
          onClick={() => setIsOpen(false)}
        />
      </div>
      <div className="flex flex-col items-center gap-10 text-white">
        <p className="text-orangePrimary">BERTOLOGY</p>
        <p className="text-[30px]">Are you sure you want to Logout?</p>
        <div className="flex gap-10">
          <Button title="YES" hover={true} onClick={handleLogout} />
          <Button title="NO" hover={true} onClick={() => setIsOpen(false)} />
        </div>
      </div>
    </ModalContainer>
  );
};

export default LogoutModal;
