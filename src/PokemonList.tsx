import { Container, Grid } from "@mui/material";
import Pokemon from "./Pokemon";

export default function PokemonList({ pokemons, isloading = true }: any) {
  return (
    <Container sx={{ padding: "3rem 0" }}>
      <Grid container spacing={5}>
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
}
