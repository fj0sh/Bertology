"use client";
import Button from "@/components/button/OrangeButton";
import InputOrange from "@/components/input/inputOrange";
import { useUser } from "@/providers/UserProvider";
import React from "react";
import { useForm } from "react-hook-form";

const Profile = () => {
  const { user } = useUser();

  console.log(user);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <div className="flex gap-4 justify-center items-center">
      <div className="bg-grey p-[3rem] self-start"></div>
      <div className="bg-grey flex flex-col gap-3 p-[3rem]">
        <InputOrange />
        <InputOrange />
        <InputOrange />
        <InputOrange />
        <Button title="Save Edit" />
      </div>
    </div>
  );
};

export default Profile;
