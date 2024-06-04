import Link from "next/link";
import React from "react";
import Button from "../button";

const RegisterModal = () => {
  return (
    <div className="border border-black flex justify-center h-[100vh] z-10">
      <div className="fixed top-0 left-0 w-full h-full bg-black opacity-45"></div>
      <div className="flex flex-col items-center border rounded-[15px] border-black w-[30%] h-[80%] z-20 justify-center gap-8 p-20 my-10">
        <div className="text-center">
          <h1 className="">Create an Account</h1>
          <p>Sign in and enjoy our service</p>
        </div>
        <div>
          <form action="">
            <div>
              <input type="text" />
              <input type="text" />
            </div>
            <div>
              <input type="text" />
              <input type="text" />
              <input type="text" />
              <input type="text" />

              <Button title="Sign Up"></Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterModal;
