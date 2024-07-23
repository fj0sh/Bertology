"use client";
import User from "@/constants/Users";
import { fetchUser } from "@/lib/api/users.api";
import { useQuery } from "@tanstack/react-query";
import React from "react";

const Test = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUser,
  });

  console.log(data);

  if (isLoading) return <div>Loading.....</div>;
  if (error) return <div>Error.....</div>;

  return <div>{JSON.stringify(data)}</div>;
};

export default Test;
