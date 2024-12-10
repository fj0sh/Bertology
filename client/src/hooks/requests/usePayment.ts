"use client";
import instance from "@/lib/util/axios-instance";
import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";

const usePayment = () => {
  const [data, setData] = useState();

  const getPayment = async () => {
    try {
      const res = await instance.get("/payments/");
      console.log(res.data);
      setData(res.data);

      return res.data;
    } catch (error) {
      console.log(error);
    }
  };

  //   useEffect(() => {
  //     getPayment();
  //   }, []);

  const { data: tanstackData, refetch } = useQuery<any>({
    queryKey: ["payments"],
    queryFn: getPayment,
  });

  const addPayment = async (paymentName: string, paymentImage: string) => {
    try {
      const res = await instance.post("/addPayment", {
        paymentName,
        paymentImage,
      });

      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const editPayment = async (
    id: number,
    paymentName: string,
    paymentImage: string
  ) => {
    const body = { paymentName: paymentName, paymentImage: paymentImage };
    try {
      const res = await instance.patch(`/${id}`, body);
    } catch (error) {
      console.log(error);
    }
  };

  const deletePayment = async (id: number) => {
    try {
      const res = await instance.delete(`/${id}`);
    } catch (error) {
      console.log(error);
    }
  };

  return {
    tanstackData,
    data,
    getPayment,
    addPayment,
    deletePayment,
    editPayment,
  };
};

export default usePayment;
