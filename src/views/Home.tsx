import MainLayout from "../layouts/MainLayout";
import useChangeTitle from "../customHooks/useChangeTitle";
import { MainHeading } from "../components/MainHeading";
import { SearchForm } from "../components/forms/SearchForm";
import { useEffect, useState } from "react";

export const Home = () => {
  useChangeTitle("Home");
  const [movieToSearch, setmovieToSearch] = useState();
  
  useEffect(() => {
    console.log(movieToSearch)
  
    return () => {
      
    }
  }, [movieToSearch])
  
  
  return (
    <MainLayout>
      <MainHeading text="Home"/>
      <hr />
      <div className="">
        <SearchForm setmovieToSearch={setmovieToSearch} />
      </div>
    </MainLayout>
    
  )
}
