import { useState, useEffect } from "react";
import PokemonList from "./PokemonList";
import axios from "axios";
import Pagination from "./Pagination";
import MenuBar from "./MenuBar";

import theme from "./utils/theme";

import { Paper, Skeleton, ThemeProvider } from "@mui/material";

function App() {
  const [pokemons, setPokemons]: any = useState([]);
  const [currentPageUrl, setCurrentPageUrl] = useState(
    "https://pokeapi.co/api/v2/pokemon"
  );
  const [nextPageUrl, setNextPageUrl] = useState("");
  const [previousPageUrl, setPreviousPageUrl] = useState("");
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
        setNextPageUrl(res.data.next);
        setPreviousPageUrl(res.data.previous);

        return res.data.results;
      })
      .then(async (data) => {
        const promises = await data.map((p: any) => axios.get(p.url));

        await Promise.all([...promises]).then((res) =>
          setPokemons(res.map((r) => r.data))
        );
      })
      .then(() => {
        setLoading(false);
      })
      .catch((error) => console.log(error));

    return () => {
      cancel();
    };
  };

  const goToNextPage = () => {
    setCurrentPageUrl(nextPageUrl);
  };

  const goToPreviousPage = () => {
    setCurrentPageUrl(previousPageUrl);
  };

  return (
    <ThemeProvider theme={theme}>
      <Paper>
        <MenuBar />
        <PokemonList pokemons={pokemons} isloading={loading} />
        <Pagination
          goToNextPage={nextPageUrl ? goToNextPage : null}
          goToPreviousPage={previousPageUrl ? goToPreviousPage : null}
        />
      </Paper>
    </ThemeProvider>
  );
}

export default App;
