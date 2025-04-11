import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    nowPlayingList: null,
    popularMoviesList: null,
    topRatedList: null,
    upComingList: null,
    moviesTrailer: null,
    gptMovies: null,
  },
  reducers: {
    setNowPlayingList: (state, action) => {
      state.nowPlayingList = action.payload;
    },
    setPopularMoviesList: (state, action) => {
      state.popularMoviesList = action.payload;
    },
    setTopRatedList: (state, action) => {
      state.topRatedList = action.payload;
    },
    setUpComingList: (state, action) => {
      state.upComingList = action.payload;
    },
    setMoviesTrailer: (state, action) => {
      state.moviesTrailer = action.payload;
    },
    setGptMovies: (state, action) => {
      state.gptMovies = action.payload;
    },
  },
});

export const {
  setNowPlayingList,
  setPopularMoviesList,
  setTopRatedList,
  setUpComingList,
  setMoviesTrailer,
  setGptMovies,
} = movieSlice.actions;

export default movieSlice.reducer;
