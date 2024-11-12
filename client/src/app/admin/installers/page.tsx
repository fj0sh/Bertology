"use client";
import AddInstallerModal from "@/components/Modals/AddInstallerModal";
import useInstallers from "@/hooks/requests/useInstallers";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import React, { useState } from "react";

const Installers = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { data } = useInstallers();

  const nameField = (rowData: any) => {
    return `${rowData.firstName} ${rowData.lastName}`;
  };

  const handleViewClick = (rowData: any, rowIndex: number) => {
    console.log(`View installer ${rowIndex + 1}:`, rowData);
  };

  const handleDeleteBooking = (rowData: any) => {
    console.log(`Delete installer:`, rowData);
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

  return (
    <div className="flex flex-col gap-10">
      <AddInstallerModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

      <button
        className="bg-orangePrimary text-white py-2 px-3 rounded-md w-[10rem]"
        onClick={() => setIsModalOpen(true)}
      >
        Add Installer
      </button>

      <DataTable value={data} paginator rows={10}>
        <Column header={"Name"} body={nameField} />
        <Column header={"PhoneNumber"} field="phoneNumber" />
        <Column header={"Status"} field="status" />
        <Column
          header={"Action"}
          body={(rowData, { rowIndex }) => viewColumn(rowData, rowIndex)}
        />
      </DataTable>
    </div>
  );
};

export default Installers;
