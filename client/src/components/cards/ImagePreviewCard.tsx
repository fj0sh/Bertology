import Image from "next/image";
import React from "react";

interface Props {
  image: string;
  serviceName: string;
  price: string;
}

const ImagePreviewCard = (props: Props) => {
  const { image, serviceName, price } = props;

  return (
    <div className="w-[14rem] h-[17rem] flex flex-col gap-1 justify-center items-center border-none rounded-xl">
      <Image
        className="rounded-md"
        src={image}
        alt="roadblock"
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "100%", height: "100%" }}
      />

      <p className="text-orangePrimary text-[20px]">{serviceName}</p>
      <p>Price: {`₱ ${price}`}</p>
    </div>
  );
};

export default ImagePreviewCard;
