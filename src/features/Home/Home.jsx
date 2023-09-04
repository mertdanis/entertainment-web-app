import React from "react";

import { useData } from "../../store/MainContext";
import Title from "../../components/Title";

import Trending from "../../components/Trending";
import Content from "../../components/Content";
import Input from "../../components/Input";
import PlayButton from "../../components/PlayButton";

function Home() {
  const { data } = useData();

  return (
    <>
      <Input />
      <Trending />

      <Title>Recommended for you</Title>
      <div className="grid grid-cols-6 gap-y-[32px] gap-x-6">
        {data.map((content, index) => {
          return <Content index={index} key={content.title} data={content} />;
        })}
      </div>
    </>
  );
}

export default Home;
