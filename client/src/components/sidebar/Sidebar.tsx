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

  return (
    <>
      <div className="flex flex-col fixed w-[17rem] h-screen text-white bg-black gap-20 p-6">
        <div className="mt-[15px] ">Logo</div>
        <div className="flex flex-col gap-10 flex-grow">
          {navLinks.map((links) => {
            const isActive = pathname === links.href;

            return (
              <Link
                className={`flex gap-6 hover:text-orange items-center text-[20px] ${
                  isActive ? "text-orange" : ""
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
        <div className="mt-auto mb-4 gap-4 text-[20px] flex items-center">
          <RiLogoutBoxRLine size={40} />
          <p>Logout</p>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
