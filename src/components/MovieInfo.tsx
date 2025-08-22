import ComponentStyles from '../styles/components/ComponentSlyles'
import ElementStyle from '../styles/elements/ElementsStyle'
import type { MovieInterface } from '../types/MovieInterface'
import { FallbackImage } from './FallbackImage'

export const MovieInfo = ({movie}:{movie:MovieInterface}) => {
  return (
    <div className={ComponentStyles.movieInfoWrapper}>
        <figure className={ComponentStyles.movieCardPosterWrapper}>
            <FallbackImage src={movie.Poster} />
        </figure>
        <div className='flex-col gap-4'>
            <p className={ElementStyle.paragraph}><b>Director:</b> {movie.Director}</p>
            <p className={ElementStyle.paragraph}><b>Year:</b> {movie.Year}</p>
            <p className={ElementStyle.paragraph}><b>Actors:</b> {movie.Actors}</p>
            <p className={ElementStyle.paragraph}><b>Genre:</b> {movie.Genre}</p>
            <p className={ElementStyle.paragraph}><b>Language:</b> {movie.Language}</p>
            <p className={ElementStyle.paragraph}><b>Country:</b> {movie.Country}</p>
            <p className={ElementStyle.paragraph + ' max-w-[60ch]'}><b>Plot:</b> {movie.Plot}</p>

        </div>
    </div>
  )
}
