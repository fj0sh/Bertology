"use client"
import CartCard from "@/components/cards/CartCard";
import instance from "@/lib/util/axios-instance";
import { useUser } from "@/providers/UserProvider";
import React, { useEffect } from "react";

const CartPage = () => {
  const { user } = useUser();

  const userId = user?.id

  const getCartProducts = async () => {
    try {
      const res = await instance.post("/cart", { userId: userId });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCartProducts();
  }, [user]);

  return <div className="h-full px-[20rem] py-[2rem] flex flex-col gap-8">


  </div>;
};

export default CartPage;
