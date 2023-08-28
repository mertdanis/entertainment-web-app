import React from "react";

import { useData } from "../../store/MainContext";
import Title from "../../components/Title";

import Trending from "../../components/Trending";

function Home() {
  const { data } = useData();

  return (
    <div>
      <Trending />
      <Title>Recommended for you</Title>
      {data.map((content) => {
        return <Content key={content.title} data={content} />;
      })}
    </div>
  );
}

function Content({ data }) {
  const { title, year, category, rating, thumbnail } = data;

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

export default Home;
