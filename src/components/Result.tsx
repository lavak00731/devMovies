import type { MovieInterface } from "../types/MovieInterface"
import  MovieCard from "./MovieCard";
import { useSelector } from "react-redux";


export const Result = ({response, movie}:{response: string, movie?: MovieInterface}) => {
  const term = useSelector((state:any) => state.search.term);
  console.log(term)
  return (
    <div className="">
        {term !== '' && (
          <p aria-live="polite">
            {response ? "One result for your search" : "Please try again, no results found"}
          </p>
        )}

        {response ? <MovieCard movie={movie}/> : null }
    </div>
    
  )
}
