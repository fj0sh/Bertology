import React, { useState } from "react";
import useFetchData from "../fetcher/useFetchData";
import { ServiceType } from "@/constants/Service";
import instance from "@/lib/util/axios-instance";
import { useUser } from "@/providers/UserProvider";
import { useQuery } from "@tanstack/react-query";

const useServices = () => {
  // const { data: services } = useFetchData<ServiceType[]>("/services");
  const [dateInfo, setDateInfo] = useState([]);

  const getServices = async () => {
    try {
      const res = await instance.get("/services");
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };

  const { data: tanstackData, refetch } = useQuery({
    queryKey: ["services"], // The query key is an array of strings
    queryFn: getServices, // The function that will fetch the data
  });

  const addServices = async (serviceName: string, servicePrice: number) => {
    const body = {
      serviceName: serviceName,
      servicePrice: servicePrice,
    };

    try {
      await instance.post("/services", body);
    } catch (error) {
      console.log(error);
    }
  };

  const getDateInformation = async (date: string) => {
    try {
      const res = await instance.post("/services/date-info", { date: date });
      setDateInfo(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return { tanstackData, dateInfo, getDateInformation, addServices };
};

export default useServices;
