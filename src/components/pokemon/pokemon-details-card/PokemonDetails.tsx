import { Box, Card, CardContent, Fade, Modal, Backdrop } from "@mui/material";

import { Pokemon, PokemonStat } from "../../../models";
import { TYPES } from "../../../utils";
import {
  PokemonAbilities,
  PokemonImage,
  PokemonName,
  PokemonSize,
  PokemonStats,
  PokemonTypes,
} from "../..";

const boxStyle = {
  position: "absolute",
  width: "550px",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  color: "#fff",
  bgcolor: "background.paper",
  border: "2px solid #fff",
  boxShadow: 24,
  p: 4,
};

const contentStyle = {
  textAlign: "center",
};

type PokemonDetailsProps = {
  pokemon: Pokemon;
  openDetails: boolean;
  handleCloseDetails: () => void;
};

export const PokemonDetails = ({
  pokemon,
  openDetails,
  handleCloseDetails,
}: PokemonDetailsProps) => {
  const id = "#" + ("000" + pokemon.id).slice(-3);
  const name = pokemon.name;
  const height = pokemon.height / 10;
  const weight = pokemon.weight / 10;
  const types = pokemon.types.map((t: any) => {
    return TYPES.includes(t.type.name)
      ? t.type.name.charAt(0).toUpperCase() + t.type.name.slice(1)
      : null;
  });

  const stats: PokemonStat[] = pokemon.stats;

  const abilities = pokemon.abilities.map((a: any) => {
    return a.ability.name.charAt(0).toUpperCase() + a.ability.name.slice(1);
  });

  const defaultSprite = pokemon.sprites.front_default;

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={openDetails}
      onClose={handleCloseDetails}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={openDetails}>
        <Box sx={boxStyle}>
          <Card>
            <PokemonName name={name} id={id} />
            <PokemonImage defaultSprite={defaultSprite} name={name} />

            <CardContent sx={contentStyle}>
              <PokemonTypes types={types} />
              <PokemonSize height={height} weight={weight} />
              <PokemonAbilities abilities={abilities} />
              <PokemonStats stats={stats} />
            </CardContent>
          </Card>
        </Box>
      </Fade>
    </Modal>
  );
};
