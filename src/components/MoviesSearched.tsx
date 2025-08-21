import React, { useState } from 'react';
import MovieCard  from './MovieCard';
import type { MovieInterface } from '../types/MovieInterface';
import ReactPaginate from 'react-paginate';

const MoviesSearched = ({movies, isGoodResponse, itemsPerPage}:{movies: MovieInterface[], isGoodResponse: boolean, itemsPerPage: number}) => {
    const [itemOffset, setItemOffset] = useState(0);
    const endOffset = itemOffset + itemsPerPage;

    const currentItems = movies.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(movies.length / itemsPerPage);

    const handlePageClick = (event: { selected: number }) => {
        const newOffset = (event.selected * itemsPerPage) % movies.length;
        setItemOffset(newOffset);
  };
  if(movies.length < 2) {
    return;
  }
  return (
    <div className="">            
        <h2>Previous Results</h2>
        <ul>
            {currentItems.map((movie:MovieInterface) => {
            if (movies[0] === movie) {
                return !isGoodResponse ? (
                <li key={movie.imdbID} className="mb-4">
                    <MovieCard movie={movie} />
                </li>
                ) : null;
            }
            return (
                <li key={movie.imdbID} className="mb-4">
                <MovieCard movie={movie} />
                </li>
            );
            })}
        </ul> 
        {movies.length > 5 
         ? <ReactPaginate
            breakLabel="..."
            nextLabel="next >"
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            previousLabel="< previous"
            renderOnZeroPageCount={null}
        /> : null
        }
        
    </div>
  )
}
export default React.memo(MoviesSearched)
