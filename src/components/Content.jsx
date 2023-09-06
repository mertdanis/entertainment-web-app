import React, { useState } from "react";
import { useData } from "../store/MainContext";
import PlayButton from "./PlayButton";

function Content({ data, index }) {
  const { title, year, category, rating, thumbnail, isBookmarked } = data;

  const { dispatch } = useData();

  const [play, setPlay] = useState(null);

  return (
    <div className="relative">
      <div
        className="relative cursor-pointer w-fit"
        onMouseEnter={() => setPlay(true)}
        onMouseLeave={() => setPlay(false)}
      >
        <img
          className="h-[174px] w-[280px]  rounded-[8px] transition  duration-500 cursor-pointer hover:opacity-70 "
          src={thumbnail?.regular.large}
          alt={title}
        />
        <div
          className="absolute top-5 right-5   "
          onClick={() => {
            dispatch({
              type: "toggleBookMark",
              payload: data,
            });
          }}
        >
          <div className=" relative cursor-pointer opacity-50  w-[32px] h-[32px] rounded-[32px]  bg-mainGreyishBlue"></div>
          <img
            className="absolute top-2.5 left-2.5"
            src={`${
              isBookmarked
                ? "/public/assets/imgs/icon-bookmark-full.svg"
                : "/public/assets/imgs/icon-bookmark-empty.svg"
            }`}
            alt="bookmark empty"
          />
        </div>
      </div>

      <div
        className={`absolute  transition-all  top-[30%] left-[25%] rounded-2xl    ${
          play ? "" : "hidden"
        }`}
      >
        <PlayButton />
      </div>

      <div className="flex flex-col  justify-center ">
        <ul className=" mt-1 list-disc list-inside	items-center 	flex gap-2 text-bodyS font-light opacity-75 leading-6 text-mainWhite">
          <li className="list-none">{year}</li>

          <li className="flex items-center gap-2">
            <img
              className=" w-[12px] h-[12px]"
              src={`${
                category === "Movie"
                  ? "/public/assets/imgs/icon-category-movie.svg"
                  : "/public/assets/imgs/icon-category-tv.svg"
              }`}
              alt={`${category} logo`}
            />
            <span>{category}</span>
          </li>
          <li>{rating}</li>
        </ul>
        <p className="text-mainWhite text-headingXS font-medium">{title}</p>
      </div>
    </div>
  );
}

export default Content;
