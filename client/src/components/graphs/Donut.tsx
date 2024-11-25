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
        console.log(res.data);
        const counts = res.data.map((status: any) => status.count);
        console.log(counts);
        setChartData(counts);
      } catch (error) {
        console.log(error);
      }
    };

    fetchBookingData();
  }, []);

  const options = { cutout: 90 };
  const data = {
    labels: ["PENDING", "APPROVED", "DECLINED", "DONE"],
    datasets: [
      {
        label: "My First Dataset",
        data: chartData.length <= 0 ? [1, 1, 1, 1] : chartData,
        backgroundColor: ["#FFC857", "#3772FF", "#F22B29", "#32E875"],
        hoverOffset: 4,
        borderWidth: 2,
        borderColor: "#080808",
        weight: 0.5,
      },
    ],
  };

  return <Doughnut options={options} data={data} />;
};
