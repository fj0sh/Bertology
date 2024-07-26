import Image from "next/image";
import React from "react";

interface Props {
  image: string;
}

const ImagePreviewCard = (props: Props) => {
  const { image } = props;

  return (
    <div className="w-[14rem] h-[17rem] border-none rounded-xl">
      <Image
        src={image}
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
