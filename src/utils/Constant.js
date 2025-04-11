// Movie fetching URLs
export const Video_URL =
  "https://api.themoviedb.org/3/movie/1062215/videos?language=en-US";

// Fetch Option constant
export const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMjI1MGU5NjkzZDYwZTE3OWQ3OWIxZDQ1NDhlYzZjYSIsIm5iZiI6MTc0MzI0NTk4OC42NDUsInN1YiI6IjY3ZTdkMmE0ZjFmNTM3Njg3NWRkYjhmMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XjQJsgbRkLbxrIk0ObY3cOvuS5rctEu8GSEBuZNshjk'
  }
}; 

// Images Constant URLs
export const Logo =
  "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";
export const bgImg =
  "https://assets.nflxext.com/ffe/siteui/vlv3/47c2bc92-5a2a-4f33-8f91-4314e9e62ef1/web/IN-en-20240916-TRIFECTA-perspective_72df5d07-cf3f-4530-9afd-8f1d92d7f1a8_large.jpg";
export const ErrorImg =
  "https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif";
export const POSTER_IMG_URL = "https://image.tmdb.org/t/p/w600_and_h900_bestv2";

// other constants
export const promptText =
  "Act as a movie recommendation system where you have to recommend 5 best movies for the query. Give me the name of the movies only in the format I specified in example. Example - movie1, movie2, movie3, movie4, movie5";
