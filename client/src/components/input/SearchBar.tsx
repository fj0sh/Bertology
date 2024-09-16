import { ProductType } from "@/constants/Products";
import useProducts from "@/hooks/requests/useProducts";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  const [productList, setProductList] = useState<ProductType[]>([]);
  const [query, setQuery] = useState("");

  const { products } = useProducts<ProductType[]>("/products");

  useEffect(() => {
    if (products) {
      setProductList(products);
    }
  }, [products]);

  const filteredProducts = productList.filter((product) =>
    product.productName.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="text-white flex gap-2 bg-white border-none h-[2rem]">
      <div className="flex justify-center bg-white p-3 items-center">
        <FaSearch
          className={`${query ? "text-orangePrimary" : "text-black"}`}
        />
      </div>
      <div className="text-black h-full text-center">
        <input
          type="text"
          value={query}
          className="bg-white h-full focus:outline-none p-[8px] text-[16px]"
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <div
        className={`text-black absolute bg-white top-14 p-3 w-[15rem] truncate shadow-md z-10 rounded-sm border-none text-justify flex flex-col ${
          query === "" ? "hidden" : ""
        }`}
      >
        {filteredProducts.map((result, index) => (
          <Link
            href={`/client/offers/products/${result.productId}`}
            key={result.productId}
            className={``}
          >
            {result.productName}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SearchBar;
