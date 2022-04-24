import { Autocomplete, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";

export default function PokemonSearch({ getPokemon }: any) {
  const [pokemons, setPokemons]: any = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState<string | null>(null);

  useEffect(() => {
    getPokemons();
  }, []);

  const getPokemons = async () => {
    let cancel: any = null;
    const maxPokemons = 1126;

    await axios
      .get(`https://pokeapi.co/api/v2/pokemon?limit=${maxPokemons}`, {
        cancelToken: new axios.CancelToken((ct) => {
          cancel = ct;
        }),
      })
      .then((res) => {
        setPokemons(
          res.data.results.map(
            (p: any) => p.name.charAt(0).toUpperCase() + p.name.slice(1)
          )
        );
      })
      .catch((error) => console.log(error));

    return () => {
      cancel();
    };
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
      renderInput={(params) => <TextField {...params} label="Search pokemon" />}
      value={selectedPokemon}
      onChange={onSearchPokemon}
    />
  );
}
