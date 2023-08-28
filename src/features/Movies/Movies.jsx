import React, { useState } from "react";

import { useData } from "../../store/MainContext";
import Title from "../../components/Title";
import Input from "../../components/Input";

function Movies() {
  const [filterMovie, setFilterMovie] = useState("");

  const { data } = useData();

  const moviesData = data.filter((movie) => {
    if (movie.category === "Movie") {
      return movie;
    }
  });

  return (
    <div>
      <Input
        onChange={(e) => {
          setFilterMovie(e.target.value);
        }}
      />
      <Title>Movies</Title>
      {moviesData
        .filter((item) => {
          return filterMovie.toLocaleLowerCase() === ""
            ? item
            : item.title.toLocaleLowerCase().includes(filterMovie);
        })
        .map((movie) => {
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
