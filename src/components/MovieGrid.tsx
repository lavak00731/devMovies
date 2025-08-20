import { useSelector } from "react-redux";
import { Loading } from "./Loading"
import { Result } from "./Result";

import { MovieCard } from "./MovieCard";
import type { MovieInterface } from "../types/MovieInterface";
import { useEffect } from "react";

export const MovieGrid = () => {
  const isSearching = useSelector((state: any) => state.search.isSearching);
  const isGoodResponse = useSelector((state: any) => state.search.isGoodResponse);
  const movies = useSelector((state: any) => state.search.movies);
  console.log(isGoodResponse)

  useEffect(() => {

  
    return () => {

    }
  }, [isSearching, isGoodResponse])
  
  return (
    <>
      <div className="">

          {isSearching && <Loading />}
          <Result response={isGoodResponse} movie={movies[0]} />
          
        
      </div>
      <div className="">
        <h2>Previous Results</h2>
        {
         movies.length > 1 ? 
         <ul>
          {movies.map((movie:MovieInterface, i:number) => (
            i > 0 ? <li key={movie.imdbID} className="mb-4">
              <MovieCard movie={movie} />
            </li> : null
          ))}
        </ul> : <p>No previous movies searched</p>
        }
        

      </div>
    </>    
  );
}

