import { useId } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addTerm } from "../../features/SearchSlice";


export const InputSearch = ({label}:{label:string} ) => {
    const id = useId();
    const dispatch = useDispatch();
    const searchedTems = useSelector((state: any) => state.search.searchedTerms);
  return (
    <>
        <label htmlFor="id">{label}</label>
        <input
        type="text"
        className=""
        placeholder="Search..."
        id={id}
        list={id+'_movies'}
        onChange={(e)=>dispatch(addTerm(e.target.value))}
        required
      />
        <datalist id={id+'_movies'}>  
          {
            searchedTems.map((term: string, index: number) => (
              <option key={index} value={term} />
            ))
          }      
        </datalist>
    </>      
  )
}
