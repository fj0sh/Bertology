"use client";
import Button from "@/components/button/OrangeButton";
import InputOrange from "@/components/input/inputOrange";
import useMailer from "@/hooks/mailer/useMailer";
import useAuth from "@/hooks/requests/useAuth";
import { useUser } from "@/providers/UserProvider";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Swal from "sweetalert2";
import Cookie from "universal-cookie";
import "../../globals.css";
import { Password } from "primereact/password";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState(0);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [otpPin, setOtpPin] = useState(0);

  const [step, setStep] = useState(1); // Step 1: Email Entry, Step 2: OTP Entry, Step 3: Set Password
  const [emailError, setEmailError] = useState("");
  const [otpError, setOtpError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const { sendMail } = useMailer();
  const { userData, getUserByEmail, changePassword } = useAuth();
  const router = useRouter();

  const cookies = new Cookie();

  const emailSent = () => {
    Swal.fire({
      title: "Email Sent!",
      text: "We've sent a one-time password (OTP) to your email.",
      icon: "success",
    });
  };

  const OTPSuccess = () => {
    Swal.fire({
      title: "OTP Success!",
      text: "Please fill out the necessary fields to change your password.",
      icon: "success",
    });
  };

  const changePassSuccess = () => {
    Swal.fire({
      title: "Password Reset Successful!",
      text: "Your password has been updated. Please log in with your new password.",
      icon: "success",
      timer: 2500,
    }).then(() => {
      router.push("/login");
    });
  };

  const handleEmailSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email) {
      const user = await getUserByEmail(email); // Await the result
      if (user) {
        const rand = Math.floor(100000 + Math.random() * 900000);
        setOtpPin(rand);
        cookies.set("auth", rand);
        sendMail("Bertology OTP", email, `${rand}`, "Admin"); // Replace "" with any additional payload if needed
        emailSent();
        setStep(2); // Move to OTP Step
      } else {
        setEmailError("This Email is not Registered");
      }
    } else {
      setEmailError("Please enter your email address.");
    }
  };

  const handleOtpSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const cookieOtp = cookies.get("auth");
    if (otp) {
      if (cookieOtp != otp) {
        console.log(cookieOtp);
        setOtpError("Invalid OTP. Please try again.");
      } else {
        OTPSuccess();
        setOtpError("");
        cookies.remove("auth");
        setStep(3);
      }
    } else {
      setOtpError("Please enter the OTP sent to your email.");
    }
  };

  const handlePasswordSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(userData);
    if (password && confirmPassword) {
      if (password === confirmPassword) {
        if (userData?.id) {
          changePassword(password, userData.id);
          setPassword("");
          setConfirmPassword("");
          changePassSuccess();
        }
      } else {
        setPasswordError("Passwords do not match. Please try again.");
      }
    } else {
      setPasswordError("Please fill in all fields.");
    }
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center bg-black text-white">
      <form
        onSubmit={
          step === 1
            ? handleEmailSubmit
            : step === 2
            ? handleOtpSubmit
            : handlePasswordSubmit
        }
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

        {/* Title */}
        <p className="text-[28px] font-bold text-orangePrimary tracking-wide">
          Forgot Password
        </p>
        <div className="text-sm text-white/70">
          {step === 1 ? (
            <>
              <p>
                Enter your email, and we{"'"}ll send you an OTP to reset your
                password.
              </p>
              <br />
              <p>
                The email you entered must be the one registered with your
                account or the one you use to log in
              </p>
            </>
          ) : step === 2 ? (
            "Enter the OTP sent to your email."
          ) : (
            "Set a new password for your account."
          )}
        </div>

        {step === 1 && (
          <div className="w-full flex flex-col gap-4">
            <InputOrange
              label="Email:"
              onChange={(e) => setEmail(e.target.value)}
            />
            {emailError && (
              <p className="text-red-600 text-[12px]">{emailError}</p>
            )}
          </div>
        )}

        {step === 2 && (
          <div className="w-full flex flex-col gap-4">
            <InputOrange
              label="OTP:"
              onChange={(e) => setOtp(e.target.value)}
            />
            {otpError && <p className="text-red-600 text-[12px]">{otpError}</p>}
          </div>
        )}

        {step === 3 && (
          <div className="w-full flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <p className="text-[18px]">New Password:</p>
              <Password
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                toggleMask
                feedback={false}
                unstyled
                className="w-full"
                pt={{
                  root: { className: "border border-orangeRed  rounded-sm" },
                  input: { className: "bg-background  p-2 w-full" },
                }}
              />
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-[18px]">Confirm Password:</p>
              <Password
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                toggleMask
                feedback={false}
                unstyled
                className="w-full"
                pt={{
                  root: { className: "border border-orangeRed  rounded-sm" },
                  input: { className: "bg-background  p-2 w-full " },
                }}
              />
            </div>
            {passwordError && (
              <p className="text-red-600 text-[12px]">{passwordError}</p>
            )}
          </div>
        )}

        <Button
          title={
            step === 1
              ? "Send OTP"
              : step === 2
              ? "Verify OTP"
              : "Reset Password"
          }
          type="submit"
          className="bg-orangePrimary hover:bg-orangeRed text-black font-semibold rounded-md px-6 py-2"
        />
        {step === 1 && (
          <p className="text-sm text-white/70 mt-4">
            <a
              href="/login"
              className="text-orangePrimary hover:text-orangeRed underline"
            >
              Log in
            </a>
          </p>
        )}
      </form>
    </div>
  );
};

export default ForgotPassword;
