import OrderPreviewCard from "@/components/cards/OrderPreviewCard";
import React from "react";

const ReservedProducts = () => {
  return (
    <div className="flex flex-col gap-4">
      <OrderPreviewCard
        customer="Joe Mama"
        address="Twin Tower"
        date="09-11-2000"
        image="/images/test_images/roadblock.png"
        price={1000000}
        productName="Boeing 747"
      />
      <OrderPreviewCard
        customer="Joe Mama"
        address="Twin Tower"
        date="09-11-2000"
        image="/images/test_images/roadblock.png"
        price={1000000}
        productName="Boeing 747"
      />

      <OrderPreviewCard
        customer="Joe Mama"
        address="Twin Tower"
        date="09-11-2000"
        image="/images/test_images/roadblock.png"
        price={1000000}
        productName="Boeing 747"
      />

      <OrderPreviewCard
        customer="Joe Mama"
        address="Twin Tower"
        date="09-11-2000"
        image="/images/test_images/roadblock.png"
        price={1000000}
        productName="Boeing 747"
      />
    </div>
  );
};

export default ReservedProducts;
