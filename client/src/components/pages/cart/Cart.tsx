"use client";
import CartCard from "@/components/cards/CartCard";
import { CartType } from "@/constants/Cart";
import instance from "@/lib/util/axios-instance";
import { useUser } from "@/providers/UserProvider";
import React, { useEffect, useState } from "react";

const CartPage = () => {
  const [cartProducts, setCartproducts] = useState<CartType[] | null>(null);
  const { user } = useUser();

  const userId = user?.id;

  useEffect(() => {
    const getCartProducts = async () => {
      try {
        const res = await instance.post("/cart", { userId: userId });
        setCartproducts(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    getCartProducts();
  }, [userId]);
  console.log(cartProducts);

  return (
    <div className="h-full px-[20rem] py-[2rem] flex flex-col gap-8">
      {cartProducts &&
        cartProducts.map((product: CartType) => (
          <CartCard
            key={product.product.productId}
            productName={product.product.productName}
            price={product.product.price}
            stocks={product.product.stocks}
            productType={"test"}
            productImage={product.product.productImage}
          ></CartCard>
        ))}
    </div>
  );
};

export default CartPage;
