import Image from "next/image";
import React from "react";

const ImagePreviewCard = () => {
  return (
    <div className="w-[14rem] h-[17rem] border-none rounded-xl">
      <Image
        src={"/images/test_images/roadblock.png"}
        alt="roadblock"
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
};

export default ImagePreviewCard;
