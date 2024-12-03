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
import { ClipLoader } from "react-spinners";

const AdminDashboard = () => {
  const { dataByDate, chartData, getBookingByDate } = useBooking();

  console.log("DONE", chartData[0]);
  console.log("DECLINED", chartData[1]);
  console.log("APPROVED", chartData[2]);
  console.log("PENDING", chartData[3]);

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
    // <div className="flex flex-col gap-8 w-full h-[85vh]">
    //   <div className="flex w-full *:w-full h-full gap-4">
    //     {/* DATE INFO */}
    //     <div>
    //       <PrimeCalendar selectedDate={handleDateChange} setDisable={false} />
    //     </div>
    //     {/*  CALENDAR */}
    //     <div className="flex gap-4">
    //       <div className="w-[50%] rounded-md">
    //         <DataTable tableClassName="custom-table" value={dataByDate}>
    //           <Column header="Name" body={nameColumn} />
    //           <Column header="Status" field="status" className="text-white" />
    //         </DataTable>
    //       </div>
    //       <div className="w-[50%]"></div>
    //     </div>
    //   </div>

    //   <div className="flex w-full h-full gap-8">
    //     {/* LINE GRAPH */}
    //     <div className="w-[50%]">
    //       <LineGraph />
    //     </div>
    //     {/* DONUT GRAPH */}
    //     <div className="w-[25%]">
    //       <DonutChart />
    //     </div>
    //     {/* ADDITIONAL INFO */}
    //     <div className="w-[25%] *:rounded-md *:h-full flex flex-col gap-4 p-4">
    //       <div className="bg-asphalt"></div>
    //       <div className="bg-asphalt"></div>
    //       <div className="bg-asphalt"></div>
    //       <div className="bg-asphalt"></div>
    //     </div>
    //   </div>
    // </div>
    <div></div>
  );
};

export default AdminDashboard;
