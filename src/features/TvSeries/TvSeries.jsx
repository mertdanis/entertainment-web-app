import React, { useState } from "react";

import { useData } from "../../store/MainContext";
import Title from "../../components/Title";
import Input from "../../components/Input";

function TvSeries() {
  const { data } = useData();

  const [filterSeries, setFilterSeries] = useState("");

  const tvSeries = data.filter((val) => {
    if (val.category === "TV Series") {
      return val;
    }
  });

  return (
    <div>
      <Input
        onChange={(e) => {
          setFilterSeries(e.target.value);
        }}
      />
      <Title>Tv Series</Title>
      {tvSeries
        .filter((item) => {
          return filterSeries.toLocaleLowerCase() === ""
            ? item
            : item.title.toLocaleLowerCase().includes(filterSeries);
        })
        .map((content) => {
          return <TvSeriesContent key={content.title} content={content} />;
        })}
    </div>
  );
}

function TvSeriesContent({ content }) {
  const { title, year, category, rating, thumbnail } = content;

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

export default TvSeries;
