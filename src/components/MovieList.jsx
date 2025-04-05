import React from 'react';  
import MovieCard from './MovieCard';  

const MovieList = ({ title, movies }) => {  
    console.log(movies);  
    
    return (  
        <div className='px-6'>  
            <h1 className='text-3xl py-6 text-white'>{title}</h1>   
            <div className='flex overflow-x-auto'>  {/* Changed from overflow-x-scroll to overflow-x-auto */}  
                <div className='flex'>  
                    {movies && movies.length > 0 ? (  
                        movies.map((movie) => (  
                            <MovieCard   
                                key={movie.id} // Ensure a unique key  
                                posterPath={movie.poster_path}  
                            />  
                        ))  
                    ) : (  
                        <p className='text-white'>No movies available</p> // Fallback message  
                    )}  
                </div>  
            </div>  
        </div>  
    );  
}  

export default MovieList;  