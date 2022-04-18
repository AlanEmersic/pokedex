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

  return isloading ? (
    <Skeleton variant="rectangular" height={345} sx={{ maxHeight: 345 }} />
  ) : (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia component="img" image={defaultSprite} alt={name} />
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
      <CardActions>
        <Button size="small">More information</Button>
      </CardActions>
    </Card>
  );
}
