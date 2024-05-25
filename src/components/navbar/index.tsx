"use client";
import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className=" bg-black z-10">
      <div className="flex-1 flex items-center justify-between">
        <div className="flex-shrink-0">
          <a href="/" className="text-black text-[30px] font-bold">
            Logo
          </a>
        </div>
        <div className="hidden sm:block sm:ml-6">
          <div className="flex space-x-4 has-mr-[45px]">
            <a
              href="/"
              className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-lg font-medium"
            >
              Home
            </a>
            <a
              href="/about"
              className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-lg font-medium"
            >
              About Us
            </a>
            <a
              href="/services"
              className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-lg font-medium"
            >
              Services
            </a>
            <a
              href="/products"
              className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-lg font-medium"
            >
              Products
            </a>
            <a
              href="/cart"
              className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-lg font-medium"
            >
              Cart
            </a>
            <a
              href="/profile"
              className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-lg font-medium"
            >
              Profile
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
