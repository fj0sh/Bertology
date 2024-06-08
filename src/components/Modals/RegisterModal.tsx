import Link from "next/link";
import React from "react";
import Button from "../button";

const RegisterModal = () => {
  return (
    <div className="border border-black flex justify-center h-[100vh] z-10">
      <div className="fixed top-0 left-0 w-full h-full bg-black opacity-45"></div>
      <div className="flex flex-col items-center border rounded-[15px] bg-black bg-opacity-85 border-black w-[30%] h-[80%] z-20 justify-center gap-8 p-20 my-10">
        <div className="text-center *:text-white">
          <h1 className="">Create an Account</h1>
          <p>Sign in and enjoy our service</p>
        </div>
        <div className="flex flex-col gap-4 w-full my-10">
          <div className="flex *:border-none *:rounded-[10px] *:bg-zinc-800 *:p-5  gap-2 h-10 *:text-white">
            <input type="text" placeholder="Firstname" className="w-[50%]" />
            <input type="text" placeholder="Lastname" className="w-[50%]" />
          </div>
          <div className="flex flex-col *:border-none *:rounded-[10px] *:bg-zinc-800 gap-4 *:h-10 *:text-white">
            <input type="text" placeholder="Phone Number" className="p-5" />
            <input type="text" placeholder="Email Address" className="p-5" />
            <input type="text" placeholder="Password" className="p-5" />
            <input type="text" placeholder="Confirm Password" className="p-5" />
          </div>
          <div className="flex justify-center">
            <Button
              title="SIGN UP"
              className="text-white w-36 border-none rounded-[10px] bg-zinc-800 p-2 hover:bg-orange-600"
            ></Button>
          </div>
        </div>
        <div className="*:text-white">
          <p>
            Already have an account?{" "}
            <span className=" text-orange-600 underline"> LOG IN NOW</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterModal;
