import { useCallback, useEffect } from "react";
import { options } from "../utils/Constant";
import { useDispatch, useSelector } from "react-redux";
import {
  setNowPlayingList,
  setPopularMoviesList,
  setTopRatedList,
  setUpComingList,
} from "../store/movieSlice";

const useMovieFetch = () => {
  const movieUrls = ["now_playing", "popular", "top_rated", "upcoming"];
  const dispatch = useDispatch();
  const movies = useSelector((store) => store.movieData);
  const movieData = useCallback(async () => {
    if (
      movies.nowPlayingList ||
      movies.popularMoviesList ||
      movies.topRatedList ||
      movies.upComingList
    )
      return;
    try {
      const fetchMovies = movieUrls.map(async (category) => {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${category}?language=en-US&page=1`,
          options
        );
        const data = await response.json();
        return { category, data: data.results };
      });
      const results = await Promise.all(fetchMovies);
      results.forEach(({ category, data }) => {
        switch (category) {
          case "now_playing":
            dispatch(setNowPlayingList(data));
            break;
          case "popular":
            dispatch(setPopularMoviesList(data));
            break;
          case "top_rated":
            dispatch(setTopRatedList(data));
            break;
          case "upcoming":
            dispatch(setUpComingList(data));
            break;

          default:
            console.error("Unknown category: ", category);
        }
      });
    } catch (error) {
      console.error("Something Wrong in MovieFetch hook", error);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, movies]);
  useEffect(() => {
    movieData();
  }, [movieData]);
};

export default useMovieFetch;
