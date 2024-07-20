import React from "react";
import Button from "../button";
import { IoMdClose } from "react-icons/io";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  openLogin: () => void;
}

const RegisterModal = (props: Props) => {
  const { isOpen, onClose, openLogin } = props;

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="fixed top-0 left-0 w-full h-full bg-black opacity-45"></div>
      <div className="relative flex flex-col items-center border rounded-[15px] bg-black bg-opacity-85 border-black w-[35rem] h-[50rem] z-20 justify-center gap-8 p-[4rem] my-10 overflow-auto">
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
        <div className="flex flex-col gap-4 w-full my-10">
          <div className="flex *:border-none *:rounded-[10px] *:bg-zinc-800 *:p-5  gap-2 h-10 *:text-white">
            <input type="text" placeholder="Firstname" className="w-[50%] " />
            <input type="text" placeholder="Lastname" className="w-[50%]" />
          </div>
          <div className="flex flex-col *:border-none *:rounded-[10px] *:bg-zinc-800 gap-4 *:h-10 *:text-white">
            <input type="text" placeholder="Phone Number" className="p-5" />
            <input type="text" placeholder="Email Address" className="p-5" />
            <input type="text" placeholder="Password" className="p-5" />
            <input type="text" placeholder="Confirm Password" className="p-5" />
          </div>
          <div className="flex justify-center">
            <Button title="SIGN UP" onHover={true}></Button>
          </div>
        </div>
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
      </div>
    </div>
  );
};

export default RegisterModal;
