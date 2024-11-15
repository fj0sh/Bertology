"use client";
import Button from "@/components/button/OrangeButton";
import InputOrange from "@/components/input/inputOrange";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.SyntheticEvent) => {
    e.preventDefault();

    console.log(email);
    console.log(password);
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center bg-black text-white">
      <form
        onSubmit={handleLogin}
        className="p-10 flex flex-col gap-6 items-center w-[90%] max-w-md bg-background bg-opacity-95 rounded-lg"
      >
        {/* Logo */}
        <div className="w-32 h-32">
          <Image
            src="/images/Bertology_logo.png"
            alt="Bertology Logo"
            width={0}
            height={0}
            sizes="100%"
            style={{ width: "100%", height: "100%" }}
            className="rounded-full"
          />
        </div>
        <p className="text-[28px] font-bold text-orangePrimary tracking-wide">
          Welcome Back
        </p>
        <p className="text-sm text-white/70">Log in to access your account</p>

        {/* Input Fields */}
        <div className="w-full flex flex-col gap-4">
          <InputOrange
            label="Email:"
            onChange={(e) => setEmail(e.target.value)}
          />
          <InputOrange
            label="Password:"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {/* Submit Button */}
        <Button
          title="Login"
          type="submit"
          className="bg-orangePrimary hover:bg-orangeRed text-black font-semibold rounded-md px-6 py-2"
        />

        {/* Forgot Password */}
        <Link
          href="/forgot-password"
          className="text-orangePrimary hover:text-orangeRed underline text-sm mt-4"
        >
          Forgot Password?
        </Link>
      </form>
    </div>
  );
};

export default Login;
