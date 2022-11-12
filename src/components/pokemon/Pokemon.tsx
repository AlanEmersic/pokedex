import { useState } from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Skeleton,
  Stack,
  Typography,
} from "@mui/material";

import { Pokemon as PokemonModel } from "../../models";
import { TYPES } from "../../utils";
import { PokemonDetails, PokemonTypeList } from "..";

type PokemonProps = {
  pokemon: PokemonModel;
  isloading: boolean;
};

export const Pokemon = ({ pokemon, isloading = true }: PokemonProps) => {
  const id = "#" + ("000" + pokemon.id).slice(-3);
  const name = pokemon.name;
  const types = pokemon.types.map((t: any) => {
    return TYPES.includes(t.type.name)
      ? t.type.name.charAt(0).toUpperCase() + t.type.name.slice(1)
      : null;
  });

  const defaultSprite = pokemon.sprites.front_default;

  const [openDetails, setOpenDetails] = useState<boolean>(false);
  const handleOpenDetails = () => setOpenDetails(true);
  const handleCloseDetails = () => setOpenDetails(false);

  return isloading ? (
    <Skeleton variant="rectangular" height={300} sx={{ maxHeight: 300 }} />
  ) : (
    <Card sx={{ maxWidth: 300 }}>
      <CardMedia
        component="img"
        image={defaultSprite}
        alt={name}
        onClick={handleOpenDetails}
      />
      <CardContent
        onClick={handleOpenDetails}
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
          <PokemonTypeList types={types} />
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
};
