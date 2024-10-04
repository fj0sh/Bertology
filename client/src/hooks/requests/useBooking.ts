import instance from "@/lib/util/axios-instance";
import React from "react";

const useBooking = () => {
  const bookService = async (
    userId: number,
    serviceId: number,
    location: string,
    fbAccount: string,
    contact: number,
    serviceRequest: string,
    carModel: string,
    detail: string,
    dateBooked: string,
    paymentType: number
  ) => {
    const body = {
      userId: userId,
      serviceId: serviceId,
      location: location,
      fbAccount: fbAccount,
      contact: contact,
      serviceRequest: serviceRequest,
      carModel: carModel,
      detail: detail,
      dateBooked: dateBooked,
      paymentType: paymentType,
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
      console.log(res.data);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };

  return { bookService, getServiceById };
};

export default useBooking;
