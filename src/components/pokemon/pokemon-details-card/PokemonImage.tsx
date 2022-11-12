import { CardMedia } from "@mui/material";

type PokemonImageProps = {
  defaultSprite: string;
  name: string;
};

export const PokemonImage = ({ defaultSprite, name }: PokemonImageProps) => {
  return (
    <CardMedia
      component="img"
      image={defaultSprite}
      alt={name}
      sx={{
        height: "50%",
        width: "50%",
        margin: "auto",
      }}
    />
  );
};
