import React from "react";

interface Props {
  value: number;
  title: string;
  className?: string;
}

const DashboardCard = (props: Props) => {
  const { value, className, title } = props;
  return (
    <div
      className={`${className}   bg-grey border-none rounded-lg shadow-md flex flex-col justify-center items-center text-white font-bold p-5`}
    >
      <p className="text-[35px]">{value}</p>
      <p> {title}</p>
    </div>
  );
};

export default DashboardCard;
