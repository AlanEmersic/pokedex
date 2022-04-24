import { useState, useEffect } from "react";
import PokemonList from "./components/pokemon/PokemonList";
import axios from "axios";
import MenuNavigation from "./components/menu/MenuNavigation";
import MenuBar from "./components/menu/MenuBar";
import theme from "./utils/theme";
import { Paper, ThemeProvider } from "@mui/material";

function App() {
  const [pokemons, setPokemons]: any = useState([]);
  const [allType, setAllType] = useState(true);
  const [currentPageUrl, setCurrentPageUrl] = useState(
    "https://pokeapi.co/api/v2/pokemon"
  );
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPokemons();
  }, [currentPageUrl]);

  const getPokemons = async (pageUrl: string | null = null) => {
    setLoading(true);
    let cancel: any = null;

    if (pageUrl !== null) {
      setCurrentPageUrl(pageUrl);
    }

    await axios
      .get(currentPageUrl, {
        cancelToken: new axios.CancelToken((ct) => {
          cancel = ct;
        }),
      })
      .then((res) => {
        return res.data.results;
      })
      .then(async (data) => {
        const promises = await data.map((p: any) => axios.get(p.url));

        await Promise.all([...promises]).then((res) => {
          setPokemons(res.map((r) => r.data));
        });
      })
      .then(() => {
        setAllType(true);
        setLoading(false);
      })
      .catch((error) => console.log(error));

    return () => {
      cancel();
    };
  };

  const goToPage = (number: number) => {
    const limit = 20;
    const offset = (number - 1) * limit;

    setCurrentPageUrl(
      `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
    );
  };

  const selectType = async (type: string) => {
    if (type === "ALL") {
      getPokemons("https://pokeapi.co/api/v2/pokemon");
      return;
    }

    setLoading(true);
    setAllType(false);
    let cancel: any = null;

    await axios
      .get(`https://pokeapi.co/api/v2/type/${type.toLowerCase()}`, {
        cancelToken: new axios.CancelToken((ct) => {
          cancel = ct;
        }),
      })
      .then((res) => {
        return res.data.pokemon;
      })
      .then(async (data) => {
        const promises = await data.map((p: any) => axios.get(p.pokemon.url));

        await Promise.all([...promises]).then((res) => {
          setPokemons(res.map((r) => r.data));
        });
      })
      .then(() => {
        setLoading(false);
      })
      .catch((error) => console.log(error));

    return () => {
      cancel();
    };
  };

  const getPokemon = async (pokemon: string) => {
    if (pokemon === null) {
      getPokemons();
      return;
    }

    let cancel: any = null;
    setLoading(true);

    await axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokemon.toLowerCase()}`, {
        cancelToken: new axios.CancelToken((ct) => {
          cancel = ct;
        }),
      })
      .then((res) => {
        setPokemons([res.data]);
      })
      .then(() => {
        setLoading(false);
      })
      .catch((error) => console.log(error));

    return () => {
      cancel();
    };
  };

  return (
    <ThemeProvider theme={theme}>
      <Paper variant="outlined">
        <MenuBar selectType={selectType} getPokemon={getPokemon} />
        <PokemonList pokemons={pokemons} isloading={loading} />
        {allType && <MenuNavigation goToPage={goToPage} />}
      </Paper>
    </ThemeProvider>
  );
}

export default App;
