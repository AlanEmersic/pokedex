import { Paper } from "@mui/material";
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

export const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
  },
  scales: {
    xAxis: {
      ticks: {
        color: "#FFF",
      },
    },
    yAxis: {
      ticks: {
        color: "#FFF",
      },
      min: 0,
      max: 255,
    },
  },
};

const labels = [
  "HP",
  "ATTACK",
  "DEFENSE",
  "SPECIAL ATTACK",
  "SPECIAL DEFENSE",
  "SPEED",
];

export default function PokemonStats({ stats }: any) {
  const hp = stats[0].base_stat;
  const attack = stats[1].base_stat;
  const defense = stats[2].base_stat;
  const specialAttack = stats[3].base_stat;
  const specialDefense = stats[4].base_stat;
  const speed = stats[5].base_stat;

  const pokemonStats = [
    hp,
    attack,
    defense,
    specialAttack,
    specialDefense,
    speed,
  ];

  const data = {
    labels,
    datasets: [
      {
        data: pokemonStats,
        backgroundColor: "#30A7D7",
        borderColor: "#FFFFFF",
        borderRadius: 10,
      },
    ],
  };

  return (
    <Paper variant="outlined">
      <Bar options={options} data={data} />
    </Paper>
  );
}
