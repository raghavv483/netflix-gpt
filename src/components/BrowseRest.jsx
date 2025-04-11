import PropTypes from "prop-types";
import MovieCards from "./MovieCards";
const BrowseRest = ({ movieData }) => {
  const nowPlaying = movieData.nowPlayingList;
  const popularList = movieData.popularMoviesList;
  const topRatedList = movieData.topRatedList;
  const upComingList = movieData.upComingList;
  return (
    <div className=" min-h-screen bg-black pb-10">
      <div className="relative z-20 -mt-48 sm:-mt-36 ">
        <MovieCards movieData={nowPlaying} title={"Now Playing"} />
      </div>
      <MovieCards movieData={popularList} title={"Trending"} />
      <MovieCards movieData={topRatedList} title={"Top Rated"} />
      <MovieCards movieData={upComingList} title={"Up Coming"} />
    </div>
  );
};

BrowseRest.propTypes = {
  movieData: PropTypes.shape({
    nowPlayingList: PropTypes.array.isRequired,
    popularMoviesList: PropTypes.array.isRequired,
    topRatedList: PropTypes.array.isRequired,
    upComingList: PropTypes.array.isRequired,
  }).isRequired,
};

export default BrowseRest;
