"use client";
import React from "react";
import Link from "next/link";
import { useUser } from "@/providers/UserProvider";

const Avatar = () => {
  const { user } = useUser();
  return (
    <div className="flex border-none bg-gray-700 p-2 rounded-lg gap-3">
      <div className="self-center">
        {user ? user.username : "User not Defined"}
      </div>

      <Link href={"admin/admin-profile"}>
        <div className="border border-black-500 rounded-full bg-white p-4 w-[50px] h-[50px]"></div>
      </Link>
    </div>
  );
};

export default Avatar;
