import { GoogleGenerativeAI } from "@google/generative-ai";
import { options, promptText } from "./Constant";

import { setGptMovies } from "../store/movieSlice";
const gptMovieSearch = async (inputString, dispatch) => {
  const genAI = new GoogleGenerativeAI("AIzaSyA2XmTAncsUZogi6RFkS_oUCbgNIKe5Aaw" );
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
    systemInstruction: promptText,
  });
  const prompt = inputString;
  const result = await model.generateContent(prompt);
  const movies = result.response
    .text()
    .split(",")
    .map((movies) => movies.trim());
  console.log(movies);
  const fetchMovies = movies.map(async (movieName) => {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movieName}&include_adult=false&language=en-US&page=1`,
      options
    );
    const data = await response.json();
    return data.results;
  });
  const results = await Promise.all(fetchMovies);
  // console.log(results);
  dispatch(setGptMovies(results));
};
export default gptMovieSearch;
