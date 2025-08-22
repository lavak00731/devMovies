import { useLocation } from "react-router";
import useChangeTitle from "../customHooks/useChangeTitle";
import MainLayout from "../layouts/MainLayout"
import { ViewLayout } from "../layouts/ViewLayout";
import { MainHeading } from "../components/MainHeading";
import { MovieInfo } from "../components/MovieInfo";

export const MoviePage = () => {
  useChangeTitle("Movie Page");
  const location = useLocation();
  const receivedData = location.state;
  console.log(receivedData)
  return (
    <MainLayout>
      <ViewLayout>
        <MainHeading text={receivedData.Title}/>
        <MovieInfo movie={receivedData} />
      </ViewLayout>
    </MainLayout>    
  )
}
