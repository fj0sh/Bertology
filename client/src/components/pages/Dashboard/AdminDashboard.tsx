"use client";
import React, { useState } from "react";
import PrimeCalendar from "@/components/cards/calendar/Calendar";
import LineGraph from "@/components/graphs/Line";
import { DonutChart } from "@/components/graphs/Donut";
import { formatDateForSQL } from "@/lib/function/dateFormatter";
import useBooking from "@/hooks/requests/useBooking";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import "@/style/tables.css";

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
    console.log(rowData);
    if (rowData.installerFirstName && rowData.installerLastName) {
      return `${rowData.installerFirstName} ${rowData.installerLastName}`;
    } else {
      return (
        <p className="text-red-500 font-semibold">No Assigned Installer</p>
      );
    }
  };

  return (
    <div className="grid grid-cols-2 h-full w-full gap-3 ">
      <div className="flex justify-center items-center p-6 rounded-md h-[24.5rem] w-full ">
        <LineGraph />
      </div>

      <div className=" flex justify-center items-center p-6 rounded-md h-[24.5rem] w-full">
        <DonutChart />
      </div>

      <div className="flex flex-col gap-8 rounded-md h-full p-5">
        <div className="text-white font-semibold flex flex-col gap-3">
          <p>Date: {date}</p>
          <p>Booking/s: {dataByDate.length}</p>
        </div>
        <div>
          <DataTable tableClassName="custom-table" value={dataByDate}>
            <Column header={"Name"} body={nameColumn} className="" />
            <Column header={"Installer"} body={installerColumn} className="" />
            <Column
              header={"Status"}
              field="status"
              className="text-[#FFFFFF]"
            />
          </DataTable>
        </div>
      </div>
      <div className=" h-full px-20">
        <PrimeCalendar selectedDate={handleDateChange} setDisable={false} />
      </div>
    </div>
  );
};

export default AdminDashboard;
