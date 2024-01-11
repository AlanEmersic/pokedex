import { Stack, Typography } from "@mui/material";

type PokemonSizeProps = {
  height: number;
  weight: number;
};

export const PokemonSize = ({ height, weight }: PokemonSizeProps) => {
  return (
    <Stack
      direction="row"
      spacing={2}
      sx={{
        justifyContent: "center",
      }}
    >
      <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: "bold" }}>
        Height: {height} m
      </Typography>

      <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: "bold" }}>
        Weight: {weight} kg
      </Typography>
    </Stack>
  );
};
