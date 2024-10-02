import Image from "next/image";
import React from "react";
import LinkButton from "../button/OrangeLinkButton";

interface Props {
  title: string;
  description: string;
  duration: number;
  image: string;
  id: number;
}

const ServicePreviewCard = (props: Props) => {
  const { title, description, image, duration, id } = props;

  return (
    <div className="flex border-orangePrimary border gap-6 p-1 text-white rounded-lg">
      <div className="w-[30%] h-full flex justify-center items-center">
        <Image
          src={image}
          alt="roadblock"
          width={0}
          height={0}
          sizes="100%"
          style={{ width: "90%", height: "90%" }}
        ></Image>
      </div>
      <div className=" w-[70%] flex flex-col gap-1 p-3">
        <div className="text-[20px]">{title}</div>
        <div>Service Duration: {duration} hrs</div>
        <div className="w-full truncate">{description}</div>
        <LinkButton name="Book Now!" href={`/client/offers/services/${id}`} />
      </div>
    </div>
  );
};

export default ServicePreviewCard;
