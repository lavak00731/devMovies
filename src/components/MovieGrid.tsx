import { useSelector } from "react-redux";
import { Loading } from "./Loading"
import { Result } from "./Result";
import { MovieCard } from "./MovieCard";
import type { MovieInterface } from "../types/MovieInterface";


export const MovieGrid = () => {
  const isSearching = useSelector((state: any) => state.search.isSearching);
  const isGoodResponse = useSelector((state: any) => state.search.isGoodResponse);
  const movies = useSelector((state: any) => state.search.movies);
  const term = useSelector((state:any) => state.search.term);
  const lastMovie  = useSelector((state:any) => state.search.requestMovie)
  if(term === '') {
    return
  }

  return (
    <>
      <div className="">
          {isSearching && <Loading />}
          <Result response={isGoodResponse} movie={lastMovie} />       
      </div>
            
        {
           movies.length > 1  ?
          <div className="">            
            <h2>Previous Results</h2>
            <ul>
              {movies.map((movie:MovieInterface, i:number) => (
                i > 0 ? <li key={movie.imdbID} className="mb-4">
                  <MovieCard movie={movie} />
                </li> : null
              ))}
            </ul> 
         </div> : null
        }
        

     
    </>    
  );
}

