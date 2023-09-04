import React, { useState } from "react";

import { useData } from "../../store/MainContext";
import Title from "../../components/Title";
import Input from "../../components/Input";
import Content from "../../components/Content";

function Movies() {
  const [filterMovie, setFilterMovie] = useState("");

  const { data } = useData();

  const moviesData = data.filter((movie) => {
    if (movie.category === "Movie") {
      return movie;
    }
  });

  return (
    <>
      <Input
        onChange={(e) => {
          setFilterMovie(e.target.value);
        }}
      />

      <Title>Movies</Title>
      <div className="grid grid-cols-6 gap-y-[32px] gap-x-6">
        {moviesData
          .filter((item) => {
            return filterMovie.toLocaleLowerCase() === ""
              ? item
              : item.title.toLocaleLowerCase().includes(filterMovie);
          })
          .map((movie, index) => {
            return <Content key={movie.title} index={index} data={movie} />;
          })}
      </div>
    </>
  );
}

export default Movies;
