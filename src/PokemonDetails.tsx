import {
  Box,
  Modal,
  Typography,
  Fade,
  Card,
  CardMedia,
  CardContent,
  Stack,
  Chip,
} from "@mui/material";

import Backdrop from "@mui/material/Backdrop";
import PokemonStats from "./PokemonStats";
import TypeColor, { TYPES } from "./utils/types";

const style = {
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

export default function PokemonDetails({
  pokemon,
  openDetails,
  handleCloseDetails,
}: any) {
  const id = "#" + ("000" + pokemon.id).slice(-3);
  const name = pokemon.name;
  const height = pokemon.height / 10;
  const weight = pokemon.weight / 10;
  const types = pokemon.types.map((t: any) => {
    return TYPES.includes(t.type.name)
      ? t.type.name.charAt(0).toUpperCase() + t.type.name.slice(1)
      : null;
  });

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
        <Box sx={style}>
          <Card>
            <CardContent
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
                {name} {id}
              </Typography>
            </CardContent>
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
            <CardContent
              sx={{
                textAlign: "center",
              }}
            >
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

              <Stack
                direction="row"
                spacing={2}
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
                  Height: {height} m
                </Typography>

                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  sx={{ fontWeight: "bold" }}
                >
                  Weight: {weight} kg
                </Typography>
              </Stack>

              <Stack
                spacing={1}
                direction="row"
                margin="1rem 0"
                sx={{
                  justifyContent: "center",
                }}
              >
                <Typography
                  key={id}
                  gutterBottom
                  variant="h5"
                  component="div"
                  sx={{ textTransform: "capitalize", fontWeight: "bold" }}
                >
                  Abilities
                </Typography>
                {abilities &&
                  abilities.map((a: string, id: number) => {
                    return (
                      <Chip
                        key={id}
                        label={a}
                        variant="outlined"
                        sx={{
                          fontSize: "1.3rem",
                          backgroundColor: "#30A7D7",
                        }}
                      />
                    );
                  })}
              </Stack>

              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{ fontWeight: "bold" }}
              >
                Stats
              </Typography>
              <PokemonStats stats={pokemon.stats} />
            </CardContent>
          </Card>
        </Box>
      </Fade>
    </Modal>
  );
}
