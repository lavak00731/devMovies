import { Link } from "react-router";
import { Nav } from "./Nav";
export const Header = () => {
  return (
    <header>
        <Link to="/"><img src="/logo.png" alt="To Home Page" /></Link>
        <Nav />
    </header>
  )
}
