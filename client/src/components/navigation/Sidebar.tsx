"use client";
import { TbLayoutDashboardFilled } from "react-icons/tb";
import Logo from "../Logo";
import React from "react";
import Link from "next/link";
import { BsPersonFillGear } from "react-icons/bs";
import { HiMiniWrenchScrewdriver } from "react-icons/hi2";
import { PiUserSoundBold } from "react-icons/pi";
import { IoCalendar } from "react-icons/io5";
import { RiLogoutBoxRLine } from "react-icons/ri";
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
  // {
  //   icons: <FaTruckLoading size={30} />,
  //   title: "Orders",
  //   href: "/admin/orders",
  // },
  // {
  //   icons: <FaBoxes size={30} />,
  //   title: "Products",
  //   href: "/admin/products",
  // },
  // { icons: <HiMiniUsers size={30} />, title: "Users", href: "/admin/users" },
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

  return (
    <>
      <div className="flex flex-col fixed w-[15rem] h-screen text-white bg-black gap-20 p-6">
        <div className="mt-[15px]">
          <Image
            src={"/images/transp_logov2.png"}
            alt={"Logo"}
            width={200}
            height={100}
          ></Image>
        </div>
        <div className="flex flex-col gap-10 flex-grow">
          {navLinks.map((links) => {
            const isActive = pathname.startsWith(links.href);

            return (
              <Link
                className={`flex gap-6 hover:text-orangePrimary items-center text-[15px] ${
                  isActive ? "text-orangePrimary" : " text-white"
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
