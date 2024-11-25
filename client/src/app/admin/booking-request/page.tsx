"use client";
import BookingRequestModal from "@/components/Modals/BookingRequestModal";
import { BookingResponse } from "@/constants/Booking";
import useBooking from "@/hooks/requests/useBooking";
import { formatDateToWords } from "@/lib/function/dateFormatter";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import "@/style/tables.css";

const BookingRequest = () => {
  const [isRequestShow, setIsRequestShow] = useState(false);
  const [rowData, setRowData] = useState<BookingResponse>();
  const [tableView, setTableView] = useState("ALLBOOKINGS");

  const {
    getAllBookings,
    getSelectedTypes,
    deleteBooking,
    tanstackData,
    serviceType,
  } = useBooking();

  useEffect(() => {
    getAllBookings();
  }, []);

  const handleViewClick = (data: any, index: number) => {
    getSelectedTypes(data.data.id);
    setIsRequestShow(true);
    setRowData(data);
  };

  console.log(tanstackData);

  const handleDeleteBooking = (data: any) => {
    Swal.fire({
      title: "Delete Booking?",
      text: "You are about to delete this booking.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
      cancelButtonText: "No",
    }).then((res) => {
      if (res.isConfirmed) {
        deleteBooking(data.data.id);
      }
    });
  };

  const viewColumn = (rowData: any, rowIndex: number) => {
    return (
      <div className="flex gap-1">
        <button
          onClick={() => handleViewClick(rowData, rowIndex)}
          className="px-2 py-1 bg-blue-500 text-white rounded"
        >
          View
        </button>

        <button
          onClick={() => handleDeleteBooking(rowData)}
          className="px-2 py-1 bg-red-500 text-white rounded"
        >
          Delete
        </button>
      </div>
    );
  };

  const statusColumn = (rowData: any) => {
    let statusColor = "";

    switch (rowData.data.status) {
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
        {rowData.data.status}
      </span>
    );
  };

  const customerColumn = (rowData: any) => {
    return `${rowData.data.firstName} ${rowData.data.lastName}`;
  };

  const installerColumn = (rowData: any) => {
    console.log(rowData);

    if (rowData.data.installer.firstName && rowData.data.installer.lastName) {
      return `${rowData.data.installer.firstName} ${rowData.data.installer.lastName}`;
    } else {
      return (
        <p className="text-red-500 font-semibold">No Assigned Installer</p>
      );
    }
  };

  const formattedDateBody = (rowData: any) => {
    const date = rowData.data.bookedDate.split(" ")[0];
    const time = rowData.data.bookedDate.split(" ")[1];

    return (
      <div className="flex flex-col gap-2">
        <span>{formatDateToWords(date)}</span>
        <span>{time}</span>
      </div>
    );
  };

  return (
    <div className="flex flex-col gap-4 px-10">
      <p className="text-orangeRed font-semibold text-[25px]">
        Booking Requests
      </p>
      <div className="flex text-white gap-6 font-semibold">
        <button
          className={`${
            tableView === "ALLBOOKINGS" &&
            "text-orangeRed underline underline-offset-8 "
          }`}
          onClick={() => {
            setTableView("ALLBOOKINGS");
          }}
        >
          All Bookings
        </button>
        <button
          className={`${
            tableView === "BOOKINGHISTORY" &&
            "text-orangeRed underline underline-offset-8 "
          }`}
          onClick={() => {
            setTableView("BOOKINGHISTORY");
          }}
        >
          Booking History
        </button>
        <button
          className={`${
            tableView === "TODAYSBOOKINGS" &&
            "text-orangeRed underline underline-offset-8 "
          }`}
          onClick={() => {
            setTableView("TODAYSBOOKINGS");
          }}
        >
          Todays Bookings
        </button>
      </div>
      <BookingRequestModal
        id={rowData?.data?.id ? rowData?.data?.id : 0}
        date={rowData?.data?.bookedDate}
        fName={rowData?.data?.firstName}
        lName={rowData?.data?.lastName}
        email={rowData?.data?.email}
        phoneNumber={rowData?.data?.contactNumber}
        proof={
          rowData?.data?.proofOfPayment ? rowData?.data?.proofOfPayment : ""
        }
        mode={rowData?.data?.mode}
        location={`${rowData?.data?.barangay}, ${rowData?.data?.municipality}`}
        model={rowData?.data?.carModel}
        description={rowData?.data?.additionalDetails}
        isOpen={isRequestShow}
        serviceTypes={serviceType}
        status={rowData?.data?.status}
        onClose={() => setIsRequestShow(false)}
      />

      <DataTable
        value={
          tableView === "BOOKINGHISTORY"
            ? tanstackData?.filter((res: any) => {
                return (
                  res.data.status === "DONE" || res.data.status === "DECLINED"
                );
              })
            : tableView === "TODAYSBOOKINGS"
            ? tanstackData?.filter((res: any) => {
                return (
                  res.data.bookedDate.split(" ")[0] ===
                  new Date().toISOString().split("T")[0]
                );
              })
            : tanstackData // Default case
        }
        paginator
        rows={9}
        size="small"
        tableClassName="custom-table"
        paginatorClassName="custom-paginator"
        pt={{
          table: { className: "text-[14px] " },
          bodyRow: { className: "border border-slate-300 " },
          thead: { className: "bg-orangePrimary text-white" },
        }}
      >
        <Column
          field="data.bookedDate"
          header="Booked Date"
          body={formattedDateBody}
        />
        <Column header="Customer" body={customerColumn} />
        <Column field="data.carModel" header="Car Model" sortable />
        <Column field="data.mode" header="Service Mode" sortable />
        <Column header="Status" body={statusColumn} sortable />
        <Column header="Installer" body={installerColumn} />
        <Column
          header="Actions"
          body={(rowData, { rowIndex }) => viewColumn(rowData, rowIndex)}
        />
      </DataTable>
    </div>
  );
};

export default BookingRequest;
