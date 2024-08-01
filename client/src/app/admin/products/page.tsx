"use client";
import Button from "@/components/button";
import Dropdown from "@/components/input/DropDown";
import { ProductType } from "@/constants/Products";
import useFetchData from "@/hooks/fetcher/useFetchData";
import { useRouter } from "next/navigation";
import React from "react";
import "@/style/tables.css";
import Image from "next/image";

const Products = () => {
  const data = ["id", "name"];
  const router = useRouter();

  const {
    data: products,
    loading,
    error,
  } = useFetchData<ProductType[]>("/products/");

  console.log(products);

  return (
    <div className="h-full flex flex-col gap-6">
      <div className="flex justify-between p-4">
        <Dropdown
          options={data}
          onSelect={() => console.log("test")}
          title="Filter By"
          getOptionLabel={(option) => option}
          getOptionKey={(option) => option}
        />
        <Button
          title="Add Products"
          fontSize="20px"
          height="45px"
          onClick={() => router.push("/admin/products/add-products")}
        />
      </div>
      <div>
        <table className="text-white">
          <thead className="bg-orange shadow-lg text-white">
            <tr>
              <th>Product Name</th>
              <th>Product Type</th>
              <th>Price</th>
              <th>Stocks</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="white">
            {products?.map((products, index) => (
              <tr key={index} className={`bg-white text-black`}>
                <td>{products.productName}</td>
                <td>{products.type}</td>
                <td>{products.price}</td>
                <td>{products.stocks}</td>
                <td>
                  <button
                    className="bg-orange text-white border-none p-2 rounded-lg" 
                    onClick={() =>
                      router.push(`products/${products.productId}`)
                    }
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Products;
