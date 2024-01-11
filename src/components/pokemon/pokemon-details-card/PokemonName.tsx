import { CardContent, Typography } from "@mui/material";

type PokemonNameProps = {
  name: string;
  id: string;
};

export const PokemonName = ({ name, id }: PokemonNameProps) => {
  return (
    <CardContent
      sx={{
        textAlign: "center",
      }}
    >
      <Typography gutterBottom variant="h5" component="div" sx={{ textTransform: "capitalize", fontWeight: "bold" }}>
        {name} {id}
      </Typography>
    </CardContent>
  );
};
