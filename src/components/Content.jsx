import React from "react";
import { useData } from "../store/MainContext";

function Content({ data, index }) {
  const { title, year, category, rating, thumbnail, isBookmarked } = data;

  const { dispatch } = useData();

  return (
    <div className="">
      <div className="relative cursor-pointer w-fit">
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
      <div className="flex flex-col  justify-center ">
        <div className="  flex gap-6 text-bodyS font-light opacity-75 leading-6 text-mainWhite">
          <p>{year}</p>
          <p>{category}</p>
          <p>{rating}</p>
        </div>
        <p className="text-mainWhite text-headingXS font-medium">{title}</p>
      </div>
    </div>
  );
}

export default Content;
