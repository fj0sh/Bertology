"use client";
import React from "react";
import useFetchData from "@/hooks/fetcher/useFetchData";
import User from "@/constants/Users";
import "../../../style/tables.css";
import Link from "next/link";

const Users = () => {
  const { data, loading, error } = useFetchData<User[]>("/users");

  console.log(data);

  return (
    <div className="w-full h-full p-[15px]">
      <table className="bg-white w-full rounded-tl-lg rounded-tr-lg">
        <thead className="shadow-lg bg-orange text-white font-[22px] ">
          <tr>
            <td>Username</td>
            <td>Email</td>
            <td>Service Booked</td>
            <td>Products bought</td>
            <td>Status</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody className="*:px-2 *:py-3">
          {data?.map((x, index) => (
            <tr
              key={index}
              className={`${index % 2 === 0 ? "bg-white" : "text-black"}`}
            >
              <td className="text-left">{x.username}</td>
              <td>{x.emailAddress}</td>
              <td>0</td>
              <td>0</td>
              <td>{x.status}</td>
              <td>
                <Link href={``} className="hover:cursor-pointer">
                  View
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
