import instance from "@/lib/util/axios-instance";
import { InstallerType } from "@/lib/util/schema";
import React, { useEffect, useState } from "react";

const useInstallers = () => {
  const [data, setData] = useState([]);
  const [installerData, setInstallerData] = useState<InstallerType[]>([]);

  useEffect(() => {
    const getInstallers = async () => {
      try {
        const res = await instance.get("/installer");
        setData(res.data);
        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getInstallers();
  }, []);

  const addInstaller = async (
    firstName: string,
    lastName: string,
    address: string,
    phoneNumber: string,
    email?: string,
    image?: string
  ) => {
    const body = {
      firstName: firstName,
      lastName: lastName,
      address: address,
      phoneNumber: phoneNumber,
      email: email,
      image: image,
    };

    try {
      const res = await instance.post("/installer/", body);

      console.log(res.data);
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

  return {
    installerData,
    data,
    addInstaller,
    getInstallerById,
    assignInstaller,
  };
};

export default useInstallers;
