import React, { useEffect, useState } from "react";
import instance from "@/lib/util/axios-instance";

const baseUrl = process.env.NEXT_PUBLIC_URL;

const useFetchData = <T = any>(url: string) => {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await instance.get(baseUrl + url);
        console.log(res.data);
        setData(res.data);
        setError(null);
        setLoading(false);
      } catch (error: any) {
        setError(error);
        setLoading(false);
      }
    };
    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default useFetchData;
