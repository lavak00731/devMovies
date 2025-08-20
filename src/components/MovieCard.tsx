
import type { MovieInterface } from '../types/MovieInterface';
import { FallbackImage } from './FallbackImage';
import { Link } from 'react-router';

export const MovieCard = ({movie}:{movie:MovieInterface}) => {
  console.log(movie)

  
  return (
    <div className="rounded border-2 border-neutral-700 p-4 max-w-80 mb-1">
        <figure className="block">
          <FallbackImage src={movie.Poster} alt=""/>
        </figure>
        <div className="border-t-2 border-neutral-700-">
          <h2 className="text-xl font-bold">{movie.Title}</h2>
          <p className="text-sm text-neutral-500 mb-2">Year: {movie.Year}</p>
          <p className="text-sm text-neutral-500 mb-2">Genre: {movie.Genre}</p>
          <p className="text-sm text-neutral-500 mb-2">Awards: {movie.Awards}</p>
          <p className="text-sm text-neutral-500 mb-2">
            <Link to={`/movie/${movie.imdbID}`} state={movie}>
              Read More <span className="sr-only">about {movie.Title} </span>
            </Link>
          </p>
        </div>
        
        
        
    </div>
  )
}
