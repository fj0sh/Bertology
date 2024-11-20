"use client";

import useServices from "@/hooks/requests/useServices";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import React from "react";

const ServiceHistory = () => {
  const { services } = useServices();

  const actionColumn = () => {
    return (
      <div className="flex gap-2 w-full items-center justify-center">
        <button className="text-white py-1 px-2 text-[18px] bg-rose-500 rounded-md">
          Delete
        </button>
        <button className="text-white py-1 px-2 text-[18px] bg-blue-500 rounded-md">
          Edit
        </button>
      </div>
    );
  };

  return (
    <div className="flex flex-col gap-8 w-full">
      <button className="bg-orangePrimary text-white py-2 px-3 rounded-md w-[10rem]">
        Add New Service
      </button>
      <div className="w-full px-[10rem]">
        <DataTable
          size={"small"}
          value={services}
          paginator
          rows={12}
          // tableStyle={{ maxWidth: "80rem" }}
          pt={{
            table: { className: "" },
            bodyRow: { className: "border border-black" },
            header: { className: "border" },
          }}
        >
          <Column
            header="ID"
            body={(rowData, options) => options.rowIndex + 1}
            className="border w-[3rem] text-center"
          ></Column>
          <Column
            header="Service Name"
            field="serviceName"
            className="border"
          ></Column>
          <Column
            header="Service Price"
            field="servicePrice"
            className="border"
          ></Column>
          <Column
            header="Action"
            body={actionColumn}
            className="border"
          ></Column>
        </DataTable>
      </div>
    </div>
  );
};

export default ServiceHistory;
