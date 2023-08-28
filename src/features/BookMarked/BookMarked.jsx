import React, { useState } from "react";

import { useData } from "../../store/MainContext";
import Title from "../../components/Title";
import Input from "../../components/Input";

function BookMarked() {
  const { data } = useData();

  const [filterBookMarked, setFilterBookMarked] = useState("");

  const BookMarkedData = data.filter((item) => {
    if (item.isBookmarked) {
      return item;
    }
  });

  return (
    <div>
      <Input
        onChange={(e) => {
          setFilterBookMarked(e.target.value);
        }}
      />
      <Title>BookMarked</Title>
      {BookMarkedData.filter((item) => {
        return filterBookMarked.toLocaleLowerCase() === ""
          ? item
          : item.title.toLocaleLowerCase().includes(filterBookMarked);
      }).map((movie) => {
        return <BookMarkedContent key={movie.title} content={movie} />;
      })}
    </div>
  );
}

function BookMarkedContent({ content }) {
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

export default BookMarked;
