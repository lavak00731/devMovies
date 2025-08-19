import { useId } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTerm } from "../../features/SearchSlice";


export const InputSearch = ({label}:{label:string} ) => {
    const id = useId();
    const dispatch = useDispatch();
    const searchedTerms = useSelector((state: any) => state.search.searchedTerms);
  return (
    <>
        <label htmlFor="id">{label}</label>
        <input
        type="search"
        className=""
        placeholder="Search..."
        id={id}
        list={id+'_movies'}
        onChange={(e)=>dispatch(addTerm(e.target.value))}
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
