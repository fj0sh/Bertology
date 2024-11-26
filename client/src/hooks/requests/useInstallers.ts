import instance from "@/lib/util/axios-instance";
import { InstallerType } from "@/lib/util/schema";
import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";

const useInstallers = () => {
  const [data, setData] = useState([]);
  const [installerData, setInstallerData] = useState<InstallerType[]>([]);

  const getInstallers = async () => {
    try {
      const res = await instance.get("/installer");
      setData(res.data);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };

  const { data: tanstackData, refetch } = useQuery({
    queryKey: ["installers"], // The query key is an array of strings
    queryFn: getInstallers, // The function that will fetch the data
  });

  const addInstaller = async (
    firstName: string,
    lastName: string,
    address: string,
    phoneNumber: string,
    email?: string,
    image?: string,
    experience?: string
  ) => {
    const body = {
      firstName: firstName,
      lastName: lastName,
      address: address,
      phoneNumber: phoneNumber,
      email: email,
      image: image,
      experience: experience,
    };

    try {
      await instance.post("/installer/", body);
      getInstallers();
    } catch (error) {
      console.log(error);
    }
  };

  const getInstallerById = async (id: number) => {
    try {
      const res = await instance.get(`/installer/${id}`);
      setInstallerData(res.data);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };

  const assignInstaller = async (installerId: number, bookingId: number) => {
    try {
      const res = await instance.patch("/installer/assign", {
        installerId: installerId,
        bookingId: bookingId,
      });
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const editInstaller = async (
    id: number,
    firstName: string,
    lastName: string,
    address: string,
    phoneNumber: string,
    email: string,
    image: string,
    experience: string,
    status: string
  ) => {
    const body = {
      firstName: firstName,
      lastName: lastName,
      address: address,
      phoneNumber: phoneNumber,
      email: email,
      image: image,
      experience: experience,
      status: status,
    };

    try {
      const res = await instance.patch(`/installer/edit/${id}`, body);
      refetch();
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteInstaller = async (id: number) => {
    try {
      await instance.delete(`/installer/${id}`);
      refetch();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getInstallers();
  }, []);

  return {
    installerData,
    data,
    tanstackData,

    addInstaller,
    getInstallerById,
    assignInstaller,
    editInstaller,
    getInstallers,
    deleteInstaller,
    refetch,
  };
};

export default useInstallers;
