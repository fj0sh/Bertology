import React from "react";

interface Props {
  value: number;
  title: string;
}

const DashboardCard = (props: Props) => {
  const { value, title } = props;
  return (
    <div className=" col-span-3 bg-grey border-none rounded-lg shadow-md flex flex-col justify-center items-center text-white font-bold gap-3">
      <p className="text-[35px]">{value}</p>
      <p> {title}</p>
    </div>
  );
};

export default DashboardCard;
