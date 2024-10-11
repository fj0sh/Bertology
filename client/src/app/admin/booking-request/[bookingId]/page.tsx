"use client";
import useBooking from "@/hooks/requests/useBooking";
import React, { useEffect } from "react";

const BookingId = ({ params }: { params: { bookingId: number } }) => {
  const { data, getServiceById } = useBooking();

  useEffect(() => {
    getServiceById(params.bookingId);
  }, [params.bookingId]);

  console.log(data);

  return <div></div>;
};

export default BookingId;
