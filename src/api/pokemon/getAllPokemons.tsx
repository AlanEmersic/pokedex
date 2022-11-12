import { api } from "../util/api";
import { PokemonList } from "../../models";

export const getAllPokemons = async (url: string): Promise<PokemonList[]> => {
  const response = await api.get(url);
  const pokemons = response.data.results;

  return pokemons;
};
