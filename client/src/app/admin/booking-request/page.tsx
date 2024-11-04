"use client";
import BookingRequestCard from "@/components/cards/BookingRequestCard";
import BookingRequestModal from "@/components/Modals/BookingRequestModal";
import { BookingResponse, BookingType } from "@/constants/Booking";
import useBooking from "@/hooks/requests/useBooking";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import React, { useEffect, useState } from "react";

const BookingRequest = () => {
  const [isRequestShow, setIsRequestShow] = useState(false);
  const [rowData, setRowData] = useState<BookingResponse>();

  const { getAllBookings, getSelectedTypes, allBookings, serviceType } =
    useBooking();

  useEffect(() => {
    getAllBookings();
  }, []);

  const handleViewClick = (data: any, index: number) => {
    getSelectedTypes(data.data.id);
    setIsRequestShow(true);
    setRowData(data);
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
      </div>
    );
  };

  const customerColumn = (rowData: any) => {
    return `${rowData.data.firstName} ${rowData.data.lastName}`;
  };

  return (
    <div className="flex flex-col gap-4 px-10">
      <BookingRequestModal
        id={rowData?.data?.id}
        date={rowData?.data?.bookedDate}
        fName={rowData?.data?.firstName}
        lName={rowData?.data?.lastName}
        email={rowData?.data?.email}
        phoneNumber={rowData?.data?.contactNumber}
        proof={rowData?.data?.proofOfPayment}
        mode={rowData?.data?.mode}
        location={`${rowData?.data?.barangay}, ${rowData?.data?.municipality}`}
        model={rowData?.data?.carModel}
        description={rowData?.data?.additionalDetails}
        isOpen={isRequestShow}
        serviceTypes={serviceType}
        onClose={() => setIsRequestShow(false)}
      />

      <DataTable
        value={allBookings}
        paginator
        rows={10}
        size="small"
        pt={{
          table: { className: "" },
          bodyRow: { className: "border border-black" },
        }}
      >
        <Column field="data.bookedDate" header="Booked Date" sortable />
        <Column header="Customer" body={customerColumn} />
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
