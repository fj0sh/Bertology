"use client";
import Button from "@/components/button";
import Dropdown from "@/components/input/DropDown";
import { ProductType } from "@/constants/Products";
import useFetchData from "@/hooks/fetcher/useFetchData";
import { useRouter } from "next/navigation";
import React from "react";

const Products = () => {
  const data = ["Popularity ", "Id"];
  const router = useRouter();

  const {
    data: products,
    loading,
    error,
  } = useFetchData<ProductType[]>("/products");

  console.log(products);

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
            {products?.map((products, index) => (
              <tr
                key={index}
                className={`${index % 2 === 0 ? "" : "text-black"}`}
              >
                <td>{products.category}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Products;
