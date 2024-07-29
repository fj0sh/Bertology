"use client";
import Button from "@/components/button";
import Dropdown from "@/components/input/DropDown";
import ProductsTable from "@/components/tables/productsTable";
import React from "react";

const Products = () => {
  const data = ["Popularity ", "Id"];

  return (
    <div className="h-full">
      <div className="flex justify-between p-4">
        <Dropdown
          options={data}
          onSelect={() => console.log("test")}
          title="Filter By"
        />
        <Button title="Add Products" fontSize="20px" height="45px" />
      </div>
      <ProductsTable />
    </div>
  );
};

export default Products;
