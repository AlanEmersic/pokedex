import { Container, Grid } from "@mui/material";

import { Pokemon as PokemonModel } from "../../models";
import { Pokemon } from "./Pokemon";

type PokemonListProps = {
  pokemons: PokemonModel[];
  isloading: boolean;
};

export const PokemonList = ({
  pokemons,
  isloading = true,
}: PokemonListProps) => {
  return (
    <Container>
      <Grid container spacing={5} mb={15}>
        {pokemons &&
          pokemons.map((p: any, index: number) => {
            return (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Pokemon pokemon={p} isloading={isloading} />
              </Grid>
            );
          })}
      </Grid>
    </Container>
  );
};
