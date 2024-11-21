import Image from "next/image";
import React from "react";

interface Props {
  image: string;
  serviceName: string;
  price: string;
  descrption: string;
}

const ImagePreviewCard = (props: Props) => {
  const { image, serviceName, price, descrption } = props;

  return (
    <div className="w-[20rem] h-[17rem] flex flex-col gap-1 justify-center items-center border-none rounded-xl group">
      <div className="group-hover:flex gap-2">
        <div className="group-hover:h-[100%] group-hover:w-[50%] ">
          <Image
            className="rounded-md"
            src={image}
            alt="roadblock"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-orangePrimary text-[20px]">{serviceName}</p>
          <p>Price: {`₱ ${price}`}</p>
        </div>
      </div>
      <div className="group-hover:flex hidden">{descrption}</div>
    </div>
  );
};

export default ImagePreviewCard;
