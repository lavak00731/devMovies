import MainLayout from "../layouts/MainLayout";
import useChangeTitle from "../customHooks/useChangeTitle";
import { MainHeading } from "../components/MainHeading";
import { SearchForm } from "../components/forms/SearchForm";
import { MovieGrid } from "../components/MovieGrid";
import { ViewLayout } from "../layouts/ViewLayout";

export const Home = () => {
  useChangeTitle("Home - DevMovies");
 
  return (
    <MainLayout>
      <ViewLayout>
        <MainHeading text="Home"/>
        <SearchForm  />
        <MovieGrid />
      </ViewLayout>      
    </MainLayout>    
  )
}
