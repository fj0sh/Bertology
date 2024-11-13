"use client";
import React, { useRef, useState } from "react";
import DashboardCard from "@/components/cards/DashboardCard";
import { useUser } from "@/providers/UserProvider";
import PrimeCalendar from "@/components/cards/calendar/Calendar";
import LineGraph from "@/components/graphs/Line";
import { DonutChart } from "@/components/graphs/Donut";
import { formatDateForSQL } from "@/lib/function/dateFormatter";
import useBooking from "@/hooks/requests/useBooking";
import { BookingType } from "@/constants/Booking";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

const AdminDashboard = () => {
  const { dataByDate, getBookingByDate } = useBooking();

  const currentDate = new Date();
  const [date, setDate] = useState(formatDateForSQL(currentDate).split(" ")[0]);

  const handleDateChange = (date: string) => {
    const formattedDate = formatDateForSQL(date).split(" ")[0];
    setDate(formattedDate);
    getBookingByDate(formattedDate);
  };

  const nameColumn = (rowData: any) => {
    return `${rowData.firstName} ${rowData.lastName}`;
  };
  const installerColumn = (rowData: any) => {
    return `${rowData.installerFirstName} ${rowData.installerLastName}`;
  };

  return (
    <div className="grid grid-cols-2 h-full w-full gap-3 ">
      <div className="flex justify-center items-center p-6 rounded-md h-[24.5rem] w-full">
        <LineGraph />
      </div>

      <div className=" flex justify-center items-center p-6 rounded-md h-[24.5rem] w-full">
        <DonutChart />
      </div>

      <div className="flex flex-col gap-8 border rounded-md h-full border-white p-5">
        <div className="text-white font-semibold">
          <p>{date}</p>
          <p>Bookings: {dataByDate.length}</p>
        </div>
        <div>
          <DataTable value={dataByDate}>
            <Column header={"Name"} body={nameColumn} />
            <Column header={"Installer"} body={installerColumn} />
            <Column header={"Status"} field="status" />
          </DataTable>
        </div>
      </div>
      <div className=" h-full px-20">
        <PrimeCalendar selectedDate={handleDateChange} />
      </div>
    </div>
  );
};

export default AdminDashboard;
