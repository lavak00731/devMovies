import { useId } from "react";
import type { MovieInterface } from "../types/MovieInterface"
import  MovieCard from "./MovieCard";
import { useSelector } from "react-redux";
import ComponentStyles from "../styles/components/ComponentSlyles";
import ElementStyle from "../styles/elements/ElementsStyle";


export const Result = ({response, movie, showError}:{response: string, movie?: MovieInterface, showError:boolean}) => {
  const term = useSelector((state:any) => state.search.term); 
  const id = useId();

  return (
    <>
      { term !== ''  && (response && movie && !showError ?
        <section  className={ComponentStyles.resultWrapper} aria-labelledby={id}>
          <h2 aria-live="polite" id={id} className={ElementStyle.subtitle}>One result for your search</h2>

          <MovieCard movie={movie}/>
        </section> 
        : <section  className={ElementStyle.subtitle} aria-labelledby={id}>
          <h2 aria-live="polite" id={id} className="">No results found for your search</h2>

        </section> 
      )}
    </>    
  )
}
