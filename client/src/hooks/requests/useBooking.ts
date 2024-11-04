import { BookingResponse } from "@/constants/Booking";
import instance from "@/lib/util/axios-instance";
import React, { useEffect, useState } from "react";

const useBooking = () => {
  const [data, setData] = useState<any | undefined>(undefined);
  const [serviceType, setServiceType] = useState([]);
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
    carModel: string,
    additionalDetails: string,
    proofOfPayment: string,
    bookedDate: string,
    OTP: number,
    mode: string
  ) => {
    const body = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      contactNumber: contactNumber,
      municipality: municipality,
      barangay: barangay,
      landmark: landmark,
      carModel: carModel,
      additionalDetails: additionalDetails,
      proofOfPayment: proofOfPayment,
      bookedDate: bookedDate,
      OTP: OTP,
      mode: mode,
    };

    try {
      const res = await instance.post(
        `${process.env.NEXT_PUBLIC_URL}/booking/`,
        body
      );

      console.log(res.data);
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

  const selectTypes = async (bookingId: number, serviceId: number) => {
    try {
      const res = await instance.post("booking/selectTypes", {
        bookingId: bookingId,
        serviceId: serviceId,
      });

      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const acceptBooking = async (id: number) => {
    try {
      const res = instance.patch(
        `${process.env.NEXT_PUBLIC_URL}/booking/accept/${id}`
      );
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  const declineBooking = async (id: number) => {
    try {
      const res = instance.patch(
        `${process.env.NEXT_PUBLIC_URL}/booking/decline/${id}`
      );
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  const getSelectedTypes = async (id: number) => {
    try {
      const res = await instance.get(
        `${process.env.NEXT_PUBLIC_URL}/booking/bookings/${id}`
      );
      setServiceType(res.data);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };

  return {
    bookService,
    getServiceById,
    getAllBookings,
    acceptBooking,
    declineBooking,
    selectTypes,
    getSelectedTypes,
    data,
    allBookings,
    serviceType,
  };
};

export default useBooking;
