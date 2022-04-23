import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Skeleton,
  Stack,
  Typography,
} from "@mui/material";
import { useState } from "react";
import PokemonDetails from "./PokemonDetails";
import TypeColor, { TYPES } from "./utils/types";

export default function Pokemon({ pokemon, isloading = true }: any) {
  const id = "#" + ("000" + pokemon.id).slice(-3);
  const name = pokemon.name;
  const types = pokemon.types.map((t: any) => {
    return TYPES.includes(t.type.name)
      ? t.type.name.charAt(0).toUpperCase() + t.type.name.slice(1)
      : null;
  });

  const defaultSprite = pokemon.sprites.front_default;

  const [openDetails, setOpenDetails] = useState(false);
  const handleOpenDetails = () => setOpenDetails(true);
  const handleCloseDetails = () => setOpenDetails(false);

  return isloading ? (
    <Skeleton variant="rectangular" height={300} sx={{ maxHeight: 300 }} />
  ) : (
    <Card sx={{ maxWidth: 300 }}>
      <CardMedia component="img" image={defaultSprite} alt={name} onClick={handleOpenDetails}/>
      <CardContent onClick={handleOpenDetails}
        sx={{
          textAlign: "center",
        }}
      >
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{ textTransform: "capitalize", fontWeight: "bold" }}
        >
          {name}
        </Typography>
        <Typography
          gutterBottom
          variant="body2"
          component="div"
          sx={{ fontSize: "1.2rem" }}
        >
          {id}
        </Typography>
        <Stack
          direction="row"
          spacing={1}
          sx={{
            justifyContent: "center",
          }}
        >
          {types &&
            types.map((t: string, id: number) => {
              return (
                <Chip
                  key={id}
                  label={t}
                  variant="outlined"
                  sx={{
                    backgroundColor: TypeColor(t.toLowerCase()),
                    fontSize: "1.3rem",
                  }}
                />
              );
            })}
        </Stack>
      </CardContent>
      <CardActions sx={{ justifyContent: "center" }}>
        <Button size="medium" variant="outlined" onClick={handleOpenDetails}>
          Details
        </Button>
        <PokemonDetails
          pokemon={pokemon}
          openDetails={openDetails}
          handleCloseDetails={handleCloseDetails}
        />
      </CardActions>
    </Card>
  );
}
