import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend, Title);

const ChartComponent = () => {
  const data = {
    labels: ["Marketing", "Revenue Share", "Team", "Development", "Treasury"],
    datasets: [
      {
        label: "Revenue Allocation",
        data: [30, 20, 20, 15, 15],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
        ],
      },
    ],
  };

  const options = {
    responsive: true,
    aspectRatio: 1.2, // Square-shaped chart
    plugins: {
      legend: {
        position: "top",
      },
      tooltip: {
        enabled: true,
      },
    },
  };

  return (
    <div className="flex justify-center items-center">
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default ChartComponent;
