import { Chip } from "@mui/material";

import { TypeColor } from "../../utils";

export const PokemonTypeList = ({ types }: any) => {
  return (
    <>
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
    </>
  );
};
