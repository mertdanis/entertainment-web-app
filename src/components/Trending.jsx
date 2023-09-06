import { useData } from "../store/MainContext";
import Title from "./Title";
import TrendingContent from "../features/Trending/TrendingContent";

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
      <div className="grid grid-cols-3   gap-6  ">
        {TrendingData.map((content) => {
          return <TrendingContent data={content} key={content.title} />;
        })}
      </div>
    </>
  );
}

export default Trending;
