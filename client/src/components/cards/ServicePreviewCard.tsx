import Image from "next/image";
import React from "react";
import LinkButton from "../button/OrangeLinkButton";

interface Props {
  title: string;
  description: string;
  image: string;
}

const ServicePreviewCard = (props: Props) => {
  const { title, description, image } = props;

  return (
    <div className="flex border-orange border gap-6 p-3 text-white rounded-lg">
      <div className="w-[20%] h-full p-3">
        <Image
          src={image}
          alt="roadblock"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "100%" }}
        ></Image>
      </div>
      <div className="h-full w-[80%] flex flex-col gap-3">
        <div className="text-[20px]">{title}</div>
        <div>{description}</div>
        <LinkButton name="Book Now!" href="/client/offers/services/booking" />
      </div>
    </div>
  );
};

export default ServicePreviewCard;
