import { Search } from "lucide-react"
import { InputSearch } from "../formElements/InputSearch"
import { SubmitBtn } from "../formElements/SubmitBtn"
import type { SearchFormInterface } from "../../types/SearchFormInterface"



export const SearchForm:React.FC<SearchFormInterface> = ({setmovieToSearch}) => {
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  }

  return (
    <form onSubmit={(e) => handleSearch(e)} action="">
        <div>
          <InputSearch label={"Search Movies"} setmovieToSearch={setmovieToSearch} />
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
  )
}
