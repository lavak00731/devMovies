import { Link } from "react-router";
import { Nav } from "./Nav";
import ElementStyle from "../styles/elements/ElementsStyle";
import { Menu } from 'lucide-react';
import { Btn } from "./formElements/Btn";
import { useState } from "react";
export const Header = () => {
  const [isMenuShown, setIsMenuShown] = useState(false)
  const handleToggle = () =>{
    console.log('hola')
    setIsMenuShown((prev) => !prev);
  } 
  return (
    <header className={ElementStyle.header}>
      <Link className={ElementStyle.logo} to="/"><img src="/logo.png" alt="To Home Page" /></Link>
      <Btn
        label={'Menu'} 
        hasIcon={true}
        iconRight={false} 
        type={'button'}
        className={'bg-zinc-800 p-2 rounded text-green-400 text-base'} 
        Icon={Menu} 
        isLabelVisible={false}
        onClick={handleToggle}
      />
      {
        isMenuShown && <Nav /> 
      }
      
    </header>
  )
}
