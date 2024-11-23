"use client";
import AddInstallerModal from "@/components/Modals/AddInstallerModal";
import InstallerModal from "@/components/Modals/InstallerModal";
import useInstallers from "@/hooks/requests/useInstallers";
import { InstallerType } from "@/lib/util/schema";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import React, { useState } from "react";
import "@/style/tables.css";
import Swal from "sweetalert2";

const Installers = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [viewInstaller, setViewInstaller] = useState(false);
  const [rowData, setRowData] = useState<InstallerType>();

  const { tanstackData, deleteInstaller } = useInstallers();

  const nameField = (rowData: any) => {
    return `${rowData.installerFirstName} ${rowData.installerLastName}`;
  };

  const handleViewClick = (rowData: any, rowIndex: number) => {
    setRowData(rowData);
    setViewInstaller(true);
  };

  const handleDeleteInstaller = (rowData: any) => {
    Swal.fire({
      title: "Delete Installer?",
      text: "You are about to delete this installer.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Delete",
      cancelButtonText: "Cancel",
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
    }).then((res) => {
      if (res.isConfirmed) {
        deleteInstaller(rowData.installerId);
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
          onClick={() => handleDeleteInstaller(rowData)}
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
        status={rowData?.installerStatus}
      />
      <p className="text-orangeRed font-semibold text-[25px]">
        Manage Your Technicians
      </p>
      <button
        className="bg-orangePrimary text-white py-2 px-3 rounded-md w-[10rem] self-end"
        onClick={() => setIsModalOpen(true)}
      >
        Add Installer
      </button>

      <DataTable
        value={tanstackData}
        paginator
        rows={10}
        tableClassName="custom-table"
        paginatorClassName="custom-paginator"
      >
        <Column
          header="ID"
          body={(rowData, options) => options.rowIndex + 1}
          className=" w-[2rem]"
        ></Column>
        <Column header={"Name"} body={nameField} className="" />
        <Column
          header={"PhoneNumber"}
          field="installerPhoneNumber"
          className=""
        />
        <Column header={"Status"} field="installerStatus" className="" />

        <Column
          header={"Action"}
          body={(rowData, { rowIndex }) => viewColumn(rowData, rowIndex)}
          className=""
        />
      </DataTable>
    </div>
  );
};

export default Installers;
