import React from "react";
import { MDBContainer } from "mdb-react-ui-kit";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  CategoryScale,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  CategoryScale
);

const LineChartComponent = () => {
  const data = {
    labels: [
      "September",
      "October",
      "November",
      "December",
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
    ],
    datasets: [
      {
        label: "Monthly Data",
        data: [0, 0.2, 0.3, 0.3, 0.2, 0.1, 0.5, 0.4, 0.3, 0.3, 0.3, 0.1], // Replace with your data
        borderColor: "#f1c40f",
        backgroundColor: "#f1c40f",
        pointBackgroundColor: "#f1c40f",
        pointBorderColor: "#f1c40f",
        pointRadius: 5,
        fill: false,
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
      },
    },
    scales: {
      x: {
        ticks: {
          color: "#ffffff",
        },
        grid: {
          color: "#444444",
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          color: "#ffffff",
          callback: (value) => `$${value.toFixed(1)}`,
        },
        grid: {
          color: "#444444",
        },
      },
    },
  };

  return (
    <div
      style={{
        backgroundColor: "#202029",
        padding: "20px",
        borderRadius: "10px",
      }}
    >
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChartComponent;
