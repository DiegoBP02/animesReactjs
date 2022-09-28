import React from "react";
import SingleAnime from "./SingleAnime";

const Main = ({ animeList, isLoading }) => {
  if (isLoading) {
    return <div className="loader"></div>;
  }
  return (
    <main className="main-content">
      {animeList.map((anime) => {
        return <SingleAnime anime={anime} key={anime.mal_id} />;
      })}
    </main>
  );
};

export default Main;
