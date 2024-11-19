"use client";
import AddInstallerModal from "@/components/Modals/AddInstallerModal";
import InstallerModal from "@/components/Modals/InstallerModal";
import useInstallers from "@/hooks/requests/useInstallers";
import { InstallerType } from "@/lib/util/schema";
import { useQuery } from "@tanstack/react-query";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import React, { useEffect, useState } from "react";

const Installers = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [viewInstaller, setViewInstaller] = useState(false);
  const [rowData, setRowData] = useState<InstallerType>();

  const { data, tanstackData, refetch } = useInstallers();

  const nameField = (rowData: any) => {
    return `${rowData.installerFirstName} ${rowData.installerLastName}`;
  };

  const handleViewClick = (rowData: any, rowIndex: number) => {
    setRowData(rowData);
    setViewInstaller(true);
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
      <InstallerModal
        isOpen={viewInstaller}
        onClose={() => setViewInstaller(false)}
        firstname={rowData?.installerFirstName}
        lastname={rowData?.installerLastName}
        image={rowData?.installerImage}
        address={rowData?.installerAddress}
        email={rowData?.installerEmail}
        experience={rowData?.installerExperience}
        phoneNumber={rowData?.installerPhoneNumber}
      />

      <button
        className="bg-orangePrimary text-white py-2 px-3 rounded-md w-[10rem]"
        onClick={() => setIsModalOpen(true)}
      >
        Add Installer
      </button>

      <DataTable value={tanstackData} paginator rows={10}>
        <Column
          header="ID"
          body={(rowData, options) => options.rowIndex + 1}
          className="border w-[2rem]"
        ></Column>
        <Column header={"Name"} body={nameField} className="border" />
        <Column
          header={"PhoneNumber"}
          field="installerPhoneNumber"
          className="border"
        />
        <Column
          header={"Action"}
          body={(rowData, { rowIndex }) => viewColumn(rowData, rowIndex)}
          className="border"
        />
      </DataTable>
    </div>
  );
};

export default Installers;
