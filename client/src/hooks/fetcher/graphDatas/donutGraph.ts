import instance from "@/lib/util/axios-instance";
import { Weight } from "lucide-react";
import { fetchData } from "next-auth/client/_utils";

const fetchBookingData = async () => {
  try {
    const res = await instance.get("/api/booking/status");
    console.log(res.data);
  } catch (error) {
    console.log(error);
  }
};

fetchBookingData;

export const donutData = {
  labels: ["PENDING", "APPROVED", "DECLINED", "DONE"],
  datasets: [
    {
      label: "My First Dataset",
      data: [300, 50, 100, 200],
      backgroundColor: ["#FFC857", "#3772FF", "#F22B29", "#32E875"],
      hoverOffset: 4,
      borderWidth: 2,
      borderColor: "#080808",
      weight: 0.5,
    },
  ],
};
