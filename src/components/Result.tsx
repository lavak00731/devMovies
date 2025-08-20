import type { MovieInterface } from "../types/MovieInterface"
import { MovieCard } from "./MovieCard"


export const Result = ({response, movie}:{response: string, movie?: MovieInterface}) => {
  console.log(movie)
  return (
    <div className="">
        <p aria-live="polite">
            {
                response ? "One result for your search" : "Please try again, no results found"
            }
        </p>

        {response ? <MovieCard movie={movie}/> : null }
    </div>
    
  )
}
