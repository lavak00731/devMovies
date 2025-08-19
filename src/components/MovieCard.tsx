
import type { MovieInterface } from '../types/MovieInterface';
import { FallbackImage } from './FallbackImage';

export const MovieCard = ({movie}:{movie:MovieInterface}) => {
  console.log(movie)

  
  return (
    <div className="rounded border-2 border-neutral-700 p-4 max-w-80 mb-1">
        <figure className="border-b-2 border-neutral-700">
          <FallbackImage src={movie.Poster} alt=""/>
        </figure>
        
        <h2 className="text-xl font-bold">{movie.Title}</h2>
        <p className="text-sm text-neutral-500">Year: {movie.Year}</p>
        
        
    </div>
  )
}
