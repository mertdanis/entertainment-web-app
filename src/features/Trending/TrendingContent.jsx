import { useState } from "react";
import PlayButton from "../../components/PlayButton";
import { useData } from "../../store/MainContext";

function TrendingContent({ data }) {
  const [play, setPlay] = useState(null);

  const { dispatch } = useData();
  const { title, year, category, rating, thumbnail, isBookmarked } = data;

  return (
    <div
      className="relative w-fit cursor-pointer  transition duration-700 "
      onMouseEnter={() => setPlay(true)}
      onMouseLeave={() => setPlay(false)}
    >
      <img
        className={`rounded-t-[8px] object-cover w-[470px] h-[230px] ${
          play ? "opacity-50" : ""
        }`}
        src={thumbnail?.trending.large}
        alt={title}
      />
      <div
        className={`absolute  transition-all  top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]  rounded-2xl     ${
          play ? "" : "hidden"
        }`}
      >
        <PlayButton />
      </div>
      <div
        className="absolute top-5 right-5   "
        onClick={() => {
          dispatch({
            type: "toggleBookMark",
            payload: data,
          });
        }}
      >
        <div className=" relative cursor-pointer opacity-50   w-[32px] h-[32px] rounded-[32px]   bg-mainGreyishBlue"></div>
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
      <div className="flex flex-col absolute bottom-3 left-7  justify-center my-2 ">
        <ul className="flex gap-6 text-bodyM font-light opacity-75 text-mainWhite">
          <li>{year}</li>

          <li className="flex gap-2 items-center">
            <img
              className=" w-[12px] h-[12px]"
              src={`${
                category === "Movie"
                  ? "/public/assets/imgs/icon-category-movie.svg"
                  : "/public/assets/imgs/icon-category-tv.svg"
              }`}
              alt={`${category} logo`}
            />
            {category}
          </li>
          <li>{rating}</li>
        </ul>
        <p className="font-medium text-headingM text-mainWhite">{title}</p>
      </div>
    </div>
  );
}

export default TrendingContent;
