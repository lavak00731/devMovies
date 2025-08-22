
import React from 'react';
import type { MovieInterface } from '../types/MovieInterface';
import ElementStyle from '../styles/elements/ElementsStyle';
import { FallbackImage } from './FallbackImage';
import { Link } from 'react-router';
import ComponentStyles from '../styles/components/ComponentSlyles';

const MovieCard = ({movie}:{movie:MovieInterface}) => {
  console.log(movie)
  if(!movie) {
    return 
  }
  
  return (
    <div className={ComponentStyles.movieCardWrapper}>
        <figure className={ComponentStyles.movieCardPosterWrapper}>
          <FallbackImage src={movie.Poster} alt=""/>
        </figure>
        <div className="border-t-2 border-neutral-700 pt-4">
          <h2 className={ElementStyle.subtitle}>{movie.Title}</h2>
          <p className={ElementStyle.paragraph}>Year: {movie.Year}</p>
          <p className={ElementStyle.paragraph}>Genre: {movie.Genre}</p>
          <p className={ElementStyle.paragraph}>Director: {movie.Director}</p>
          <div className="mt-4">
            <Link to={`/movie/${movie.imdbID}`} state={movie} className={ElementStyle.btn}>
              Read More <span className="sr-only">about {movie.Title} </span>
            </Link>
          </div>
        </div>
        
        
        
    </div>
  )
}
export default React.memo(MovieCard)