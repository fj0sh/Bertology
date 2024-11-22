import instance from "@/lib/util/axios-instance";
import { useQuery } from "@tanstack/react-query";
import React, { useEffect } from "react";

const useInquiry = () => {
  const getInquiries = async () => {
    try {
      const res = await instance.get("/inquiries");
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };

  const { data: tanstackData, refetch } = useQuery({
    queryKey: ["inquiries"], // The query key is an array of strings
    queryFn: getInquiries, // The function that will fetch the data
  });

  const addInquiry = async (
    firstName: string,
    lastname: string,
    email: string,
    message: string
  ) => {
    try {
      const body = {
        firstName: firstName,
        lastName: lastname,
        email: email,
        message: message,
      };
      const res = await instance.post("/inquiries", body);
      refetch();
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getInquiries();
  }, []);

  return { addInquiry, tanstackData };
};

export default useInquiry;
