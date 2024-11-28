"use client";

import useServices from "@/hooks/requests/useServices";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import React, { useState } from "react";
import "@/style/tables.css";
import AddServiceModal from "@/components/Modals/AddServiceModal";
import ServicesModal from "@/components/Modals/ServicesModal";
import { ServiceType } from "@/constants/Service";
import { succesToast } from "@/components/toast";
import Swal from "sweetalert2";

const ServiceHistory = () => {
  const { tanstackData } = useServices();
  const [showAddModal, setShowAddModal] = useState(false);
  const [showViewModal, setShowViewModal] = useState(false);
  const [rowData, setRowData] = useState<ServiceType>();
  const [searchQuery, setSearchQuery] = useState("");

  const viewServices = (rowData: any) => {
    console.log(rowData);
    setShowViewModal(true);
    setRowData(rowData);
  };

  const { deleteService } = useServices();

  const confirmDelete = (rowData: any) => {
    Swal.fire({
      title: "Delete Service?",
      text: "You are about to delete this service. This data will never be recovered.",
      icon: "warning",
      showCancelButton: true,
    }).then((res) => {
      if (res.isConfirmed) {
        deleteService(rowData.id);
        succesToast("Service deleted");
      }
    });
  };

  const handleDeleteService = (rowData: any) => {
    console.log(rowData);
    confirmDelete(rowData);
  };

  const actionColumn = (rowData: any) => {
    return (
      <div className="flex gap-2 w-full items-center justify-center">
        <button
          className="text-white py-1 px-2 text-[18px] bg-blue-500 rounded-md"
          onClick={() => viewServices(rowData)}
        >
          View
        </button>

        <button
          className="text-white py-1 px-2 text-[18px] bg-rose-500 rounded-md"
          onClick={() => {
            handleDeleteService(rowData);
          }}
        >
          Delete
        </button>
      </div>
    );
  };

  // Search functionality
  const filteredData = tanstackData?.filter((service: ServiceType) => {
    return (
      service.serviceName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.serviceDescription
        .toLowerCase()
        .includes(searchQuery.toLowerCase())
    );
  });

  return (
    <div className="flex flex-col gap-7 w-full">
      <AddServiceModal
        isOpen={showAddModal}
        onClose={() => setShowAddModal(false)}
      />

      {rowData && (
        <ServicesModal
          id={rowData.id}
          isOpen={showViewModal}
          onClose={() => setShowViewModal(false)}
          name={rowData?.serviceName}
          price={rowData?.servicePrice}
          image={rowData?.serviceImage}
          description={rowData?.serviceDescription}
        />
      )}

      <p className="text-orangeRed font-semibold text-[25px]">
        Manage your Services
      </p>
      <div className="flex items-center justify-between ">
        <div className="flex items-center justify-center">
          <input
            type="text"
            placeholder="Search Services..."
            className="px-4 py-2 rounded-md border border-gray-300"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <button
          className="bg-orangePrimary text-white py-2 px-3 rounded-md w-[10rem] self-end"
          onClick={() => setShowAddModal(true)}
        >
          Add New Service
        </button>
      </div>

      <div className="w-full">
        <DataTable
          size="small"
          value={filteredData}
          paginator
          rows={10}
          paginatorClassName="custom-paginator"
          tableClassName="custom-table"
        >
          <Column
            header="ID"
            body={(rowData, options) => options.rowIndex + 1}
            className="w-[3rem] text-center"
          />
          <Column header="Service Name" field="serviceName" />
          <Column header="Service Price" field="servicePrice" />
          <Column
            header="Description"
            body={(rowData) => (
              <div className="truncate w-[15rem] text-ellipsis overflow-hidden">
                {rowData.serviceDescription}
              </div>
            )}
          />
          <Column header="Action" body={(rowData) => actionColumn(rowData)} />
        </DataTable>
      </div>
    </div>
  );
};

export default ServiceHistory;
