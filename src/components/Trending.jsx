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
  const { title, year, category, rating, thumbnail } = data;

  return (
    <div>
      <img className="" src={thumbnail?.trending.large} alt={title} />
      <div className="flex flex-col  justify-center">
        <div className="flex gap-6 text-bodyM font-light opacity-75 text-mainWhite">
          <p>{year}</p>
          <p>{category}</p>
          <p>{rating}</p>
        </div>
        <p className="font-medium text-headingM text-mainWhite">{title}</p>
      </div>
    </div>
  );
}

export default Trending;
