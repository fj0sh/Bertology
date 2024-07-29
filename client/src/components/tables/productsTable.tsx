import React from "react";
import { RiEditFill } from "react-icons/ri";
import { MdDelete } from "react-icons/md";
import "../../style/productTable.css";

interface Props {
  productId?: number;
  productType?: string;
  productName?: string;
  price?: number;
  stocks?: number;
  //   action: () => void;
}

const ProductsTable = (props: Props) => {
  const { productId, productType, productName, price, stocks } = props;

  return (
    <table className="h-[90%] bg-grey w-full rounded-[25px] p-2">
      <thead>
        <tr>
          <th>Product ID</th>
          <th>Product Type</th>
          <th>Product Name</th>
          <th>Price</th>
          <th>Stocks</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{productId}</td>
          <td>{productType}</td>
          <td>{productName}</td>
          <td>{price}</td>
          <td>{stocks}</td>
          <td className="flex justify-center gap-5">
            <RiEditFill size={25} />
            <MdDelete size={25} />
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default ProductsTable;
