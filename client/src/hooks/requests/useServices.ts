import { useState } from "react";
import instance from "@/lib/util/axios-instance";
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

  const addServices = async (
    serviceName: string,
    servicePrice: number,
    serviceImage: string,
    serviceDescription: string
  ) => {
    const body = {
      serviceName: serviceName,
      servicePrice: servicePrice,
      serviceImage: serviceImage,
      serviceDescription: serviceDescription,
    };

    try {
      await instance.post("/services", body);
      refetch();
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

  const editService = async (
    id: number,
    name: string,
    price: number,
    image: string,
    description: string
  ) => {
    const body = {
      serviceName: name,
      servicePrice: price,
      serviceImage: image,
      serviceDescription: description,
    };

    try {
      await instance.patch(`/services/${id}`, body);
      refetch();
    } catch (error) {
      console.log(error);
    }
  };

  const deleteService = async (id: number) => {
    try {
      await instance.delete(`/services/${id}`);
      refetch();
    } catch (error) {
      console.log(error);
    }
  };

  return {
    tanstackData,
    dateInfo,
    getDateInformation,
    addServices,
    editService,
    deleteService,
  };
};

export default useServices;
