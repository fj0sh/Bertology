import Image from "next/image";
import React from "react";

interface Props {
  reverse?: boolean;
  image?: string;
  description?: string;
  title?: string;
}

const OffersCard = (props: Props) => {
  const { reverse, image, description, title } = props;
  if (!reverse) {
    return (
      <div className="flex rounded-lg text-white">
        <div className="flex w-[60%] h-[20rem] border rounded-lg">
          <div className="h-full w-[40%]">
            <Image
              src={"/images/test_images/roadblock.png"}
              alt="roadblock"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "100%" }}
            />
          </div>
          <div className="h-full w-full flex justify-center items-center">
            {description}
          </div>
        </div>
        <div className="w-[40%] h-[20rem] flex justify-center items-center font-semibold text-[40px]">
          {title}
        </div>
      </div>
    );
  }
  return (
    <div className=" flex rounded-lg text-white">
      <div className="w-[40%] h-[20rem] flex justify-center items-center font-semibold text-[40px]">
        {title}
      </div>
      <div className="flex w-[60%] h-[20rem] border rounded-lg">
        <div className="h-full w-full flex justify-center items-center">
          {description}
        </div>
        <div className="h-full w-[40%] border">
          <Image
            src={"/images/test_images/roadblock.png"}
            alt="roadblock"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
      </div>
    </div>
  );
};

export default OffersCard;
