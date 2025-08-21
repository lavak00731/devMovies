import { Link } from "react-router";
import { Nav } from "./Nav";
import ElementStyle from "../styles/elements/ElementsStyle";
import LayoutStyle from "../styles/layouts/LayoutStyle";
import { Menu } from 'lucide-react';
import { Btn } from "./formElements/Btn";
import { useId, useState } from "react";
export const Header = () => {
  const [isMenuShown, setIsMenuShown] = useState(false);
  const id = useId();
  const handleToggle = () =>{

    setIsMenuShown((prev) => !prev);
  } 
  return (
    <header className={ElementStyle.header}>
      <div className={LayoutStyle.container}>
        <div className={ElementStyle.headerInner}>
          <Link className={ElementStyle.logo} to="/"><img src="/logo.png" alt="To Home Page" /></Link>
          <Btn
            label={'Menu'} 
            hasIcon={true}
            iconRight={false} 
            type={'button'}
            className={ElementStyle.menuBtn} 
            Icon={Menu} 
            isLabelVisible={false}
            ariaExpanded={true}
            ariaExpandedValue={isMenuShown ? "true" : "false"}
            onClick={handleToggle}
            id={id}
          />
          {
            isMenuShown && <Nav id={id} /> 
          }
        </div>
        
      </div>
      
      
    </header>
  )
}
