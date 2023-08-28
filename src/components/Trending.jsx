import Title from "./Title";

import { useData } from "../store/MainContext";

function Trending() {
  const { data } = useData();

  const TrendingData = data.filter((item) => {
    if (item.isTrending) {
      return item;
    }
  });

  {
    TrendingData.map((content) => {
      return <TrendingContent key={content.title} content={content} />;
    });
  }
}

const TrendingContent = ({ content }) => {
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
};

export default Trending;
