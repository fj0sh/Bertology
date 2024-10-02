"use client";
import ServicePreviewCard from "@/components/cards/ServicePreviewCard";
import { ServiceType } from "@/constants/Service";
import instance from "@/lib/util/axios-instance";
import React, { useEffect, useState } from "react";

const Services = () => {
  const [services, setServices] = useState<ServiceType[]>([]);

  useEffect(() => {
    const getServices = async () => {
      try {
        const res = await instance.get("/services");

        setServices(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getServices();
  }, []);

  return (
    <div className="grid grid-cols-2 gap-6 mx-[20rem] p-10 h-full">
      {services.map((service) => (
        <ServicePreviewCard
          key={service?.id}
          image={service?.image}
          duration={service?.duration}
          title={service?.serviceName}
          description={service?.serviceDescription}
          id={service?.id}
        />
      ))}
    </div>
  );
};

export default Services;
