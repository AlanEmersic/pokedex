import { Container, Grid } from "@mui/material";

import { Pokemon } from "components";
import { Pokemon as PokemonModel } from "models";

type PokemonListProps = {
  pokemons: PokemonModel[];
  isloading: boolean;
};

export const PokemonList = ({ pokemons, isloading = true }: PokemonListProps) => {
  return (
    <Container>
      <Grid container spacing={5} mb={15}>
        {pokemons?.map((p: any) => {
          return (
            <Grid item xs={12} sm={6} md={3} key={p.id}>
              <Pokemon pokemon={p} isloading={isloading} />
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};
