import { bgImg } from "../utils/Constant";  
import Button from "./ui/Button";  
import { useRef, useState } from "react";  
import Header from "./Header";  
import gptMovieSearch from "../utils/gptMovieSearch";  
import { useDispatch, useSelector } from "react-redux";  
import MovieCards from "./MovieCards";  
import ShimmerMovieCards from "./ui/Shimmer";  

const Search = () => {  
  const [loading, setLoading] = useState(false);  
  const [error, setError] = useState(null);  
  const dispatch = useDispatch();  
  const inputval = useRef();  
  const movieData = useSelector((store) => store.movieData.gptMovies);  

  const handleSearch = async () => {  
    const searchText = inputval.current.value.trim();  
    if (searchText) {  
      setLoading(true);  
      setError(null);  
      try {  
        await gptMovieSearch(searchText, dispatch);  
      } catch (error) {  
        setError("Error in gathering response. Please try again.");  
      } finally {  
        setLoading(false);  
      }  
    } else {  
      alert("Enter prompt to get recommendation");  
    }  
  };  

  return (  
    <div className="h-screen relative overflow-hidden">  
      <Header />  
      <div className="h-full absolute inset-0 bg-gradient-to-b from-black to-black opacity-30"></div>  
      <div  
        className="h-full w-full bg-cover bg-center fixed"  
        style={{ backgroundImage: `url(${bgImg})` }}  
      >  
        <div className="relative z-20 flex flex-col sm:flex-row items-center justify-center pt-24 pb-5 w-full">  
          <label className="sr-only" htmlFor="movie-search-input">Search for movies:</label>  
          <input  
            id="movie-search-input"  
            type="text"  
            ref={inputval}  
            className="w-4/5 md:w-1/2 py-3 px-2 rounded-md text-gray-500 bg-white"  
            placeholder="Write prompt for your movies..."  
          />  
          <Button  
            text={loading ? "Searching..." : "Search"}  
            styles="px-3 py-2 mt-3 sm:mt-0 sm:py-3 md:px-6 ml-2"  
            onClick={handleSearch}  
            disabled={loading}  
          />  
        </div>  
        <div className="relative z-20 w-full mx-auto h-full overflow-y-scroll bg-black bg-opacity-30">  
          {loading ? (  
            <ShimmerMovieCards />  
          ) : error ? (  
            <div className="text-red-500 text-center">{error}</div>  
          ) : (  
            movieData?.map((movies, index) => (  
              <MovieCards key={index} movieData={movies} title={"Search"} />  
            ))  
          )}  
        </div>  
      </div>  
    </div>  
  );  
};  

export default Search;  