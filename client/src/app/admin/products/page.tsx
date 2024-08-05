"use client";
import Button from "@/components/button";
import Dropdown from "@/components/input/DropDown";
import { ProductType } from "@/constants/Products";
import { useRouter } from "next/navigation";
import React from "react";
import "@/style/tables.css";
import useProducts from "@/hooks/requests/useProducts";

const Products = () => {
  const data = ["id", "name"];
  const router = useRouter();

  const { products } = useProducts<ProductType[]>("/products");
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
            {products?.map((product, index) => (
              <tr key={index} className={`bg-white text-black`}>
                <td>{product.productName}</td>
                <td>{product.type}</td>
                <td>{product.price}</td>
                <td>{product.stocks}</td>
                <td>
                  <button
                    className="bg-orange text-white border-none p-2 rounded-lg"
                    onClick={() => router.push(`products/${product.productId}`)}
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
