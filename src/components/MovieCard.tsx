
import type { MovieInterface } from '../types/MovieInterface';
import ElementStyle from '../styles/elements/ElementsStyle';
import { FallbackImage } from './FallbackImage';
import { Link } from 'react-router';

export const MovieCard = ({movie}:{movie:MovieInterface}) => {
  console.log(movie)

  
  return (
    <div className="rounded border-2 border-neutral-700 p-4 max-w-80 mb-1">
        <figure className="block mb-2">
          <FallbackImage src={movie.Poster} alt=""/>
        </figure>
        <div className="border-t-2 border-neutral-700 pt-4">
          <h2 className="text-xl font-bold oswald-title mb-4">{movie.Title}</h2>
          <p className="text-base text-neutral-500 mb-2 [&:not(:last-child)]:mb-2 .libertinus-sans-regular">Year: {movie.Year}</p>
          <p className="text-base text-neutral-500 mb-2 [&:not(:last-child)]:mb-2 .libertinus-sans-regular">Genre: {movie.Genre}</p>
          <p className="text-base text-neutral-500 mb-2 [&:not(:last-child)]:mb-2 .libertinus-sans-regular">Awards: {movie.Awards}</p>
          <div className="mt-4">
            <Link to={`/movie/${movie.imdbID}`} state={movie} className={ElementStyle.btn}>
              Read More <span className="sr-only">about {movie.Title} </span>
            </Link>
          </div>
        </div>
        
        
        
    </div>
  )
}
