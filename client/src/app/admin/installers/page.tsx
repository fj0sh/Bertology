"use client";
import AddInstallerModal from "@/components/Modals/AddInstallerModal";
import InstallerModal from "@/components/Modals/InstallerModal";
import useInstallers from "@/hooks/requests/useInstallers";
import { InstallerType } from "@/lib/util/schema";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import React, { useState, useEffect } from "react";
import "@/style/tables.css";
import Swal from "sweetalert2";
import { succesToast } from "@/components/toast";

const Installers = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [viewInstaller, setViewInstaller] = useState(false);
  const [rowData, setRowData] = useState<InstallerType>();
  const [searchTerm, setSearchTerm] = useState(""); // Search input
  const [filteredData, setFilteredData] = useState<InstallerType[]>([]); // Filtered installers
  const [tableView, setTableView] = useState("ACTIVE");

  const { tanstackData, deleteInstaller } = useInstallers();

  useEffect(() => {
    // Filter installers based on search term
    const filtered = tanstackData?.filter(
      (installer: InstallerType) =>
        installer.installerFirstName
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        installer.installerLastName
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        installer.installerPhoneNumber
          ?.toLowerCase()
          .includes(searchTerm.toLowerCase())
    );
    setFilteredData(filtered);
  }, [searchTerm, tanstackData]);

  const nameField = (rowData: any) => {
    return `${rowData.installerFirstName} ${rowData.installerLastName}`;
  };

  const handleViewClick = (rowData: any, rowIndex: number) => {
    setRowData(rowData);
    setViewInstaller(true);
  };

  const handleDeleteInstaller = (rowData: any) => {
    Swal.fire({
      title: "Delete Technician?",
      text: "You are about to delete this Technician.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Delete",
      cancelButtonText: "Cancel",
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
    }).then((res) => {
      if (res.isConfirmed) {
        succesToast("Installer Deleted Successfully");
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

      {rowData && (
        <InstallerModal
          isOpen={viewInstaller}
          onClose={() => setViewInstaller(false)}
          id={rowData?.installerId}
          firstname={rowData?.installerFirstName}
          lastname={rowData?.installerLastName}
          image={rowData?.installerImage}
          address={rowData?.installerAddress}
          email={rowData?.installerEmail}
          experience={rowData?.installerExperience}
          phoneNumber={rowData?.installerPhoneNumber}
          status={rowData?.installerStatus}
        />
      )}
      <p className="text-orangeRed font-semibold text-[25px]">
        Manage Your Technicians
      </p>

      {/* Search Bar */}
      <div className="flex justify-between items-center">
        <input
          type="text"
          placeholder="Search installers..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="py-2 px-4 border rounded-md w-[20rem]"
        />
        <button
          className="bg-orangePrimary text-white py-2 px-3 rounded-md w-[10rem]"
          onClick={() => setIsModalOpen(true)}
        >
          Add Installer
        </button>
      </div>
      <div className="flex text-white gap-6 font-semibold">
        <button
          className={`${
            tableView === "ACTIVE" &&
            "text-orangeRed underline underline-offset-8 "
          }`}
          onClick={() => {
            setTableView("ACTIVE");
          }}
        >
          Active Technicians
        </button>
        <button
          className={`${
            tableView === "INACTIVE" &&
            "text-orangeRed underline underline-offset-8 "
          }`}
          onClick={() => {
            setTableView("INACTIVE");
          }}
        >
          Inactive Technicians
        </button>
      </div>
      {/* DataTable */}
      <DataTable
        value={filteredData?.filter((res: InstallerType) => {
          return tableView === "ACTIVE"
            ? res.installerStatus === "ACTIVE"
            : res.installerStatus === "INACTIVE";
        })} // Use filtered data
        paginator
        rows={10}
        tableClassName="custom-table"
        paginatorClassName="custom-paginator"
        emptyMessage="No installers found."
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
