import React, { useState } from "react";
import useFetchData from "../fetcher/useFetchData";
import { ServiceType } from "@/constants/Service";
import instance from "@/lib/util/axios-instance";
import { useUser } from "@/providers/UserProvider";

const useServices = () => {
  // const { data: services } = useFetchData<ServiceType[]>("/services");
  const [dateInfo, setDateInfo] = useState([]);

  const getDateInformation = async (date: string) => {
    try {
      const res = await instance.post("/services/date-info", { date: date });
      setDateInfo(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return { getDateInformation, dateInfo };
};

export default useServices;
