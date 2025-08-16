import { NavLink } from "react-router";
import { TemplateForm } from "./forms/TemplateForm";

export const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/favourites">Favorites</NavLink>
        </li>
        <li>
          <TemplateForm />
        </li>
      </ul>      
    </nav>
  )
}
