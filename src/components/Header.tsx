import { Link } from "react-router";
import logo from "./../../public/logo.png";
import { Nav } from "./Nav";
export const Header = () => {
  return (
    <header>
        <Link to="/"><img src={logo} alt="To Home Page" /></Link>
        <Nav />
    </header>
  )
}
