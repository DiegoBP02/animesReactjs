import { useState, useEffect } from "react";
import Main from "./components/Main";
import SearchForm from "./components/SearchForm";

function App() {
  const [animeList, setAnimeList] = useState([]);
  const [search, setSearch] = useState("code geass");
  const [isLoading, setIsLoading] = useState(true);

  const fetchAnime = async (query) => {
    setIsLoading(true);
    const response = await fetch(
      `https://api.jikan.moe/v4/anime?q=${query}&order_by=members&sort=desc&limit=25`
    );
    const data = await response.json();
    setIsLoading(false);
    setAnimeList(data.data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchAnime(search);
  };

  useEffect(() => {
    fetchAnime(search);
  }, []);

  return (
    <>
      <SearchForm
        handleSubmit={handleSubmit}
        search={search}
        setSearch={setSearch}
        animeList={animeList}
      />
      <main className="wrapper">
        <Main animeList={animeList} isLoading={isLoading} />
      </main>
    </>
  );
}

export default App;
