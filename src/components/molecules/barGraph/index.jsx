import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

// Registra os componentes necessários para o Chart.js funcionar
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function BarChart({ barData = [] }) {
  const labels = barData.table?.map((item) => item.values);
  const absoluteFrequencies = barData.table?.map(
    (item) => item.absoluteFrequency
  );

  const data = {
    labels,
    datasets: [
      {
        label: "Frequência Absoluta",
        data: absoluteFrequencies,
        backgroundColor: "rgba(76, 44, 114, 0.8)",
        borderColor: "#4B296B",
        borderWidth: 2,
        hoverBackgroundColor: "rgba(156, 227, 125, 0.8)",
        hoverBorderColor: "#87b37a",
        barThickness: 160,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
        labels: {
          color: "#f5f5f7",
        },
      },
      tooltip: {
        backgroundColor: "#2c2c2e",
        titleColor: "#f5f5f7",
        bodyColor: "#f5f5f7",
        borderColor: "#87b37a",
        borderWidth: 1,
      },
    },
    scales: {
      x: {
        ticks: {
          color: "#f5f5f7",
        },
        grid: {
          color: "rgba(255, 255, 255, 0.1)",
        },
        // Ajustando para barras encostarem
        stacked: true,
        categoryPercentage: 1.0,
        barPercentage: 1.0,
      },
      y: {
        ticks: {
          color: "#f5f5f7",
        },
        grid: {
          color: "rgba(255, 255, 255, 0.1)",
        },
      },
    },
  };

  return (
    <div className="h-96 w-full mx-auto bg-tekhelet p-6 rounded-lg shadow-lg">
      <Bar data={data} options={options} />
    </div>
  );
}
