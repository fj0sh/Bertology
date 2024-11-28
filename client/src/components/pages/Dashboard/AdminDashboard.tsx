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
    if (rowData.installerFirstName && rowData.installerLastName) {
      return `${rowData.installerFirstName} ${rowData.installerLastName}`;
    } else {
      return (
        <p className="text-red-500 font-semibold">No Assigned Installer</p>
      );
    }
  };

  return (
    <div className="flex flex-col w-full gap-8">
      <div className="flex flex-wrap gap-6 w-full">
        <div className="flex-1 flex justify-center items-center p-6 rounded-md shadow-md h-[20rem]">
          <LineGraph />
        </div>
        <div className="flex-1 flex flex-col gap-4 justify-center items-center p-6 rounded-md shadow-md h-[20rem]">
          <DonutChart />
        </div>
      </div>

      <div className="flex flex-wrap gap-6">
        <div className="flex-1 flex flex-col gap-6 rounded-md  shadow-md">
          <div className="text-white font-semibold p-4">
            <p>Date: {date}</p>
            <p>Booking/s: {dataByDate.length}</p>
          </div>
          <div className="px-4">
            <DataTable tableClassName="custom-table" value={dataByDate}>
              <Column header="Name" body={nameColumn} />
              <Column header="Installer" body={installerColumn} />
              <Column header="Status" field="status" className="text-white" />
            </DataTable>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center  p-6 rounded-md shadow-md">
          <PrimeCalendar selectedDate={handleDateChange} setDisable={false} />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
