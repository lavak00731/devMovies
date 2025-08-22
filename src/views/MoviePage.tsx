import { useLocation } from "react-router";
import useChangeTitle from "../customHooks/useChangeTitle";
import MainLayout from "../layouts/MainLayout"
import { ViewLayout } from "../layouts/ViewLayout";
import { MainHeading } from "../components/MainHeading";
import { MovieInfo } from "../components/MovieInfo";

export const MoviePage = () => {
  
  const location = useLocation();
  const receivedData = location.state;
  useChangeTitle(receivedData.Title + " - DevMovies");
 if (!receivedData) {
    return <div>Error: No movie data available.</div>;
 }
  return (
    <MainLayout>
      <ViewLayout>
        <MainHeading text={receivedData.Title}/>
        <MovieInfo movie={receivedData} />
      </ViewLayout>
    </MainLayout>    
  )
}
