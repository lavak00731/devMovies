import { Search } from "lucide-react"
import { InputSearch } from "../formElements/InputSearch"
import { SubmitBtn } from "../formElements/SubmitBtn";
import { useSelector } from "react-redux";




export const SearchForm = () => {
  const term = useSelector((state: any) => state.search.term);
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
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
