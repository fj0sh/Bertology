import Button from "@/components/button";
import ImagePreviewCard from "@/components/cards/ImagePreviewCard";
import React from "react";

const Products = () => {
  return (
    <div className="bg-black">
      <div className="h-screen bg-orange text-white flex justify-center items-center">
        <p className="font-bold text-[50px]">Products</p>
      </div>
      <div className="h-screen"></div>
      <div className="h-full flex flex-col items-center gap-6 p-20">
        <div className="text-orange text-[22px]">AVAILABLE SERVICES</div>
        <div className="mx-[20rem] grid grid-cols-3 gap-8 border-none ">
          <ImagePreviewCard image={"/images/test_images/roadblock.png"} />
          <ImagePreviewCard image={"/images/test_images/roadblock.png"} />
          <ImagePreviewCard image={"/images/test_images/roadblock.png"} />
          <ImagePreviewCard image={"/images/test_images/roadblock.png"} />
          <ImagePreviewCard image={"/images/test_images/roadblock.png"} />
          <ImagePreviewCard image={"/images/test_images/roadblock.png"} />
        </div>

        <Button title="See More" />
      </div>
    </div>
  );
};

export default Products;
