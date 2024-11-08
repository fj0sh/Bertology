import { Doughnut } from "react-chartjs-2";

import { Chart as ChartJS, Tooltip, Legend, ArcElement } from "chart.js";
import { donutData } from "@/hooks/fetcher/graphDatas/donutGraph";

ChartJS.register(Tooltip, Legend, ArcElement);

export const DonutChart = () => {
  const options = { cutout: 90 };

  return <Doughnut options={options} data={donutData} />;
};
