import { useState, useEffect } from "react";
import Main from "./components/Main";
import SearchForm from "./components/SearchForm";

function App() {
  const [animeList, setAnimeList] = useState([]);
  const [search, setSearch] = useState("code geass");

  const fetchAnime = async (query) => {
    const response = await fetch(
      `https://api.jikan.moe/v4/anime?q=${query}&order_by=members&sort=desc&limit=25`
    );
    const data = await response.json();
    console.log(data.data);
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
      />
      <main className="wrapper">
        <Main animeList={animeList} />
      </main>
    </>
  );
}

export default App;
