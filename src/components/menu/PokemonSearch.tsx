import { Autocomplete, TextField } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";

import { API_URL_POKEMON } from "routes";

export const PokemonSearch = ({ getPokemon }: any) => {
  const [pokemons, setPokemons]: any = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState<string | null>(null);

  useEffect(() => {
    getPokemons();
  }, []);

  const getPokemons = async () => {
    const maxPokemons = 1126;

    await axios
      .get(`${API_URL_POKEMON}?limit=${maxPokemons}`)
      .then(res => {
        setPokemons(res.data.results.map((p: any) => p.name.charAt(0).toUpperCase() + p.name.slice(1)));
      })
      .catch(error => console.log(error));
  };

  const onSearchPokemon = (event: object, value: string | null) => {
    setSelectedPokemon(value);
    getPokemon(value);
  };

  return (
    <Autocomplete
      disablePortal
      id="search"
      options={pokemons}
      sx={{ width: 300 }}
      renderInput={params => <TextField {...params} label="Search pokemon" />}
      value={selectedPokemon}
      onChange={onSearchPokemon}
    />
  );
};
