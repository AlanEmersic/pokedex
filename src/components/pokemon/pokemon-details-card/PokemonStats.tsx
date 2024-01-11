import { Paper, Typography } from "@mui/material";
import { BarElement, CategoryScale, Chart as ChartJS, Legend, LinearScale, Title, Tooltip } from "chart.js";
import { Bar } from "react-chartjs-2";

import { PokemonStat } from "models";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const options = {
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

const labels = ["HP", "ATTACK", "DEFENSE", "SPECIAL ATTACK", "SPECIAL DEFENSE", "SPEED"];

type PokemonStatsProps = {
  stats: PokemonStat[];
};

export const PokemonStats = ({ stats }: PokemonStatsProps) => {
  const hp = stats[0].base_stat;
  const attack = stats[1].base_stat;
  const defense = stats[2].base_stat;
  const specialAttack = stats[3].base_stat;
  const specialDefense = stats[4].base_stat;
  const speed = stats[5].base_stat;

  const pokemonStats = [hp, attack, defense, specialAttack, specialDefense, speed];

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
    <>
      <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: "bold" }}>
        Stats
      </Typography>
      <Paper variant="outlined">
        <Bar options={options} data={data} />
      </Paper>
    </>
  );
};
