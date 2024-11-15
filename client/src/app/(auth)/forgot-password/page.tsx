"use client";
import Button from "@/components/button/OrangeButton";
import InputOrange from "@/components/input/inputOrange";
import useMailer from "@/hooks/mailer/useMailer";
import Image from "next/image";
import React, { useState } from "react";
import Swal from "sweetalert2";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [step, setStep] = useState(1); // Step 1: Email Entry, Step 2: OTP Entry, Step 3: Set Password
  const [emailError, setEmailError] = useState("");
  const [otpError, setOtpError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const { sendMail } = useMailer();

  const emailSent = () => {
    Swal.fire({
      title: "Email Sent!",
      text: "We've sent a one-time password (OTP) to your email.",
      icon: "success",
    });
  };

  const handleEmailSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (email) {
      emailSent();
      sendMail(email, "OTP", ""); // Replace "" with any additional payload if needed
      setStep(2); // Move to OTP Step
    } else {
      setEmailError("Please enter your email address.");
    }
  };

  const handleOtpSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (otp) {
      setStep(3); // Move to Set Password Step
    } else {
      setOtpError("Please enter the OTP sent to your email.");
    }
  };

  const handlePasswordSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (password && confirmPassword) {
      if (password === confirmPassword) {
        Swal.fire({
          title: "Password Reset Successful!",
          text: "Your password has been updated. You can now log in with your new password.",
          icon: "success",
        });
        // Redirect to login page
        window.location.href = "/login";
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
        <p className="text-sm text-white/70">
          {step === 1
            ? "Enter your email to receive the OTP."
            : step === 2
            ? "Enter the OTP sent to your email."
            : "Set a new password for your account."}
        </p>

        {/* Step 1: Email Input */}
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

        {/* Step 2: OTP Input */}
        {step === 2 && (
          <div className="w-full flex flex-col gap-4">
            <InputOrange
              label="OTP:"
              onChange={(e) => setOtp(e.target.value)}
            />
            {otpError && <p className="text-red-600 text-[12px]">{otpError}</p>}
          </div>
        )}

        {/* Step 3: Set Password */}
        {step === 3 && (
          <div className="w-full flex flex-col gap-4">
            <InputOrange
              label="New Password:"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <InputOrange
              label="Confirm Password:"
              type="password"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            {passwordError && (
              <p className="text-red-600 text-[12px]">{passwordError}</p>
            )}
          </div>
        )}

        {/* Submit Button */}
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

        {/* Back to Login */}
        <p className="text-sm text-white/70 mt-4">
          Remembered your password?{" "}
          <a
            href="/login"
            className="text-orangePrimary hover:text-orangeRed underline"
          >
            Log in
          </a>
        </p>
      </form>
    </div>
  );
};

export default ForgotPassword;
