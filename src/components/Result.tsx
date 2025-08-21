import { useEffect, useId, useRef, useState } from "react";
import type { MovieInterface } from "../types/MovieInterface"
import  MovieCard from "./MovieCard";
import { useSelector } from "react-redux";


export const Result = ({response, movie, showError}:{response: string, movie?: MovieInterface, showError:boolean}) => {
  const term = useSelector((state:any) => state.search.term); 
  const id = useId();

  return (
    <>
      { term !== ''  && (response && movie && !showError ?
        <section  className="border-t-2 border-zinc-800 p-4 flex flex-col items-center gap-6" aria-labelledby={id}>
          <h2 aria-live="polite" id={id} className="text-center oswald-title text-3xl text-zinc-800 text-balance">One result for your search</h2>

          <MovieCard movie={movie}/>
        </section> 
        : <section  className="text-center oswald-title text-3xl text-zinc-800 text-balance" aria-labelledby={id}>
          <h2 aria-live="polite" id={id} className="">No results found for your search</h2>

        </section> 
      )}
    </>    
  )
}
