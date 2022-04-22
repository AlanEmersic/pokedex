import { useState, useEffect } from "react";
import PokemonList from "./PokemonList";
import axios from "axios";
import MenuNavigation from "./MenuNavigation";
import MenuBar from "./MenuBar";
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

  const getPokemons = async () => {
    setLoading(true);
    let cancel: any = null;

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
      getPokemons();
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

  return (
    <ThemeProvider theme={theme}>
      <Paper>
        <MenuBar selectType={selectType} />
        <PokemonList pokemons={pokemons} isloading={loading} />
        {allType && <MenuNavigation goToPage={goToPage} />}
      </Paper>
    </ThemeProvider>
  );
}

export default App;
