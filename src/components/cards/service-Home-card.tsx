import React from "react";

interface Props {
  reverse?: boolean;
  image?: string;
  description?: string;
  title?: string;
}

const ServiceHomeCard = (props: Props) => {
  const { reverse, image, description, title } = props;
  if (!reverse) {
    return (
      <div className="border flex">
        <div className="flex w-[60%] h-[10rem] border p-3">
          <div className="h-full w-[40%] border">{image}</div>
          <div className="h-full w-full border flex justify-center items-center">
            {description}
          </div>
        </div>
        <div className="w-[40%] h-[10rem] flex justify-center items-center">
          {title}
        </div>
      </div>
    );
  } else {
    return (
      <div className="border flex">
        <div className="w-[40%] h-[10rem]  flex justify-center items-center">
          {title}
        </div>
        <div className="flex w-[60%] h-[10rem] border p-3">
          <div className="h-full w-full border flex justify-center items-center">
            {description}
          </div>
          <div className="h-full w-[40%] border">{image}</div>
        </div>
      </div>
    );
  }
};

export default ServiceHomeCard;
