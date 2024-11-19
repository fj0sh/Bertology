"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useUser } from "@/providers/UserProvider";

const Avatar = () => {
  const { user } = useUser();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div
      className="relative flex items-center bg-gray-700 p-2 rounded-lg gap-3"
      onMouseEnter={() => setIsDropdownOpen(true)}
      onMouseLeave={() => setIsDropdownOpen(false)}
    >
      <div className="self-center text-white">
        {user ? user.user.username : "User not Defined"}
      </div>

      <div className="relative">
        <Link href="/admin/admin-profile">
          <div className="border border-black-500 rounded-full bg-white p-4 w-[50px] h-[50px]"></div>
        </Link>

        {isDropdownOpen && (
          <div className="absolute top-full right-0 mt-2 w-40 bg-white rounded-lg shadow-lg z-10">
            <Link
              href="/admin/edit-profile"
              className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
            >
              Edit Profile
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Avatar;
