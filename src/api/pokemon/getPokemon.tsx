import { api } from "../util/api";
import { Pokemon } from "../../models";

export const getPokemon = async (
  idOrName: number | string
): Promise<Pokemon> => {
  const url = `/${idOrName.toString().toLowerCase()}`;
  const response = await api.get(url);
  const pokemon = response.data;
  return pokemon;
};
