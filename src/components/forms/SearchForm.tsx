import { Search } from "lucide-react"
import { InputSearch } from "../formElements/InputSearch"
import { SubmitBtn } from "../formElements/SubmitBtn";
import { useSelector, useDispatch } from "react-redux";
import getData from "../../services/getData";
import { addSearchedTerms, addMovies, searching, responseType } from "../../features/SearchSlice";

export const SearchForm = () => {
  const dispatch = useDispatch();
  const term = useSelector((state: any) => state.search.term);
  const fetchData = async(term:string) => {
    dispatch(searching(true));
    const data = await getData(term);
    dispatch(addSearchedTerms(term));
    if(data.Response === "True") {
      dispatch(responseType(true))
      dispatch(searching(false));
      dispatch(addMovies(data));
      return
    }
    dispatch(responseType(false))
  }
   const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetchData(term);
  }

 

  return (
    <div className="">
      <form onSubmit={(e) => handleSearch(e)} action="">
          <div>
            <InputSearch label={"Search Movies"}  />
          </div>
          <div>
            <SubmitBtn 
            label="Search" 
            hasIcon={true} 
            iconRight={true}
            type={"submit"}
            Icon={() => <Search />} 
            isLabelVisible={true}/>
          </div>
      </form>
    </div>
  )
}
