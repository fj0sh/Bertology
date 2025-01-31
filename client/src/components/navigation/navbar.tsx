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
    { name: "Contact Us", href: "/client/about-us#contactUs" },
    { name: "Services", href: "/client/offers" },
    // { name: "Offers", href: "/client/offers" },
    // { name: <IoMdCart size={25} />, href: "/client/cart" },
    // { name: <FaRegUserCircle size={25} />, href: "/client/profile" },
  ];

  return (
    <div className=" z-[9999999999] h-16 p-3 absolute w-full top-0">
      <div className="flex-1 flex items-center justify-between">
        <div className="flex-shrink-0">
          <a href="/" className="text-white text-[30px] font-bold">
            <Image
              src={"/images/transp_logov2.png"}
              alt="LOGO"
              width={200}
              height={200}
              className="absolute top-0 left-0"
            ></Image>
          </a>
        </div>

        <div className="hidden sm:block sm:ml-6">
          <div className="hidden sm:block sm:ml-6">
            <div className="flex gap-10 space-x-4 mr-[45px] text-white text-[30px]">
              {/* <SearchBar /> */}
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
                        isActive
                          ? " font-bold underline underline-offset-8 decoration-orangeRed decoration-2"
                          : "text-white"
                      } text-[16px] hover:text-orangeRed hover:text-[18px] transition-all`}
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
