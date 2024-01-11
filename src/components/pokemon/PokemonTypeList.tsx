import { Chip } from "@mui/material";

import { TypeColor } from "utils";

export const PokemonTypeList = ({ types }: any) => {
  return (
    <>
      {types?.map((t: string) => {
        return (
          <Chip
            key={t}
            label={t}
            variant="outlined"
            sx={{
              backgroundColor: TypeColor(t.toLowerCase()),
              fontSize: "1.3rem",
            }}
          />
        );
      })}
    </>
  );
};
