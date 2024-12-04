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
import useInstallers from "@/hooks/requests/useInstallers";
import { InquiryType, InstallerType } from "@/lib/util/schema";
import useInquiry from "@/hooks/requests/useInquiry";

const AdminDashboard = () => {
  const { dataByDate, chartData, tanstackData, getBookingByDate } =
    useBooking();
  const { tanstackData: installers } = useInstallers();
  const { tanstackData: inquiries } = useInquiry();

  console.log(inquiries);

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
  const statusColumn = (rowData: any) => {
    let statusColor = "";

    switch (rowData.status) {
      case "PENDING":
        statusColor = "bg-yellow-500 text-[#FFFFFF]";
        break;
      case "DECLINED":
        statusColor = "bg-red-600 text-[#FFFFFF]";
        break;
      case "DONE":
        statusColor = "bg-green-500 text-[#FFFFFF]";
        break;
      case "APPROVED":
        statusColor = "bg-blue-500 text-[#FFFFFF]";
        break;
      default:
        statusColor = "bg-gray-500 text-[#FFFFFF]";
        break;
    }

    return (
      <span
        className={`${statusColor} font-semibold text-white py-1 px-3 rounded-[25px]`}
      >
        {rowData.status}
      </span>
    );
  };

  const totalBookings = tanstackData?.reduce((total: any) => total + 1, 0) || 0;
  const activeInstallersCount =
    installers?.filter(
      (installer: InstallerType) => installer.installerStatus === "ACTIVE"
    ).length || 0;
  const newInquiries =
    inquiries?.filter(
      (inquiries: InquiryType) => inquiries.status === "PENDING"
    ).length || 0;

  return (
    <div className="w-full h-[85vh] flex flex-col gap-4">
      <div className="flex w-full h-[45%] gap-4">
        <div className="flex flex-col w-[15%] text-[15px] *:w-full *:h-full gap-4 *:flex *:gap-2">
          <div className="bg-ninjaBlack rounded-md">
            <div className="flex items-center justify-center w-[30%] p-2 bg-orangePrimary text-asphalt">
              <GrUserWorker size={50} />
            </div>
            <div className="flex flex-col gap-2 justify-center items-center w-full text-white">
              <p className="text-[25px] font-semibold">
                {activeInstallersCount}
              </p>
              <p>ACTIVE INSTALLERS</p>
            </div>
          </div>
          <div className="bg-ninjaBlack rounded-md">
            <div className="flex items-center justify-center w-[30%] p-2 bg-orangePrimary text-asphalt">
              <MdBookmarkAdded size={50} />
            </div>
            <div className="flex flex-col gap-2 justify-center items-center w-full text-white">
              <p className="text-[25px] font-semibold">{totalBookings}</p>
              <p>TOTAL BOOKINGS</p>
            </div>
          </div>
          <div className="bg-ninjaBlack rounded-md">
            <div className="flex items-center justify-center w-[30%] p-2 bg-orangePrimary text-asphalt">
              <PiUserSoundBold size={50} />
            </div>
            <div className="flex flex-col gap-2 justify-center items-center w-full text-white">
              <p className="text-[25px] font-semibold">{newInquiries}</p>
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
              <Column
                header="Status"
                body={statusColumn}
                className="text-white"
              />
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
        <div className="w-[30%] text-white p-4 bg-ninjaBlack rounded-md">
          <p className="font-semibold text-orangePrimary text-[20px] mb-4">
            New Inquiries{" "}
          </p>
          <div className="flex flex-col gap-3">
            {inquiries
              ?.filter((inquiry: InquiryType) => inquiry.status === "PENDING")
              .map((inquiry: InquiryType) => {
                return (
                  <div
                    className="flex flex-col gap-2 max-w-[28rem] bg-asphalt p-2 shadow-lg rounded-md"
                    key={inquiry.id}
                  >
                    <div>{inquiry.email}</div>
                    <div className="indent-5 truncate">{inquiry.message}</div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
