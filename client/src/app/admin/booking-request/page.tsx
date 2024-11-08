"use client";
import BookingRequestCard from "@/components/cards/BookingRequestCard";
import BookingRequestModal from "@/components/Modals/BookingRequestModal";
import { BookingResponse, BookingType } from "@/constants/Booking";
import useBooking from "@/hooks/requests/useBooking";
import { FilterMatchMode } from "primereact/api";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

const BookingRequest = () => {
  const [isRequestShow, setIsRequestShow] = useState(false);
  const [rowData, setRowData] = useState<BookingResponse>();

  const {
    getAllBookings,
    getSelectedTypes,
    deleteBooking,
    allBookings,
    serviceType,
  } = useBooking();

  useEffect(() => {
    getAllBookings();
  }, [deleteBooking]);

  const handleViewClick = (data: any, index: number) => {
    getSelectedTypes(data.data.id);
    setIsRequestShow(true);
    setRowData(data);
  };

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
        rows={20}
        size="medium"
        pt={{
          table: { className: "" },
          bodyRow: { className: "border border-black" },
          thead: { className: "bg-orangePrimary text-white" },
        }}
      >
        <Column field="data.bookedDate" header="Booked Date" sortable />
        <Column header="Customer" body={customerColumn} />
        <Column field="data.carModel" header="Car Model" sortable />
        <Column field="data.mode" header="Service Mode" sortable />
        <Column field="data.status" header="Status" sortable />
        <Column
          header="Actions"
          body={(rowData, { rowIndex }) => viewColumn(rowData, rowIndex)}
        />
      </DataTable>
    </div>
  );
};

export default BookingRequest;
