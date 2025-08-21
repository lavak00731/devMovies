import { NavLink } from "react-router";
import { TemplateForm } from "./forms/TemplateForm";
import ElementStyle from "../styles/elements/ElementsStyle";
import ComponentStyles from "../styles/components/ComponentSlyles";

export const Nav = ({id}:{id:string}) => {
  return (
    <nav id={id}  aria-label="Main Nav" className={ComponentStyles.mainNav}>
      <ul className={ElementStyle.menuGrid}>
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
