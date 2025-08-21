import { useId, type ChangeEvent } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTerm, lastMovie } from "../../features/SearchSlice";
import ElementStyle from "../../styles/elements/ElementsStyle";


export const InputSearch = ({label}:{label:string} ) => {
    const id = useId();
    const dispatch = useDispatch();
    const searchedTerms = useSelector((state: any) => state.search.searchedTerms);
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      dispatch(addTerm(e.target.value))
      dispatch(lastMovie(null)); // Reset last movie when input changes
    }
  return (
    <>
        <label className={ElementStyle.label} htmlFor="id">{label}</label>
        <input
        className={ElementStyle.searchInput}
        type="search"
        placeholder="Search..."
        id={id}
        list={id+'_movies'}
        onChange={handleChange}
        required
      />
        <datalist id={id+'_movies'}>  
          {
            searchedTerms.map((term: string, index: number) => (
              <option key={index} value={term} />
            ))
          }      
        </datalist>
    </>      
  )
}
