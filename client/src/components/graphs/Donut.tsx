import { Doughnut } from "react-chartjs-2";

import {
  Chart as ChartJS,
  Tooltip,
  Legend,
  ArcElement,
  plugins,
} from "chart.js";
import instance from "@/lib/util/axios-instance";
import { useEffect, useState } from "react";
import useBooking from "@/hooks/requests/useBooking";

ChartJS.register(Tooltip, Legend, ArcElement);

export const DonutChart = () => {
  const { chartData } = useBooking();

  const options = {
    cutout: 90,
    plugins: {
      legend: {
        display: false,
      },
    },
  };
  const data = {
    labels: ["DONE", "DECLINED", "MISSED", "APPROVED", "PENDING"],
    datasets: [
      {
        label: "My First Dataset",
        data: chartData.length <= 0 ? [0, 0, 0, 0, 0] : chartData,
        borderRadius: 5,
        backgroundColor: [
          "#32E875",
          "#F22B29",
          "#6b7280",
          "#3772FF",
          "#FFC857",
        ],
        hoverOffset: 4,
        borderWidth: 2,
        borderColor: "#1a1a1a",
        weight: 0.5,
        spacing: 3,
      },
    ],
  };

  return <Doughnut options={options} data={data} />;
};
