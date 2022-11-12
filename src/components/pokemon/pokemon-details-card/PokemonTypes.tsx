import { Stack, Typography } from "@mui/material";

import { PokemonTypeList } from "../..";

export const PokemonTypes = ({ types }: any) => {
  return (
    <Stack
      direction="row"
      spacing={1}
      sx={{
        justifyContent: "center",
      }}
    >
      <Typography
        gutterBottom
        variant="h5"
        component="div"
        sx={{ fontWeight: "bold" }}
      >
        Type
      </Typography>
      <PokemonTypeList types={types} />
    </Stack>
  );
};
