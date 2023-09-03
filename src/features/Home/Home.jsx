import React from "react";

import { useData } from "../../store/MainContext";
import Title from "../../components/Title";

import Trending from "../../components/Trending";
import Content from "../../components/Content";

function Home() {
  const { data } = useData();

  return (
    <>
      <Title>Recommended for you</Title>
      <Trending />
      {data.map((content, index) => {
        return <Content index={index} key={content.title} data={content} />;
      })}
    </>
  );
}

export default Home;
