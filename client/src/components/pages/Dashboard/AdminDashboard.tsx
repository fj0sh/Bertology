"use client";
import React from "react";
import DashboardCard from "@/components/cards/DashboardCard";
import { useUser } from "@/providers/UserProvider";
import PrimeCalendar from "@/components/cards/calendar/Calendar";
import LineGraph from "@/components/graphs/Line";
import { DonutChart } from "@/components/graphs/Donut";

const AdminDashboard = () => {
  return (
    <div className="grid grid-cols-2 h-full w-full gap-3 ">
      <div className="flex justify-center items-center p-6 rounded-md h-[24.5rem] w-full">
        <LineGraph />
      </div>

      <div className=" flex justify-center items-center p-6 rounded-md h-[24.5rem] w-full">
        <DonutChart />
      </div>

      <div className="border rounded-md h-full border-white"></div>
      <div className=" h-full px-20">
        <PrimeCalendar />
      </div>
    </div>
  );
};

export default AdminDashboard;
