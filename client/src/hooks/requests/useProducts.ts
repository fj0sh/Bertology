import instance from "@/lib/util/axios-instance";
import useFetchData from "../fetcher/useFetchData";
import { TypeType } from "@/constants/Product-types";

const useProducts = <T extends {}>(url: string) => {
  const { data: products } = useFetchData<T>(url);
  const { data: types } = useFetchData<TypeType[]>("/products/get-types");

  const addProduct = async (
    product: string,
    description: string,
    price: number,
    stocks: number,
    type: number,
    image: string
  ) => {
    const body = {
      productName: product,
      description: description,
      price: price,
      stocks: stocks,
      productType: type,
      productImage: image,
    };

    console.log(body);

    try {
      const res = await instance.post("/products/add-product", body);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const editProduct = async (
    productId: number,
    newName: string,
    newDescription: string,
    newPrice: number,
    newStocks: number,
    newType: number,
    newImage: string
  ) => {
    const body = {
      productName: newName,
      description: newDescription,
      price: newPrice,
      stocks: newStocks,
      productType: newType,
      productImage: newImage,
    };

    try {
      await instance.patch(`/products/update-product/${productId}`, body);

      console.log(body);
    } catch (error) {
      console.log(error);
    }
  };

  return { addProduct, editProduct, products, types };
};

export default useProducts;
