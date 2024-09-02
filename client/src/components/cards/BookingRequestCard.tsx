"use client";
import React from "react";
import Button from "../button/OrangeButton";
import BookingRequestModal from "../Modals/BookingRequestModal";
import { useRouter } from "next/navigation";

interface Props {
  description: string;
  location: string;
  date: string;
  vehicleType: string;
  bookingId: number;
}

const BookingRequestCard = (props: Props) => {
  const { description, location, date, vehicleType, bookingId } = props;

  const router = useRouter();

  return (
    <>
      <div className="relative flex h-[10rem] p-4 text-white border border-orange rounded-lg gap-6">
        <div className="w-[70%] border-white flex flex-col gap-3 ">
          <div className="text-[25px]">{vehicleType}</div>
          <div className=" line-clamp-3 text-wrap whitespace-pre-line text-justify indent-12">
            {description}
          </div>
        </div>
        <div className=" w-[30%] border-white flex flex-col">
          <div className="flex flex-col gap-4">
            <p>Date: {date}</p>
            <p>Location: {location}</p>
            <div className="flex gap-4">
              <Button
                title="View"
                onClick={() => router.push(`booking-request/${bookingId}`)}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookingRequestCard;
