import React from "react";
import Button from "../button";
import { IoMdClose } from "react-icons/io";
import ModalContainer from "./modalContainer/ModalContainer";
import { signIn } from "next-auth/react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  openRegister: () => void;
  openForgotPassword: () => void;
}

const LoginModal = (props: Props) => {
  const { isOpen, onClose, openRegister, openForgotPassword } = props;

  if (!isOpen) return null;

  return (
    <ModalContainer width={"30%"} height={"80%"}>
      <div className="absolute top-5 right-5">
        <IoMdClose
          className="text-white text-[30px] cursor-pointer"
          onClick={onClose}
        />
      </div>
      <div className="text-white text-center">
        <p className="">Welcome Back</p>
        <p>Please login to your account</p>
      </div>
      <div className="text-center flex flex-col gap-8 w-full *:text-white">
        <input
          className="border-none rounded-[10px] h-10 p-5 bg-grey"
          type="text"
          placeholder="Email Address"
        />
        <input
          className="border-none rounded-[10px] p-5 h-10 bg-grey"
          type="password"
          placeholder="Password"
        />
        <div className="flex justify-around gap-4 text-white">
          <p className="text-sm">Remember Me</p>
          <button className="text-sm" onClick={openForgotPassword}>
            Forgot Password?
          </button>
        </div>
        <div>
          <Button title="LOGIN" onHover={true} height="3rem" />
        </div>
        <p className="text-white">
          Not a member?{" "}
          <button className="text-orange underline" onClick={openRegister}>
            Sign Up Now
          </button>
        </p>
        <hr className="border-white" />
      </div>
      <div className="flex flex-col gap-8 text-white w-full items-center">
        <p>Continue with</p>
        <Button
          title="GOOGLE"
          className="border-2 w-80 border-orange p-2 rounded-[15px]"
          onClick={() => signIn("google")}
        ></Button>
        <Button
          title="FACEBOOK"
          className="border-2 w-80 border-orange p-2 rounded-[15px] "
        ></Button>
      </div>
    </ModalContainer>
  );
};

export default LoginModal;
