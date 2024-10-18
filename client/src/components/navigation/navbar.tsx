"use client";
import { usePathname } from "next/navigation";
import "../../app/globals.css";
import React, { useState } from "react";
import Link from "next/link";
import { IoMdCart } from "react-icons/io";
import { FaRegUserCircle } from "react-icons/fa";
import SearchBar from "../input/SearchBar";
import Logo from "../Logo";
import Image from "next/image";

const Navbar = () => {
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/client/about-us" },
    { name: "Services", href: "/client/offers" },
    // { name: "Offers", href: "/client/offers" },
    // { name: <IoMdCart size={25} />, href: "/client/cart" },
    // { name: <FaRegUserCircle size={25} />, href: "/client/profile" },
  ];

  return (
    <div className="bg-black z-[9999999999] h-16 p-3 fixed w-full top-0">
      <div className="flex-1 flex items-center justify-between">
        <div className="flex-shrink-0">
          <a href="/" className="text-white text-[30px] font-bold">
            <p>Logo</p>
          </a>
        </div>

        <div className="hidden sm:block sm:ml-6">
          <div className="hidden sm:block sm:ml-6">
            <div className="flex gap-10 space-x-4 mr-[45px] text-white">
              <SearchBar />
              {navLinks.map((x, index) => {
                const isActive =
                  x.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(x.href);

                return (
                  <div key={index} className="relative group">
                    <Link
                      href={x.href}
                      className={`${
                        isActive ? "text-orangePrimary" : "text-white"
                      } text-[16px] font-normal`}
                    >
                      {x.name}
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
