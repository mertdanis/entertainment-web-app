import React from "react";

import { useData } from "../../store/MainContext";
import Title from "../../components/Title";

function Movies() {
  const { data } = useData();

  const moviesData = data.filter((movie) => {
    if (movie.category === "Movie") {
      return movie;
    }
  });

  return (
    <div>
      <Title>Movies</Title>
      {moviesData.map((movie) => {
        return <MovieContent key={movie.title} movie={movie} />;
      })}
    </div>
  );
}

function MovieContent({ movie }) {
  const { title, year, category, rating, thumbnail } = movie;

  return (
    <div className=" ">
      <img src={thumbnail?.regular.small} alt={title} />
      <div className="flex flex-col  justify-center">
        <div className="flex gap-6">
          <p>{year}</p>
          <p>{category}</p>
          <p>{rating}</p>
        </div>
        <p>{title}</p>
      </div>
    </div>
  );
}

export default Movies;
