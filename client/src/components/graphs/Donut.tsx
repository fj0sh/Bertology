import { Doughnut } from "react-chartjs-2";

import { Chart as ChartJS, Tooltip, Legend, ArcElement } from "chart.js";
import instance from "@/lib/util/axios-instance";
import { useEffect, useState } from "react";

ChartJS.register(Tooltip, Legend, ArcElement);

export const DonutChart = () => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const fetchBookingData = async () => {
      try {
        const res = await instance.get("/booking/status");
        const counts = res.data.map((status: any) => status.count);
        setChartData(counts);
      } catch (error) {
        console.log(error);
      }
    };

    fetchBookingData();
  }, []);

  const options = { cutout: 90 };
  const data = {
    labels: ["DONE", "DECLINED", "APPROVED", "PENDING"],
    datasets: [
      {
        label: "My First Dataset",
        data: chartData.length <= 0 ? [1, 1, 1, 1] : chartData,
        backgroundColor: ["#32E875", "#F22B29", "#3772FF", "#FFC857"],
        hoverOffset: 4,
        borderWidth: 2,
        borderColor: "#080808",
        weight: 0.5,
      },
    ],
  };

  return <Doughnut options={options} data={data} />;
};
