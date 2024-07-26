import OrderPreviewCard from "@/components/cards/OrderPreviewCard";
import React from "react";

const ReservedProducts = () => {
  return (
    <div>
      <OrderPreviewCard
        address="test"
        customer="test"
        date="test"
        image="/images/test_images/roadblock.png"
        price={1000000}
        productName="test"
      />
    </div>
  );
};

export default ReservedProducts;
