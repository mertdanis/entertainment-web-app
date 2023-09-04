import React, { useState } from "react";

import { useData } from "../../store/MainContext";
import Title from "../../components/Title";
import Input from "../../components/Input";
import Content from "../../components/Content";

function BookMarked() {
  const { data } = useData();

  const [filterBookMarked, setFilterBookMarked] = useState("");

  const BookMarkedData = data.filter((item) => {
    if (item.isBookmarked) {
      return item;
    }
  });

  return (
    <>
      <Input
        onChange={(e) => {
          setFilterBookMarked(e.target.value);
        }}
      />
      <Title>BookMarked</Title>

      <div className="grid grid-cols-6 gap-y-[32px] gap-x-6">
        {BookMarkedData.filter((item) => {
          return filterBookMarked.toLocaleLowerCase() === ""
            ? item
            : item.title.toLocaleLowerCase().includes(filterBookMarked);
        }).map((movie, index) => {
          return <Content key={movie.title} index={index} data={movie} />;
        })}
      </div>
    </>
  );
}

export default BookMarked;
