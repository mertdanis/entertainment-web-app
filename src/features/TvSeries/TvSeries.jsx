import React, { useState } from "react";

import { useData } from "../../store/MainContext";
import Title from "../../components/Title";
import Input from "../../components/Input";
import Content from "../../components/Content";
import Trending from "../../components/Trending";

function TvSeries() {
  const { data } = useData();

  const [filterSeries, setFilterSeries] = useState("");

  const tvSeries = data.filter((val) => {
    if (val.category === "TV Series") {
      return val;
    }
  });

  return (
    <>
      <Input
        onChange={(e) => {
          setFilterSeries(e.target.value);
        }}
      />

      <Title>Tv Series</Title>
      <div className="grid grid-cols-6 gap-y-[32px] gap-x-6">
        {tvSeries
          .filter((item) => {
            return filterSeries.toLocaleLowerCase() === ""
              ? item
              : item.title.toLocaleLowerCase().includes(filterSeries);
          })
          .map((content, index) => {
            return <Content data={content} index={index} key={content.id} />;
          })}
      </div>
    </>
  );
}

export default TvSeries;
