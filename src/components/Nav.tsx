import { NavLink } from "react-router";
import { TemplateForm } from "./forms/TemplateForm";
import ElementStyle from "../styles/elements/ElementsStyle";

export const Nav = () => {
  return (
    <nav aria-label="Main Nav" className="bg-zinc-50 absolute top-28 right-0 w-full max-w-[320px] p-2 md:static border-2 border-neutral-700 rounded" >

      <ul className="flex flex-col flex-wrap gap-4 items-center">
        <li>
          <NavLink className={ElementStyle.btn}  to="/">Home</NavLink>
        </li>
        <li>
          <NavLink className={ElementStyle.btn} to="/favourites">Favorites</NavLink>
        </li>
        <li className="flex-basis-full">
          <TemplateForm />
        </li>
      </ul>      
    </nav>
  )
}
