import { useEffect } from "react";
import { options } from "../utils/Constant";
import { useDispatch, useSelector } from "react-redux";
import { setMoviesTrailer } from "../store/movieSlice.js";
const useFetchTrailer = (movieId) => {
  const dispatch = useDispatch();
  const trailer = useSelector((store) => store.movieData.moviesTrailer);
  useEffect(() => {
    const fetchTrailer = async () => {
      if (trailer && trailer.length > 0) return;
      if (!movieId) return;
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}/videos`,
          options
        );
        const data = await response.json();
        const trailer = data.results.filter((item) => item.type === "Trailer");
        dispatch(setMoviesTrailer(trailer ? trailer[0] : data.results[0]));
      } catch (error) {
        console.error("Error inside get Trailer", error);
      }
    };
    if (movieId) {
      fetchTrailer();
    }
  }, [dispatch, movieId]);
  return trailer;
};

export default useFetchTrailer;
