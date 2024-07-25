"use client";
import Link from "next/link";
import React from "react";
import Button from "../button";
import { IoMdClose } from "react-icons/io";
import { useLogoutContext } from "@/providers/logoutProvider";
import ModalContainer from "./modalContainer/ModalContainer";

interface Props {}

const LogoutModal = () => {
  const { isOpen, setIsOpen } = useLogoutContext();

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
        <p className="text-orange">LOGO</p>
        <p className="text-[30px]">Are you sure you want to Logout?</p>
        <div className="flex gap-10">
          <Button title="YES" onHover={true} />
          <Button title="NO" onHover={true} onClick={() => setIsOpen(false)} />
        </div>
      </div>
    </ModalContainer>
  );
};

export default LogoutModal;
