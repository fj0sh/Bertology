"use client";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import React from "react";
import "@/style/tables.css";
import useInquiry from "@/hooks/requests/useInquiry";
import { InquiryType } from "@/lib/util/schema";

const Inquiry = () => {
  const { tanstackData } = useInquiry();

  console.log(tanstackData);

  const nameTemplate = (rowData: InquiryType) => {
    return (
      <p>
        {rowData.firstName} {rowData.lastName}
      </p>
    );
  };

  return (
    <div>
      <DataTable
        value={tanstackData}
        paginator
        rows={9}
        size="small"
        tableClassName="custom-table"
        paginatorClassName="custom-paginator"
      >
        <Column body={(rowData) => nameTemplate(rowData)} header="Name" />
        <Column field="email" header="Email" />
        <Column field="message" header="Inquiry" />
      </DataTable>
    </div>
  );
};

export default Inquiry;
