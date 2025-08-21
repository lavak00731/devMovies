import { Search } from "lucide-react"
import { InputSearch } from "../formElements/InputSearch"
import { Btn } from "../formElements/Btn";
import { useSelector, useDispatch } from "react-redux";
import getData from "../../services/getData";
import { addSearchedTerms, addMovies, searching, responseType, lastMovie } from "../../features/SearchSlice";
import ComponentStyles from "../../styles/components/ComponentSlyles";
import ElementStyle from "../../styles/elements/ElementsStyle";

export const SearchForm = () => {
  const dispatch = useDispatch();
  const term = useSelector((state: any) => state.search.term);
  const fetchData = async(term:string) => {
    dispatch(searching(true));
    const data = await getData(term);
    dispatch(addSearchedTerms(term));
    if(data.Response === "True") {
      dispatch(lastMovie(data))
      dispatch(responseType(true))
      dispatch(searching(false));
      dispatch(addMovies(data));

      return
    }
    dispatch(lastMovie(null));
    dispatch(searching(false));
    dispatch(responseType(false))
  }
   const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetchData(term);
  }

 

  return (
    <div className={ComponentStyles.searchForm}>
      <form onSubmit={(e) => handleSearch(e)} action="">
          <div>
            <InputSearch label={"Search Movies"}  />
          </div>
          <div>
            <Btn 
            className={ElementStyle.btn}
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
