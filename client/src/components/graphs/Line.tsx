import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { useEffect, useState } from "react";
import instance from "@/lib/util/axios-instance";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineGraph = () => {
  const [lineChartData, setLineChartData] = useState(new Array(12).fill(0)); // Array to hold monthly sales data (12 months)

  useEffect(() => {
    const getMonthlySales = async () => {
      try {
        const res = await instance.get(`/booking/getMonthlySales`);

        // Assuming the response structure is an array of objects like:
        // [{ month: 1, year: 2024, total_sales: 10000 }, { month: 2, year: 2024, total_sales: 20000 }, ...]
        console.log(res.data);

        const monthlyData = res.data;

        // Populate lineChartData based on the month values (assuming month is 1-12)
        const updatedData = new Array(12).fill(0);
        monthlyData.forEach((entry: any) => {
          console.log(entry);
          const monthIndex = entry.MONTH - 1; // Convert month to 0-based index for array
          updatedData[monthIndex] = entry.total_sales;
        });

        setLineChartData(updatedData);
      } catch (error) {
        console.log(error);
      }
    };

    getMonthlySales();
  }, []);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true, // Show the legend
        labels: {
          color: "white", // Change legend text color to white
        },
      },
      tooltip: {
        enabled: true,
        titleColor: "white",
        bodyColor: "white",
      },
    },
    scales: {
      x: {
        grid: {
          color: "#2b2b2b",
        },
        ticks: {
          color: "white",
        },
      },
      y: {
        grid: {
          color: "#2b2b2b",
        },
        ticks: {
          color: "white",
        },
      },
    },
  };

  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Sales (In Pesos)",
        data: lineChartData, // Use the fetched data here
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "#FF661F",
        borderWidth: 1,
        hoverBackgroundColor: "#080808",
        hoverBorderColor: "rgba(220, 220, 220, 1)",
        hoverBorderWidth: 2,
        pointRadius: 5,
        pointBackgroundColor: "#F96C2F",
        // tension: 0.5,
      },
    ],
  };

  return <Line options={options} data={data} />;
};

export default LineGraph;
