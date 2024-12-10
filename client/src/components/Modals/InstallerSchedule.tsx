import useInstallers from "@/hooks/requests/useInstallers";
import React, { useEffect, useState } from "react";
import ModalContainer from "./modalContainer/ModalContainer";
import { IoMdClose } from "react-icons/io";
import { DataTable } from "primereact/datatable";
import { BookingType } from "@/constants/Booking";
import { Column } from "primereact/column";
import "@/style/tables.css";
import { formatDateToWords } from "@/lib/function/dateFormatter";

interface modalProps {
  isOpen: boolean;
  onClose: () => void;
  id: number;
}
const InstallerSchedule = (props: modalProps) => {
  const { isOpen, onClose, id } = props;

  const { installerBookingData, getInstallerBooking } = useInstallers();

  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    getInstallerBooking(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  console.log(id);
  console.log(installerBookingData);

  useEffect(() => {
    const filterInstallerSchedule = () => {
      const filtered = installerBookingData.filter(
        (result: BookingType) =>
          result.status === "PENDING" || result.status === "APPROVED"
      );
      setFilteredData(filtered);
    };
    if (installerBookingData?.length) {
      filterInstallerSchedule();
    }
  }, [installerBookingData]);

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

  const formattedDateBody = (rowData: any) => {
    const date = rowData.bookedDate.split(" ")[0];
    const time = rowData.bookedDate.split(" ")[1];

    return (
      <div className="flex flex-col gap-2">
        <span>{formatDateToWords(date)}</span>
        <span>{time}</span>
      </div>
    );
  };

  if (!isOpen) return null;

  return (
    <ModalContainer width="55rem" z="999999999">
      <div className="absolute top-5 right-5 border-none rounded-full hover:bg-grey p-2">
        <IoMdClose
          className="text-white text-[30px] cursor-pointer"
          onClick={onClose}
        />
      </div>
      <div className="p-10 w-full">
        <DataTable tableClassName="custom-table" value={filteredData}>
          <Column body={formattedDateBody} header="Booking Date" />
          <Column field="mode" header="Mode" />
          <Column body={statusColumn} header="Status" />
          <Column field="carModel" header="Car Model" />
        </DataTable>
      </div>
    </ModalContainer>
  );
};

export default InstallerSchedule;
