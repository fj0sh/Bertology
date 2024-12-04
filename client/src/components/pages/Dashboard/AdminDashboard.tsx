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
import { GrUserWorker } from "react-icons/gr";
import { MdBookmarkAdded } from "react-icons/md";
import { PiUserSoundBold } from "react-icons/pi";

const AdminDashboard = () => {
  const { dataByDate, chartData, tanstackData, getBookingByDate } =
    useBooking();

  console.log("total bookings", tanstackData.length());

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
    <div className="w-full h-[85vh] flex flex-col gap-4">
      <div className="flex w-full h-[45%] gap-4">
        <div className="flex flex-col w-[15%] text-[15px] *:w-full *:h-full gap-4 *:flex *:gap-2">
          <div className="bg-ninjaBlack rounded-md">
            <div className="flex items-center justify-center w-[30%] p-2 bg-orangePrimary text-asphalt">
              <GrUserWorker size={50} />
            </div>
            <div className="flex flex-col gap-2 justify-center items-center w-full text-white">
              <p className="text-[20px] font-semibold">0</p>
              <p>ACTIVE INSTALLERS</p>
            </div>
          </div>
          <div className="bg-ninjaBlack rounded-md">
            <div className="flex items-center justify-center w-[30%] p-2 bg-orangePrimary text-asphalt">
              <MdBookmarkAdded size={50} />
            </div>
            <div className="flex flex-col gap-2 justify-center items-center w-full text-white">
              <p className="text-[20px] font-semibold">0</p>
              <p>TOTAL BOOKINGS</p>
            </div>
          </div>
          <div className="bg-ninjaBlack rounded-md">
            <div className="flex items-center justify-center w-[30%] p-2 bg-orangePrimary text-asphalt">
              <PiUserSoundBold size={50} />
            </div>
            <div className="flex flex-col gap-2 justify-center items-center w-full text-white">
              <p className="text-[20px] font-semibold">0</p>
              <p>NEW INQUIRIES</p>
            </div>
          </div>
        </div>
        <div className="w-[40%] flex bg-ninjaBlack rounded-md p-8">
          <DonutChart />
          <div className="w-full h-full flex flex-col gap-4 justify-center items-center text-white text-[20px]">
            <p className="text-orangeRed text-[25px] font-semibold">LEGEND</p>
            <div className="flex flex-col items-start gap-3">
              <div className="flex gap-2 items-center">
                <div className="rounded-full w-4 h-4 bg-[#32E875]"></div>
                <p>DONE: {chartData[0]}</p>
              </div>
              <div className="flex gap-2 items-center">
                <div className="rounded-full w-4 h-4 bg-[#FFC857]"></div>
                <p>PENDING: {chartData[3]}</p>
              </div>
              <div className="flex gap-2 items-center">
                <div className="rounded-full w-4 h-4 bg-[#3772FF]"></div>
                <p>APPROVED: {chartData[4]}</p>
              </div>
              <div className="flex gap-2  items-center">
                <div className="rounded-full w-4 h-4 bg-[#F22B29]"></div>
                <p>DECLINED: {chartData[2]}</p>
              </div>
              <div className="flex gap-2 items-center">
                <div className="rounded-full w-4 h-4 bg-[#6b7280]"></div>
                <p>MISSED: {chartData[1]}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[45%] bg-ninjaBlack rounded-md p-8">
          <LineGraph />
        </div>
      </div>

      <div className="w-full h-[55%] flex gap-4">
        <div className="flex gap-4 *:h-full w-[70%]">
          <div className="w-[50%] bg-ninjaBlack rounded-md">
            <PrimeCalendar selectedDate={handleDateChange} setDisable={false} />
          </div>
          <div className="w-full bg-ninjaBlack rounded-md">
            <DataTable tableClassName="custom-table" value={dataByDate}>
              <Column header="Name" body={nameColumn} />
              <Column header="Status" field="status" className="text-white" />
              <Column
                header="Car Model"
                field="carModel"
                className="text-white"
              />
              <Column
                header="Service Mode"
                field="mode"
                className="text-white"
              />
              <Column
                header="Installer"
                body={installerColumn}
                className="text-white"
              />
            </DataTable>
          </div>
        </div>
        <div className="w-full bg-ninjaBlack rounded-md"></div>
      </div>
    </div>
  );
};

export default AdminDashboard;
