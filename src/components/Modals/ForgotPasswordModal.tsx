import React from "react";
import Button from "../button";

const ForgotPasswordModal = () => {
  return (
    <div className="border border-black flex justify-center h-[100vh] z-10">
      <div className="fixed top-0 left-0 w-full h-full bg-black opacity-50"></div>
      <div className="flex flex-col *:text-white items-center border rounded-[15px] bg-black bg-opacity-85 border-black w-[30%] h-[80%] z-20 justify-center gap-8 p-[4rem] my-10">
        <div>Logo</div>
        <p>FORGOT PASSWORD?</p>
        <div className="flex flex-col gap-4 w-full items-center">
          <p className="text-sm self-start">Enter your email:</p>
          <input
            type="text"
            className="h-10 border border-none rounded-[10px] bg-zinc-600 w-full"
          />
          <Button
            title="Enter Email"
            className="border border-none bg-zinc-500 w-56 rounded-[10px] p-2"
          ></Button>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordModal;
