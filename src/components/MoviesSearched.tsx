import React, { useId, useState } from 'react';
import MovieCard  from './MovieCard';
import type { MovieInterface } from '../types/MovieInterface';
import ReactPaginate from 'react-paginate';
import ComponentStyles from '../styles/components/ComponentSlyles';
import ElementStyle from '../styles/elements/ElementsStyle';


const MoviesSearched = ({movies, itemsPerPage}:{movies: MovieInterface[], itemsPerPage: number}) => {
    const id = useId()
    const [itemOffset, setItemOffset] = useState(0);
    const endOffset = itemOffset + itemsPerPage;

    const currentItems = movies.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(movies.length / itemsPerPage);

    const handlePageClick = (event: { selected: number }) => {
        const newOffset = (event.selected * itemsPerPage) % movies.length;
        setItemOffset(newOffset);
  };

  return (
    <section aria-labelledby={id} className={ComponentStyles.searchedMoviesWrapper}>            
        <h2 id={id} className={ElementStyle.subtitle}>Previous Results</h2>
        <ul className={ComponentStyles.searchedMoviesGrid}>
            {currentItems.map((movie:MovieInterface) => {            
                return (
                    <li key={movie.imdbID}>
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
        
    </section>
  )
}
export default React.memo(MoviesSearched)
