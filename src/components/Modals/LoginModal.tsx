import Link from "next/link";
import React from "react";
import Button from "../button";

const LoginModal = () => {
  return (
    <div className="border border-black flex justify-center h-[100vh] z-10">
      <div className="fixed top-0 left-0 w-full h-full bg-black opacity-75"></div>
      <div className="flex flex-col items-center border rounded-[15px] border-black w-[40%] h-[50%]  z-20 justify-center gap-4">
        <div className="text-center">
          <h1 className="">Welcome Back</h1>
          <p>Please login to your account</p>
        </div>
        <div className="text-center flex flex-col gap-4">
          <input className="border rounded" type="text" />
          <input className="border rounded" type="password" />
          <div className="flex justify-center gap-4">
            <p>Remember Me</p>
            <Link href={""}>Forgot Password</Link>
          </div>
          <Button title="LOGIN" />
          <p>
            Not a member?{" "}
            <Link href={""} className=" text-orange-700">
              SIGN UP NOW
            </Link>
          </p>
          <hr className="border-white" />
        </div>
        <div className="flex flex-col gap-4">
          <p>Continue with</p>
          <Button title="GOOGLE"></Button>
          <Button title="FACEBOOK"></Button>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
