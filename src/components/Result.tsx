import { useEffect, useRef, useState } from "react";
import type { MovieInterface } from "../types/MovieInterface"
import  MovieCard from "./MovieCard";
import { useSelector } from "react-redux";


export const Result = ({response, movie}:{response: string, movie?: MovieInterface}) => {
  const term = useSelector((state:any) => state.search.term);
  const movies = useSelector((state:any) => state.search.movies);
  const prevLength = useRef(movies.length);
  const [isMoviesAdded, setisMoviesAdded] = useState(false)
  useEffect(() => {
    if (movies.length > prevLength.current) {
    setisMoviesAdded(true)
  }
  prevLength.current = movies.length;
  
    return () => {
      setisMoviesAdded(false)
    }
  }, [movies.length])
  
  console.log(term)
  return (
    <div className="">
        {term !== ''&& isMoviesAdded && (
          <p aria-live="polite">
            { response ? "One result for your search" : "Please try again, no results found"}
          </p>
        )}

        {response && movie && isMoviesAdded  ? <MovieCard movie={movie}/> : null }
    </div>
    
  )
}
