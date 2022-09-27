import React from "react";
import SingleAnime from "./SingleAnime";

const Main = ({ animeList }) => {
  return (
    <main className="main-content">
      {animeList.map((anime) => {
        return <SingleAnime anime={anime} key={anime.mal_id} />;
      })}
    </main>
  );
};

export default Main;
