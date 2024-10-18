import React from "react";
import useFetchData from "../fetcher/useFetchData";
import { ServiceType } from "@/constants/Service";

const useServices = () => {
  const { data: services } = useFetchData<ServiceType[] | null>("/services");

  return { services };
};

export default useServices;
