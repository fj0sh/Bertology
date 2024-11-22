"use client";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import React, { useState } from "react";
import "@/style/tables.css";
import useInquiry from "@/hooks/requests/useInquiry";
import { InquiryType } from "@/lib/util/schema";
import Loading from "@/app/loading";
import InquiryModal from "@/components/Modals/InquiryModal";

const Inquiry = () => {
  const { tanstackData } = useInquiry();
  const [rowData, setRowData] = useState<InquiryType>();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tableView, setTableView] = useState("PENDING");

  const nameTemplate = (rowData: InquiryType) => {
    return (
      <p>
        {rowData.firstName} {rowData.lastName}
      </p>
    );
  };

  const handleViewClick = (rowData: InquiryType) => {
    setRowData(rowData);
    setIsModalOpen(true);
  };

  const actionTemplate = (rowData: InquiryType) => {
    return (
      <div>
        <button
          className="p-button p-button-primary"
          onClick={() => handleViewClick(rowData)}
        >
          View
        </button>
      </div>
    );
  };

  return (
    <div>
      {rowData && (
        <InquiryModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          name={`${rowData?.firstName} ${rowData?.lastName}`}
          email={rowData?.email}
          message={rowData?.message}
          id={rowData.id!}
        />
      )}

      <div className="text-white flex gap-4 font-semibold text-[20px] mb-8">
        <button
          onClick={() => setTableView("PENDING")}
          className={`${
            tableView === "PENDING"
              ? "text-orangeRed underline underline-offset-8"
              : "text-white"
          }`}
        >
          Pending
        </button>
        <button
          onClick={() => setTableView("RESOLVED")}
          className={`${
            tableView !== "PENDING"
              ? "text-orangeRed underline underline-offset-8"
              : "text-white"
          }`}
        >
          Resolved
        </button>
      </div>
      <DataTable
        value={
          tableView === "PENDING"
            ? tanstackData?.filter((data: any) => {
                return data.status === "PENDING";
              })
            : tanstackData?.filter((data: any) => {
                return data.status !== "PENDING";
              })
        }
        paginator
        rows={9}
        size="small"
        tableClassName="custom-table"
        paginatorClassName="custom-paginator"
      >
        <Column body={(rowData) => nameTemplate(rowData)} header="Name" />
        <Column field="email" header="Email" />
        <Column
          header="Inquiry"
          body={(rowData) => (
            <div className="truncate w-[15rem] text-ellipsis overflow-hidden">
              {rowData.message}
            </div>
          )}
        />
        <Column
          header="Action"
          body={(rowData: InquiryType) => actionTemplate(rowData)}
        />
      </DataTable>
    </div>
  );
};

export default Inquiry;
