"use client";
import User from "@/constants/Users";
import instance from "@/lib/util/axios-instance";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import React, { useState } from "react";
import { RiAlignItemBottomFill } from "react-icons/ri";

const Test = () => {
  const [test, setTest] = useState("");

  sessionStorage.setItem("test", "Bob");

  const data = sessionStorage.getItem("test");
  console.log(data);

  return <div></div>;
};

export default Test;
