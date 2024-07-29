"use client";
import Button from "@/components/button";
import Dropdown from "@/components/input/DropDown";
import { useRouter } from "next/navigation";
import React from "react";

const Products = () => {
  const data = ["Popularity ", "Id"];

  const router = useRouter();

  return (
    <div className="h-full">
      <div className="flex justify-between p-4">
        <Dropdown
          options={data}
          onSelect={() => console.log("test")}
          title="Filter By"
        />
        <Button
          title="Add Products"
          fontSize="20px"
          height="45px"
          onClick={() => router.push("/admin/products/add-products")}
        />
      </div>
      <div>
        <table>
          <thead>
            <tr>
              <th> </th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td> </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Products;
