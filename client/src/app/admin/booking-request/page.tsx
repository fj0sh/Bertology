import BookingRequestCard from "@/components/cards/BookingRequestCard";
import React from "react";

const BookingRequest = () => {
  return (
    <div className="flex flex-col gap-4">
      <BookingRequestCard
        description="Lorem ipsum dolor sit am equivalents of Lore mauris sed diam non pro id elit. Lorem ipsum dolor sit am equivalents of Lore mauris sed diam non pro id el it. Lorem ipsum dolor sit am equivalents of Lore maur is sed diam non pro id elit. Lorem ipsum dolor sit am equivalents of Lore mauris sed diam non pro id elit in id tempor vit  eu dui. Lorem ipsum dolor sit am equivalents of Lore mauris sed diam non pro id el  it. Lorem ipsum dolor sit am equivalents of Lore  mauris sed diam non pro id elit in id tempor vit e"
        date="now"
        vehicleType="Honda"
        location="Mabolo"
        bookingId={0}
      />
    </div>
  );
};

export default BookingRequest;
