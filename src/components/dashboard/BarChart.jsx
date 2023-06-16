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

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "top",
    },
  },
};

const labels = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];

const data = {
  labels: labels,
  datasets: [
    {
      label: "Income Stats",
      barThickness: 25,
      data: [65, 59, 30, 81, 56, 55, 40, 70, 20, 40, 55, 90],
      backgroundColor: [
        "rgba(25, 42, 86, 1)",
        "rgba(80, 45, 130, 1)",
        "rgba(38, 166, 154, 1)",
        "rgba(235, 183, 52, 1)",
        "rgba(214, 48, 49, 1)",
        "rgba(59, 209, 161, 1)",
        "rgba(255, 111, 97, 1)",
        "rgba(179, 139, 235, 1)",
        "rgba(244, 151, 66, 1)",
        "rgba(101, 180, 237, 1)",
        "rgba(46, 204, 113, 1)",
        "rgba(155, 89, 182, 1)",
      ],
      borderColor: [
        "rgba(25, 42, 86, 1)",
        "rgba(80, 45, 130, 1)",
        "rgba(38, 166, 154, 1)",
        "rgba(235, 183, 52, 1)",
        "rgba(214, 48, 49, 1)",
        "rgba(59, 209, 161, 1)",
        "rgba(255, 111, 97, 1)",
        "rgba(179, 139, 235, 1)",
        "rgba(244, 151, 66, 1)",
        "rgba(101, 180, 237, 1)",
        "rgba(46, 204, 113, 1)",
        "rgba(155, 89, 182, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

const BarChart = () => {
  return (
    <div className="w-[99%] h-[250px]xs:h-[280px] ss:h-[300px] sm:h-[350px] md:h-[400px]">
      <Bar options={options} data={data} className="w-[100%] h-[100%]" />
    </div>
  );
};

export default BarChart;
