import Link from "next/link";
import React from "react";
import Button from "../button";

const LoginModal = () => {
  return (
    <div className="border border-black flex justify-center h-[100vh] z-10">
      <div className="fixed top-0 left-0 w-full h-full bg-black opacity-50"></div>
      <div className="flex flex-col items-center border rounded-[15px] border-black w-[30%] h-[80%] z-20 justify-center gap-8 p-20 my-10">
        <div className="text-center">
          <h1 className="">Welcome Back</h1>
          <p>Please login to your account</p>
        </div>
        <div className="text-center flex flex-col gap-8 w-full">
          <input
            className="border-none rounded-[20px] h-10 p-5 bg-slate-500 "
            type="text"
            placeholder="Email Address"
          />
          <input
            className="border-none rounded-[20px] p-5 h-10 bg-slate-500 "
            type="password"
            placeholder="Password"
          />
          <div className="flex justify-center gap-4">
            <p className="text-sm">Remember Me</p>
            <Link href={""} className="text-sm">
              Forgot Password?
            </Link>
          </div>
          <Button
            title="LOGIN"
            className="border-none rounded-[15px] p-[5px] bg-slate-500"
          />
          <p>
            Not a member?{" "}
            <Link href={""} className=" text-orange-700">
              SIGN UP NOW
            </Link>
          </p>
          <hr className="border-white" />
        </div>
        <div className="flex flex-col gap-8">
          <p>Continue with</p>
          <Button
            title="GOOGLE"
            className="border border-orange-500 p-2 rounded-[15px] "
          ></Button>
          <Button
            title="FACEBOOK"
            className="border border-orange-500 p-2 rounded-[15px] "
          ></Button>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
