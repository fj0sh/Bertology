import instance from "@/lib/util/axios-instance";
import { useUser } from "@/providers/UserProvider";
import React from "react";

const CartPage = () => {
  const { user } = useUser();

  const getCartProducts = async () => {
    try {
      const res = await instance.get("/cart", );
    } catch (error) {
      console.log(error);
    }
  };
  return <div className=""></div>;
};

export default CartPage;
