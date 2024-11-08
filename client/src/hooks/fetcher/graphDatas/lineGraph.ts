const lineChartData = {
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
      data: [
        10000, 20000, 13000, 1000, 500, 2000, 3050, 2500, 1000, 30000, 5000,
        2100,
      ],
      backgroundColor: "rgba(75, 192, 192, 0.2)",
      borderColor: "#FF661F",
      borderWidth: 1,
      hoverBackgroundColor: "#080808",
      hoverBorderColor: "rgba(220, 220, 220, 1)",
      hoverBorderWidth: 2,
      pointRadius: 5,
      pointBackgroundColor: "#F96C2F",
    },
  ],
};

export default lineChartData;
