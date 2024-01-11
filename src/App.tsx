import { Paper, ThemeProvider } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";

import { getAllPokemons, getPokemon } from "api";
import { MenuBar, MenuNavigation, PokemonList } from "components";
import { Pokemon, PokemonList as PokemonListModel } from "models";
import { API_URL_POKEMON, API_URL_TYPE } from "routes";
import { ALL, theme } from "utils";

function App() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [allType, setAllType] = useState(true);
  const [currentPageUrl, setCurrentPageUrl] = useState<string>(API_URL_POKEMON);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPokemonsRequest();
  }, [currentPageUrl]);

  const getPokemonsRequest = async (pageUrl: string | null = null) => {
    setLoading(true);

    if (pageUrl !== null) {
      setCurrentPageUrl(pageUrl);
    }

    getAllPokemons(currentPageUrl)
      .then(async data => {
        const promises = data.map((pokemonList: PokemonListModel) => {
          const url = pokemonList.url.replace(API_URL_POKEMON + "/", "");
          return getPokemon(url);
        });

        await Promise.all([...promises]).then((pokemons: Pokemon[]) => setPokemons(pokemons));
      })
      .then(() => {
        setAllType(true);
        setLoading(false);
      })
      .catch(error => console.log(error));
  };

  const goToPage = (number: number) => {
    const limit = 20;
    const offset = (number - 1) * limit;
    const url = `${API_URL_POKEMON}?offset=${offset}&limit=${limit}`;

    setCurrentPageUrl(url);
  };

  const selectType = async (type: string) => {
    if (type.toLowerCase() === ALL.toLowerCase()) {
      getPokemonsRequest(API_URL_POKEMON);
      return;
    }

    setLoading(true);
    setAllType(false);

    await axios
      .get(`${API_URL_TYPE}/${type.toLowerCase()}`)
      .then(res => {
        return res.data.pokemon;
      })
      .then(async data => {
        const promises = await data.map((d: any) => axios.get(d.pokemon.url));

        await Promise.all([...promises]).then(res => {
          setPokemons(res.map((r: any) => r.data));
        });
      })
      .then(() => {
        setLoading(false);
      })
      .catch(error => console.log(error));
  };

  const getPokemonRequest = async (pokemon: string) => {
    if (pokemon === null) {
      getPokemonsRequest();
      return;
    }

    setLoading(true);
    setAllType(false);

    getPokemon(pokemon)
      .then(pokemon => {
        setPokemons([pokemon]);
      })
      .then(() => {
        setLoading(false);
      })
      .catch(error => console.log(error));
  };

  return (
    <ThemeProvider theme={theme}>
      <Paper variant="outlined">
        <MenuBar selectType={selectType} getPokemon={getPokemonRequest} />
        <PokemonList pokemons={pokemons} isloading={loading} />
        {allType && <MenuNavigation goToPage={goToPage} />}
      </Paper>
    </ThemeProvider>
  );
}

export default App;
