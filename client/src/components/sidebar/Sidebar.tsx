"use client";
import { TbLayoutDashboardFilled } from "react-icons/tb";
import Logo from "../Logo";
import React from "react";
import Link from "next/link";
import { FaBoxes, FaTruckLoading } from "react-icons/fa";
import { HiMiniUsers, HiMiniWrenchScrewdriver } from "react-icons/hi2";
import { IoCalendar } from "react-icons/io5";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { usePathname } from "next/navigation";
import { useLogoutContext } from "@/providers/logoutProvider";

const navLinks = [
  {
    icons: <TbLayoutDashboardFilled size={30} />,
    title: "Dashboard",
    href: "/dashboard",
  },
  {
    icons: <IoCalendar size={30} />,
    title: "Booking Request",
    href: "/booking-request",
  },
  {
    icons: <FaTruckLoading size={30} />,
    title: "Orders",
    href: "/reserved-products",
  },
  { icons: <FaBoxes size={30} />, title: "Products", href: "/view-products" },
  { icons: <HiMiniUsers size={30} />, title: "Users", href: "/users" },
  {
    icons: <HiMiniWrenchScrewdriver size={30} />,
    title: "Services",
    href: "/view-services",
  },
];

const Sidebar = () => {
  const pathname = usePathname();

  const { isOpen, setIsOpen } = useLogoutContext();

  console.log(isOpen);
  return (
    <>
      <div className="flex flex-col fixed w-[15rem] h-screen text-white bg-black gap-20 p-6">
        <div className="mt-[15px] ">Logo</div>
        <div className="flex flex-col gap-10 flex-grow">
          {navLinks.map((links) => {
            const isActive = pathname === links.href;

            return (
              <Link
                className={`flex gap-6 hover:text-orange items-center text-[15px] ${
                  isActive ? "text-orange" : " text-white"
                }`}
                key={links.title}
                href={links.href}
              >
                <div>{links.icons}</div>
                <div>{links.title}</div>
              </Link>
            );
          })}
        </div>
        <button
          className="mt-auto mb-4 gap-4 text-[15px] flex items-center"
          onClick={() => setIsOpen(true)}
        >
          <RiLogoutBoxRLine size={30} />
          <p>Logout</p>
        </button>
      </div>
    </>
  );
};

export default Sidebar;
