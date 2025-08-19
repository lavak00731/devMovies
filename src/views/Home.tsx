import MainLayout from "../layouts/MainLayout";
import useChangeTitle from "../customHooks/useChangeTitle";
import { MainHeading } from "../components/MainHeading";
import { SearchForm } from "../components/forms/SearchForm";
import { MovieGrid } from "../components/MovieGrid";

//import { useDispatch } from "react-redux";

export const Home = () => {
  useChangeTitle("Home");
 // const [movies, setMovies] = useState([])
  //const dispatch = useDispatch();
 
  
  
  return (
    <MainLayout>
      <MainHeading text="Home"/>
      <hr />
      <SearchForm  />
      <MovieGrid />
    </MainLayout>
    
  )
}
