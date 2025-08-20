import { useSelector } from "react-redux";
import { Loading } from "./Loading"
import { Result } from "./Result";
import MoviesSearched from "./MoviesSearched";


export const MovieGrid = () => {
  const isSearching = useSelector((state: any) => state.search.isSearching);
  const isGoodResponse = useSelector((state: any) => state.search.isGoodResponse);
  const movies = useSelector((state: any) => state.search.movies);
  const term = useSelector((state:any) => state.search.term);
  const lastMovie  = useSelector((state:any) => state.search.requestMovie)

  return (
    <>
        {
          term !== '' ? <>
            {isSearching && <Loading />}
              <Result response={isGoodResponse} movie={lastMovie} /> 
          </> :null
        }            
        {
          movies.length > 0 ? <MoviesSearched movies={movies} isGoodResponse={isGoodResponse} />
           : null
        }
        

     
    </>    
  );
}

