import Header from "./Header";
import useMovieFetch from "../hooks/useMovieFetch";
import { useSelector } from "react-redux";
import BrowseHero from "./BrowseHero";
import BrowseRest from "./BrowseRest";

const Browse = () => {
  useMovieFetch();
  const nowPlayingMovies = useSelector(
    (store) => store.movieData.nowPlayingList
  );
  const movieList = useSelector((store) => store.movieData);
  if (!nowPlayingMovies) return;
  const { original_title, overview, id } = nowPlayingMovies[0];
  return (
    <div className="h-screen w-full">
      <Header />
      <BrowseHero title={original_title} overview={overview} movieId={id} />
      <BrowseRest movieData={movieList} />
     
    </div>
  );
};
export default Browse;
