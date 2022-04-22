export const NORMAL = "normal";
export const FIRE = "fire";
export const WATER = "water";
export const GRASS = "grass";
export const ELECTRIC = "electric";
export const ICE = "ice";
export const FIGHTING = "fighting";
export const POISON = "poison";
export const GROUND = "ground";
export const FLYING = "flying";
export const PSYCHIC = "psychic";
export const BUG = "bug";
export const ROCK = "rock";
export const GHOST = "ghost";
export const DARK = "dark";
export const DRAGON = "dragon";
export const STEEL = "steel";
export const FAIRY = "fairy";

export const TYPES = [
  NORMAL,
  FIRE,
  WATER,
  GRASS,
  ELECTRIC,
  ICE,
  FIGHTING,
  POISON,
  GROUND,
  FLYING,
  PSYCHIC,
  BUG,
  ROCK,
  GHOST,
  DARK,
  DRAGON,
  STEEL,
  FAIRY,
];

export default function TypeColor(type: string) {
  switch (type) {
    case NORMAL:
      return "#7F8587";
    case FIRE:
      return "#FD7D24";
    case WATER:
      return "#9BC4DF";
    case GRASS:
      return "#8FBC49";
    case ELECTRIC:
      return "#BFAB29";
    case ICE:
      return "#51C4E7";
    case FIGHTING:
      return "#D56723";
    case POISON:
      return "#B97FC9";
    case GROUND:
      return "#AB9842";
    case FLYING:
      return "#BDB9B8";
    case PSYCHIC:
      return "#F366B9";
    case BUG:
      return "#729F3F";
    case ROCK:
      return "#A38C21";
    case GHOST:
      return "#7B62A3";
    case DARK:
      return "#707070";
    case DRAGON:
      return "#F16E57";
    case STEEL:
      return "#9EB7B8";
    case FAIRY:
      return "#D685BE";

    default:
      return "#595959";
  }
}
