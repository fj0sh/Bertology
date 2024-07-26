import BookingRequestCard from "@/components/cards/BookingRequestCard";
import React from "react";

const BookingRequest = () => {
  return (
    <div className="flex flex-col gap-4">
      <BookingRequestCard
        description="test"
        date="now"
        vehicleType="tset"
        location="here"
      />
      <BookingRequestCard
        description="test"
        date="now"
        vehicleType="tset"
        location="here"
      />
      <BookingRequestCard
        description="test"
        date="now"
        vehicleType="tset"
        location="here"
      />
      <BookingRequestCard
        description="test"
        date="now"
        vehicleType="tset"
        location="here"
      />
    </div>
  );
};

export default BookingRequest;
