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

  let text1;
  let text2;

  const titleSplitter = (text: string) => {
    let styledTitle;

    styledTitle = text?.split(" ");

    text1 = styledTitle[0];
    text2 = styledTitle[1];

    return text2 + text1;
  };

  titleSplitter(title!);

  if (!reverse) {
    return (
      <div className="flex flex-col rounded-lg text-white text-center">
        <div className="items-center relative w-full flex flex-col">
          <hr className="w-full top-[50%] absolute border-orangePrimary border-t-[3px]" />
          <p className=" text-[30px] z-10 w-fit bg-background p-2 px-8">
            <span className="text-orangePrimary">{text1}</span> {text2}
          </p>
        </div>
        <div>
          <div className="flex w-full h-[20rem] rounded-lg">
            <div className="h-full w-[40%] flex justify-center items-center">
              <Image
                src={image ? image : "/images/empty-image.png"}
                alt="roadblock"
                width={0}
                height={0}
                sizes="100%"
                style={{ width: "80%", height: "80%" }}
                className="rounded-lg"
              />
            </div>
            <div className="h-full w-full flex justify-center items-center text-left text-[20px]">
              {description}
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="flex flex-col rounded-lg text-white text-center">
      <div className="items-center relative w-full flex flex-col">
        <hr className="w-full top-[50%] absolute border-orangePrimary border-t-[3px]" />
        <p className=" text-[30px] z-10 w-fit bg-background p-2 px-8">
          {text1} <span className="text-orangePrimary">{text2}</span>
        </p>
      </div>
      <div>
        <div className="flex w-full h-[20rem] rounded-lg">
          <div className="h-full w-full flex justify-center items-center text-left text-[20px]">
            {description}
          </div>
          <div className="h-full w-[40%] flex justify-center items-center">
            <Image
              src={image ? image : "/images/empty-image.png"}
              alt="roadblock"
              width={0}
              height={0}
              sizes="100%"
              style={{ width: "80%", height: "80%" }}
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OffersCard;
