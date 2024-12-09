"use client";
import { TbLayoutDashboardFilled } from "react-icons/tb";
import Logo from "../Logo";
import React, { useState } from "react";
import Link from "next/link";
import { BsPersonFillGear } from "react-icons/bs";
import { HiMiniWrenchScrewdriver } from "react-icons/hi2";
import { PiUserSoundBold } from "react-icons/pi";
import { IoCalendar } from "react-icons/io5";
import { RiLogoutBoxRLine, RiSettings4Line } from "react-icons/ri";
import { usePathname } from "next/navigation";
import { useLogoutContext } from "@/providers/logoutProvider";
import Image from "next/image";

const navLinks = [
  {
    icons: <TbLayoutDashboardFilled size={30} />,
    title: "Dashboard",
    href: "/admin/dashboard",
  },
  {
    icons: <IoCalendar size={30} />,
    title: "Booking Request",
    href: "/admin/booking-request",
  },
  {
    icons: <BsPersonFillGear size={30} />,
    title: "Technicians",
    href: "/admin/installers",
  },
  {
    icons: <HiMiniWrenchScrewdriver size={30} />,
    title: "Services",
    href: "/admin/services",
  },
  {
    icons: <PiUserSoundBold size={30} />,
    title: "Inquiries",
    href: "/admin/inquiries",
  },
];

const Sidebar = () => {
  const pathname = usePathname();
  const { isOpen, setIsOpen } = useLogoutContext();
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  const handleSettingsToggle = () => {
    setIsSettingsOpen((prev) => !prev);
  };

  return (
    <div className="flex flex-col fixed w-[15rem] h-screen text-white bg-black gap-20 p-6">
      <div className="mt-[15px]">
        <Image
          src={"/images/transp_logov2.png"}
          alt={"Logo"}
          width={200}
          height={100}
        />
      </div>
      <div className="flex flex-col gap-10 flex-grow">
        {navLinks.map((links) => {
          const isActive = pathname.startsWith(links.href);

          return (
            <Link
              className={`flex relative gap-6 hover:text-orangePrimary items-center text-[15px] ${
                isActive ? "text-orangePrimary" : "text-white"
              }`}
              key={links.title}
              href={links.href}
            >
              <div>{links.icons}</div>
              <div>{links.title}</div>
            </Link>
          );
        })}

        {/* Settings with Dropdown */}
        <div className="flex flex-col">
          <button
            className={`flex gap-6 hover:text-orangePrimary items-center text-[15px] ${
              isSettingsOpen ? "text-orangePrimary" : "text-white"
            }`}
            onClick={handleSettingsToggle}
          >
            <RiSettings4Line size={30} />
            <div>Settings</div>
          </button>
          {isSettingsOpen && (
            <div className="ml-10 flex flex-col gap-4 mt-2">
              <Link
                href="/admin/settings/payments"
                className={`hover:text-orangePrimary ${
                  pathname === "/admin/settings/payments"
                    ? "text-orangePrimary "
                    : "text-white"
                }`}
              >
                Payments
              </Link>
            </div>
          )}
        </div>
      </div>
      <button
        className="mt-auto mb-4 gap-4 text-[15px] flex items-center"
        onClick={() => setIsOpen(true)}
      >
        <RiLogoutBoxRLine size={30} />
        <p>Logout</p>
      </button>
    </div>
  );
};

export default Sidebar;
