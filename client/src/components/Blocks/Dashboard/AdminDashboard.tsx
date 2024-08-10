"use client";
import React from "react";
import Calendar from "react-calendar";
import "@/style/react-calendar.css";
import DashboardCard from "@/components/cards/DashboardCard";

interface tileProps {
  date: Date;
  view: string;
}

const disabledDates = ["07-27-2024", "08-01-2024", "07-30-2024"].map(
  (dateStr) => new Date(dateStr)
);

const AdminDashboard = () => {
  const disableDates = ({ date }: tileProps): boolean => {
    return disabledDates.some(
      (disabledDate) => date.toDateString() === disabledDate.toDateString()
    );
  };

  return (
    <div className="grid grid-cols-12 grid-rows-4 w-full h-full gap-10 grid-flow-row">
      <DashboardCard title="Booking Request" value={0} />
      <DashboardCard title="Product Request" value={0} />
      <DashboardCard title="Pending Request" value={0} />
      <DashboardCard title="Pending Bookings" value={0} />

      <div className="relative row-start-2 row-span-3 col-span-4 border-none border-orange flex flex-col gap-3">
        <div className="shadow-lg">
          <Calendar tileDisabled={disableDates} className={"     "} />
        </div>

        <div className="relative flex border border-orange h-full rounded-lg">
          <div className="w-[80%]"></div>
          <div className="w-[20%] border rounded-lg  border-l-orange rounded-tl-none rounded-bl-none h-full"></div>
        </div>
      </div>
      <div className=" row-start-2 row-span-3 col-span-4 border-none bg-grey rounded-lg flex flex-col items-center p-4">
        <div className="text-white">Bookings</div>
        <div></div>
      </div>
      <div className=" row-start-2 row-span-3 col-span-4 border-none bg-grey rounded-lg flex flex-col items-center p-4">
        <div className="text-white">Product Orders</div>
        <div></div>
      </div>
    </div>
  );
};

export default AdminDashboard;
