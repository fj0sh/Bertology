"use client";
import { usePathname } from "next/navigation";
import "../../app/globals.css";
import React, { useState } from "react";
import Link from "next/link";
import { IoMdCart } from "react-icons/io";
import { FaRegUserCircle } from "react-icons/fa";

const Navbar = () => {
  const pathname = usePathname();
  console.log(pathname);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about-us" },
    { name: "Services", href: "/services" },
    { name: "Products", href: "/products" },
    { name: <IoMdCart size={25} />, href: "/cart" },
    { name: <FaRegUserCircle size={25} />, href: "/profile" },
  ];

  return (
    <div className="bg-black z-50 h-16 p-3 fixed w-full top-0">
      <div className="flex-1 flex items-center justify-between">
        <div className="flex-shrink-0">
          <a href="/" className="text-white text-[30px] font-bold">
            Logo
          </a>
        </div>
        <div className="hidden sm:block sm:ml-6">
          <div className="hidden sm:block sm:ml-6">
            <div className="flex gap-10 space-x-4 mr-[45px] text-white">
              {navLinks.map((x, index) => {
                const isActive =
                  x.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(x.href);

                return (
                  <div className="text-[16px] font-normal" key={index}>
                    <Link
                      href={x.href}
                      className={`${isActive ? "text-orange" : "text-white"}`}
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
