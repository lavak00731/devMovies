import { useEffect, useState } from "react";
import MainLayout from "../layouts/MainLayout";
import useChangeTitle from "../customHooks/useChangeTitle";
import { MainHeading } from "../components/MainHeading";
import { SearchForm } from "../components/forms/SearchForm";
import { MovieGrid } from "../components/MovieGrid";
import { useSelector } from "react-redux";
//import { useDispatch } from "react-redux";

export const Home = () => {
  useChangeTitle("Home");
  //const [movieToSearch, setmovieToSearch] = useState('');
  //const dispatch = useDispatch();
  const term = useSelector((state: any) => state.search.term);
  useEffect(() => {
    console.log(term)
  
    return () => {
      
    }
  }, [term])
  
  
  return (
    <MainLayout>
      <MainHeading text="Home"/>
      <hr />
      <SearchForm  />
      <MovieGrid />

    </MainLayout>
    
  )
}
