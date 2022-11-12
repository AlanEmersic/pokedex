import { api } from "../util/api";
import { PokemonList } from "../../models";

export const getPokemonsPage = async (
  offset: number,
  limit: number
): Promise<PokemonList[]> => {
  const url = `?offset=${offset}&limit=${limit}`;
  const response = await api.get(url);
  const pokemons = response.data.results;

  return pokemons;
};
