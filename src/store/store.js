import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import movieSlice from "./movieSlice";

const store = configureStore({
  reducer: {
    userData: userSlice,
    movieData: movieSlice,
  },
});

export default store;
