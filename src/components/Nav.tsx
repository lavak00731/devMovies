import { NavLink } from "react-router";
import { TemplateForm } from "./TemplateForm";

export const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/"></NavLink>
        </li>
        <li>
          <NavLink to="/favourites"></NavLink>
        </li>
        <li>
          <TemplateForm />
        </li>
      </ul>      
    </nav>
  )
}
