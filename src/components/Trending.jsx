import { useData } from "../store/MainContext";
import Content from "./Content";
import Title from "./Title";

function Trending() {
  const { data } = useData();

  const TrendingData = data.filter((item) => {
    if (item.isTrending) {
      return item;
    }
  });

  return (
    <>
      <Title>Trending</Title>
      <div className="grid grid-cols-3 gap-3 ">
        {TrendingData.map((content) => {
          return <TrendingDIV data={content} key={content.title} />;
        })}
      </div>
    </>
  );
}

function TrendingDIV({ data }) {
  const { dispatch } = useData();
  const { title, year, category, rating, thumbnail, isBookmarked } = data;

  return (
    <div className="relative cursor-pointer hover:opacity-90 transition duration-700 hover:bg-black">
      <img
        className="rounded-[8px]"
        src={thumbnail?.trending.large}
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
      <div className="flex flex-col   justify-center my-2">
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

export default Trending;
