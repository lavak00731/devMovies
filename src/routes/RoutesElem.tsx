
import {Routes, Route} from "react-router"
import { Home } from "../views/Home"
import { MoviePage } from "../views/MoviePage"
import { Favourites } from "../views/Favourites"   
import { NotFound } from "../views/NotFound"

export const RoutesElem = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/movie/:id" element={<MoviePage />}/>
        <Route path="/favourites" element={<Favourites/>}/>
        <Route path="*" element={<NotFound/>}/>
    </Routes>
  )
}
