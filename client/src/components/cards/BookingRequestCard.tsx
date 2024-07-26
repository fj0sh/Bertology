import React from "react";

interface Props {
  description: string;
  location: string;
  date: string;
  vehicleType: string;
}

const BookingRequestCard = (props: Props) => {
  const { description, location, date, vehicleType } = props;
  return (
    <div className="flex  h-[8rem] p-4 text-white border border-orange rounded-lg">
      <div className="w-[70%] border-white flex flex-col gap-3 ">
        <div className="text-[25px]">{vehicleType}</div>
        <div>{description}</div>
      </div>
      <div className=" w-[30%] border-white">
        <div className="flex flex-col gap-4">
          <p>Date: {date}</p>
          <p>Location: {location}</p>
        </div>
      </div>
    </div>
  );
};

export default BookingRequestCard;
