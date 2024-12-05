"use client";
import Button from "@/components/button/OrangeButton";
import InputOrange from "@/components/input/inputOrange";
import useAuth from "@/hooks/requests/useAuth";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import "../../globals.css";
import Swal from "sweetalert2";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const { loginUser } = useAuth();
  const invalidCredentials = () => {
    Swal.fire({
      title: "Invalid Credentials",
      text: "Please enter a valid email and password.",
      icon: "error",
    });
  };

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result = await loginUser(email, password);
    console.log(result);
    if (result.status !== 404) {
      router.push("/admin/dashboard");
      setEmail("");
      setPassword("");
    } else {
      invalidCredentials();
      console.log(result);
    }
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center bg-black text-white">
      <form
        onSubmit={handleLogin}
        className="p-10 flex flex-col gap-6 items-center w-[90%] max-w-md bg-background bg-opacity-95 rounded-lg"
      >
        <div className="w-48 h-48 relative">
          <Image
            src="/images/Bertology_logo.png"
            alt="Bertology Logo"
            fill
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
            value={email}
            label="Email:"
            onChange={(e) => setEmail(e.target.value)}
          />
          <InputOrange
            value={password}
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
