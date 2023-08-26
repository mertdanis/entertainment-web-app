import React from "react";

import { useData } from "../../store/MainContext";
import Title from "../../components/Title";

function BookMarked() {
  const { data } = useData();

  const BookMarkedData = data.filter((item) => {
    if (item.isBookmarked) {
      return item;
    }
  });

  return BookMarkedData.map((content) => {
    return <BookMarkedContent key={content.title} content={content} />;
  });
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
