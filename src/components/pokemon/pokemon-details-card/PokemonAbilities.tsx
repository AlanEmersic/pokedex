import { Chip, Stack, Typography } from "@mui/material";

type PokemonAbilitiesProps = {
  abilities: any;
};

export const PokemonAbilities = ({ abilities }: PokemonAbilitiesProps) => {
  return (
    <Stack
      spacing={1}
      direction="row"
      margin="1rem 0"
      sx={{
        justifyContent: "center",
      }}
    >
      <Typography gutterBottom variant="h5" component="div" sx={{ textTransform: "capitalize", fontWeight: "bold" }}>
        Abilities
      </Typography>
      {abilities?.map((a: string) => {
        return (
          <Chip
            key={a}
            label={a}
            variant="outlined"
            sx={{
              fontSize: "1.3rem",
              backgroundColor: "#30A7D7",
            }}
          />
        );
      })}
    </Stack>
  );
};
