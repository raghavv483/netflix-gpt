import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (movies && (
    <div className='  bg-black'>

      {/*
        MovieList - Popular
          MovieCard*n
        MovieList - NowPlaying
        MovieList - Trending
        MovieList - Horror
      */}
      <div className='-mt-30 relative z-20 pl-8'>
      <MovieList title={"Now Playing"} movies = {movies.nowPlayingMovies}/>
      <MovieList title={"Popular"} movies = {movies.popularMovies}/>
      <MovieList title={"Trending"} movies = {movies.nowPlayingMovies}/>
      
      <MovieList title={"Upcoming Movies"} movies = {movies.nowPlayingMovies}/>
      </div>

    </div>
  ))
}

export default SecondaryContainer