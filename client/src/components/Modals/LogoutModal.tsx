"use client";
import Link from "next/link";
import React from "react";
import Button from "../button";
import { IoMdClose } from "react-icons/io";
import { useLogoutContext } from "@/providers/logoutProvider";

interface Props {}

const LogoutModal = () => {
  const { isOpen, setIsOpen } = useLogoutContext();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="fixed top-0 left-0 w-full h-full bg-black opacity-50"></div>
      <div className="flex relative flex-col items-center border rounded-[15px] bg-white bg-opacity-20 border-black w-[50rem] h-[25rem] z-20 justify-center gap-8 p-[4rem] my-10">
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
            <Button
              title="NO"
              onHover={true}
              onClick={() => setIsOpen(false)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoutModal;
