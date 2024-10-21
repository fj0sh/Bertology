import { BookingResponse } from "@/constants/Booking";
import instance from "@/lib/util/axios-instance";
import React, { useEffect, useState } from "react";

const useBooking = () => {
  const [data, setData] = useState<any | undefined>(undefined);
  const [allBookings, setAllBookings] = useState<BookingResponse[] | undefined>(
    undefined
  );

  const bookService = async (
    firstName: string,
    lastName: string,
    email: string,
    contactNumber: number,
    municipality: string,
    barangay: string,
    landmark: string,
    serviceId: number,
    carModel: string,
    additionalDetails: string,
    proofOfPayment: string,
    bookedDate: string
  ) => {
    const body = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      contactNumber: contactNumber,
      municipality: municipality,
      barangay: barangay,
      landmark: landmark,
      serviceId: serviceId,
      carModel: carModel,
      additionalDetails: additionalDetails,
      proofOfPayment: proofOfPayment,
      bookedDate: bookedDate,
    };

    try {
      const res = await instance.post(
        `${process.env.NEXT_PUBLIC_URL}/booking/`,
        body
      );

      return res.data;
    } catch (error) {
      console.log(error);
    }
  };

  const getServiceById = async (id: number) => {
    try {
      const res = await instance.get(
        `${process.env.NEXT_PUBLIC_URL}/services/${id}`
      );
      setData(res.data);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };

  const getAllBookings = async () => {
    try {
      const res = await instance.get(
        `${process.env.NEXT_PUBLIC_URL}/booking/bookings`
      );
      setAllBookings(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return { bookService, getServiceById, getAllBookings, data, allBookings };
};

export default useBooking;
