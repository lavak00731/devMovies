import { MovieCard } from './MovieCard';
import type { MovieInterface } from '../types/MovieInterface';
import React from 'react';

const MoviesSearched = ({movies, isGoodResponse}:{movies: MovieInterface[], isGoodResponse: boolean}) => {
    console.log(movies)
  return (
    <div className="">            
            <h2>Previous Results</h2>
            <ul>
              {movies.map((movie:MovieInterface, i:number) => {
                if (i === 0) {
                  return !isGoodResponse ? (
                    <li key={movie.imdbID} className="mb-4">
                      <MovieCard movie={movie} />
                    </li>
                  ) : null;
                }
                return (
                  <li key={movie.imdbID} className="mb-4">
                    <MovieCard movie={movie} />
                  </li>
                );
              })}
            </ul> 
         </div>
  )
}
export default React.memo(MoviesSearched)
