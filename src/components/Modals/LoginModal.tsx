import Link from "next/link";
import React from "react";
import Button from "../button";

const LoginModal = () => {
  return (
    <div className="border border-black flex justify-center h-[100vh] z-10">
      <div className="fixed top-0 left-0 w-full h-full bg-black opacity-50"></div>
      <div className="flex flex-col items-center border rounded-[15px] bg-black bg-opacity-85 border-black w-[30%] h-[80%] z-20 justify-center gap-8 p-[4rem] my-10">
        <div className="text-white text-center">
          <p className="">Welcome Back</p>
          <p>Please login to your account</p>
        </div>
        <div className="text-center flex flex-col gap-8 w-full *:text-white">
          <input
            className="border-none rounded-[10px] h-10 p-5 bg-zinc-800"
            type="text"
            placeholder="Email Address"
          />
          <input
            className="border-none rounded-[10px] p-5 h-10 bg-zinc-800"
            type="password"
            placeholder="Password"
          />
          <div className="flex justify-around gap-4 text-white">
            <p className="text-sm">Remember Me</p>
            <Link href={""} className="text-sm">
              Forgot Password?
            </Link>
          </div>
          <div>
            <Button
              title="LOGIN"
              className="border-none rounded-[10px] p-[5px] bg-zinc-800 w-36 text-white hover:bg-orange-500"
            />
          </div>
          <p className="text-white">
            Not a member?{" "}
            <Link href={""} className=" text-orange-700 underline">
              SIGN UP NOW
            </Link>
          </p>
          <hr className="border-white" />
        </div>
        <div className="flex flex-col gap-8 text-white w-full items-center">
          <p>Continue with</p>
          <Button
            title="GOOGLE"
            className="border-2 w-80 border-orange-500 p-2 rounded-[15px] "
          ></Button>
          <Button
            title="FACEBOOK"
            className="border-2 w-80 border-orange-500 p-2 rounded-[15px] "
          ></Button>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
