"use client";
import BookingRequestCard from "@/components/cards/BookingRequestCard";
import BookingRequestModal from "@/components/Modals/BookingRequestModal";
import { BookingResponse } from "@/constants/Booking";
import useBooking from "@/hooks/requests/useBooking";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import React, { useEffect, useState } from "react";

const BookingRequest = () => {
  const [isRequestShow, setIsRequestShow] = useState(false);
  const [rowData, setRowData] = useState<any[]>([]);

  const { getAllBookings, allBookings } = useBooking();

  useEffect(() => {
    getAllBookings();
  }, []);

  console.log(allBookings);

  const viewColumn = (rowData: any, rowIndex: number) => {
    return (
      <div className="flex gap-1">
        <button
          onClick={() => handleViewClick(rowData, rowIndex)}
          className="px-2 py-1 bg-blue-500 text-white rounded"
        >
          View
        </button>
      </div>
    );
  };

  const handleViewClick = (data: any, index: number) => {
    console.log("Row Index:", index);
    console.log("Row Data:", data);
    setIsRequestShow(true);
    setRowData(data);
  };

  return (
    <div className="flex flex-col gap-4 px-10">
      <BookingRequestModal
        isOpen={isRequestShow}
        onClose={() => setIsRequestShow(false)}
      />

      <DataTable
        value={allBookings}
        size="small"
        pt={{
          table: { className: "border border-black" },
          bodyRow: { className: "border border-black" },
        }}
      >
        <Column field="data.bookedDate" header="Booked Date" />
        <Column field="data.carModel" header="Car Model" />
        <Column field="data.mode" header="Service Mode" />
        <Column field="data.status" header="Status" />
        <Column
          header="Actions"
          body={(rowData, { rowIndex }) => viewColumn(rowData, rowIndex)}
        />
      </DataTable>
    </div>
  );
};

export default BookingRequest;
