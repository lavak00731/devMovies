import type { MovieInterface } from "../types/MovieInterface"
import { MovieCard } from "./MovieCard"


export const Result = ({response, movie}:{response: string, movie: MovieInterface}) => {
  return (
    <div className="">
        <p aria-live="polite">
            {
                response ? "One result for your search" : "Please try again, no results found"
            }
        </p>
        <MovieCard movie={movie}/>
    </div>
    
  )
}
