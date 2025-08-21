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
  console.log(lastMovie)
  return (
    <>
        {
          term !== '' && lastMovie  !== null ? <>
            {isSearching && <Loading />}
            {lastMovie && lastMovie.Error  
            ? <Result response={isGoodResponse} movie={lastMovie} showError={true} />
            : <Result response={isGoodResponse} movie={lastMovie} showError={false} /> 
            }
          </> :null
        }            
        {
          movies.length > 0 ? <MoviesSearched movies={movies} isGoodResponse={isGoodResponse} itemsPerPage={5} />
           : null
        }
        

     
    </>    
  );
}

